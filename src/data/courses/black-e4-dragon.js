// Sicilian Dragon repertoire for Black (1.e4 c5 2.Nf3 d6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 g6).
export default [
  {
    id: 'sicilian-dragon',
    name: 'Sicilian Dragon',
    side: 'black',
    eco: 'B70–B79',
    category: 'vs-e4',
    level: 'advanced',
    description:
      'Fianchetto the bishop on g7 and breathe fire down the long diagonal. Expect sharp opposite-side-castling races where the c-file and the exchange sacrifice on c3 are Black\'s main weapons.',
    lines: [
      {
        name: 'Yugoslav Attack: 9.Bc4 with 12.Kb1',
        moves: `1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 g6 {The Dragon. The g7 bishop will be Black's best piece.} 6. Be3 Bg7 7. f3 {The Yugoslav Attack. White plans Qd2, O-O-O, Bh6 and h4-h5.} O-O 8. Qd2 Nc6 9. Bc4 {Pressure on f7 and control of d5.} Bd7 10. O-O-O Rc8 {Heavy pieces go to the c-file, aimed straight at White's king.} 11. Bb3 Ne5 {Eyeing c4, where the knight trades off the strong bishop.} 12. Kb1 Nc4 13. Bxc4 Rxc4 {The rook on c4 is very active. ...Qa5 and ...b5 come next.} 14. g4 b5`,
      },
      {
        name: 'Yugoslav Attack: Soltis 12.h4 h5',
        moves: `1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 g6 6. Be3 Bg7 7. f3 O-O 8. Qd2 Nc6 9. Bc4 Bd7 10. O-O-O Rc8 11. Bb3 Ne5 12. h4 h5 {The Soltis Variation. Stop h4-h5 before White's attack opens the h-file.} 13. Bg5 Rc5 {The rook swings along the fifth rank and can sacrifice itself on c3.}`,
      },
      {
        name: 'Yugoslav 9.O-O-O d5: 12.Bd4',
        moves: `1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 g6 6. Be3 Bg7 7. f3 O-O 8. Qd2 Nc6 9. O-O-O d5 {The principled central break. Black hits back in the center before White's attack lands.} 10. exd5 Nxd5 11. Nxc6 bxc6 12. Bd4 e5 {Gain a tempo on the bishop. Black's pieces come alive.} 13. Bc5 Be6 14. Ne4 Re8`,
      },
      {
        name: 'Yugoslav 9.O-O-O d5: 12.Nxd5 pawn sacrifice',
        moves: `1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 g6 6. Be3 Bg7 7. f3 O-O 8. Qd2 Nc6 9. O-O-O d5 10. exd5 Nxd5 11. Nxc6 bxc6 12. Nxd5 cxd5 13. Qxd5 Qc7 {Give up a pawn for open lines against the king.} 14. Qxa8 Bf5 {White has won a rook but faces a deadly attack on the c-file and the long diagonal.}`,
      },
      {
        name: 'Yugoslav 9.O-O-O d5: 10.Qe1',
        moves: `1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 g6 6. Be3 Bg7 7. f3 O-O 8. Qd2 Nc6 9. O-O-O d5 10. Qe1 e5 {Build a big center while the queen is away.} 11. Nxc6 bxc6 12. exd5 cxd5 13. Bg5 Be6`,
      },
      {
        name: 'Yugoslav Attack: 9.g4',
        moves: `1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 g6 6. Be3 Bg7 7. f3 O-O 8. Qd2 Nc6 9. g4 Be6 {Develop and fight for d5 and c4.} 10. O-O-O Nxd4 11. Bxd4 Qa5 {The queen joins the queenside attack and eyes a2.} 12. Kb1 Rfc8`,
      },
      {
        name: '6.Be3 with 7.Be2',
        moves: `1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 g6 6. Be3 Bg7 7. Be2 Nc6 8. O-O O-O 9. Nb3 Be6 10. f4 Na5 {Aim the knight at c4 to win the light squares.}`,
      },
      {
        name: 'Classical: 6.Be2',
        moves: `1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 g6 6. Be2 {The Classical. Solid and calm, with White castling short.} Bg7 7. O-O O-O 8. Be3 Nc6 9. Nb3 Be6 10. f4 Na5 11. f5 Bc4 {Trade the bishop pair and claim the light squares.} 12. Nxa5 Bxe2 13. Qxe2 Qxa5 14. g4 Rac8 {Black has easy play on the c-file against c2 and c3.}`,
      },
      {
        name: 'Levenfish: 6.f4',
        moves: `1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 g6 6. f4 {White threatens e5 at once.} Nbd7 {Keep e5 under control. ...Bg7 can wait.} 7. Nf3 Qc7 {More control of e5.} 8. Bd3 Bg7 9. O-O O-O 10. Qe1 b5 {Gain queenside space while White regroups.}`,
      },
      {
        name: '6.Bc4',
        moves: `1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 g6 6. Bc4 Bg7 7. O-O O-O 8. h3 Nc6 9. Be3 Nxd4 10. Bxd4 Be6 {Contest the strong Bc4 and fight for d5.}`,
      },
      {
        name: 'Fianchetto: 6.g3',
        moves: `1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 g6 6. g3 Nc6 7. Nde2 Bg7 8. Bg2 O-O 9. O-O Rb8 {Prepare ...b5. Queenside expansion is the plan against a quiet setup.} 10. a4 a6`,
      },
    ],
  },
];
