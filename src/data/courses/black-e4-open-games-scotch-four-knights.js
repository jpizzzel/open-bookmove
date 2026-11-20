export default [
  {
    id: 'open-games-scotch-four-knights',
    name: '1...e5 vs the Scotch & Four Knights',
    side: 'black',
    eco: 'C44–C49',
    category: 'vs-e4',
    level: 'intermediate',
    description:
      'Part two of the 1...e5 2...Nc6 repertoire: active ...Bc5 against the Scotch and Scotch Gambits, and solid, classical play against the Four Knights.',
    lines: [
      {
        name: 'Scotch: 5.Be3 Qf6',
        moves: `1. e4 e5 2. Nf3 Nc6 3. d4 {The Scotch: open the center immediately.} exd4 4. Nxd4 Bc5 {Attack the centralized knight.} 5. Be3 Qf6 {Add pressure on d4, threatening to win it.} 6. c3 Nge7 7. Bc4 Ne5 {Hit the bishop and set up ...Qg6 against e4 and g2.} 8. Be2 Qg6 9. O-O d6 10. f3 O-O {Black is fully developed with a fine game.}`,
      },
      {
        name: 'Scotch: 5.Nxc6 Qf6',
        moves: `1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Nxd4 Bc5 5. Nxc6 Qf6 {Threatening mate on f2!} 6. Qd2 dxc6 {Recapture with the d-pawn to open lines for the bishops.} 7. Nc3 Be6 8. Na4 Rd8 {Develop with tempo on the queen.} 9. Bd3 Bd4 {Keep the bishop away from the a4 knight.} 10. O-O Ne7 {Black is very active.}`,
      },
      {
        name: 'Scotch: 5.Nb3 Bb6',
        moves: `1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Nxd4 Bc5 5. Nb3 Bb6 {Keep the bishop on the strong diagonal.} 6. Nc3 Nf6 7. Qe2 O-O 8. Bg5 h6 9. Bh4 Re8 {Pressure on e4 down the e-file.}`,
      },
      {
        name: 'Scotch Gambit: 5.c3',
        moves: `1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Bc4 {The Scotch Gambit: development over material.} Bc5 5. c3 Nf6 {Counterattack e4.} 6. e5 d5 {Hit the bishop instead of retreating.} 7. Bb5 Ne4 8. cxd4 Bb4+ 9. Bd2 Nxd2 10. Nbxd2 O-O {Black is comfortable and can follow up with ...Bg4 or ...f6.}`,
      },
      {
        name: 'Scotch Gambit: 5.Ng5',
        moves: `1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Bc4 Bc5 5. Ng5 {An aggressive try against f7.} Nh6 {Cover f7.} 6. Nxf7 Nxf7 7. Bxf7+ Kxf7 8. Qh5+ g6 9. Qxc5 d6 {Black has two minor pieces for a rook and pawn... and a huge lead in development.}`,
      },
      {
        name: 'Scotch Gambit: 5.O-O d6',
        moves: `1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Bc4 Bc5 5. O-O d6 {Solidly hold the extra pawn.} 6. c3 Bg4 {Pin the knight and keep the pawn on d4.}`,
      },
      {
        name: 'Göring Gambit: 4.c3 d5',
        moves: `1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. c3 {The Göring Gambit.} d5 {The simplest antidote: give back the pawn and open the game.} 5. exd5 Qxd5 6. cxd4 Bg4 {Pressure on d4.} 7. Be2 Bb4+ 8. Nc3 Bxf3 9. Bxf3 Qc4 {The queen stops White from castling. Black is fine.}`,
      },
      {
        name: 'Four Knights: Spanish 4.Bb5',
        moves: `1. e4 e5 2. Nf3 Nc6 3. Nc3 Nf6 {The Four Knights.} 4. Bb5 Bb4 {The symmetrical variation.} 5. O-O O-O 6. d3 d6 7. Bg5 Bxc3 8. bxc3 Qe7 {Unpin and prepare ...Nd8-e6.} 9. Re1 Nd8 10. d4 Ne6 {The knight challenges the g5 bishop. A classic, balanced position.}`,
      },
      {
        name: 'Four Knights: Scotch 4.d4',
        moves: `1. e4 e5 2. Nf3 Nc6 3. Nc3 Nf6 4. d4 exd4 5. Nxd4 Bb4 {Pin and pressure e4.} 6. Nxc6 bxc6 7. Bd3 d5 8. exd5 cxd5 9. O-O O-O 10. Bg5 c6 {Solid center pawns and easy development.}`,
      },
      {
        name: 'Four Knights: Italian 4.Bc4 fork trick',
        moves: `1. e4 e5 2. Nf3 Nc6 3. Nc3 Nf6 4. Bc4 Nxe4 {The fork trick.} 5. Nxe4 d5 {Fork bishop and knight to regain the piece.} 6. Bd3 dxe4 7. Bxe4 Bd6 {Black has the bishop pair and a great center.}`,
      },
      {
        name: 'Four Knights: Glek 4.g3',
        moves: `1. e4 e5 2. Nf3 Nc6 3. Nc3 Nf6 4. g3 d5 {Strike before the bishop reaches g2.} 5. exd5 Nxd5 6. Bg2 Nxc3 7. bxc3 Bd6 8. O-O O-O {Black has a healthy share of the center.}`,
      },
    ],
  },
];
