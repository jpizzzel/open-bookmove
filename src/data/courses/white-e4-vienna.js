export default [
  {
    id: 'vienna-game',
    name: 'Vienna Game',
    side: 'white',
    eco: 'C25–C29',
    category: 'e4',
    level: 'beginner',
    description:
      'Develop the queen knight first, then decide: an aggressive f4 against ...Nf6, or quiet Italian-style play with Bc4. Surprising and fun.',
    lines: [
      {
        name: 'Vienna Gambit: 5...Be7',
        moves:
          '1. e4 e5 2. Nc3 {Support e4 and keep the f-pawn free to advance.} Nf6 3. f4 {The Vienna Gambit: break open the f-file like a King\'s Gambit with an extra developed piece.} d5 {Black\'s best: counterstrike in the center.} 4. fxe5 Nxe4 5. Nf3 {Develop and protect e5.} Be7 6. d4 O-O 7. Bd3 {Attack the e4 knight and aim at the kingside.} f5 8. exf6 Bxf6 9. O-O {Open lines and quick development. White plays for the attack on the f-file.}',
      },
      {
        name: 'Vienna Gambit: 5...Bg4',
        moves:
          '1. e4 e5 2. Nc3 Nf6 3. f4 d5 4. fxe5 Nxe4 5. Nf3 Bg4 {Pin the knight that protects e5.} 6. Qe2 {Attack the e4 knight and break the pin\'s force.} Nxc3 7. dxc3 c6 8. h3 Bxf3 9. Qxf3 {The bishop pair and an open position for White.}',
      },
      {
        name: 'Vienna Gambit Accepted: 3...exf4',
        moves:
          '1. e4 e5 2. Nc3 Nf6 3. f4 exf4 {Taking the pawn is risky.} 4. e5 {Kick the knight back home.} Ng8 5. Nf3 d6 6. d4 dxe5 7. Qe2 {Pin and attack e5 along the e-file.} Be7 8. Qxe5 Nf6 9. Bxf4 {Material is level and White has a strong center and fast development.}',
      },
      {
        name: 'Vienna Gambit: 3...d6',
        moves:
          '1. e4 e5 2. Nc3 Nf6 3. f4 d6 {Solid, but passive.} 4. Nf3 Nc6 5. Bb5 {Pin the knight and add pressure to e5.} Bd7 6. d3 exf4 7. Bxf4 {Easy development and a half-open f-file.}',
      },
      {
        name: '2...Nc6 3. Bc4: 3...Nf6 4. d3 Bb4',
        moves:
          '1. e4 e5 2. Nc3 Nc6 3. Bc4 {Against 2...Nc6, play Italian-style with the knight already on c3.} Nf6 4. d3 {Solidly protect e4.} Bb4 5. Bg5 {Pin back and threaten to damage Black\'s structure.} h6 6. Bxf6 Bxc3+ 7. bxc3 Qxf6 8. Ne2 {The knight avoids the pin and keeps f2-f4 possible.} d6 9. O-O',
      },
      {
        name: '2...Nc6 3. Bc4: 3...Nf6 4. d3 Bc5',
        moves:
          '1. e4 e5 2. Nc3 Nc6 3. Bc4 Nf6 4. d3 Bc5 5. f4 {Now that e4 is solid, the f-pawn joins the attack.} d6 6. Nf3 {Develop and support f4. White hopes to open the f-file.}',
      },
      {
        name: '2...Bc5',
        moves:
          '1. e4 e5 2. Nc3 Bc5 3. Nf3 {Develop naturally.} d6 4. d4 {Hit the center while the bishop is on c5.} exd4 5. Nxd4 Nf6 6. Be2 O-O 7. O-O {A comfortable space advantage.}',
      },
    ],
  },
];
