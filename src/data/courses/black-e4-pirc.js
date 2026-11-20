export default [
  {
    id: 'pirc-defense',
    name: 'Pirc Defense',
    side: 'black',
    eco: 'B07–B09',
    category: 'vs-e4',
    level: 'intermediate',
    description:
      'Let White build a big center, then undermine it with ...c5, ...e5 and the long-range g7 bishop. A flexible, counterattacking defense that keeps lots of play in the position.',
    lines: [
      {
        name: 'Austrian Attack: 6.Bd3 Na6',
        moves: `1. e4 d6 2. d4 Nf6 {Attack e4 so White must spend a move defending it.} 3. Nc3 g6 {Prepare the fianchetto. The g7 bishop will be Black's best piece.} 4. f4 {The Austrian Attack, White's most ambitious try: a huge pawn center.} Bg7 5. Nf3 O-O {Castle first and keep the king safe before opening the center.} 6. Bd3 Na6 {The knight supports ...c5 and can jump to b4 to trade off the d3 bishop.} 7. O-O c5 {Hit the center from the side.} 8. d5 Rb8 {Prepare ...b5 to expand on the queenside, where Black's bishop helps.}`,
      },
      {
        name: 'Austrian Attack: 6.e5 h-pawn storm',
        moves: `1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. f4 Bg7 5. Nf3 O-O 6. e5 {Kick the knight.} Nfd7 7. h4 {White goes straight for the king.} c5 {Counterattack in the center, the right answer to a flank attack.} 8. h5 cxd4 9. Qxd4 dxe5 {Hit the queen and open the center for the g7 bishop.} 10. Qf2 exf4 11. Bxf4 Nc6 {Black has opened the position and developed well. The g7 bishop rakes the long diagonal.}`,
      },
      {
        name: 'Austrian Attack: 6.Be2 c5',
        moves: `1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. f4 Bg7 5. Nf3 O-O 6. Be2 c5 {Strike at d4 at once.} 7. dxc5 Qa5 {Regain the pawn with a pin on the c3 knight.} 8. O-O Qxc5+ 9. Kh1 Nc6 {Equal and active. The queen will often retreat to b6 or h5.}`,
      },
      {
        name: 'Classical: 5.Be2 c6 and ...Nb4',
        moves: `1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. Nf3 {The quieter Classical system.} Bg7 5. Be2 O-O 6. O-O c6 {A flexible move preparing ...b5 or ...Qc7 and ...e5.} 7. a4 {Stop ...b5.} a5 {Claim b4 as a permanent outpost.} 8. h3 Na6 9. Be3 Nb4 {The knight sits on b4 forever since White has no c- or a-pawn to kick it easily.}`,
      },
      {
        name: 'Classical: 5.h3 with Be3',
        moves: `1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. Nf3 Bg7 5. h3 {Stop ...Bg4 so the f3 knight stays strong.} O-O 6. Be3 c6 7. a4 a5 8. Bd3 Na6 9. O-O Nb4 {Same plan: the b4 knight harasses the d3 bishop.}`,
      },
      {
        name: '150 Attack: 6.Bd3',
        moves: `1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. Be3 {The "150 Attack": White wants Qd2, Bh6 and an attack on the king.} c6 {Delay ...Bg7 and start queenside play first.} 5. Qd2 b5 {Gain space and threaten ...b4 to kick the c3 knight off e4's defense.} 6. Bd3 Nbd7 7. Nf3 e5 {Hit the center now that it is supported.} 8. O-O Bg7 {Only now does the bishop come to g7, with a solid position.}`,
      },
      {
        name: '150 Attack: 6.f3 setup',
        moves: `1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. Be3 c6 5. Qd2 b5 6. f3 Nbd7 7. Nge2 Bb7 {Support the ...c5 or ...e5 breaks and keep an eye on the long diagonal.} 8. Ng3 e5 {Strike in the center while White is busy on the kingside.}`,
      },
      {
        name: 'Fianchetto System',
        moves: `1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. g3 {White also fianchettoes. Solid but less ambitious.} Bg7 5. Bg2 O-O 6. Nge2 e5 {Claim central space now that White is slower.} 7. O-O c6 8. a4 Nbd7 {A healthy setup with ...Re8 and ...exd4 ideas to come.}`,
      },
      {
        name: '4.Bg5 with ...g5 and ...Nh5',
        moves: `1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. Bg5 Bg7 5. Qd2 {Planning Bh6 to trade Black's key bishop.} h6 {Ask the bishop right away.} 6. Bh4 g5 {Gain space with tempo.} 7. Bg3 Nh5 {Grab the bishop pair.} 8. O-O-O Nxg3 9. hxg3 Nc6 {Black has the two bishops and pressure on d4.}`,
      },
    ],
  },
];
