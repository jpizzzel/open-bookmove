export default [
  {
    id: 'reti-opening',
    name: 'Réti Opening',
    side: 'white',
    eco: 'A04–A09',
    category: 'flank',
    level: 'intermediate',
    description:
      "1.Nf3 and 2.c4: attack the center from the flanks instead of occupying it. Hypermodern ideas, a fianchetto on g2, and lots of room to outplay your opponent.",
    lines: [
      {
        name: "Against the QGD setup",
        moves:
          "1. Nf3 {Flexible: control e5 and d4 without committing pawns.} d5 2. c4 {The Réti: attack d5 from the side.} e6 3. g3 Nf6 4. Bg2 Be7 5. O-O O-O 6. b3 {Double fianchetto: both bishops aim at the center.} c5 7. Bb2 Nc6 8. e3 b6 9. Nc3 Bb7 10. cxd5",
      },
      {
        name: 'Against the Slav: ...Bf5',
        moves:
          "1. Nf3 d5 2. c4 c6 3. g3 Nf6 4. Bg2 Bf5 5. O-O e6 6. b3 Nbd7 7. Bb2 h6 8. d3 {Keep the bishop on f5 biting granite.} Be7 9. Nbd2 O-O 10. a3 {Prepare b4 to gain queenside space.}",
      },
      {
        name: 'Against the Slav: ...Bg4',
        moves:
          '1. Nf3 d5 2. c4 c6 3. g3 Nf6 4. Bg2 Bg4 5. O-O Nbd7 6. b3 e6 7. Bb2 Bd6 8. d3 O-O 9. Nbd2 {Next comes e4 or Qc2 with central pressure.}',
      },
      {
        name: '2...d4 3...c5: Reversed Benoni',
        moves:
          "1. Nf3 d5 2. c4 d4 {Black grabs space.} 3. e3 {Undermine the advanced pawn.} c5 4. exd4 cxd4 5. d3 Nc6 6. g3 e5 7. Bg2 Nf6 8. O-O Bd6 9. Re1 {Pressure the e5-pawn.}",
      },
      {
        name: '2...d4 3...Nc6',
        moves:
          '1. Nf3 d5 2. c4 d4 3. e3 Nc6 4. exd4 Nxd4 5. Nxd4 Qxd4 6. Nc3 {Develop with tempo against the centralized queen.} e5 7. d3',
      },
      {
        name: '2...dxc4: Winning the pawn back',
        moves:
          '1. Nf3 d5 2. c4 dxc4 3. e3 {Open the bishop to recover c4.} Nf6 4. Bxc4 e6 5. O-O c5 6. d4 {Now a Queen\'s Gambit Accepted structure.} a6 7. a4 Nc6 8. Qe2',
      },
      {
        name: "1...Nf6 2...g6: King's Indian setup",
        moves:
          '1. Nf3 Nf6 2. c4 g6 3. g3 Bg7 4. Bg2 O-O 5. O-O d6 6. Nc3 e5 7. d3 Nc6 8. Rb1 a5 9. a3 {The queenside b4 push is our main plan.}',
      },
      {
        name: '1...Nf6 2...e6: Hedgehog',
        moves:
          "1. Nf3 Nf6 2. c4 e6 3. g3 b6 4. Bg2 Bb7 5. O-O c5 6. Nc3 Be7 7. d4 {Open the center before Black's Hedgehog sets up.} cxd4 8. Qxd4 {An active queen; Black's position is solid but cramped.}",
      },
    ],
  },
];
