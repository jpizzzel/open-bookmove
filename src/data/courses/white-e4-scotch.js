export default [
  {
    id: 'scotch-game',
    name: 'Scotch Game',
    side: 'white',
    eco: 'C44–C45',
    category: 'e4',
    level: 'beginner',
    description:
      'Open the center on move three and play with free, active pieces. Direct and easy to learn, but rich enough for grandmasters.',
    lines: [
      {
        name: 'Classical: 4...Bc5 5. Nxc6 Qf6',
        moves:
          '1. e4 e5 2. Nf3 Nc6 3. d4 {Strike the center immediately. No slow maneuvering here.} exd4 4. Nxd4 Bc5 {The Classical: Black develops actively and eyes f2.} 5. Nxc6 {Trade before Black can build pressure on d4.} Qf6 {Threatening mate on f2.} 6. Qd2 {Covers f2 and keeps an eye on the d-file.} dxc6 7. Nc3 Be6 8. Na4 {Go after the strong bishop on c5 to win the bishop pair.} Rd8 9. Bd3 Bd4 10. O-O',
      },
      {
        name: 'Classical: 4...Bc5 5. Nxc6 bxc6',
        moves:
          '1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Nxd4 Bc5 5. Nxc6 bxc6 {Black recaptures toward the center.} 6. Bd3 {Simple development; e4 is well protected.} d6 7. O-O Nf6 8. h3 O-O 9. Nc3 {White has the better pawn structure.}',
      },
      {
        name: 'Mieses Variation: 8...Ba6',
        moves:
          '1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Nxd4 Nf6 {Black counterattacks e4.} 5. Nxc6 bxc6 6. e5 {Kick the knight and gain space.} Qe7 {Pins the e5 pawn against the queen.} 7. Qe2 {Unpin and defend. The bishop on f1 is blocked for now, but White has space.} Nd5 8. c4 {Kick the knight from its central post.} Ba6 {Black pins the c4 pawn against the queen.} 9. b3 {Hold c4 and prepare Bb2.}',
      },
      {
        name: 'Mieses Variation: 8...Nb6',
        moves:
          '1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Nxd4 Nf6 5. Nxc6 bxc6 6. e5 Qe7 7. Qe2 Nd5 8. c4 Nb6 9. Nd2 {The knight heads for f3 to support e5.} Qe6 10. b3 {Prepare Bb2 and keep a firm grip on the center.}',
      },
      {
        name: 'Steinitz: 4...Qh4',
        moves:
          '1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Nxd4 Qh4 {Early aggression against e4 and f2.} 5. Nc3 {Defend e4 with development.} Bb4 6. Be2 {Offer the pawn. Black\'s queen will be harassed.} Qxe4 7. Nb5 {Threatening Nxc7+ forking king and rook.} Bxc3+ 8. bxc3 Kd8 9. O-O {Black has the extra pawn but a terrible king. White has huge development.}',
      },
      {
        name: '4...Nxd4',
        moves:
          '1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Nxd4 Nxd4 {Trading knights only brings White\'s queen to a great square.} 5. Qxd4 Ne7 6. Bc4 Ng6 7. O-O {A lead in development and a dominant queen.}',
      },
      {
        name: '4...Bb4+',
        moves:
          '1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Nxd4 Bb4+ 5. c3 {Block with tempo; the bishop must move again.} Bc5 6. Be3 {Calm development, protecting d4. Black has lost time.}',
      },
      {
        name: '4...g6',
        moves:
          '1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Nxd4 g6 5. Nc3 Bg7 6. Be3 Nf6 7. Nxc6 bxc6 8. e5 {Gain space with tempo.} Ng8 9. Bd4 {Support e5 and blunt the g7 bishop.}',
      },
    ],
  },
];
