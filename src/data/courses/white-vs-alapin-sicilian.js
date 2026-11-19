export default [
  {
    id: 'alapin-sicilian',
    name: 'Alapin Sicilian (2.c3)',
    side: 'white',
    eco: 'B22',
    category: 'e4',
    level: 'intermediate',
    description:
      'Sidestep the mountain of Open Sicilian theory. With 2.c3 White prepares d4 and aims for a classical pawn center, or a comfortable isolated-pawn position with free piece play.',
    lines: [
      {
        name: '2...d5: 5...Bg4 Main Line',
        moves:
          '1. e4 c5 2. c3 {Prepare d4 so that a pawn can recapture on d4 and keep a full center.} d5 {The most direct reply: hit e4 at once.} 3. exd5 Qxd5 {Black\'s queen is active, and Nc3 is not available to chase it.} 4. d4 Nf6 5. Nf3 Bg4 {Pinning the knight and pressuring d4.} 6. Be2 {Unpin calmly and prepare to castle.} e6 7. h3 {Ask the bishop a question before Black can play ...Nc6 in comfort.} Bh5 8. O-O Nc6 9. Be3 {Protect d4 a second time.} cxd4 10. cxd4 {White gets an isolated d-pawn but free development: Nc3 comes with tempo on the queen.} Be7 11. Nc3 {Gain a tempo on the queen.} Qa5',
      },
      {
        name: '2...d5: 5...e6 Isolated Pawn',
        moves:
          '1. e4 c5 2. c3 d5 3. exd5 Qxd5 4. d4 Nf6 5. Nf3 e6 6. Be2 Nc6 7. O-O cxd4 8. cxd4 {The classic isolani: the pawn gives White space and outposts on e5 and c5.} Be7 9. Nc3 {Develop with tempo on the queen.} Qd6 10. Nb5 {Jump to b5, hitting the queen and eyeing d6 and c7.} Qd8 11. Bf4 {Seize the b8-h2 diagonal and control e5.}',
      },
      {
        name: '2...d5: 4...Nc6',
        moves:
          '1. e4 c5 2. c3 d5 3. exd5 Qxd5 4. d4 Nc6 5. Nf3 Bg4 6. Be2 cxd4 7. cxd4 e6 8. Nc3 {Kick the queen with tempo.} Qa5 9. O-O Nf6 10. h3 Bh5 11. Be3 {Solid development; plans include a3, b4 and Qb3, or a kingside push with Ne5.}',
      },
      {
        name: '2...Nf6: 5...Nc6',
        moves:
          '1. e4 c5 2. c3 Nf6 {Black attacks e4 and tries to exploit that c3 took the knight\'s natural square.} 3. e5 {Gain space with tempo.} Nd5 4. d4 cxd4 5. Nf3 {Develop first; the d4 pawn is not running away.} Nc6 6. cxd4 d6 7. Bc4 {Hit the d5 knight and eye f7.} Nb6 8. Bb5 {Pin the c6 knight so that d4 and e5 stay secure.} dxe5 9. Nxe5 Bd7 10. Nxd7 Qxd7 11. Nc3 {Simple development. White has the more active pieces and a lead in development.}',
      },
      {
        name: '2...Nf6: 5...e6',
        moves:
          '1. e4 c5 2. c3 Nf6 3. e5 Nd5 4. d4 cxd4 5. Nf3 e6 6. cxd4 d6 7. a3 {Take b4 away from Black\'s pieces; the d5 knight has no good retreat squares.} Be7 8. Bd3 Nc6 9. O-O O-O 10. Qe2 {Pieces aim at the kingside and the e5 pawn cramps Black.}',
      },
      {
        name: '2...e6: French-style IQP',
        moves:
          '1. e4 c5 2. c3 e6 3. d4 d5 4. exd5 exd5 {Now Black might be the one with an isolated d-pawn.} 5. Nf3 Nc6 6. Bb5 {Pin the knight and pressure d4 indirectly.} Bd6 7. dxc5 {Saddle Black with an isolated d5 pawn.} Bxc5 8. O-O Nge7 9. Nbd2 O-O 10. Nb3 {Kick the bishop and plant pieces on d4.} Bb6 11. Re1 {White blockades on d4 and attacks the d5 weakness.}',
      },
      {
        name: '2...d6: Kingside Fianchetto',
        moves:
          '1. e4 c5 2. c3 d6 3. d4 Nf6 4. Bd3 {Defend e4 with a piece and keep the ideal center.} g6 5. Nf3 Bg7 6. O-O O-O 7. h3 {Take g4 from the bishop and knight.} Nc6 8. Re1 {A big classical center; White can choose between d5 and Nbd2.}',
      },
      {
        name: '2...d6: 3...cxd4',
        moves:
          '1. e4 c5 2. c3 d6 3. d4 cxd4 4. cxd4 Nf6 5. Nc3 {With the c-pawn gone, the knight returns to its best square.} g6 6. Nf3 Bg7 7. Be2 O-O 8. O-O Nc6 9. h3 {A dream center with e4 and d4, without any Open Sicilian theory.}',
      },
      {
        name: '2...g6',
        moves:
          '1. e4 c5 2. c3 g6 3. d4 cxd4 4. cxd4 d5 {Striking at the center before White plays Nc3.} 5. e5 {Gain space and close the long diagonal for the Bg7.} Nc6 6. Nc3 Bg7 7. Nf3 Bg4 8. Be2 e6 9. O-O Nge7 10. Be3 {A French-like structure where the g7 bishop bites on granite.}',
      },
      {
        name: '2...Nc6',
        moves:
          '1. e4 c5 2. c3 Nc6 3. d4 cxd4 4. cxd4 d5 5. exd5 Qxd5 6. Nf3 Bg4 7. Be2 e6 8. Nc3 Qa5 9. O-O Nf6 10. h3 Bh5 11. Be3 Be7 12. a3 {Prepare b4 to gain queenside space with tempo on the queen.}',
      },
    ],
  },
];
