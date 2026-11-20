# Contributing openings

Each file in `src/data/courses/` exports an array of courses:

```js
export default [
  {
    id: 'italian-game',            // unique, kebab-case; never change it once published (progress is keyed by it)
    name: 'Italian Game',
    side: 'white',                 // the side the learner plays
    eco: 'C50–C54',
    category: 'e4',                // e4 | d4 | flank | vs-e4 | vs-d4 | vs-flank
    level: 'beginner',             // beginner | intermediate | advanced
    description: 'One or two sentences on what the opening is about.',
    lines: [
      {
        name: 'Giuoco Piano: Main Line with c3',   // "Chapter: line" groups lines into chapters
        moves: '1. e4 e5 2. Nf3 Nc6 3. Bc4 {Eyes f7.} Bc5 4. c3 {Prepares d4.} Nf6 5. d3',
      },
    ],
  },
];
```

## Rules the validator enforces

- Every move must be legal.
- The learner has exactly **one** move in every position across all lines of a course. The opponent may branch as much as you like.
- No line may be a strict prefix of another line (extend or merge it instead).
- Line names are unique within a course, and course ids are unique overall.

Run `npm run validate` (or `node scripts/validate.mjs <file-filter>`) before opening a pull request.

## Style

- Stick to established theory. Accuracy matters more than depth; 8 to 14 moves per line is plenty.
- Notes go in `{braces}` right after the move they explain. Say *why*: the plan, the threat, the trap. Keep them to one or two sentences.
- Write notes in your own words. Don't copy text from books or other sites.
- Changing a line's moves resets learners' progress on the changed moves, so prefer adding lines to rewriting them.
