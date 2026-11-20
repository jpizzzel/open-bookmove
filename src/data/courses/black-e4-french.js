// French Defense repertoire for Black (1.e4 e6), Classical 3...Nf6 vs 3.Nc3.
export default [
  {
    id: 'french-defense',
    name: 'French Defense',
    side: 'black',
    eco: 'C00–C19',
    category: 'vs-e4',
    level: 'intermediate',
    description:
      'Meet 1.e4 with ...e6 and ...d5. Black builds a tough pawn chain and counterattacks its base with ...c5 and ...f6. This course uses the Classical 3...Nf6 against 3.Nc3.',
    lines: [
      {
        name: 'Steinitz: 5.f4 Main Line',
        moves: `1. e4 e6 {Prepare ...d5 with pawn support.} 2. d4 d5 3. Nc3 Nf6 {The Classical. Black attacks e4 again and asks White to commit.} 4. e5 Nfd7 5. f4 {The Steinitz. White builds a huge pawn chain.} c5 {Hit the chain at d4. This is Black's main lever in the French.} 6. Nf3 Nc6 7. Be3 cxd4 8. Nxd4 Bc5 {Pin the d4 knight against the Be3. Exchanges ease Black's cramp.} 9. Qd2 O-O 10. O-O-O a6 {Kings on opposite wings. Black's attack runs on the queenside with ...b5.} 11. h4 Nxd4 12. Bxd4 b5`,
      },
      {
        name: 'Steinitz: 5.Nce2',
        moves: `1. e4 e6 2. d4 d5 3. Nc3 Nf6 4. e5 Nfd7 5. Nce2 {White supports d4 with c3 and f4.} c5 6. c3 Nc6 7. f4 Qb6 {Pile up on d4 and b2.} 8. Nf3 f6 {Undermine the chain from the other side.}`,
      },
      {
        name: 'Steinitz: 5.Nf3',
        moves: `1. e4 e6 2. d4 d5 3. Nc3 Nf6 4. e5 Nfd7 5. Nf3 c5 6. dxc5 Nc6 7. Bf4 Bxc5 {Win back the pawn with active development.} 8. Bd3 f6 {Open the f-file and break up White's e5 outpost.}`,
      },
      {
        name: 'Classical: 4.Bg5 Main Line',
        moves: `1. e4 e6 2. d4 d5 3. Nc3 Nf6 4. Bg5 {Pin the knight and keep the tension.} Be7 {Break the pin calmly.} 5. e5 Nfd7 6. Bxe7 Qxe7 {The dark-squared bishops come off, which leaves Black's pawns on light squares well placed.} 7. f4 O-O 8. Nf3 c5 9. Qd2 Nc6 {Pressure on d4 grows. ...f6 or ...cxd4 will follow.}`,
      },
      {
        name: 'Alekhine-Chatard Attack: 6.h4',
        moves: `1. e4 e6 2. d4 d5 3. Nc3 Nf6 4. Bg5 Be7 5. e5 Nfd7 6. h4 {The Alekhine-Chatard gambit. Taking on g5 opens the h-file for White.} c5 {Ignore the bait and strike the center.} 7. Bxe7 Kxe7 {Recapture with the king. It is surprisingly safe in the center.} 8. f4 Qb6 9. Nf3 Nc6 {Black has strong pressure on d4 and b2.}`,
      },
      {
        name: 'Tarrasch: 3.Nd2 c5 4.exd5',
        moves: `1. e4 e6 2. d4 d5 3. Nd2 {The Tarrasch. The knight avoids a pin by ...Bb4.} c5 {Challenge the center right away.} 4. exd5 Qxd5 {Recapture with the queen to avoid an isolated pawn.} 5. Ngf3 cxd4 6. Bc4 Qd6 7. O-O Nf6 8. Nb3 Nc6 9. Nbxd4 Nxd4 10. Nxd4 a6 {Keep the bishop or knight off b5 and prepare ...b5. Black has a solid, harmonious position.}`,
      },
      {
        name: 'Tarrasch: 4.Ngf3',
        moves: `1. e4 e6 2. d4 d5 3. Nd2 c5 4. Ngf3 cxd4 5. exd5 Qxd5 6. Bc4 Qd6 7. O-O Nf6 8. Nb3 Nc6 9. Nbxd4 Nxd4 10. Nxd4 a6`,
      },
      {
        name: 'Advance: 6.a3',
        moves: `1. e4 e6 2. d4 d5 3. e5 {The Advance. White claims space and cramps Black's kingside.} c5 {Attack the base of the chain immediately.} 4. c3 Nc6 5. Nf3 Qb6 {The classic setup. Every piece pressures d4.} 6. a3 {Prepares b4.} c4 {Close the queenside and stop b4 from gaining space.} 7. Nbd2 Na5 {Occupy b3, the hole that ...c4 created.} 8. Rb1 Bd7`,
      },
      {
        name: 'Advance: Milner-Barry Gambit 6.Bd3',
        moves: `1. e4 e6 2. d4 d5 3. e5 c5 4. c3 Nc6 5. Nf3 Qb6 6. Bd3 cxd4 7. cxd4 Bd7 {Prepare to take d4. Avoid the trap 7...Nxd4? 8.Nxd4 Qxd4 9.Bb5+, which wins the queen.} 8. O-O Nxd4 9. Nxd4 Qxd4 10. Nc3 a6 {Take b5 away from the knight. Black is a pawn up and must defend carefully.} 11. Qe2 Ne7`,
      },
      {
        name: 'Advance: 6.Be2',
        moves: `1. e4 e6 2. d4 d5 3. e5 c5 4. c3 Nc6 5. Nf3 Qb6 6. Be2 cxd4 7. cxd4 Nh6 {The knight heads for f5 to add another attacker on d4.} 8. b3 Nf5 9. Bb2 Bb4+ {Disrupt White's coordination. Kf1 is awkward.}`,
      },
      {
        name: 'Exchange: 4.Bd3',
        moves: `1. e4 e6 2. d4 d5 3. exd5 {The Exchange. The structure becomes symmetrical and Black's light-squared bishop is freed.} exd5 4. Bd3 Nc6 {Pressure on d4, and ...Nb4 is possible.} 5. c3 Bd6 6. Nf3 Nge7 7. O-O Bg4 8. Re1 Qd7 9. Nbd2 O-O-O {Castling queenside unbalances a symmetrical position and gives Black real chances to win.}`,
      },
      {
        name: 'Exchange: 4.c4',
        moves: `1. e4 e6 2. d4 d5 3. exd5 exd5 4. c4 {White plays for an isolated-pawn position.} Nf6 5. Nc3 Bb4 {Pin the knight and pressure d5's attacker.} 6. Nf3 O-O 7. Bd3 dxc4 8. Bxc4 Nbd7`,
      },
      {
        name: 'Exchange: 4.Nf3',
        moves: `1. e4 e6 2. d4 d5 3. exd5 exd5 4. Nf3 Bd6 5. c4 Nf6 6. Nc3 O-O 7. c5 Be7 8. Bd3 b6 {Break up White's queenside space grab.}`,
      },
      {
        name: "King's Indian Attack: 2.d3",
        moves: `1. e4 e6 2. d3 {White avoids the main lines with a King's Indian setup.} d5 3. Nd2 Nf6 4. Ngf3 c5 5. g3 Nc6 6. Bg2 Be7 7. O-O O-O 8. Re1 b5 {White attacks on the kingside, so Black races on the queenside.}`,
      },
    ],
  },
];
