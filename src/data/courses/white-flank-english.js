export default [
  {
    id: 'english-opening',
    name: 'English Opening',
    side: 'white',
    eco: 'A10–A39',
    category: 'flank',
    level: 'intermediate',
    description:
      'Start with 1.c4 and fight for d5 from the side. A flexible repertoire built on Nc3, g3 and Bg2, with plans against 1...e5, 1...c5, 1...Nf6 and 1...e6.',
    lines: [
      {
        name: 'Four Knights: 4...d5 Reversed Dragon',
        moves:
          "1. c4 {Control d5 without committing the center pawns.} e5 {The Reversed Sicilian.} 2. Nc3 Nf6 3. Nf3 Nc6 4. g3 {Fianchetto: the g2-bishop is the soul of the English.} d5 5. cxd5 Nxd5 6. Bg2 {Pressure the d5-knight and the long diagonal.} Nb6 7. O-O Be7 8. d3 O-O 9. a3 {Prepare b4 to gain queenside space.} Be6 10. b4",
      },
      {
        name: 'Four Knights: 4...Bb4',
        moves:
          "1. c4 e5 2. Nc3 Nf6 3. Nf3 Nc6 4. g3 Bb4 5. Bg2 O-O 6. O-O e4 {Black gains space with tempo.} 7. Ng5 {Counterattack the e4-pawn.} Bxc3 8. bxc3 Re8 9. f3 {Break up Black's pawn wedge.} exf3 10. Nxf3 d5 11. d4 {A broad center and the bishop pair.}",
      },
      {
        name: 'Four Knights: 4...Bc5',
        moves:
          '1. c4 e5 2. Nc3 Nf6 3. Nf3 Nc6 4. g3 Bc5 5. Bg2 d6 6. O-O O-O 7. d3 h6 8. a3 a6 9. b4 {Kick the bishop and expand on the queenside.} Ba7 10. Bb2',
      },
      {
        name: 'Four Knights: 4...g6',
        moves:
          '1. c4 e5 2. Nc3 Nf6 3. Nf3 Nc6 4. g3 g6 5. d4 {Open the center before Black finishes castling.} exd4 6. Nxd4 Bg7 7. Nxc6 bxc6 8. Bg2 O-O 9. O-O {Black\'s c6-pawn is a long-term weakness.}',
      },
      {
        name: 'Closed English: 2...Nc6',
        moves:
          "1. c4 e5 2. Nc3 Nc6 3. g3 g6 4. Bg2 Bg7 5. d3 d6 6. Nf3 f5 7. O-O Nf6 8. Rb1 {The rook supports the b4-b5 queenside expansion.} O-O 9. b4",
      },
      {
        name: 'Symmetrical: Main Line',
        moves:
          '1. c4 c5 {Symmetry.} 2. Nc3 Nc6 3. g3 g6 4. Bg2 Bg7 5. Nf3 Nf6 6. O-O O-O 7. d4 {Break the symmetry and open the center.} cxd4 8. Nxd4 Nxd4 9. Qxd4 d6 10. Qd3 {Safe from tactics on the long diagonal.}',
      },
      {
        name: 'Symmetrical: Botvinnik 5...e5',
        moves:
          '1. c4 c5 2. Nc3 Nc6 3. g3 g6 4. Bg2 Bg7 5. Nf3 e5 {Black grabs d4 with a Botvinnik setup.} 6. O-O Nge7 7. d3 O-O 8. a3 d6 9. Rb1 {The b4 break is our main plan.}',
      },
      {
        name: 'Symmetrical: Rubinstein 2...Nf6',
        moves:
          "1. c4 c5 2. Nc3 Nf6 3. g3 d5 4. cxd5 Nxd5 5. Bg2 {Pressure the knight along the diagonal.} Nc7 6. Nf3 Nc6 7. O-O e5 8. d3 Be7 9. Nd2 {Reroute toward c4 and open the g2-bishop.}",
      },
      {
        name: "1...Nf6: King's Indian setup",
        moves:
          "1. c4 Nf6 2. Nc3 g6 3. g3 Bg7 4. Bg2 O-O 5. Nf3 d6 6. O-O e5 7. d3 Nc6 8. Rb1 {Our play is on the queenside; Black's is on the kingside.} a5 9. a3",
      },
      {
        name: "1...Nf6 2...e6: Queen's Gambit transposition",
        moves:
          "1. c4 Nf6 2. Nc3 e6 3. Nf3 d5 4. d4 {Transpose to a Queen's Gambit Declined.} Be7 5. Bf4 {A strong modern choice: the bishop sits outside the pawn chain.} O-O 6. e3 c5 7. dxc5 Bxc5 8. Qc2 Nc6 9. a3 Qa5 10. Rd1",
      },
      {
        name: '1...e6: Heading for the Declined',
        moves:
          '1. c4 e6 2. Nc3 d5 3. d4 Nf6 4. Nf3 Be7 5. Bf4 O-O 6. e3 c5 7. dxc5 Bxc5 8. Qc2',
      },
    ],
  },
];
