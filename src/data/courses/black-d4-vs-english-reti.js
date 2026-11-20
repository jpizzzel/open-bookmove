export default [
  {
    id: 'black-vs-english-reti',
    name: 'Black vs English & Réti',
    side: 'black',
    eco: 'A04–A29',
    category: 'vs-flank',
    level: 'intermediate',
    description:
      "A practical repertoire against the flank openings: meet 1.c4 with ...e5 (a reversed Sicilian) and 1.Nf3 with ...d5 and solid Slav-style setups.",
    lines: [
      {
        name: 'English: Four Knights with 4.g3',
        moves: `1. c4 e5 {Take the center with the king's pawn: a Sicilian with colors reversed.} 2. Nc3 Nf6 3. Nf3 Nc6 4. g3 d5 {Open the center while White's king is not yet castled.} 5. cxd5 Nxd5 6. Bg2 Nb6 {The knight retreats safely and covers c4 and d5.} 7. O-O Be7 8. d3 O-O 9. a3 Be6 10. b4 a5 {Meet the queenside expansion head-on.} 11. b5 Nd4`,
      },
      {
        name: 'English: Four Knights with 4.e3',
        moves: `1. c4 e5 2. Nc3 Nf6 3. Nf3 Nc6 4. e3 Bb4 {Pin the knight and fight for e4 and d4.} 5. Qc2 Bxc3 6. Qxc3 Qe7 {Defend e5 and prepare ...d5.} 7. a3 a5`,
      },
      {
        name: 'English: Four Knights with 4.d4',
        moves: `1. c4 e5 2. Nc3 Nf6 3. Nf3 Nc6 4. d4 exd4 5. Nxd4 Bb4 6. Bg5 h6 7. Bh4 Bxc3+ 8. bxc3 Ne5 {Aim the knight at the weak c4 pawn.} 9. e3 Ng6 10. Bg3 Ne4`,
      },
      {
        name: 'English: 2.Nc3 Nf6 3.g3',
        moves: `1. c4 e5 2. Nc3 Nf6 3. g3 d5 4. cxd5 Nxd5 5. Bg2 Nb6 6. d3 Be7 7. Nf3 Nc6 8. O-O O-O {Black has a comfortable reversed Dragon.}`,
      },
      {
        name: 'English: 2.g3',
        moves: `1. c4 e5 2. g3 Nf6 3. Bg2 d5 4. cxd5 Nxd5 5. Nc3 Nb6 6. Nf3 Nc6 7. O-O Be7 8. d3 O-O`,
      },
      {
        name: 'English: 2.Nf3',
        moves: `1. c4 e5 2. Nf3 e4 {Gain space with tempo.} 3. Nd4 Nc6 4. Nxc6 dxc6 {Fast development and an open d-file.}`,
      },
      {
        name: 'Réti: 2.g3 King\'s Indian Attack setup',
        moves: `1. Nf3 d5 {Claim the center.} 2. g3 Nf6 3. Bg2 c6 {Solid: the c8 bishop comes out before ...e6.} 4. O-O Bg4 5. d3 Nbd7 6. Nbd2 e5 {Take the whole center.} 7. e4 dxe4 8. dxe4 Bc5 {The bishop finds the a7–g1 diagonal, aiming at f2.}`,
      },
      {
        name: 'Réti: 2.c4 c6 3.b3',
        moves: `1. Nf3 d5 2. c4 c6 {A Slav-style setup against the Réti.} 3. b3 Nf6 4. g3 Bf5 5. Bg2 e6 6. Bb2 Nbd7 7. O-O h6 {Give the f5 bishop a retreat square on h7.}`,
      },
      {
        name: 'Réti: 2.c4 c6 3.g3',
        moves: `1. Nf3 d5 2. c4 c6 3. g3 Nf6 4. Bg2 Bf5 5. O-O e6 6. b3 Nbd7 7. Bb2 h6`,
      },
      {
        name: 'Réti: 2.c4 c6 3.e3',
        moves: `1. Nf3 d5 2. c4 c6 3. e3 Nf6 4. Nc3 e6 5. b3 Nbd7 6. Bb2 Bd6 7. Qc2 O-O {Prepare ...e5 to free the position.}`,
      },
    ],
  },
];
