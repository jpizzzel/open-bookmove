// Validates every built-in course: legal moves, unique ids, no learner-move conflicts.
// Usage: node scripts/validate.mjs [file-filter]
import { readdirSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';
import { buildCourse, findConflicts, cardNodes, leafPaths } from '../src/lib/tree.js';

const here = path.dirname(fileURLToPath(import.meta.url));
const dir = path.join(here, '..', 'src', 'data', 'courses');
const filter = process.argv[2];
const files = readdirSync(dir).filter((f) => f.endsWith('.js') && (!filter || f.includes(filter)));

const REQUIRED = ['id', 'name', 'side', 'category', 'level', 'description', 'lines'];
const SIDES = ['white', 'black'];
const LEVELS = ['beginner', 'intermediate', 'advanced'];

let errors = 0;
let totalCourses = 0;
let totalLines = 0;
let totalCards = 0;
const ids = new Set();

for (const f of files) {
  const mod = await import(pathToFileURL(path.join(dir, f)).href);
  const courses = mod.default;
  if (!Array.isArray(courses)) {
    console.error(`✗ ${f}: default export must be an array`);
    errors++;
    continue;
  }
  for (const def of courses) {
    const label = `${f} › ${def.id || def.name}`;
    for (const k of REQUIRED) {
      if (def[k] === undefined) {
        console.error(`✗ ${label}: missing "${k}"`);
        errors++;
      }
    }
    if (!SIDES.includes(def.side)) { console.error(`✗ ${label}: bad side`); errors++; }
    if (!LEVELS.includes(def.level)) { console.error(`✗ ${label}: bad level`); errors++; }
    if (ids.has(def.id)) { console.error(`✗ ${label}: duplicate id`); errors++; }
    ids.add(def.id);
    let course;
    try {
      course = buildCourse(def);
    } catch (e) {
      console.error(`✗ ${label}: ${e.message}`);
      errors++;
      continue;
    }
    const conflicts = findConflicts(course);
    for (const c of conflicts) {
      console.error(`✗ ${label}: conflict — ${c}`);
      errors++;
    }
    const names = new Set();
    for (const l of def.lines) {
      if (names.has(l.name)) { console.error(`✗ ${label}: duplicate line name "${l.name}"`); errors++; }
      names.add(l.name);
    }
    const cards = cardNodes(course).length;
    const leaves = leafPaths(course.root).length;
    if (leaves < def.lines.length) {
      console.error(`✗ ${label}: ${def.lines.length - leaves} line(s) are prefixes of other lines (merge them)`);
      errors++;
    }
    totalCourses++;
    totalLines += def.lines.length;
    totalCards += cards;
    console.log(`✓ ${label}: ${def.lines.length} lines, ${cards} moves to learn`);
  }
}

console.log(`\n${totalCourses} courses, ${totalLines} lines, ${totalCards} learner moves. ${errors} error(s).`);
process.exit(errors ? 1 : 0);
