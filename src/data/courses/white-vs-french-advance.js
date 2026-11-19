export default [
  {
    id: 'french-advance-white',
    name: 'French Defense: Advance Variation',
    side: 'white',
    eco: 'C02',
    category: 'e4',
    level: 'beginner',
    description:
      'Clamp down with e5, support the chain with c3 and Nf3, and cramp Black\'s pieces. Includes the flexible 6.a3 plan that gains queenside space with b4.',
    lines: [
      {
        name: 'Main Line: 6.a3 c4',
        moves:
          '1. e4 e6 2. d4 d5 3. e5 {Grab space. The e5 pawn takes f6 from the black knight.} c5 {Black strikes at the base of the chain, which is standard French play.} 4. c3 {Support d4 with a pawn.} Nc6 5. Nf3 Qb6 {Piling up on d4 and eyeing b2.} 6. a3 {Prepare b4 to gain space; if ...c4 the queenside closes.} c4 7. Nbd2 {Head for f1-g3 or b1 maneuvers and stop ...Na5-b3.} Na5 8. Rb1 {Defend b2 so the bishop is freed.} Bd7 9. Be2 Ne7 10. O-O {With the queenside locked, White prepares a kingside attack.}',
      },
      {
        name: 'Main Line: 6.a3 a5',
        moves:
          '1. e4 e6 2. d4 d5 3. e5 c5 4. c3 Nc6 5. Nf3 Qb6 6. a3 a5 {Stop b4 for good.} 7. Bd3 {Now the bishop can develop, since ...cxd4 cxd4 Nxd4 is no longer a problem with b2 covered.} Bd7 8. Bc2 {Aim the bishop at h7 for a future attack.}',
      },
      {
        name: 'Main Line: 6.a3 Nh6',
        moves:
          '1. e4 e6 2. d4 d5 3. e5 c5 4. c3 Nc6 5. Nf3 Qb6 6. a3 Nh6 {The knight heads to f5 to pressure d4.} 7. b4 {Gain space and fix the queenside.} cxd4 8. cxd4 Nf5 9. Bb2 {Over-protect d4.} Be7 10. Bd3 {Challenge the f5 knight.}',
      },
      {
        name: 'Main Line: 6.a3 Bd7',
        moves:
          '1. e4 e6 2. d4 d5 3. e5 c5 4. c3 Nc6 5. Nf3 Qb6 6. a3 Bd7 7. b4 cxd4 8. cxd4 Rc8 {The rook takes the open c-file.} 9. Bb2 Na5 10. Nbd2 {Cover c4 and keep the queenside under control.}',
      },
      {
        name: '5...Bd7',
        moves:
          '1. e4 e6 2. d4 d5 3. e5 c5 4. c3 Nc6 5. Nf3 Bd7 6. Be2 Nge7 7. Na3 {The knight goes to c2 to defend d4 with no weaknesses.} cxd4 8. cxd4 Nf5 9. Nc2 Qb6 10. O-O',
      },
      {
        name: '5...Nge7',
        moves:
          '1. e4 e6 2. d4 d5 3. e5 c5 4. c3 Nc6 5. Nf3 Nge7 6. Na3 {Same idea: the knight defends d4 from c2.} cxd4 7. cxd4 Nf5 8. Nc2',
      },
      {
        name: '4...Qb6',
        moves:
          '1. e4 e6 2. d4 d5 3. e5 c5 4. c3 Qb6 5. Nf3 Nc6 6. a3 {The usual position, reached by a different move order.} c4 7. Nbd2 Na5 8. Rb1 Bd7 9. Be2 Ne7 10. O-O',
      },
      {
        name: '3...b6',
        moves:
          '1. e4 e6 2. d4 d5 3. e5 b6 {Black wants to trade off the bad light-squared bishop with ...Ba6.} 4. c3 Qd7 5. Nf3 Ba6 6. Bxa6 Nxa6 7. Qe2 {Hit the stray knight on a6.} Nb8 8. O-O {Black has lost time. White is better developed.}',
      },
    ],
  },
];
