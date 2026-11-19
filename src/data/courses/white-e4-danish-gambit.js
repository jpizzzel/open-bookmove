export default [
  {
    id: 'danish-gambit',
    name: 'Danish Gambit',
    side: 'white',
    eco: 'C21',
    category: 'e4',
    level: 'beginner',
    description:
      'Sacrifice one or two pawns for two powerful bishops raking the black king. A brilliant attacking weapon for club players.',
    lines: [
      {
        name: 'Schlechter Defense: 5...d5',
        moves:
          '1. e4 e5 2. d4 exd4 3. c3 {The Danish: offer a pawn for rapid development.} dxc3 4. Bc4 {Offer a second pawn. Both bishops will aim at the king.} cxb2 5. Bxb2 {Two bishops on open diagonals toward f7 and g7.} d5 {Black gives back material to free the position.} 6. Bxd5 Nf6 7. Bxf7+ {Remove the f7 defender with check.} Kxf7 8. Qxd8 Bb4+ 9. Qd2 Bxd2+ 10. Nxd2 {An endgame where White has the more active pieces.}',
      },
      {
        name: 'Accepted: 5...Bb4+',
        moves:
          '1. e4 e5 2. d4 exd4 3. c3 dxc3 4. Bc4 cxb2 5. Bxb2 Bb4+ 6. Nc3 Nf6 7. Ne2 {Protect c3 so the knight is not just pinned and lost.} Nxe4 8. O-O {Open lines everywhere. Black\'s king is in danger.}',
      },
      {
        name: 'Accepted: 4...Nf6',
        moves:
          '1. e4 e5 2. d4 exd4 3. c3 dxc3 4. Bc4 Nf6 5. Nxc3 {Simply recapture with a lead in development.} Nc6 6. Nf3 Bb4 7. O-O d6 8. Nd5 {Hit the bishop and eye f6.}',
      },
      {
        name: 'Declined: 3...d5',
        moves:
          '1. e4 e5 2. d4 exd4 3. c3 d5 {The safest way to decline.} 4. exd5 Qxd5 5. cxd4 Nc6 6. Nf3 Bg4 7. Be2 Bb4+ 8. Nc3 {Development with an isolated pawn but active pieces.}',
      },
      {
        name: 'Declined: 3...d3',
        moves:
          '1. e4 e5 2. d4 exd4 3. c3 d3 {Black returns the pawn to block White\'s development.} 4. Bxd3 d6 5. Nf3 Nf6 6. O-O Be7 7. c4 {Grab space.} O-O 8. Nc3',
      },
      {
        name: 'Declined: 3...Nf6',
        moves:
          '1. e4 e5 2. d4 exd4 3. c3 Nf6 4. e5 {Kick the knight.} Nd5 5. cxd4 d6 6. Nf3 Nc6 7. Bc4 {Hit the knight on d5 and develop.}',
      },
    ],
  },
];
