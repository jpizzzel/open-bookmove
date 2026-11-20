export default [
  {
    id: 'dutch-leningrad',
    name: 'Dutch Defense: Leningrad',
    side: 'black',
    eco: 'A80–A89',
    category: 'vs-d4',
    level: 'intermediate',
    description:
      "Grab e4 with ...f5, fianchetto the king's bishop, and prepare ...e5. An unbalancing choice that gives Black real winning chances against 1.d4.",
    lines: [
      {
        name: 'Main Line: 7...Qe8 8.d5',
        moves: `1. d4 f5 {The Dutch: control e4 and unbalance the game from move one.} 2. g3 Nf6 3. Bg2 g6 {The Leningrad fianchetto.} 4. Nf3 Bg7 5. O-O O-O 6. c4 d6 7. Nc3 Qe8 {Prepare ...e5; the queen may later swing to f7 or h5.} 8. d5 a5 {Secure the c5 square for a knight.} 9. Nd4 Na6 10. e4 fxe4 11. Nxe4 Nxe4 12. Bxe4 Nc5 {The knight lands on its dream square, hitting e4.}`,
      },
      {
        name: 'Main Line: 8.Re1',
        moves: `1. d4 f5 2. g3 Nf6 3. Bg2 g6 4. Nf3 Bg7 5. O-O O-O 6. c4 d6 7. Nc3 Qe8 8. Re1 {Preparing e4.} Qf7 {Add pressure to the c4 pawn and prepare ...Nc6 or ...e5.} 9. e4 fxe4 10. Nxe4 Nxe4 11. Rxe4 Nc6`,
      },
      {
        name: 'Move order: 2.Nf3',
        moves: `1. d4 f5 2. Nf3 Nf6 3. g3 g6 4. Bg2 Bg7 5. O-O O-O 6. c4 d6 7. Nc3 Qe8 8. d5 a5 {Same plans as the main line.}`,
      },
      {
        name: 'Move order: 2.c4 and 3.Nc3',
        moves: `1. d4 f5 2. c4 Nf6 3. Nc3 g6 4. Nf3 Bg7 5. g3 O-O 6. Bg2 d6 7. O-O Qe8 8. d5 a5`,
      },
      {
        name: 'Anti-Dutch: 2.Bg5',
        moves: `1. d4 f5 2. Bg5 {White hopes to provoke weaknesses.} g6 {Calmly continue the Leningrad setup.} 3. Nd2 Bg7 4. c3 Nf6 5. e3 d6 6. Bd3 O-O`,
      },
      {
        name: 'Anti-Dutch: 2.Nc3 and 3.Bg5',
        moves: `1. d4 f5 2. Nc3 Nf6 3. Bg5 d5 {Shut the door on e4.} 4. Bxf6 exf6 {The doubled pawns are compensated by the bishop pair.} 5. e3 c6 6. Bd3 g6`,
      },
      {
        name: 'Anti-Dutch: 2.Bf4',
        moves: `1. d4 f5 2. Bf4 Nf6 3. e3 g6 4. Nf3 Bg7 5. Be2 O-O 6. O-O d6 7. c4 Qe8 {Prepare ...e5, which would hit the f4 bishop with tempo.}`,
      },
      {
        name: 'Staunton Gambit: 2.e4',
        moves: `1. d4 f5 2. e4 {The Staunton Gambit: White sacrifices a pawn for fast development.} fxe4 3. Nc3 Nf6 4. Bg5 Nc6 5. d5 Ne5 6. Qd4 Nf7 {Defend and keep the extra pawn.} 7. Bxf6 exf6 8. Nxe4 f5 {Kick the knight and keep a solid kingside.}`,
      },
    ],
  },
];
