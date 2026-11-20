// Caro-Kann Defense repertoire for Black (1.e4 c6).
export default [
  {
    id: 'caro-kann',
    name: 'Caro-Kann Defense',
    side: 'black',
    eco: 'B10–B19',
    category: 'vs-e4',
    level: 'beginner',
    description:
      'Rock-solid and easy to learn. Support ...d5 with the c-pawn, develop the light-squared bishop before ...e6, and reach healthy structures with few weaknesses.',
    lines: [
      {
        name: 'Advance: Short System 4.Nf3 and 5.Be2',
        moves: `1. e4 c6 {Prepare ...d5 so Black can challenge e4 and still recapture with a pawn.} 2. d4 d5 3. e5 {The Advance. White grabs space and cramps Black.} Bf5 {Develop the bishop outside the pawn chain before playing ...e6.} 4. Nf3 e6 5. Be2 c5 {Strike the base of the chain. This is the key break in the Advance.} 6. Be3 Nd7 7. O-O Ne7 {The knight heads for f5 or c6 and keeps f6 free for ...f6 later.} 8. c4 dxc4 9. Na3 Nd5 10. Nxc4 Be7`,
      },
      {
        name: 'Advance: 4.Nc3 and 5.g4',
        moves: `1. e4 c6 2. d4 d5 3. e5 Bf5 4. Nc3 e6 5. g4 {Chase the bishop with pawns. Sharp.} Bg6 6. Nge2 c5 {Counterattack in the center. That is the right answer to a wing attack.} 7. h4 h5 {Stop h5 from trapping the bishop.} 8. Nf4 Bh7 {Theory continues with 9.Nxh5. Black aims to undermine White's overextended pawns.}`,
      },
      {
        name: 'Advance: 4.h4',
        moves: `1. e4 c6 2. d4 d5 3. e5 Bf5 4. h4 h5 {Fix the h-pawn so h5 can never trap the bishop.} 5. c4 e6 6. Nc3 Ne7 {Heading for f5, a great square now that White has played h4.}`,
      },
      {
        name: 'Advance: 4.Bd3',
        moves: `1. e4 c6 2. d4 d5 3. e5 Bf5 4. Bd3 Bxd3 {Happy to trade. Black's bad bishop goes off the board.} 5. Qxd3 e6 6. Nf3 Qb6 {Pressure on d4 and b2.} 7. O-O c5 8. dxc5 Bxc5 {Black develops with tempo and stands well.}`,
      },
      {
        name: 'Exchange: 7.Qb3',
        moves: `1. e4 c6 2. d4 d5 3. exd5 cxd5 4. Bd3 {The Exchange Variation. White gets a slight space edge but no real initiative.} Nc6 5. c3 Nf6 6. Bf4 Bg4 {Activate the bishop before ...e6 shuts it in.} 7. Qb3 {Hits b7.} Qd7 {Simply defend. The queen is fine on d7.} 8. Nd2 e6 9. Ngf3 Bd6 {Offer a trade of dark-squared bishops.} 10. Bxd6 Qxd6 11. O-O O-O {Black has comfortable equality and plans the minority attack with ...b5-b4.}`,
      },
      {
        name: 'Exchange: 7.Nf3',
        moves: `1. e4 c6 2. d4 d5 3. exd5 cxd5 4. Bd3 Nc6 5. c3 Nf6 6. Bf4 Bg4 7. Nf3 e6 8. Nbd2 Bd6 9. Bxd6 Qxd6 10. O-O O-O`,
      },
      {
        name: 'Panov-Botvinnik Attack',
        moves: `1. e4 c6 2. d4 d5 3. exd5 cxd5 4. c4 {The Panov. White accepts an isolated queen's pawn in exchange for active pieces.} Nf6 5. Nc3 e6 6. Nf3 Be7 7. cxd5 Nxd5 {The knight on d5 blockades the isolated pawn. This is the most important square for Black.} 8. Bd3 Nc6 9. O-O O-O 10. Re1 Bf6 {Pile pressure on d4.}`,
      },
      {
        name: 'Accelerated Panov: 2.c4',
        moves: `1. e4 c6 2. c4 d5 3. exd5 cxd5 4. cxd5 Nf6 {Recover the pawn with the knight rather than the queen.} 5. Nc3 Nxd5 6. Nf3 Nc6 7. Bb5 e6 8. O-O Be7 9. d4 O-O`,
      },
      {
        name: 'Classical: 6.h4 h6 7.Nf3',
        moves: `1. e4 c6 2. d4 d5 3. Nc3 dxe4 4. Nxe4 Bf5 {The Classical. The bishop develops actively before ...e6.} 5. Ng3 Bg6 6. h4 {Threatens h5 to trap the bishop.} h6 {Give the bishop a retreat on h7.} 7. Nf3 Nd7 {Control e5 so the Nf3 cannot jump in.} 8. h5 Bh7 9. Bd3 Bxd3 10. Qxd3 e6 11. Bd2 Ngf6 12. O-O-O Be7 {Solid. Black usually castles short and plays ...c5 later.}`,
      },
      {
        name: 'Classical: 6.h4 h6 7.h5',
        moves: `1. e4 c6 2. d4 d5 3. Nc3 dxe4 4. Nxe4 Bf5 5. Ng3 Bg6 6. h4 h6 7. h5 Bh7 8. Nf3 Nd7 9. Bd3 Bxd3 10. Qxd3 e6 11. Bd2 Ngf6 12. O-O-O Be7`,
      },
      {
        name: 'Classical via 3.Nd2',
        moves: `1. e4 c6 2. d4 d5 3. Nd2 {Same idea as 3.Nc3. Black answers the same way.} dxe4 4. Nxe4 Bf5 5. Ng3 Bg6 6. h4 h6 7. Nf3 Nd7 8. h5 Bh7`,
      },
      {
        name: 'Fantasy Variation: 3.f3',
        moves: `1. e4 c6 2. d4 d5 3. f3 {The Fantasy. White props up e4 with a pawn.} e6 {Calm and solid. Prepare ...Bb4 and ...c5.} 4. Nc3 Bb4 {Pin the knight that defends e4.} 5. a3 Bxc3+ 6. bxc3 dxe4 7. fxe4 e5 {Challenge the center while White's structure is loose.} 8. Nf3 exd4 9. cxd4 Nf6 10. Bd3 O-O {White's center pawns can become targets.}`,
      },
      {
        name: 'Two Knights: 2.Nc3 and 3.Nf3',
        moves: `1. e4 c6 2. Nc3 d5 3. Nf3 Bg4 {Pin the knight and prepare to trade it.} 4. h3 Bxf3 5. Qxf3 e6 {Black gives up the bishop pair but gets a rock-solid position and quick development.} 6. d3 Nf6 7. Bd2 Nbd7 8. g4 Bb4`,
      },
      {
        name: "King's Indian Attack: 2.d3",
        moves: `1. e4 c6 2. d3 d5 3. Nd2 e5 {Take the center. White's setup is too slow to punish it.} 4. Ngf3 Bd6 5. g3 Nf6 6. Bg2 O-O 7. O-O Re8 {Support e5 and keep a pleasant central position.}`,
      },
    ],
  },
];
