export default [
  {
    id: 'kings-gambit',
    name: "King's Gambit",
    side: 'white',
    eco: 'C30–C39',
    category: 'e4',
    level: 'intermediate',
    description:
      'The romantic gambit: sacrifice the f-pawn to rip open the f-file and seize the center. Sharp, tactical, and dangerous for unprepared opponents.',
    lines: [
      {
        name: 'Kieseritzky: 5...Nf6',
        moves:
          '1. e4 e5 2. f4 {Offer a pawn to deflect the e5 pawn and open the f-file.} exf4 3. Nf3 {Stop ...Qh4+ and prepare d4.} g5 {Black tries to hold the extra pawn on f4.} 4. h4 {Undermine the pawn chain immediately.} g4 5. Ne5 {The Kieseritzky Gambit: the knight jumps to a strong central square.} Nf6 6. d4 d6 7. Nd3 Nxe4 8. Bxf4 {White regains the pawn with active pieces and pressure on the f-file.}',
      },
      {
        name: 'Kieseritzky: 5...d6',
        moves:
          '1. e4 e5 2. f4 exf4 3. Nf3 g5 4. h4 g4 5. Ne5 d6 6. Nxg4 Nf6 7. Nxf6+ Qxf6 8. Nc3 {Develop and keep an eye on d5. White will regain f4 later.}',
      },
      {
        name: 'Modern Defense: 3...d5',
        moves:
          '1. e4 e5 2. f4 exf4 3. Nf3 d5 {Return the pawn to free Black\'s game.} 4. exd5 Nf6 5. Bb5+ {Disrupt Black\'s development before taking on c6.} c6 6. dxc6 bxc6 7. Bc4 Nd5 8. O-O {Quick castling. The f4 pawn is a target for the rook.}',
      },
      {
        name: 'Fischer Defense: 3...d6',
        moves:
          '1. e4 e5 2. f4 exf4 3. Nf3 d6 {Fischer\'s idea: take e5 away from White\'s knight.} 4. d4 {Grab the center.} g5 5. h4 g4 6. Ng1 {The only good square. White will bring it to e2 to win back f4.} Bh6 7. Ne2',
      },
      {
        name: 'Schallopp Defense: 3...Nf6',
        moves:
          '1. e4 e5 2. f4 exf4 3. Nf3 Nf6 4. e5 {Kick the knight to the rim.} Nh5 5. d4 d6 6. Qe2 {Pin the d6 pawn and protect e5 for now.}',
      },
      {
        name: 'Falkbeer Countergambit: 3...e4',
        moves:
          '1. e4 e5 2. f4 d5 {The Falkbeer: counter-sacrifice in the center.} 3. exd5 e4 {Black cramps White with a pawn on e4.} 4. d3 {Challenge the e4 pawn at once.} Nf6 5. dxe4 Nxe4 6. Nf3 Bc5 7. Qe2 {Pin the knight on the e-file.} Bf5 8. Nc3 {Develop and challenge the e4 knight.}',
      },
      {
        name: 'Falkbeer: 3...exf4',
        moves:
          '1. e4 e5 2. f4 d5 3. exd5 exf4 4. Nf3 Nf6 5. Bb5+ c6 6. dxc6 bxc6 7. Bc4 Nd5 8. O-O {The same plan as against the Modern Defense.}',
      },
      {
        name: "King's Gambit Declined: 2...Bc5",
        moves:
          '1. e4 e5 2. f4 Bc5 {The bishop on c5 stops White from castling kingside.} 3. Nf3 d6 4. c3 {Prepare d4 to block the bishop\'s diagonal.} Nf6 5. d4 exd4 6. cxd4 Bb4+ 7. Bd2 Bxd2+ 8. Nbxd2 {White has a big pawn center.}',
      },
    ],
  },
];
