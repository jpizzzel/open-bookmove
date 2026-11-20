export default [
  {
    id: 'kings-indian-defense',
    name: "King's Indian Defense",
    side: 'black',
    eco: 'E60–E99',
    category: 'vs-d4',
    level: 'advanced',
    description:
      "Let White build a big center, then hit it with ...e5 and storm the kingside with ...f5 and ...g5. A fighting, counterattacking defense for players who want to win with Black.",
    lines: [
      {
        name: 'Classical: 9.Ne1 Mar del Plata',
        moves: `1. d4 Nf6 2. c4 g6 {Fianchetto the bishop; the center can wait.} 3. Nc3 Bg7 4. e4 d6 5. Nf3 O-O 6. Be2 e5 {The key strike against d4.} 7. O-O Nc6 8. d5 Ne7 {The center is locked: White plays on the queenside, Black on the kingside.} 9. Ne1 Nd7 {Clear the way for the f-pawn.} 10. Be3 f5 11. f3 f4 {Gain space and push the bishop back.} 12. Bf2 g5 {The pawn storm begins: ...g4 is coming.}`,
      },
      {
        name: 'Classical: Bayonet Attack 9.b4',
        moves: `1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Nf3 O-O 6. Be2 e5 7. O-O Nc6 8. d5 Ne7 9. b4 {White races on the queenside at once.} Nh5 {Prepare ...f5 and eye the f4 square.} 10. Re1 f5 11. Ng5 Nf6 {Defend e6 and keep the tension.}`,
      },
      {
        name: 'Classical: 9.Nd2',
        moves: `1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Nf3 O-O 6. Be2 e5 7. O-O Nc6 8. d5 Ne7 9. Nd2 a5 {Slow down White's b4 push.} 10. a3 Nd7 11. Rb1 f5 12. b4 Kh8 {A useful waiting move that unpins the g8–a2 diagonal.}`,
      },
      {
        name: 'Exchange Variation',
        moves: `1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Nf3 O-O 6. Be2 e5 7. dxe5 dxe5 8. Qxd8 Rxd8 {Queens are off, but Black is completely equal.} 9. Bg5 Re8 10. Nd5 Nxd5 11. cxd5 c6 {Undermine the d5 pawn immediately.} 12. Bc4 cxd5 13. Bxd5 Nd7`,
      },
      {
        name: 'Petrosian: 7.d5',
        moves: `1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Nf3 O-O 6. Be2 e5 7. d5 a5 {Fix the queenside before White can play b4.} 8. Bg5 h6 9. Bh4 Na6 {The knight heads for c5.} 10. Nd2 Qe8 {Unpin the f6 knight.} 11. O-O Nh7 {Free the f-pawn for ...f5.}`,
      },
      {
        name: 'Gligoric: 7.Be3',
        moves: `1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Nf3 O-O 6. Be2 e5 7. Be3 Ng4 {Chase the bishop off its best square.} 8. Bg5 f6 9. Bh4 g5 10. Bg3 Nh6 {The knight reroutes to f7, and ...f5 is in the air.}`,
      },
      {
        name: 'Averbakh: 5.Be2 and 6.Bg5',
        moves: `1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Be2 O-O 6. Bg5 {Discourages ...e5 by pinning the knight.} c5 {Hit the center from the other side.} 7. d5 e6 8. Qd2 exd5 9. exd5 Re8 {The half-open e-file gives Black active play.} 10. Nf3 Bg4 11. O-O Nbd7`,
      },
      {
        name: 'Averbakh move order: 6.Nf3',
        moves: `1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Be2 O-O 6. Nf3 e5 7. O-O Nc6 8. d5 Ne7 9. Ne1 Nd7 10. Nd3 f5 {Same Mar del Plata plans: the kingside is Black's battlefield.}`,
      },
      {
        name: 'Sämisch: 7.d5 Nh5',
        moves: `1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. f3 {White guards e4 and prepares Be3, Qd2 and a kingside storm.} O-O 6. Be3 e5 7. d5 Nh5 {Prepare ...f5, the standard reaction to a closed center.} 8. Qd2 f5 9. O-O-O Nd7 10. Bd3 Nc5 11. Bc2 a6`,
      },
      {
        name: 'Sämisch: 7.Nge2',
        moves: `1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. f3 O-O 6. Be3 e5 7. Nge2 c6 {Prepare ...b5 to attack White's king if it castles queenside.} 8. Qd2 Nbd7 9. O-O-O a6 10. Kb1 b5`,
      },
      {
        name: 'Sämisch: 7.dxe5',
        moves: `1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. f3 O-O 6. Be3 e5 7. dxe5 dxe5 8. Qxd8 Rxd8 9. Nd5 Nxd5 10. cxd5 c6 11. Bc4 b5 {Gain time on the bishop and challenge d5.} 12. Bb3 Bb7`,
      },
      {
        name: 'Four Pawns Attack',
        moves: `1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. f4 {The most ambitious setup: a huge center.} O-O 6. Nf3 c5 {Strike before the center becomes overwhelming.} 7. d5 e6 8. Be2 exd5 9. cxd5 Re8 {Pressure e4 down the open file.} 10. e5 dxe5 11. fxe5 Ng4 12. Bg5 Qb6 {Counterattack b2 and d4 while White's center is loose.}`,
      },
      {
        name: 'Fianchetto Variation: Panno setup',
        moves: `1. d4 Nf6 2. c4 g6 3. Nf3 Bg7 4. g3 O-O 5. Bg2 d6 6. O-O Nc6 {Pressure d4 and prepare ...a6 and ...Rb8 for a queenside push.} 7. Nc3 a6 8. d5 Na5 9. Nd2 c5 10. Qc2 Rb8 11. b3 b5 {The thematic break opens lines on the queenside.}`,
      },
    ],
  },
];
