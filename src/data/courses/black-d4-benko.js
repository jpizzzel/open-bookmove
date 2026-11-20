export default [
  {
    id: 'benko-gambit',
    name: 'Benko Gambit',
    side: 'black',
    eco: 'A57–A59',
    category: 'vs-d4',
    level: 'intermediate',
    description:
      "Sacrifice a queenside pawn for open a- and b-files and long-term pressure. Easy to learn plans: fianchetto, rooks on a8 and b8, and squeeze.",
    lines: [
      {
        name: 'Accepted: 7.e4 Bxf1',
        moves: `1. d4 Nf6 2. c4 c5 3. d5 b5 {The Benko: give a pawn to open the queenside.} 4. cxb5 a6 5. bxa6 Bxa6 {The bishop takes the a6–f1 diagonal.} 6. Nc3 d6 7. e4 Bxf1 {Trade bishops so White's king cannot castle.} 8. Kxf1 g6 9. g3 Bg7 10. Kg2 O-O 11. Nf3 Nbd7 12. Re1 Qa5 {Queen and rooks pile up on the a- and b-files.}`,
      },
      {
        name: 'Accepted: 9.Nf3 move order',
        moves: `1. d4 Nf6 2. c4 c5 3. d5 b5 4. cxb5 a6 5. bxa6 Bxa6 6. Nc3 d6 7. e4 Bxf1 8. Kxf1 g6 9. Nf3 Bg7 10. g3 O-O 11. Kg2 Nbd7 12. h3 Qa5`,
      },
      {
        name: 'Fianchetto: 7.Nf3 and 8.g3',
        moves: `1. d4 Nf6 2. c4 c5 3. d5 b5 4. cxb5 a6 5. bxa6 Bxa6 6. Nc3 d6 7. Nf3 g6 8. g3 Bg7 9. Bg2 Nbd7 10. O-O O-O 11. Qc2 Qb6 {Target b2 and prepare ...Rfb8.}`,
      },
      {
        name: 'Accepted: 5.e3',
        moves: `1. d4 Nf6 2. c4 c5 3. d5 b5 4. cxb5 a6 5. e3 g6 {Develop first; the pawn can be recaptured later.} 6. Nc3 Bg7 7. Nf3 O-O 8. a4 e6 {Undermine White's d5 pawn.} 9. dxe6 fxe6`,
      },
      {
        name: 'Declined: 5.b6',
        moves: `1. d4 Nf6 2. c4 c5 3. d5 b5 4. cxb5 a6 5. b6 {White gives the pawn back to keep the queenside closed.} e6 {Attack d5 immediately.} 6. Nc3 Nxd5 7. Nxd5 exd5 8. Qxd5 Nc6 {Fast development for the pawn.}`,
      },
      {
        name: 'Declined: 5.f3',
        moves: `1. d4 Nf6 2. c4 c5 3. d5 b5 4. cxb5 a6 5. f3 e6 {Strike the center before White consolidates with e4.} 6. e4 exd5 7. e5 Qe7 {Pin the e5 pawn.} 8. Qe2 Ng8`,
      },
      {
        name: 'Declined: 5.Nc3',
        moves: `1. d4 Nf6 2. c4 c5 3. d5 b5 4. cxb5 a6 5. Nc3 axb5 6. e4 b4 7. Nb5 d6 {Keep the knight out of c7 and d6.}`,
      },
      {
        name: 'Declined: 4.Nf3',
        moves: `1. d4 Nf6 2. c4 c5 3. d5 b5 4. Nf3 g6 5. cxb5 a6 6. bxa6 Bxa6 7. Nc3 d6 8. g3 Bg7 9. Bg2 Nbd7 10. O-O O-O`,
      },
      {
        name: 'Declined: 4.a4',
        moves: `1. d4 Nf6 2. c4 c5 3. d5 b5 4. a4 bxc4 {Take the pawn; c4 is weak.} 5. Nc3 d6 6. e4 g6 7. Bxc4 Bg7`,
      },
      {
        name: 'White avoids 3.d5',
        moves: `1. d4 Nf6 2. c4 c5 3. Nf3 cxd4 4. Nxd4 e5 {Gain time on the knight.} 5. Nb5 d5 6. cxd5 Bc5 {Rapid development and a strong bishop.} 7. N5c3 O-O 8. e3 e4`,
      },
    ],
  },
];
