// Course file format — see CONTRIBUTING.md
// Each line is PGN movetext from the starting position. {Comments} attach to the move before them.
// Lines sharing a prefix are merged into one tree. The learner (side) must have exactly ONE move
// in every position, but the opponent may have many.
export default [
  {
    id: 'italian-game',
    name: 'Italian Game',
    side: 'white',
    eco: 'C50–C54',
    category: 'e4',
    level: 'beginner',
    description:
      'Develop fast, aim the bishop at f7, and build a big center with c3 and d4. A classical, principled weapon at every level.',
    lines: [
      {
        name: 'Giuoco Piano: Main Line with c3',
        moves:
          '1. e4 {Grab the center and open lines for the queen and bishop.} e5 2. Nf3 {Develop with tempo, attacking e5.} Nc6 3. Bc4 {The Italian bishop eyes f7, the weakest point in Black\'s camp.} Bc5 4. c3 {Prepare d4 to build a full pawn center.} Nf6 5. d3 {The modern, slow approach: keep the center solid and maneuver.} d6 6. O-O O-O 7. Re1 a6 8. a4 {Stop ...b5 from harassing the bishop.} Ba7 9. h3 {Take g4 away from Black\'s pieces before playing Nbd2-f1-g3.}',
      },
      {
        name: 'Giuoco Piano: Black plays ...a6 and ...Ba7 early',
        moves: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6 5. d3 a6 6. O-O d6 7. Re1 Ba7 8. h3 O-O 9. Nbd2',
      },
      {
        name: 'Two Knights Defense: 4. d3',
        moves:
          '1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 {The Two Knights. Black counterattacks e4.} 4. d3 {Calmly defend e4 and avoid sharp theory.} Be7 5. O-O O-O 6. Re1 d6 7. c3 {Keeping the Italian structure; d4 may come later.}',
      },
      {
        name: 'Two Knights Defense: 4...Bc5',
        moves: '1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. d3 Bc5 5. c3 d6 6. O-O O-O 7. Re1',
      },
      {
        name: 'Hungarian Defense',
        moves:
          '1. e4 e5 2. Nf3 Nc6 3. Bc4 Be7 {Passive. Black avoids all the tactics.} 4. d4 {Take the center immediately.} d6 5. d5 {Gain space and kick the knight.} Nb8 6. Bd3 {Reroute the bishop so the c-pawn can advance.} Nf6 7. c4 {Clamp down with a big space advantage.}',
      },
      {
        name: 'Black plays 3...d6',
        moves: '1. e4 e5 2. Nf3 Nc6 3. Bc4 d6 4. d4 {Strike in the center while Black is passive.} exd4 5. Nxd4 Nf6 6. Nc3 Be7 7. O-O O-O 8. h3',
      },
    ],
  },
];
