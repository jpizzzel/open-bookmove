export default [
  {
    id: 'london-system',
    name: 'London System',
    side: 'white',
    eco: 'D02, A46, A48',
    category: 'd4',
    level: 'beginner',
    description:
      'One reliable setup against almost anything: d4, Bf4, e3, c3, Nf3, Nbd2, Bd3. Easy to learn, hard to crack, and full of kingside attacking chances.',
    lines: [
      {
        name: 'Main Line: ...e6 and ...Bd6',
        moves:
          '1. d4 d5 2. Bf4 {Get the bishop out before playing e3.} Nf6 3. e3 e6 4. Nf3 Bd6 {Black challenges our best bishop.} 5. Bg3 {Keep the bishop; if Black takes, hxg3 opens the h-file for our rook.} O-O 6. Bd3 c5 7. c3 {The pyramid d4-e3-c3 stops Black from breaking through.} Nc6 8. Nbd2 b6 9. Ne5 {Plant the knight and prepare f4.} Bb7 10. f4 {The Stonewall-style attack setup.}',
      },
      {
        name: 'Main Line: ...c5 before ...Bd6',
        moves:
          '1. d4 d5 2. Bf4 Nf6 3. e3 e6 4. Nf3 c5 5. c3 Nc6 6. Nbd2 Bd6 7. Bg3 O-O 8. Bd3 {The same ideal setup: every piece on its London square.}',
      },
      {
        name: '3...c5 with ...Nc6',
        moves:
          '1. d4 d5 2. Bf4 Nf6 3. e3 c5 4. c3 {Support d4 and give the queen a path to b3.} Nc6 5. Nd2 e6 6. Ngf3 Bd6 7. Bg3 O-O 8. Bd3 b6 9. Ne5 {Ne5 and f4 is the attacking recipe.}',
      },
      {
        name: '3...c5 with ...Qb6',
        moves:
          '1. d4 d5 2. Bf4 Nf6 3. e3 c5 4. c3 Qb6 {Black hits b2, which the Bf4 no longer guards.} 5. Qb3 {Offer a queen trade that would help our structure.} c4 6. Qc2 Bf5 7. Qc1 {The queen retreats but b2 is safe and Black\'s c4-pawn can become a target.} e6 8. Nd2',
      },
      {
        name: 'Symmetrical: 3...Bf5',
        moves:
          "1. d4 d5 2. Bf4 Nf6 3. e3 Bf5 {Black copies us.} 4. c4 {Use the extra tempo to hit d5 and open the b3-b7 diagonal.} e6 5. Nc3 c6 6. Qb3 {b7 is weak because Black's bishop left c8.} Qb6 7. c5 {Gain queenside space with tempo.} Qxb3 8. axb3 {The open a-file is ours.}",
      },
      {
        name: '2...c5 Early Counterattack',
        moves:
          '1. d4 d5 2. Bf4 c5 3. e3 Nc6 4. c3 Nf6 5. Nd2 e6 6. Ngf3 Bd6 7. Bg3 {Same plan: keep the bishop, finish development.} O-O 8. Bd3',
      },
      {
        name: "Against the King's Indian setup",
        moves:
          '1. d4 Nf6 2. Bf4 g6 3. e3 Bg7 4. Nf3 O-O 5. Be2 {Modest but solid; the bishop belongs on e2 vs ...d6 setups.} d6 6. h3 {Give our bishop a retreat square on h2 if Black plays ...Nh5.} Nbd7 7. O-O c5 8. c3 b6 9. a4 {Grab queenside space.}',
      },
      {
        name: 'Against the Grünfeld-style ...d5',
        moves:
          '1. d4 Nf6 2. Bf4 g6 3. e3 Bg7 4. Nf3 O-O 5. Be2 d5 6. O-O c5 7. c3 {The pyramid again: Black\'s g7-bishop bites on granite.} Nc6 8. Nbd2',
      },
      {
        name: '1...Nf6 2...c5: Space with d5',
        moves:
          '1. d4 Nf6 2. Bf4 c5 3. d5 {Gain space. After 3...Qb6 4.Nc3! the b2-pawn is poisoned because of Na4 or Rb1 tricks.} d6 4. Nc3 g6 5. e4 {A big center with a Benoni flavor.} Bg7 6. Nf3 O-O 7. Be2',
      },
      {
        name: '1...Nf6 2...e6: Transposing',
        moves:
          '1. d4 Nf6 2. Bf4 e6 3. e3 c5 4. c3 d5 5. Nd2 Nc6 6. Ngf3 Bd6 7. Bg3 {Back in our main London structure.} O-O 8. Bd3',
      },
    ],
  },
];
