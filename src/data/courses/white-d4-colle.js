export default [
  {
    id: 'colle-system',
    name: 'Colle System',
    side: 'white',
    eco: 'D05, A46',
    category: 'd4',
    level: 'beginner',
    description:
      'Build the pyramid d4-e3-c3, aim the d3-bishop at h7, and break with e4. A simple, aggressive system that works against most Black setups.',
    lines: [
      {
        name: 'Main Line: The e4 Break',
        moves:
          "1. d4 d5 2. Nf3 Nf6 3. e3 {Solid. The bishop will go to d3.} e6 4. Bd3 {Aim at h7 — the attacking diagonal.} c5 5. c3 {The Colle triangle supports d4.} Nc6 6. Nbd2 {This knight supports the e4 push.} Bd6 7. O-O O-O 8. dxc5 {Clear the way: c5 exchange first, then e4.} Bxc5 9. e4 {The thematic break opens the position for our bishops.} Qc7 10. Qe2",
      },
      {
        name: 'Black delays ...c5: 4...Bd6',
        moves:
          '1. d4 d5 2. Nf3 Nf6 3. e3 e6 4. Bd3 Bd6 5. c3 O-O 6. Nbd2 Nbd7 7. O-O b6 8. e4 {Same idea: hit the center once everything is ready.} dxe4 9. Nxe4 Nxe4 10. Bxe4 {The bishop now stares at h7 and a8.}',
      },
      {
        name: '3...Bf5: Trading the Bishop',
        moves:
          "1. d4 d5 2. Nf3 Nf6 3. e3 Bf5 {Black stops our Bd3 plan.} 4. Bd3 {Challenge it anyway.} Bxd3 5. Qxd3 e6 6. O-O Nbd7 7. c4 {With the light bishops gone, the c4 break is the natural plan.} c6 8. Nc3 Be7 9. e4 {A big center supported by our queen.}",
      },
      {
        name: '3...Bf5 4...e6',
        moves:
          '1. d4 d5 2. Nf3 Nf6 3. e3 Bf5 4. Bd3 e6 5. Bxf5 exf5 {Black\'s pawns are doubled and e5 is a fine outpost.} 6. Qd3 {Hit f5 and b7 together.} Qc8 7. c4 {Open lines while Black is tied down.}',
      },
      {
        name: '3...Bg4: Pin and Qb3',
        moves:
          "1. d4 d5 2. Nf3 Nf6 3. e3 Bg4 4. Nbd2 e6 5. c3 Nbd7 6. Qb3 {b7 is undefended since the bishop left c8.} Qc8 7. h3 {Ask the bishop to decide.} Bh5 8. Be2",
      },
      {
        name: '3...c5: Early Pressure',
        moves:
          '1. d4 d5 2. Nf3 Nf6 3. e3 c5 4. c3 Nc6 5. Bd3 Bg4 6. Nbd2 e6 7. Qa4 {Pin the c6-knight and add pressure.}',
      },
      {
        name: "Against the King's Indian",
        moves:
          '1. d4 Nf6 2. Nf3 g6 3. e3 Bg7 4. Bd3 O-O 5. O-O d6 6. c3 {Keep the pyramid; the e4 break comes next.} Nbd7 7. Nbd2 e5 8. e4 {Match Black in the center.} Re8 9. Re1',
      },
      {
        name: 'Against the Queen\'s Indian setup',
        moves:
          '1. d4 Nf6 2. Nf3 e6 3. e3 b6 4. Bd3 Bb7 5. O-O c5 6. c3 Be7 7. Nbd2 O-O 8. e4 {The e4 push blunts the b7-bishop.} cxd4 9. cxd4',
      },
    ],
  },
];
