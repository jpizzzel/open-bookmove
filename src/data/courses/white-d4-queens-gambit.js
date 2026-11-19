export default [
  {
    id: 'queens-gambit',
    name: "Queen's Gambit",
    side: 'white',
    eco: 'D06–D69',
    category: 'd4',
    level: 'intermediate',
    description:
      "Offer the c-pawn to pull Black's d-pawn away from the center. A complete, classical White repertoire against the Declined, Accepted, Slav, Semi-Slav and the offbeat replies.",
    lines: [
      {
        name: 'QGD: Tartakower Variation',
        moves:
          "1. d4 {Claim the center and free the dark-squared bishop.} d5 2. c4 {The Queen's Gambit: challenge d5 from the side.} e6 {The Declined: Black holds d5 solidly.} 3. Nc3 {Add pressure to d5.} Nf6 4. Bg5 {Pin the knight that defends d5.} Be7 5. e3 O-O 6. Nf3 h6 7. Bh4 b6 {Tartakower: Black fianchettoes the light-squared bishop.} 8. cxd5 Nxd5 9. Bxe7 Qxe7 10. Nxd5 exd5 11. Rc1 {Take the half-open c-file and target the c-pawn.} Be6 12. Qa4 {Pressure a7 and c6 at the same time.} c5 13. Qa3 Rc8 14. Bb5 {Pile up on the hanging pawns.}",
      },
      {
        name: 'QGD: Lasker Defense',
        moves:
          '1. d4 d5 2. c4 e6 3. Nc3 Nf6 4. Bg5 Be7 5. e3 O-O 6. Nf3 h6 7. Bh4 Ne4 {Lasker: trade pieces to ease the cramp.} 8. Bxe7 Qxe7 9. cxd5 {Exchange before Black can recapture with the knight comfortably.} Nxc3 10. bxc3 exd5 11. Qb3 {Hit d5 and b7.} Rd8 12. c4 {Undermine the d5-pawn and open lines for the bishop.}',
      },
      {
        name: 'QGD: Orthodox Defense',
        moves:
          "1. d4 d5 2. c4 e6 3. Nc3 Nf6 4. Bg5 Be7 5. e3 O-O 6. Nf3 h6 7. Bh4 Nbd7 8. Rc1 {Put the rook opposite Black's future c-pawn.} c6 9. Bd3 dxc4 10. Bxc4 {Win a tempo: Black captured, we develop.} Nd5 {Capablanca's freeing maneuver.} 11. Bxe7 Qxe7 12. O-O Nxc3 13. Rxc3 e5 {Black finally frees the light-squared bishop.} 14. Qc2 {Keep the pressure on the c-file.}",
      },
      {
        name: 'QGD: Cambridge Springs',
        moves:
          '1. d4 d5 2. c4 e6 3. Nc3 Nf6 4. Bg5 Nbd7 {Careful! Now 5.cxd5 exd5 6.Nxd5?? Nxd5 7.Bxd8 Bb4+ wins a piece for Black — the Elephant Trap.} 5. e3 c6 6. Nf3 Qa5 {Cambridge Springs: the queen pins the c3-knight and eyes g5.} 7. Nd2 {Guard against ...Ne4 and unpin with tempo ideas.} Bb4 8. Qc2 O-O 9. Be2 e5 10. O-O {Castle and stay solid; the bishop pair matters later.}',
      },
      {
        name: 'Tarrasch Defense',
        moves:
          '1. d4 d5 2. c4 e6 3. Nc3 c5 {The Tarrasch: active pieces in exchange for an isolated pawn.} 4. cxd5 exd5 5. Nf3 Nc6 6. g3 {The fianchetto bishop will stare straight at d5.} Nf6 7. Bg2 Be7 8. O-O O-O 9. Bg5 {Remove a defender of d5.} cxd4 10. Nxd4 h6 11. Be3 Re8',
      },
      {
        name: "Queen's Gambit Accepted: Classical",
        moves:
          "1. d4 d5 2. c4 dxc4 {Black takes the pawn, but can't keep it.} 3. Nf3 {Stop ...e5 first.} Nf6 4. e3 {Open the bishop's path to c4.} e6 5. Bxc4 {Material is level and we lead in development.} c5 6. O-O a6 7. a4 {Prevent ...b5 gaining queenside space.} Nc6 8. Qe2 cxd4 9. Rd1 {Pin along the d-file before recapturing.} Be7 10. exd4 O-O 11. Nc3 {An isolated pawn with free, active pieces.}",
      },
      {
        name: "Queen's Gambit Accepted: 4...Bg4",
        moves:
          '1. d4 d5 2. c4 dxc4 3. Nf3 Nf6 4. e3 Bg4 5. Bxc4 e6 6. h3 {Ask the bishop now.} Bh5 7. Nc3 Nbd7 8. O-O Bd6 9. e4 {Grab the center; e5 forking ideas loom.}',
      },
      {
        name: 'Slav Defense: Main Line',
        moves:
          "1. d4 d5 2. c4 c6 {The Slav: defend d5 without blocking the c8-bishop.} 3. Nf3 Nf6 4. Nc3 dxc4 5. a4 {Stop ...b5 so the pawn can be won back.} Bf5 6. e3 e6 7. Bxc4 Bb4 8. O-O Nbd7 9. Qe2 {Prepare e4.} O-O 10. e4 {Take the center with tempo on the bishop.} Bg6 11. Bd3",
      },
      {
        name: 'Semi-Slav: Anti-Meran 6.Qc2',
        moves:
          '1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. Nc3 e6 {Semi-Slav: rock-solid d5.} 5. e3 Nbd7 6. Qc2 {Support a later e4 break.} Bd6 7. Bd3 O-O 8. O-O dxc4 9. Bxc4 b5 10. Be2 Bb7 11. Rd1 {Line the rook up behind the d-pawn.}',
      },
      {
        name: 'Albin Countergambit',
        moves:
          "1. d4 d5 2. c4 e5 {The Albin: a sharp gambit.} 3. dxe5 d4 {Watch out: 4.e3? Bb4+ 5.Bd2 dxe3 6.Bxb4?? exf2+ 7.Ke2 fxg1=N+! is a famous trap.} 4. Nf3 Nc6 5. g3 {The bishop on g2 will press the long diagonal.} Be6 6. Nbd2 Qd7 7. Bg2 O-O-O 8. O-O {Our king is safe; Black's is about to face a pawn storm.}",
      },
      {
        name: 'Chigorin Defense',
        moves:
          '1. d4 d5 2. c4 Nc6 {The Chigorin: pieces over pawns.} 3. Nf3 Bg4 4. cxd5 Bxf3 5. gxf3 {Recapture toward the center and keep the bishop pair.} Qxd5 6. e3 e5 7. Nc3 Bb4 8. Bd2 Bxc3 9. bxc3 {Two bishops and a strong center compensate for the pawn structure.}',
      },
      {
        name: 'Baltic Defense',
        moves:
          '1. d4 d5 2. c4 Bf5 {The Baltic: develop the bishop before ...e6.} 3. cxd5 Bxb1 4. Qa4+ {The key check: we win the d5-pawn cleanly.} Qd7 5. Qxd7+ Nxd7 6. Rxb1 Ngf6 7. Nf3 {A clean extra pawn in a calm position.}',
      },
    ],
  },
];
