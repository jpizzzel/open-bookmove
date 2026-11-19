export default [
  {
    id: 'trompowsky-attack',
    name: 'Trompowsky Attack',
    side: 'white',
    eco: 'A45',
    category: 'd4',
    level: 'intermediate',
    description:
      'Hit the f6-knight on move two with 2.Bg5. Avoids huge amounts of Indian-defense theory and leads to fresh, unbalanced positions where you often get the better pawn structure.',
    lines: [
      {
        name: '2...Ne4 3.Bf4 c5: Main Line',
        moves:
          "1. d4 Nf6 2. Bg5 {The Trompowsky: threaten to double Black's pawns.} Ne4 {Black kicks the bishop immediately.} 3. Bf4 c5 4. f3 {Push the knight back.} Qa5+ 5. c3 Nf6 6. Nd2 {Offer the d-pawn for development.} cxd4 7. Nb3 {Hit the queen with tempo.} Qb6 8. Qxd4 Nc6 9. Qxb6 axb6 {Black's doubled b-pawns are a long-term target.}",
      },
      {
        name: '2...Ne4 3.Bf4 d5',
        moves:
          "1. d4 Nf6 2. Bg5 Ne4 3. Bf4 d5 4. e3 c5 5. Bd3 {Challenge the e4-knight.} Nf6 6. c3 Nc6 7. Nd2 {A London-style setup, but Black's knight has wasted time.}",
      },
      {
        name: '2...e6 3.e4: Big Center',
        moves:
          '1. d4 Nf6 2. Bg5 e6 3. e4 {Black allowed it, so grab the full center.} h6 4. Bxf6 Qxf6 5. Nf3 d6 6. Nc3 Nd7 7. Qd2 a6 8. O-O-O {Opposite-side castling; our space helps us attack first.}',
      },
      {
        name: '2...d5 3.Bxf6 exf6',
        moves:
          "1. d4 Nf6 2. Bg5 d5 3. Bxf6 {Damage Black's structure immediately.} exf6 4. e3 c6 5. c4 {Pressure d5 while Black's doubled pawns can't help.} dxc4 6. Bxc4 Bd6 7. Nc3 O-O 8. Nge2 {Calm development: the f6-pawn blocks Black's own knight.}",
      },
      {
        name: '2...d5 3.Bxf6 gxf6',
        moves:
          '1. d4 Nf6 2. Bg5 d5 3. Bxf6 gxf6 4. c4 {Strike while Black\'s king has no comfortable home.} dxc4 5. e3 c5 6. Bxc4 cxd4 7. exd4 {Free development and a better structure.}',
      },
      {
        name: '2...c5 3.d5 Qb6',
        moves:
          '1. d4 Nf6 2. Bg5 c5 3. d5 {Gain space.} Qb6 {Black attacks b2.} 4. Nc3 {Gambit the pawn for a lead in development.} Qxb2 5. Bd2 {Threatening Rb1 to trap or harass the queen.} Qb6 6. e4 {Huge center as compensation.} d6 7. f4',
      },
      {
        name: "2...g6: Against the King's Indian",
        moves:
          '1. d4 Nf6 2. Bg5 g6 3. Bxf6 exf6 4. c4 {Use the extra space; Black\'s f6-pawn blocks the g7-bishop.} Bg7 5. Nc3 d6 6. e3 f5 7. Bd3 O-O 8. Nge2',
      },
    ],
  },
];
