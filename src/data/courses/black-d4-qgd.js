export default [
  {
    id: 'queens-gambit-declined',
    name: "Queen's Gambit Declined",
    side: 'black',
    eco: 'D30–D58',
    category: 'vs-d4',
    level: 'intermediate',
    description:
      "Hold the d5 point with ...e6, develop calmly and castle. The Tartakower setup with ...h6 and ...b6 gives Black one of the most reliable defenses against 1.d4.",
    lines: [
      {
        name: 'Tartakower: 8.cxd5 main line',
        moves: `1. d4 d5 {Claim the center with a pawn of your own.} 2. c4 e6 {Decline the gambit: d5 stays protected and the dark-squared bishop is freed.} 3. Nc3 Nf6 4. Bg5 Be7 {Break the pin before it becomes annoying.} 5. e3 O-O 6. Nf3 h6 {Ask the bishop a question first; this gives the king a little air later.} 7. Bh4 b6 {The Tartakower: the light-squared bishop will come to b7, solving Black's classic problem piece.} 8. cxd5 Nxd5 {Recapture with the knight to trade pieces and ease the position.} 9. Bxe7 Qxe7 10. Nxd5 exd5 11. Rc1 Be6 {The bishop defends d5 and prepares ...c5.} 12. Qa4 c5 {Hanging pawns on c5 and d5 give Black active piece play.} 13. Qa3 Rc8 14. Be2`,
      },
      {
        name: 'Tartakower: 8.Be2',
        moves: `1. d4 d5 2. c4 e6 3. Nc3 Nf6 4. Bg5 Be7 5. e3 O-O 6. Nf3 h6 7. Bh4 b6 8. Be2 Bb7 9. Bxf6 Bxf6 {The bishop pair compensates for the slightly loose pawns.} 10. cxd5 exd5 11. b4 c6 {Solidify d5 and blunt White's minority attack.} 12. O-O Re8 13. Qb3 a5 {Hit the b4 pawn so White's queenside expansion costs something.}`,
      },
      {
        name: 'Tartakower: 8.Rc1',
        moves: `1. d4 d5 2. c4 e6 3. Nc3 Nf6 4. Bg5 Be7 5. e3 O-O 6. Nf3 h6 7. Bh4 b6 8. Rc1 Bb7 9. Be2 Nbd7 10. cxd5 exd5 11. O-O c5 {Free your game with the thematic central break.}`,
      },
      {
        name: 'Early 7.Bxf6',
        moves: `1. d4 d5 2. c4 e6 3. Nc3 Nf6 4. Bg5 Be7 5. e3 O-O 6. Nf3 h6 7. Bxf6 Bxf6 {You get the bishop pair for free.} 8. Rc1 c6 9. Bd3 Nd7 10. O-O dxc4 11. Bxc4 e5 {With the center opened, the f6 bishop becomes a monster.}`,
      },
      {
        name: 'Move-order: 4.Nf3 Be7 5.Bg5',
        moves: `1. d4 d5 2. c4 e6 3. Nc3 Nf6 4. Nf3 Be7 5. Bg5 O-O 6. e3 h6 7. Bh4 b6 {Same Tartakower setup, reached by a different move order.} 8. Be2 Bb7 9. Bxf6 Bxf6 10. cxd5 exd5 11. b4 c6`,
      },
      {
        name: '5.Bf4 system',
        moves: `1. d4 d5 2. c4 e6 3. Nc3 Nf6 4. Nf3 Be7 5. Bf4 {Avoids the Tartakower; the bishop is more active but does not pin.} O-O 6. e3 c5 {Strike the center straight away.} 7. dxc5 Bxc5 8. Qc2 Nc6 9. a3 Qa5 {Pin the c3 knight and eye the queenside.} 10. Rd1 Re8 11. Nd2 e5 {Gain time and space by hitting the f4 bishop.}`,
      },
      {
        name: 'Exchange Variation: Qc2 and Nf3',
        moves: `1. d4 d5 2. c4 e6 3. Nc3 Nf6 4. cxd5 exd5 {The Carlsbad structure: White plans a minority attack with b4-b5.} 5. Bg5 Be7 6. e3 c6 {Support d5 and open the d8–h4 diagonal for the queen.} 7. Bd3 Nbd7 8. Qc2 O-O 9. Nf3 Re8 10. O-O Nf8 {The knight heads to g6 or e6, reinforcing the kingside.} 11. Rab1 Ne4 {Trade pieces to relieve the pressure.}`,
      },
      {
        name: 'Exchange Variation: Nge2 setup',
        moves: `1. d4 d5 2. c4 e6 3. Nc3 Nf6 4. cxd5 exd5 5. Bg5 Be7 6. e3 c6 7. Bd3 Nbd7 8. Nge2 {White prepares f3 and e4, a sharper plan than the minority attack.} O-O 9. O-O Re8 10. Qc2 Nf8 11. f3`,
      },
      {
        name: 'Against the London System',
        moves: `1. d4 d5 2. Bf4 Nf6 3. e3 c5 {Challenge d4 before White completes the pyramid.} 4. c3 Nc6 5. Nd2 e6 6. Ngf3 Bd6 {Offer to trade off White's best piece.} 7. Bg3 O-O 8. Bd3 b6 {The bishop goes to b7 to fight for e4.}`,
      },
      {
        name: 'Against the Colle System',
        moves: `1. d4 d5 2. Nf3 Nf6 3. e3 e6 4. Bd3 c5 5. c3 Nc6 6. Nbd2 Bd6 7. O-O O-O 8. dxc5 Bxc5 9. e4 Qc7 {Control e5 so White's e4-e5 push loses its punch.}`,
      },
    ],
  },
];
