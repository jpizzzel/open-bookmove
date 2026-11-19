export default [
  {
    id: 'catalan-opening',
    name: 'Catalan Opening',
    side: 'white',
    eco: 'E01–E09',
    category: 'd4',
    level: 'advanced',
    description:
      'Combine the Queen\'s Gambit with a kingside fianchetto. The g2-bishop pressures the long diagonal and Black\'s queenside for the whole game — a favorite of world champions.',
    lines: [
      {
        name: 'Open Catalan: 5...Be7 Main Line',
        moves:
          "1. d4 Nf6 2. c4 e6 3. g3 {The Catalan setup: the bishop will rule the long diagonal.} d5 4. Bg2 dxc4 {The Open Catalan: Black grabs the pawn.} 5. Nf3 {Don't rush to win it back; develop first.} Be7 6. O-O O-O 7. Qc2 {Regain the pawn on c4.} a6 8. Qxc4 b5 9. Qc2 Bb7 10. Bd2 {Head for a5 or c3 to fight Black's queenside.} Be4 11. Qc1 {The queen stays on the c-file and keeps the bishop pair options.}",
      },
      {
        name: 'Open Catalan: 5...a6 and ...Nc6',
        moves:
          '1. d4 Nf6 2. c4 e6 3. g3 d5 4. Bg2 dxc4 5. Nf3 a6 6. O-O Nc6 7. e3 {Calmly prepare to recapture with the queen or bishop.} Bd7 8. Qe2 b5 9. b3 {Break up the pawn chain.} cxb3 10. axb3 {The a-file opens toward a6.}',
      },
      {
        name: 'Closed Catalan: ...Nbd7 and ...c6',
        moves:
          "1. d4 Nf6 2. c4 e6 3. g3 d5 4. Bg2 Be7 {The Closed Catalan: Black keeps the center.} 5. Nf3 O-O 6. O-O Nbd7 7. Qc2 c6 8. Nbd2 {Support the e4 break.} b6 9. e4 {Strike in the center.} Bb7 10. b3 {Protect c4 and prepare Bb2.}",
      },
      {
        name: 'Closed Catalan: 4...c6',
        moves:
          '1. d4 Nf6 2. c4 e6 3. g3 d5 4. Bg2 c6 5. Nf3 Nbd7 6. O-O Be7 7. Qc2 O-O 8. Nbd2 b6 9. e4 Bb7',
      },
      {
        name: 'Catalan: 4...Bb4+',
        moves:
          '1. d4 Nf6 2. c4 e6 3. g3 d5 4. Bg2 Bb4+ 5. Bd2 {Block and offer a trade of dark-squared bishops.} Be7 6. Nf3 O-O 7. O-O c6 8. Qc2 Nbd7 9. Rd1 {The rook backs up a future e4 or c5 push.}',
      },
      {
        name: 'Bogo-Indian Style: 3...Bb4+',
        moves:
          '1. d4 Nf6 2. c4 e6 3. g3 Bb4+ 4. Bd2 Qe7 5. Bg2 Nc6 6. Nf3 Bxd2+ 7. Nbxd2 d6 8. O-O O-O 9. e4 {A broad center and the bishop pair is gone, but space is ours.}',
      },
      {
        name: 'Benoni Style: 3...c5',
        moves:
          '1. d4 Nf6 2. c4 e6 3. g3 c5 4. d5 {Gain space; the g2-bishop loves an open long diagonal.} exd5 5. cxd5 d6 6. Nc3 g6 7. Bg2 Bg7 8. Nf3 O-O 9. O-O',
      },
    ],
  },
];
