export default [
  {
    id: 'petrov-defense',
    name: 'Petrov Defense',
    side: 'black',
    eco: 'C42–C43',
    category: 'vs-e4',
    level: 'intermediate',
    description:
      'Answer 2.Nf3 with a counterattack on e4. The Petrov is one of the most solid defenses in chess and a favorite of world champions, giving White very little to bite on.',
    lines: [
      {
        name: 'Classical: 8.c4 Nb4',
        moves: `1. e4 e5 2. Nf3 Nf6 {Counterattack on e4 instead of defending e5.} 3. Nxe5 d6 {Never 3...Nxe4?? 4.Qe2, when the knight is pinned and 5.Nc6+ wins the queen. First kick the e5 knight.} 4. Nf3 Nxe4 {Now it is safe to win the pawn back.} 5. d4 d5 {Support the e4 knight and claim the center.} 6. Bd3 Nc6 7. O-O Be7 8. c4 {Undermine the d5 pawn and the e4 knight.} Nb4 {Hit the d3 bishop so White must decide where to put it.} 9. Be2 O-O 10. Nc3 Bf5 11. a3 Nxc3 12. bxc3 Nc6 {A balanced, classical position.}`,
      },
      {
        name: 'Classical: 8.Re1 Bg4',
        moves: `1. e4 e5 2. Nf3 Nf6 3. Nxe5 d6 4. Nf3 Nxe4 5. d4 d5 6. Bd3 Nc6 7. O-O Be7 8. Re1 Bg4 {Pin the knight and add pressure on d4.} 9. c3 f5 {Bolster the e4 outpost with a pawn.} 10. Nbd2 O-O 11. Qb3 Kh8 {Step out of the pin on the g8-a2 diagonal so ...Na5 or ...Nxf2 tactics become possible.}`,
      },
      {
        name: '5.Nc3 Nxc3',
        moves: `1. e4 e5 2. Nf3 Nf6 3. Nxe5 d6 4. Nf3 Nxe4 5. Nc3 {White trades knights and plans to castle queenside.} Nxc3 6. dxc3 Be7 7. Be3 Nc6 8. Qd2 Be6 9. O-O-O Qd7 {Black usually castles long too, or keeps the king in the center for flexibility.}`,
      },
      {
        name: '5.Qe2 early queen trade',
        moves: `1. e4 e5 2. Nf3 Nf6 3. Nxe5 d6 4. Nf3 Nxe4 5. Qe2 {A pin along the e-file.} Qe7 {Break the pin by matching it.} 6. d3 Nf6 7. Bg5 Qxe2+ 8. Bxe2 Be7 {Dead equal. Black is completely comfortable in the endgame.}`,
      },
      {
        name: 'Cochrane Gambit 4.Nxf7',
        moves: `1. e4 e5 2. Nf3 Nf6 3. Nxe5 d6 4. Nxf7 {The Cochrane Gambit: a knight sacrifice to expose Black's king.} Kxf7 {Accept. Black is a piece up and just needs to stay calm.} 5. d4 c5 {Strike the center before White can build up with Nc3 and Bc4.} 6. dxc5 Nc6 7. Bc4+ Be6 8. Bxe6+ Kxe6 {The king looks exposed but it is safe enough, and Black is up material.}`,
      },
      {
        name: 'Steinitz: 3.d4 Nxe4 4.Bd3',
        moves: `1. e4 e5 2. Nf3 Nf6 3. d4 {Open the center right away.} Nxe4 4. Bd3 d5 5. Nxe5 Nd7 {Challenge the e5 knight.} 6. Nxd7 Bxd7 7. O-O Bd6 8. c4 c6 {Keep the e4 knight supported. Black has an easy development.}`,
      },
      {
        name: 'Steinitz: 4.dxe5',
        moves: `1. e4 e5 2. Nf3 Nf6 3. d4 Nxe4 4. dxe5 d5 {Secure the knight in the center.} 5. Nbd2 Nxd2 6. Bxd2 Be7 7. Bd3 Nc6 {Black will castle and attack the e5 pawn with ...Bg4 or ...Be6.}`,
      },
      {
        name: '3.Nc3 Nc6: Scotch Four Knights',
        moves: `1. e4 e5 2. Nf3 Nf6 3. Nc3 Nc6 {White transposes into a Four Knights.} 4. d4 exd4 5. Nxd4 Bb4 {Pin the knight and pressure e4.} 6. Nxc6 bxc6 7. Bd3 d5 {Use the extra center pawn.} 8. exd5 cxd5 9. O-O O-O 10. Bg5 c6 {A solid central pawn duo and full equality.}`,
      },
      {
        name: '3.Nc3 Nc6: Spanish Four Knights',
        moves: `1. e4 e5 2. Nf3 Nf6 3. Nc3 Nc6 4. Bb5 Bb4 {Copy White and keep the game symmetrical.} 5. O-O O-O 6. d3 d6 7. Bg5 Bxc3 8. bxc3 Qe7 {Unpin the knight and prepare ...Nd8-e6 to challenge the g5 bishop.}`,
      },
      {
        name: '3.Nc3 Nc6: Italian Four Knights fork trick',
        moves: `1. e4 e5 2. Nf3 Nf6 3. Nc3 Nc6 4. Bc4 Nxe4 {The fork trick: take on e4 and answer Nxe4 with ...d5.} 5. Nxe4 d5 {The pawn forks bishop and knight, so Black wins the piece back.} 6. Bd3 dxe4 7. Bxe4 Bd6 {Black has the bishop pair and an easy position.}`,
      },
      {
        name: '3.Bc4 Nxe4',
        moves: `1. e4 e5 2. Nf3 Nf6 3. Bc4 {White offers a gambit.} Nxe4 4. Nc3 Nxc3 5. dxc3 f6 {Protect e5 solidly. Black keeps the extra pawn while White has some development lead; ...Qe7, ...c6 and ...d5 follow.}`,
      },
    ],
  },
];
