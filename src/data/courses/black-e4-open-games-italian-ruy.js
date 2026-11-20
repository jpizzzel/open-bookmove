export default [
  {
    id: 'open-games-italian-ruy',
    name: '1...e5 vs the Italian & Ruy Lopez',
    side: 'black',
    eco: 'C50–C55, C60–C99',
    category: 'vs-e4',
    level: 'intermediate',
    description:
      'A classical 1...e5 2...Nc6 repertoire for Black against the two most popular open games: the Giuoco Piano with ...Bc5 against the Italian, and the Closed Chigorin against the Ruy Lopez.',
    lines: [
      {
        name: 'Italian: 4.c3 Nf6 5.d4 6.cxd4 Bb4+ 7.Bd2',
        moves: `1. e4 e5 2. Nf3 Nc6 {Defend e5 and develop.} 3. Bc4 Bc5 {The Giuoco Piano: develop the bishop to its most active square.} 4. c3 Nf6 {Counterattack e4 rather than waiting.} 5. d4 exd4 6. cxd4 Bb4+ {Check before the bishop is pushed back by d5.} 7. Bd2 Bxd2+ 8. Nbxd2 d5 {Break the big center right away.} 9. exd5 Nxd5 10. Qb3 Nce7 {Protect the d5 knight and get ready to castle. White has an isolated d-pawn.} 11. O-O O-O`,
      },
      {
        name: 'Italian: Møller Attack 7.Nc3',
        moves: `1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6 5. d4 exd4 6. cxd4 Bb4+ 7. Nc3 {A sharp gambit.} Nxe4 {Take the pawn.} 8. O-O Bxc3 9. d5 {The Møller Attack.} Bf6 10. Re1 Ne7 11. Rxe4 d6 12. Bg5 Bxg5 13. Nxg5 h6 {Not 13...O-O? 14.Nxh7! with a dangerous attack. With ...h6 Black kicks the knight first and holds the position.}`,
      },
      {
        name: 'Italian: 5.d4 exd4 6.e5',
        moves: `1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6 5. d4 exd4 6. e5 {Kick the knight.} d5 {Counterattack the c4 bishop instead of retreating.} 7. Bb5 Ne4 8. cxd4 Bb4+ 9. Bd2 Nxd2 10. Nbxd2 O-O {Black is very active and will play ...f6 or ...Bg4.}`,
      },
      {
        name: 'Italian: Giuoco Pianissimo 4.c3 Nf6 5.d3',
        moves: `1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6 5. d3 {The slow, modern Italian.} d6 6. O-O a6 {Make room for the bishop on a7, out of reach of d4 and b4 pushes.} 7. a4 Ba7 8. Re1 O-O 9. h3 h6 {Stop Bg5 pins. A typical maneuvering battle.}`,
      },
      {
        name: 'Italian: 4.d3 and 5.O-O',
        moves: `1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. d3 Nf6 5. O-O d6 6. c3 a6 7. a4 Ba7 8. Re1 O-O 9. h3 h6`,
      },
      {
        name: 'Italian: 4.O-O',
        moves: `1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. O-O Nf6 5. d3 d6 6. c3 a6 {The same setup. Black wants ...Ba7 and ...O-O.}`,
      },
      {
        name: 'Italian Four Knights: 4.Nc3',
        moves: `1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. Nc3 Nf6 5. d3 d6 6. Bg5 h6 {Ask the bishop immediately.} 7. Bxf6 Qxf6 8. Nd5 Qd8 9. c3 a6 {Keep the bishop safe from b4 and d4.} 10. d4 exd4 11. cxd4 Ba7`,
      },
      {
        name: 'Evans Gambit: 7.Qb3 Qd7',
        moves: `1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 {The Evans Gambit.} Bxb4 {Take the pawn.} 5. c3 Ba5 {Keep the pin-ish pressure on c3 and stay out of the way of d4.} 6. d4 d6 {The Lasker Defense idea: solidly hold e5.} 7. Qb3 Qd7 {Defend f7 and keep everything protected.} 8. dxe5 Bb6 {Black will recapture on e5 next and stay a pawn up.}`,
      },
      {
        name: 'Evans Gambit: Lasker Defense 7.O-O',
        moves: `1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Ba5 6. d4 d6 7. O-O Bb6 {The Lasker Defense.} 8. dxe5 dxe5 9. Qxd8+ Nxd8 {The queens are off and White's attack is gone.} 10. Nxe5 Be6 {Black has given the pawn back but has the better structure and the bishop pair.}`,
      },
      {
        name: 'Ruy Lopez: Closed Chigorin',
        moves: `1. e4 e5 2. Nf3 Nc6 3. Bb5 {The Ruy Lopez, pressuring the defender of e5.} a6 {The Morphy Defense: ask the bishop right away.} 4. Ba4 Nf6 5. O-O Be7 {The Closed Ruy: solid and flexible.} 6. Re1 b5 7. Bb3 d6 8. c3 O-O 9. h3 Na5 {Trade off or chase the dangerous Spanish bishop.} 10. Bc2 c5 {Grab queenside space.} 11. d4 Qc7 {The Chigorin: Black holds e5 firmly and keeps a rich game.}`,
      },
      {
        name: 'Ruy Lopez: 9.d4 Bg4',
        moves: `1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 O-O 9. d4 {White skips h3.} Bg4 {Pin the knight that guards d4.} 10. Be3 exd4 11. cxd4 Na5 12. Bc2 Nc4 13. Bc1 c5 {Strong queenside pressure.}`,
      },
      {
        name: 'Ruy Lopez: Exchange Variation',
        moves: `1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Bxc6 {White gives up the bishop pair to damage Black's structure.} dxc6 {Recapture toward the center and open the d-file and c8 bishop.} 5. O-O f6 {Solidly protect e5.} 6. d4 exd4 7. Nxd4 c5 8. Nb3 Qxd1 9. Rxd1 Bg4 10. f3 Be6 {The bishop pair compensates for the doubled pawns.}`,
      },
      {
        name: 'Ruy Lopez: 5.d3',
        moves: `1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. d3 {A quiet system.} d6 6. c3 g6 {Against the slow setup, the bishop is excellent on g7.} 7. O-O Bg7 8. Re1 O-O`,
      },
      {
        name: 'Ruy Lopez: Delayed Exchange 6.Bxc6',
        moves: `1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Bxc6 dxc6 7. d3 {Now Nxe5 is a real threat... but} Nd7 {Protect e5 with the knight and free the f-pawn.} 8. Nbd2 O-O {Black has the bishop pair and a comfortable game.}`,
      },
    ],
  },
];
