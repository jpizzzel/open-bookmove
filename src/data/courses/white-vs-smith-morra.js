export default [
  {
    id: 'smith-morra-gambit',
    name: 'Smith-Morra Gambit',
    side: 'white',
    eco: 'B21',
    category: 'e4',
    level: 'intermediate',
    description:
      'Sacrifice a pawn against the Sicilian for a big lead in development, open c- and d-files, and fast pressure on d6 and f7. A dangerous weapon at club level.',
    lines: [
      {
        name: 'Accepted: Classical with ...e5',
        moves:
          '1. e4 c5 2. d4 {Open the position at once.} cxd4 3. c3 {Offer a pawn to get the queenside knight to c3 with tempo.} dxc3 4. Nxc3 {White is a pawn down but far ahead in development, with open files for the rooks.} Nc6 5. Nf3 d6 6. Bc4 {Aim at f7, Black\'s sore spot.} e6 7. O-O Nf6 8. Qe2 {Clear d1 for the rook and support e5 ideas.} Be7 9. Rd1 {The rook stares straight at the backward d6 pawn.} e5 10. h3 {Stop ...Bg4, which would pin the knight and relieve pressure.} O-O 11. Be3 {Complete development and get ready to double rooks on the c- and d-files.}',
      },
      {
        name: 'Accepted: Chicago Defense',
        moves:
          '1. e4 c5 2. d4 cxd4 3. c3 dxc3 4. Nxc3 Nc6 5. Nf3 d6 6. Bc4 e6 7. O-O a6 8. Qe2 b5 9. Bb3 Ra7 {The Chicago idea: the rook swings to d7 to defend along the second rank.} 10. Rd1 Rd7 11. Be3 {Calm development. Ideas like Nd4 and a4 put the queenside under pressure.}',
      },
      {
        name: 'Accepted: ...e6 and ...Nge7',
        moves:
          '1. e4 c5 2. d4 cxd4 3. c3 dxc3 4. Nxc3 Nc6 5. Nf3 e6 6. Bc4 a6 7. O-O Nge7 {Black plans ...Ng6 and wants to stay solid.} 8. Bg5 {Hit the e7 knight right away. Black has trouble untangling.} f6 9. Be3 {The bishop retreats, but ...f6 has weakened e6 and the a2-g8 diagonal.}',
      },
      {
        name: 'Accepted: 4...e6 Scheveningen setup',
        moves:
          '1. e4 c5 2. d4 cxd4 3. c3 dxc3 4. Nxc3 e6 5. Nf3 a6 6. Bc4 b5 7. Bb3 d6 8. O-O Nf6 9. Qe2 Be7 10. Rd1 {Standard setup: queen on e2, rook on d1, and e4-e5 breaks are always in the air.}',
      },
      {
        name: 'Declined: 3...Nf6',
        moves:
          '1. e4 c5 2. d4 cxd4 3. c3 Nf6 {Black declines and hits e4, reaching an Alapin-type position.} 4. e5 Nd5 5. Nf3 Nc6 6. cxd4 d6 7. Bc4 Nb6 8. Bb5 {Pin and support the center.} dxe5 9. Nxe5 Bd7 10. Nxd7 Qxd7 11. Nc3 {Easy development and a slight edge.}',
      },
      {
        name: 'Declined: 3...d3',
        moves:
          '1. e4 c5 2. d4 cxd4 3. c3 d3 {Black returns the pawn to keep the c-file closed.} 4. Bxd3 Nc6 5. Nf3 g6 6. c4 {Set up a Maroczy-style bind with pawns on c4 and e4.} Bg7 7. Nc3 d6 8. O-O Nf6 9. h3 O-O 10. Be3 {A comfortable space advantage with no gambit risk at all.}',
      },
      {
        name: 'Declined: 3...d5',
        moves:
          '1. e4 c5 2. d4 cxd4 3. c3 d5 4. exd5 Qxd5 5. cxd4 {Now an isolated-pawn position from the Alapin or Panov, where White has easy development.} Nf6 6. Nf3 e6 7. Nc3 {Develop with tempo on the queen.} Qd6 8. Bd3 Be7 9. O-O O-O',
      },
    ],
  },
];
