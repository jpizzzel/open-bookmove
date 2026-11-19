export default [
  {
    id: 'kings-indian-attack',
    name: "King's Indian Attack",
    side: 'white',
    eco: 'A07–A08',
    category: 'flank',
    level: 'beginner',
    description:
      'Nf3, g3, Bg2, O-O, d3, Nbd2 and e4 — the same setup every game. Push e5 to cramp Black, then launch a kingside attack with Nf1, h4 and a pawn storm.',
    lines: [
      {
        name: 'Against the French setup',
        moves:
          "1. Nf3 d5 2. g3 {Prepare the fianchetto.} Nf6 3. Bg2 e6 4. O-O Be7 5. d3 O-O 6. Nbd2 {This knight supports e4.} c5 7. e4 {The KIA central push.} Nc6 8. Re1 {Back up e4 and prepare e5.} b5 9. e5 {Gain kingside space; Black's knight is kicked.} Nd7 10. Nf1 {Reroute toward the kingside.} a5 11. h4 {Start the kingside attack.}",
      },
      {
        name: 'Against ...c5 and ...Nc6',
        moves:
          '1. Nf3 d5 2. g3 c5 3. Bg2 Nc6 4. O-O e6 5. d3 Nf6 6. Nbd2 Be7 7. e4 O-O 8. Re1 b5 9. e5 Nd7 10. Nf1 {Same plan: Nf1-h2-g4 or h4 with an attack.}',
      },
      {
        name: 'Against ...Bf5',
        moves:
          '1. Nf3 d5 2. g3 Nf6 3. Bg2 Bf5 4. O-O e6 5. d3 Be7 6. Nbd2 O-O 7. Qe1 {Support the e4 push with the queen.} h6 8. e4 Bh7 9. e5 {Gain space and push the knight away from the king.} Nfd7 10. Qe2',
      },
      {
        name: 'Against ...Bg4',
        moves:
          '1. Nf3 d5 2. g3 Nf6 3. Bg2 Bg4 4. O-O Nbd7 5. d3 e6 6. Nbd2 Be7 7. e4 {Fight for the center.} O-O 8. h3 {Ask the bishop its intentions.} Bh5 9. Qe1',
      },
      {
        name: 'Against ...c6 and ...e5',
        moves:
          '1. Nf3 d5 2. g3 Nf6 3. Bg2 c6 4. O-O Bg4 5. d3 Nbd7 6. Nbd2 e5 {Black takes the center.} 7. e4 dxe4 8. dxe4 Be7 9. h3 {A clean, solid structure where the Nc4 maneuver hits e5.}',
      },
      {
        name: "Against the King's Indian setup",
        moves:
          '1. Nf3 Nf6 2. g3 g6 3. Bg2 Bg7 4. O-O O-O 5. d3 d6 6. e4 e5 7. Nbd2 Nc6 8. c3 a5 9. a4 {Fix Black\'s queenside and keep the knight route to c4.}',
      },
      {
        name: 'Against the Sicilian setup',
        moves:
          '1. Nf3 c5 2. g3 Nc6 3. Bg2 g6 4. O-O Bg7 5. d3 Nf6 6. e4 d6 7. c3 {Prepare d4 to fight for the center.} O-O 8. Nbd2',
      },
    ],
  },
];
