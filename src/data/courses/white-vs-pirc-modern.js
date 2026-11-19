export default [
  {
    id: 'pirc-150-attack-white',
    name: 'Pirc & Modern: 150 Attack',
    side: 'white',
    eco: 'B07, B06',
    category: 'e4',
    level: 'intermediate',
    description:
      'Be3, Qd2 and f3 with an eye on Bh6 to trade off Black\'s key fianchetto bishop, then castle long and storm with h4-h5. One consistent setup against both the Pirc and the Modern.',
    lines: [
      {
        name: 'Pirc: 5...c6',
        moves:
          '1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. Be3 {Start the 150 setup. The bishop heads for h6.} Bg7 5. Qd2 {Queen and bishop line up so that Bh6 trades Black\'s best piece.} c6 {Black prepares ...b5 queenside counterplay.} 6. f3 {Support e4 and stop ...Ng4 hitting the bishop.} b5 7. Nge2 {The knight goes to e2 to support the c3 knight and to keep f3 for the pawn.} Nbd7 8. Bh6 {Swap off the fianchetto bishop. Black\'s king loses its main defender.} Bxh6 9. Qxh6 Bb7 10. a3 {Give the c3 knight a safe life against ...b4.}',
      },
      {
        name: 'Pirc: 5...O-O',
        moves:
          '1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. Be3 Bg7 5. Qd2 O-O 6. O-O-O {Opposite-side castling: a pawn race where White\'s plan is very easy to play.} c6 7. f3 b5 8. h4 {Charge! h5 opens the h-file against the castled king.} Nbd7 9. h5',
      },
      {
        name: 'Pirc: 5...Ng4',
        moves:
          '1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. Be3 Bg7 5. Qd2 Ng4 {Black chases the bishop before f3.} 6. Bg5 {Keep the bishop active and aim it at e7.} h6 7. Bh4 g5 8. Bg3 {Black has weakened the kingside with ...g5 and ...h6, and h4 or f3 will expose the knight.}',
      },
      {
        name: 'Pirc: 5...Nc6',
        moves:
          '1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. Be3 Bg7 5. Qd2 Nc6 6. f3 e5 7. d5 {Gain space with tempo and close the center.} Ne7 8. g4 {Take space on the kingside and prepare O-O-O and h4.}',
      },
      {
        name: 'Philidor-style: 3...e5',
        moves:
          '1. e4 d6 2. d4 Nf6 3. Nc3 e5 {Black heads for a Philidor setup.} 4. Nf3 Nbd7 5. Bc4 {Pressure f7 and keep the e5 tension.} Be7 6. O-O O-O 7. Re1 c6 8. a4 {Gain queenside space and give the c4 bishop a safe retreat on a2.}',
      },
      {
        name: 'Modern: 4...a6',
        moves:
          '1. e4 g6 2. d4 Bg7 3. Nc3 d6 4. Be3 a6 {Black prepares ...b5 to grab queenside space.} 5. Qd2 b5 6. f3 Nd7 7. Nh3 {The knight heads to f2 to support e4 and g4.} Bb7 8. Nf2',
      },
      {
        name: 'Modern: 4...c6',
        moves:
          '1. e4 g6 2. d4 Bg7 3. Nc3 d6 4. Be3 c6 5. Qd2 b5 6. f3 Nd7 7. Nh3 {Same plan: Nf2, then h4-h5 or a queenside break with a4.} Nb6 8. Nf2',
      },
      {
        name: 'Modern: 4...Nf6 transposing',
        moves:
          '1. e4 g6 2. d4 Bg7 3. Nc3 d6 4. Be3 Nf6 5. Qd2 c6 6. f3 b5 7. Nge2 Nbd7 8. Bh6 {A Pirc position reached by another move order. Trade the bishop.} Bxh6 9. Qxh6',
      },
    ],
  },
];
