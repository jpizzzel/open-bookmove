export default [
  {
    id: 'grand-prix-attack',
    name: 'Grand Prix Attack',
    side: 'white',
    eco: 'B21–B23',
    category: 'e4',
    level: 'beginner',
    description:
      'An aggressive anti-Sicilian system: Nc3, f4, Nf3 and Bc4, then castle and swing the queen to the kingside with Qe1-h4. Simple plans and quick attacks.',
    lines: [
      {
        name: '2...Nc6 3...g6: ...e6 setup',
        moves:
          '1. e4 c5 2. Nc3 {Keep options open and prepare f4.} Nc6 3. f4 {The Grand Prix: the f-pawn supports e5 and opens the f-file for an attack.} g6 4. Nf3 Bg7 5. Bc4 {The bishop aims at f7 and e6.} e6 6. O-O Nge7 7. d3 O-O 8. Qe1 {The key maneuver: the queen heads to h4 for a kingside attack.} d5 9. Bb3 {Retreat while keeping the bishop on the a2-g8 diagonal.}',
      },
      {
        name: '2...Nc6 3...g6: ...d6 setup',
        moves:
          '1. e4 c5 2. Nc3 Nc6 3. f4 g6 4. Nf3 Bg7 5. Bc4 d6 6. O-O Nf6 7. d3 O-O 8. Qe1 Nd4 {Black tries to trade off a key attacking piece.} 9. Nxd4 cxd4 10. Ne2 {The knight reroutes toward the kingside, and the d4 pawn can become a target.}',
      },
      {
        name: '2...Nc6 3...e6',
        moves:
          '1. e4 c5 2. Nc3 Nc6 3. f4 e6 4. Nf3 d5 {Black hits the center at once.} 5. Bb5 {Pin the c6 knight, pressure d5 and be ready to give up the bishop to damage the pawns.} Nge7 6. exd5 exd5 7. O-O a6 8. Bxc6+ Nxc6 9. d4 {Strike at once before Black consolidates.}',
      },
      {
        name: '2...Nc6 3...d6',
        moves:
          '1. e4 c5 2. Nc3 Nc6 3. f4 d6 4. Nf3 g6 5. Bc4 Bg7 6. O-O Nf6 7. d3 O-O 8. Qe1 {Same plan: Qh4, f5 and a kingside storm.}',
      },
      {
        name: '2...d6',
        moves:
          '1. e4 c5 2. Nc3 d6 3. f4 Nf6 4. Nf3 g6 5. Bc4 Bg7 6. O-O O-O 7. d3 Nc6 8. Qe1 {The queen lift again. Follow up with Qh4, f5 and Bh6 to remove the key defender.}',
      },
      {
        name: '2...e6',
        moves:
          '1. e4 c5 2. Nc3 e6 3. f4 d5 4. Nf3 Nf6 5. e5 {Gain space and push the knight away from the kingside.} Nfd7 6. g3 {A French-style clamp: fianchetto the bishop and attack later with f5.} Nc6 7. Bg2 Be7 8. O-O O-O 9. d3',
      },
    ],
  },
];
