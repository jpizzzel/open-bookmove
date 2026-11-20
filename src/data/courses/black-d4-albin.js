export default [
  {
    id: 'albin-countergambit',
    name: 'Albin Countergambit',
    side: 'black',
    eco: 'D08–D09',
    category: 'vs-d4',
    level: 'beginner',
    description:
      "Answer the Queen's Gambit with a gambit of your own. The d4 pawn cramps White, the queenside castle leads to fast attacks, and there are famous traps to win quickly.",
    lines: [
      {
        name: 'Main Line: 5.g3',
        moves: `1. d4 d5 2. c4 e5 {Counter-gambit: hit d4 at once.} 3. dxe5 d4 {The d4 pawn is a bone in White's throat, taking away c3 and e3.} 4. Nf3 Nc6 {Attack e5.} 5. g3 Be6 6. Nbd2 Qd7 {Prepare queenside castling.} 7. Bg2 O-O-O {Now the rooks join and ...Bh3 plus ...h5 attack the king.} 8. O-O Bh3 9. Qa4 Kb8 10. b4 Bxg2 11. Kxg2`,
      },
      {
        name: '5.Nbd2',
        moves: `1. d4 d5 2. c4 e5 3. dxe5 d4 4. Nf3 Nc6 5. Nbd2 Be6 6. g3 Qd7 7. Bg2 O-O-O 8. O-O Bh3 {Trade off White's best defender.}`,
      },
      {
        name: '5.a3',
        moves: `1. d4 d5 2. c4 e5 3. dxe5 d4 4. Nf3 Nc6 5. a3 {White prepares b4.} Be6 6. Nbd2 Qd7 7. g3 O-O-O 8. Bg2 Bh3 9. O-O h5 {Open the h-file against the castled king.}`,
      },
      {
        name: 'The Lasker Trap: 4.e3?',
        moves: `1. d4 d5 2. c4 e5 3. dxe5 d4 4. e3 {Natural but bad.} Bb4+ 5. Bd2 dxe3 {The pawn attacks f2 and the bishop is pinned.} 6. Bxb4?? exf2+ 7. Ke2 fxg1=N+ {Underpromotion to a knight with check!} 8. Ke1 Qh4+ 9. Kd2 Nc6 10. Bc3 Bg4 {Black's attack is crushing.}`,
      },
      {
        name: 'Lasker Trap avoided: 6.fxe3',
        moves: `1. d4 d5 2. c4 e5 3. dxe5 d4 4. e3 Bb4+ 5. Bd2 dxe3 6. fxe3 Qh4+ {Force a weakening of the kingside.} 7. g3 Qe4 {Fork the h1 rook and the e3 pawn.} 8. Nf3 Bg4 9. Bg2 Bxf3 10. Bxf3 Qxe3+ 11. Qe2`,
      },
      {
        name: 'White declines: 3.cxd5',
        moves: `1. d4 d5 2. c4 e5 3. cxd5 Qxd5 4. Nc3 Qxd4 5. Qxd4 exd4 6. Nb5 Na6 {Defend c7; Black is fine in the endgame.}`,
      },
      {
        name: 'White declines: 3.e3',
        moves: `1. d4 d5 2. c4 e5 3. e3 exd4 4. exd4 Nf6 5. Nc3 Be7 6. Nf3 O-O {A comfortable game against White's isolated pawn.}`,
      },
    ],
  },
];
