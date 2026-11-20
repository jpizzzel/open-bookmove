export default [
  {
    id: 'alekhine-defense',
    name: 'Alekhine Defense',
    side: 'black',
    eco: 'B02–B05',
    category: 'vs-e4',
    level: 'intermediate',
    description:
      'Provoke White into pushing pawns, then attack the overextended center with pieces and pawn breaks. A provocative defense that throws most opponents out of their preparation.',
    lines: [
      {
        name: 'Modern Variation: Main Line with h3',
        moves: `1. e4 Nf6 {Attack e4 and invite White to chase the knight.} 2. e5 Nd5 3. d4 d6 {Challenge the e5 pawn before it becomes a bone in Black's throat.} 4. Nf3 {The Modern Variation, the most popular approach.} Bg4 {Pin the knight that defends e5.} 5. Be2 e6 6. O-O Be7 7. h3 Bh5 8. c4 Nb6 9. Nc3 O-O 10. Be3 d5 {Lock the center. Black will target the c5 pawn and the light squares.} 11. c5 Bxf3 12. gxf3 Nc8 {The knight reroutes to e7 or a6 while Black prepares ...b6 to undermine c5.}`,
      },
      {
        name: 'Modern Variation: 7.c4 without h3',
        moves: `1. e4 Nf6 2. e5 Nd5 3. d4 d6 4. Nf3 Bg4 5. Be2 e6 6. O-O Be7 7. c4 Nb6 8. Nc3 O-O 9. Be3 d5 10. c5 Bxf3 11. gxf3 Nc8 {Same structure and plan: ...b6 and pressure on White's broken kingside.}`,
      },
      {
        name: 'Modern Variation: 5.h3 Bxf3',
        moves: `1. e4 Nf6 2. e5 Nd5 3. d4 d6 4. Nf3 Bg4 5. h3 {Ask the question immediately.} Bxf3 6. Qxf3 dxe5 7. dxe5 e6 {Solid. The queen on f3 looks active but Black will develop with ...Nc6 and ...Qh4 or ...Be7.}`,
      },
      {
        name: 'Modern Variation: 5.c4 early',
        moves: `1. e4 Nf6 2. e5 Nd5 3. d4 d6 4. Nf3 Bg4 5. c4 Nb6 6. Be2 e6 7. O-O Be7 8. Nc3 O-O 9. Be3 d5 {The familiar ...d5 lock, with play against c4/c5.}`,
      },
      {
        name: 'Four Pawns Attack',
        moves: `1. e4 Nf6 2. e5 Nd5 3. d4 d6 4. c4 Nb6 5. f4 {The Four Pawns Attack: White grabs every central square.} dxe5 6. fxe5 Nc6 {Pressure on d4 at once.} 7. Be3 Bf5 8. Nc3 e6 9. Nf3 Be7 10. Be2 O-O 11. O-O f6 {Chip away at the head of the pawn chain. The big center is about to become a target.}`,
      },
      {
        name: 'Exchange Variation',
        moves: `1. e4 Nf6 2. e5 Nd5 3. d4 d6 4. c4 Nb6 5. exd6 {The Exchange Variation.} cxd6 {Recapture toward the center and keep the pawn structure flexible.} 6. Nc3 g6 {Fianchetto to pressure d4.} 7. Be3 Bg7 8. Rc1 O-O 9. b3 e5 {Strike the center with a healthy, active position.}`,
      },
      {
        name: '4.c4 then 5.Nf3',
        moves: `1. e4 Nf6 2. e5 Nd5 3. d4 d6 4. c4 Nb6 5. Nf3 Bg4 6. Be2 e6 7. O-O Be7 8. Nc3 O-O 9. Be3 d5 10. c5 Bxf3 11. gxf3 Nc8 {Back in the familiar Modern structure.}`,
      },
      {
        name: '3.Nc3 Nxc3 4.dxc3',
        moves: `1. e4 Nf6 2. e5 Nd5 3. Nc3 Nxc3 {Trade the knight off and leave White without the space advantage.} 4. dxc3 d6 5. Nf3 Nc6 6. Bb5 a6 7. Bxc6+ bxc6 8. exd6 cxd6 {Black has the bishop pair and a solid center.}`,
      },
      {
        name: '3.Nc3 Nxc3 4.bxc3',
        moves: `1. e4 Nf6 2. e5 Nd5 3. Nc3 Nxc3 4. bxc3 d6 5. f4 g6 {Pressure e5 and fianchetto.} 6. Nf3 Bg7 7. d4 O-O {Black will hit the center with ...c5 or ...Nc6.}`,
      },
      {
        name: '2.Nc3 d5 3.e5 d4!',
        moves: `1. e4 Nf6 2. Nc3 {White declines the invitation.} d5 3. e5 d4 {A tactical counter: the c3 knight and e5 pawn are both attacked.} 4. exf6 dxc3 5. fxg7 cxd2+ 6. Bxd2 Bxg7 {Material is level and Black has a fine position with the bishop on the long diagonal.}`,
      },
      {
        name: '2.Nc3 d5 3.exd5',
        moves: `1. e4 Nf6 2. Nc3 d5 3. exd5 Nxd5 4. Bc4 Nb6 {Kick the bishop and gain time.} 5. Bb3 c5 6. d3 Nc6 {Black has a comfortable game with lots of central control.}`,
      },
    ],
  },
];
