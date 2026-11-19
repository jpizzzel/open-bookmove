export default [
  {
    id: 'ruy-lopez',
    name: 'Ruy Lopez',
    side: 'white',
    eco: 'C60–C99',
    category: 'e4',
    level: 'intermediate',
    description:
      'The Spanish Game: pressure the knight that defends e5 and build slow, lasting pressure. A lifelong opening played by nearly every world champion.',
    lines: [
      {
        name: 'Closed Ruy: Chigorin Variation',
        moves:
          '1. e4 e5 2. Nf3 Nc6 3. Bb5 {Attack the defender of e5. The threat is not immediate, but the pressure lasts all game.} a6 4. Ba4 {Keep the pin alive. Taking on c6 is possible but gives up the bishop pair.} Nf6 5. O-O {e4 is "hanging", but taking it lets White open the e-file.} Be7 6. Re1 {Now e4 really is defended, and Bxc6 followed by Nxe5 becomes a threat.} b5 7. Bb3 d6 8. c3 {A retreat square for the bishop on c2 and support for d4.} O-O 9. h3 {Stop ...Bg4 pinning the knight before playing d4.} Na5 10. Bc2 {Keep the bishop on the long b1-h7 diagonal.} c5 11. d4 Qc7 12. Nbd2 {The knight heads to f1 and g3 to join a kingside attack.}',
      },
      {
        name: 'Closed Ruy: Breyer Variation',
        moves:
          '1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 O-O 9. h3 Nb8 {Breyer\'s idea: reroute the knight to d7 to support e5 and free the c-pawn.} 10. d4 Nbd7 11. Nbd2 Bb7 12. Bc2 {The classic setup. Next comes Nf1-g3 and a slow buildup.}',
      },
      {
        name: 'Closed Ruy: Zaitsev Variation',
        moves:
          '1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 O-O 9. h3 Bb7 10. d4 Re8 {Black piles on e4.} 11. Nbd2 Bf8 12. a4 {Open a second front on the queenside to stretch Black\'s defenses.}',
      },
      {
        name: 'Anti-Marshall: 8. h3',
        moves:
          '1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 O-O {Black is inviting 8. c3 d5, the Marshall Gambit.} 8. h3 {Sidestep the Marshall: no c3, so ...d5 does not come with a dangerous gambit.} Bb7 9. d3 {Solid. White keeps e4 protected and plays a slow maneuvering game.} d6 10. a3 {A retreat square on a2 for the bishop and a pawn ready for a4 later.}',
      },
      {
        name: 'Open Ruy Lopez',
        moves:
          '1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Nxe4 {The Open Defense: Black grabs the pawn and gets active pieces.} 6. d4 {Open the center immediately while Black\'s king is still in the middle.} b5 7. Bb3 d5 8. dxe5 Be6 9. Nbd2 {Challenge the strong knight on e4.} Nc5 10. c3 d4 11. Bxe6 Nxe6 12. cxd4 {White has the better structure and pressure against the isolated pawn.}',
      },
      {
        name: 'Berlin Defense: Berlin Endgame',
        moves:
          '1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6 {The Berlin: solid and hard to crack.} 4. O-O Nxe4 5. d4 {Hit back in the center rather than recapture the pawn at once.} Nd6 6. Bxc6 dxc6 7. dxe5 Nf5 8. Qxd8+ Kxd8 {The famous queenless middlegame. Black has the bishop pair but a misplaced king.} 9. Nc3 Ke8 10. h3 {Take g4 away and prepare g4 to kick the f5-knight. White has a healthy kingside majority.}',
      },
      {
        name: 'Berlin Defense: 4...Bc5',
        moves:
          '1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6 4. O-O Bc5 5. c3 {Prepare d4 to gain time against the bishop.} O-O 6. d4 Bb6 7. Re1 {Protect e4 so that dxe5 becomes a real threat.} d6 8. h3',
      },
      {
        name: 'Steinitz Deferred',
        moves:
          '1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 d6 {Black holds e5 firmly with pawns.} 5. c3 {Prepare d4 and keep a retreat square for the bishop on c2.} Bd7 6. d4 Nf6 7. O-O Be7 8. Re1 O-O 9. Nbd2 {Classic development: the knight goes to f1-g3 and White has more space.}',
      },
      {
        name: 'Schliemann Gambit: 5...d5',
        moves:
          '1. e4 e5 2. Nf3 Nc6 3. Bb5 f5 {The aggressive Schliemann. Black counterattacks immediately.} 4. Nc3 {Develop and add pressure to e4/f5. The most respected reply.} fxe4 5. Nxe4 d5 6. Nxe5 dxe4 7. Nxc6 Qg5 {Black hits g2 and the knight.} 8. Qe2 Nf6 9. f4 Qxf4 10. Ne5+ {A discovered check from the b5 bishop.} c6 11. d4 {White develops with tempo and Black\'s king is stuck in the center.}',
      },
      {
        name: 'Schliemann Gambit: 5...Nf6',
        moves:
          '1. e4 e5 2. Nf3 Nc6 3. Bb5 f5 4. Nc3 fxe4 5. Nxe4 Nf6 6. Nxf6+ Qxf6 7. Qe2 {Pressure on e5 and along the e-file. Black\'s kingside has been loosened by ...f5.}',
      },
      {
        name: 'Classical Defense: 3...Bc5',
        moves:
          '1. e4 e5 2. Nf3 Nc6 3. Bb5 Bc5 {Active bishop, but it can be hit by c3 and d4.} 4. c3 {Prepare d4 to win time against the bishop.} Nf6 5. O-O O-O 6. d4 Bb6 7. Re1 d6 8. h3 {A big center and a stable advantage in space.}',
      },
      {
        name: 'Cozio Defense: 3...Nge7',
        moves:
          '1. e4 e5 2. Nf3 Nc6 3. Bb5 Nge7 {Protects c6 so the knight cannot be traded off with damage.} 4. O-O g6 5. c3 Bg7 6. d4 exd4 7. cxd4 d5 8. exd5 Nxd5 9. Re1+ {Use the open e-file before Black can castle.} Be6 10. Bg5 {Develop with tempo against the queen.}',
      },
    ],
  },
];
