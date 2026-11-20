export default [
  {
    id: 'grunfeld-defense',
    name: 'Grünfeld Defense',
    side: 'black',
    eco: 'D70–D99',
    category: 'vs-d4',
    level: 'advanced',
    description:
      "Invite White to build a big pawn center, then attack it with the g7 bishop, ...c5 and ...Nc6. Dynamic, concrete and loved by elite players.",
    lines: [
      {
        name: 'Exchange: 7.Nf3 Rb1 main line',
        moves: `1. d4 Nf6 2. c4 g6 3. Nc3 d5 {The Grünfeld: challenge the center right away.} 4. cxd5 Nxd5 5. e4 Nxc3 6. bxc3 Bg7 {White has the center; Black aims everything at it.} 7. Nf3 c5 {Attack d4 again.} 8. Rb1 O-O 9. Be2 cxd4 10. cxd4 Qa5+ {Force a trade of the dark-squared bishops or win the a-pawn.} 11. Bd2 Qxa2 12. O-O Bg4 {Pressure d4 by removing its defender.}`,
      },
      {
        name: 'Exchange: 7.Nf3 8.Be3',
        moves: `1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. cxd5 Nxd5 5. e4 Nxc3 6. bxc3 Bg7 7. Nf3 c5 8. Be3 Qa5 {Pin the c3 pawn and pressure the queenside.} 9. Qd2 O-O 10. Rc1 cxd4 11. cxd4 Qxd2+ 12. Kxd2 Rd8 {In the endgame White's center is a target.}`,
      },
      {
        name: 'Exchange: Classical 7.Bc4',
        moves: `1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. cxd5 Nxd5 5. e4 Nxc3 6. bxc3 Bg7 7. Bc4 c5 8. Ne2 Nc6 {Pile up on d4.} 9. Be3 O-O 10. O-O cxd4 11. cxd4 Bg4 {Provoke f3 to weaken White's dark squares.} 12. f3 Na5 13. Bd3 Be6 {Fight for the d5 and c4 squares.}`,
      },
      {
        name: 'Exchange: 7.Be3',
        moves: `1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. cxd5 Nxd5 5. e4 Nxc3 6. bxc3 Bg7 7. Be3 c5 8. Qd2 Qa5 9. Rc1 cxd4 10. cxd4 Qxd2+ 11. Kxd2 O-O`,
      },
      {
        name: 'Russian System: 5.Qb3',
        moves: `1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Nf3 Bg7 5. Qb3 {Pressure d5 with the queen.} dxc4 6. Qxc4 O-O 7. e4 a6 {The Hungarian Variation: prepare ...b5 with tempo on the queen.} 8. Be2 b5 9. Qb3 c5 {Strike the center while White's pieces are uncoordinated.} 10. dxc5 Bb7`,
      },
      {
        name: '4.Bf4 Variation',
        moves: `1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Bf4 Bg7 5. e3 c5 {Gambit a pawn for rapid development.} 6. dxc5 Qa5 7. Rc1 dxc4 8. Bxc4 O-O 9. Nf3 Qxc5 10. Bb3 Nc6 11. O-O Qa5 12. h3`,
      },
      {
        name: '4.Nf3 5.Bg5: 6.cxd5',
        moves: `1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Nf3 Bg7 5. Bg5 Ne4 {Hit the bishop and the c3 knight.} 6. cxd5 Nxg5 7. Nxg5 e6 {Regain the d5 pawn.} 8. Nf3 exd5 9. e3 O-O 10. Be2 c6`,
      },
      {
        name: '4.Nf3 5.Bg5: 6.Bh4',
        moves: `1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Nf3 Bg7 5. Bg5 Ne4 6. Bh4 Nxc3 7. bxc3 dxc4 {Grab a pawn; c4 is hard for White to regain quickly.} 8. e3 Be6`,
      },
      {
        name: '4.Nf3 5.e3 quiet line',
        moves: `1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Nf3 Bg7 5. e3 O-O 6. Be2 c5 7. O-O cxd4 8. exd4 Nc6 {White has an isolated pawn; blockade and pressure it.} 9. h3 Bf5`,
      },
      {
        name: '4.Bg5: 5.Bh4',
        moves: `1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Bg5 Ne4 5. Bh4 Nxc3 6. bxc3 dxc4 7. e3 Be6 {Hold the extra pawn on c4 with the bishop.}`,
      },
      {
        name: '4.Bg5: 5.cxd5',
        moves: `1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Bg5 Ne4 5. cxd5 Nxg5 6. h4 Ne4 7. Nxe4 Qxd5 8. Nc3 Qa5 {The queen is safe and Black has the bishop pair.}`,
      },
    ],
  },
];
