export default [
  {
    id: 'scandinavian-white',
    name: 'Scandinavian: White Repertoire',
    side: 'white',
    eco: 'B01',
    category: 'e4',
    level: 'beginner',
    description:
      'Take on d5, gain time against the queen with Nc3, and develop smoothly. Covers the 3...Qa5, 3...Qd6 and 3...Qd8 retreats plus the 2...Nf6 gambit lines.',
    lines: [
      {
        name: '3...Qa5: 5...c6',
        moves:
          '1. e4 d5 2. exd5 {Accept. Black will spend time getting the pawn back.} Qxd5 3. Nc3 {Gain a tempo on the queen.} Qa5 {The classical retreat: active, and it pins the knight along the diagonal.} 4. d4 {Take the center. The queen on a5 does nothing to stop it.} Nf6 5. Nf3 c6 {Give the queen a retreat square on c7.} 6. Bc4 {The bishop takes its best diagonal before Black plays ...e6.} Bf5 7. Bd2 {Break the pin. Nd5 tricks with a discovered attack on the queen now become possible.} e6 8. Qe2 {Prepare to castle long and put the queen on the e-file for d5 breaks.} Bb4 9. O-O-O Nbd7 10. a3 {Ask the bishop to declare its intentions.}',
      },
      {
        name: '3...Qa5: 5...Bf5',
        moves:
          '1. e4 d5 2. exd5 Qxd5 3. Nc3 Qa5 4. d4 Nf6 5. Nf3 Bf5 6. Bc4 e6 7. Bd2 c6 8. Qe2 Bb4 9. O-O-O Nbd7 10. a3',
      },
      {
        name: '3...Qa5: 5...Bg4',
        moves:
          '1. e4 d5 2. exd5 Qxd5 3. Nc3 Qa5 4. d4 Nf6 5. Nf3 Bg4 6. h3 {Question the bishop immediately.} Bh5 7. g4 {Gain kingside space and trap the bishop\'s scope.} Bg6 8. Ne5 {The knight jumps to an excellent central square, eyeing c4, d7 and the g6 bishop.} c6 9. h4 {Threaten h5 to trap or win the bishop.}',
      },
      {
        name: '3...Qd6: 5...a6',
        moves:
          '1. e4 d5 2. exd5 Qxd5 3. Nc3 Qd6 {The modern retreat: flexible, and it cannot be hit by Bd2 tricks.} 4. d4 Nf6 5. Nf3 a6 {Stop Nb5 and Bb5 and prepare ...b5 in some lines.} 6. g3 {Fianchetto the bishop where the queen on d6 cannot interfere with it.} Bg4 7. Bg2 Nc6 8. O-O {Safe king and smooth development. Ideas like Be3, h3 and d5 follow.}',
      },
      {
        name: '3...Qd6: 5...c6',
        moves:
          '1. e4 d5 2. exd5 Qxd5 3. Nc3 Qd6 4. d4 Nf6 5. Nf3 c6 6. g3 Bg4 7. Bg2 e6 8. O-O {Same setup; the g2 bishop will press against Black\'s queenside.}',
      },
      {
        name: '3...Qd8',
        moves:
          '1. e4 d5 2. exd5 Qxd5 3. Nc3 Qd8 {The most passive but very solid retreat.} 4. d4 Nf6 5. Nf3 Bg4 6. h3 Bxf3 7. Qxf3 {White has the bishop pair and an extra tempo.} c6 8. Be3 e6 9. Bd3 Nbd7 10. O-O {Plans: Rad1, Ne4 and a central push.}',
      },
      {
        name: '2...Nf6: 3...Nxd5',
        moves:
          '1. e4 d5 2. exd5 Nf6 {Black delays recapturing to avoid wasting time with the queen.} 3. d4 {Keep the pawn for now and claim the center.} Nxd5 4. Nf3 Bg4 5. Be2 e6 6. O-O Nc6 7. c4 {Kick the knight and take space.} Nb6 8. Nc3 Be7 9. Be3',
      },
      {
        name: '2...Nf6: Portuguese Gambit',
        moves:
          '1. e4 d5 2. exd5 Nf6 3. d4 Bg4 {The Portuguese: a sharp gambit aiming for fast development.} 4. f3 {Kick the bishop; White is happy to keep the extra pawn.} Bf5 5. Bb5+ {Interfere with Black\'s development before playing c4.} Nbd7 6. c4 {Defend the d5 pawn.} e6 7. dxe6 Bxe6 8. d5 {Gain space with tempo on the bishop.} Bf5 9. Nc3 {White is a pawn up. Black has some compensation, but White must just develop sensibly.}',
      },
    ],
  },
];
