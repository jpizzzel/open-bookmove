export default [
  {
    id: 'slav-defense',
    name: 'Slav Defense',
    side: 'black',
    eco: 'D10–D19',
    category: 'vs-d4',
    level: 'intermediate',
    description:
      "Support d5 with ...c6 so the light-squared bishop can still come out to f5. Solid structure, active pieces, and a pawn grab in the main line if White isn't careful.",
    lines: [
      {
        name: 'Main Line: 6.e3 and 10.e4',
        moves: `1. d4 d5 2. c4 c6 {Defend d5 without locking in the c8 bishop.} 3. Nf3 Nf6 4. Nc3 dxc4 {Take the pawn now that White has committed the knights.} 5. a4 {Stops ...b5, which would hold the extra pawn.} Bf5 {The bishop gets outside the pawn chain before ...e6.} 6. e3 e6 7. Bxc4 Bb4 {Pin the knight and fight for e4.} 8. O-O Nbd7 9. Qe2 O-O 10. e4 Bg6 11. Bd3 Bh5 {Keep the pin on the f3 knight.} 12. e5 Nd5 {The knight finds a perfect outpost.}`,
      },
      {
        name: 'Main Line: 9.Nh4',
        moves: `1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 dxc4 5. a4 Bf5 6. e3 e6 7. Bxc4 Bb4 8. O-O Nbd7 9. Nh4 {White goes after the bishop pair.} Bg4 {Provoke f3, weakening e3.} 10. f3 Bh5 11. g4 Bg6 12. Nxg6 hxg6 {The open h-file is a useful consolation.}`,
      },
      {
        name: 'Krause: 6.Ne5 sacrifice line',
        moves: `1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 dxc4 5. a4 Bf5 6. Ne5 e6 7. f3 Bb4 8. e4 Bxe4 {A piece sacrifice for three pawns and a long-lasting attack.} 9. fxe4 Nxe4 10. Bd2 Qxd4 11. Nxe4 Qxe4+ 12. Qe2 Bxd2+ 13. Kxd2 Qd5+ 14. Kc2 Na6 {Bring the last pieces into the attack against the exposed king.}`,
      },
      {
        name: '5.e3: hold the pawn with ...b5',
        moves: `1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 dxc4 5. e3 b5 {With a4 not played yet, Black can defend the c4 pawn.} 6. a4 b4 {Kick the knight away from the center.} 7. Na2 e6 8. Bxc4 Be7 9. O-O O-O 10. Qe2 a5 {Keep the b4 pawn secure.}`,
      },
      {
        name: '5.e4: the sharp gambit',
        moves: `1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 dxc4 5. e4 b5 6. e5 Nd5 7. a4 e6 8. axb5 Nxc3 9. bxc3 cxb5 10. Ng5 Bb7 {Guard the long diagonal and the h1 corner.} 11. Qh5 g6 12. Qg4 Be7 {Cover the dark squares around the king.}`,
      },
      {
        name: 'Exchange Slav',
        moves: `1. d4 d5 2. c4 c6 3. cxd5 cxd5 {Symmetrical, but Black has nothing to fear.} 4. Nc3 Nf6 5. Bf4 Nc6 6. e3 Bf5 {Copy White's development: the position is balanced.} 7. Nf3 e6 8. Bb5 Nd7 {Prepare ...Rc8 and avoid doubled pawns after Bxc6+ only if favorable.} 9. O-O Be7 10. Rc1 O-O`,
      },
      {
        name: '4.e3 Bf5 5.Nc3: Nh4 chase',
        moves: `1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. e3 Bf5 {With the c1 bishop locked in, Black develops outside the chain first.} 5. Nc3 e6 6. Nh4 Bg6 7. Nxg6 hxg6 {The doubled pawn is strong: it controls f5 and opens the h-file.} 8. Bd3 Nbd7 9. O-O Bd6 10. h3 dxc4 11. Bxc4 O-O`,
      },
      {
        name: '4.e3 Bf5 5.Bd3',
        moves: `1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. e3 Bf5 5. Bd3 Bxd3 {Trade off White's good bishop.} 6. Qxd3 e6 7. O-O Nbd7 8. Nc3 Be7 9. e4 dxe4 10. Nxe4 Nxe4 11. Qxe4 Nf6 12. Qc2 O-O`,
      },
      {
        name: '3.Nc3 Nf6 4.e3',
        moves: `1. d4 d5 2. c4 c6 3. Nc3 Nf6 4. e3 Bf5 5. Nf3 e6 6. Bd3 Bxd3 7. Qxd3 Nbd7 8. O-O Bd6 9. e4 dxe4 10. Nxe4 Nxe4 11. Qxe4 O-O {Black's position is rock solid; ...e5 or ...c5 comes next.}`,
      },
    ],
  },
];
