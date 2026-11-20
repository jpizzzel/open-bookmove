export default [
  {
    id: 'scandinavian',
    name: 'Scandinavian Defense',
    side: 'black',
    eco: 'B01',
    category: 'vs-e4',
    level: 'beginner',
    description:
      'Hit e4 on move one and force the game onto your terms. The 3...Qa5 main line gives a solid Caro-Kann-like structure with active pieces and very little theory to memorize.',
    lines: [
      {
        name: 'Main Line: 6.Bc4 Bf5 7.Bd2 e6 8.Qe2',
        moves: `1. e4 d5 {Challenge the center immediately.} 2. exd5 Qxd5 {Recapture with the queen. White will gain a tempo on it, but the queen finds a safe home.} 3. Nc3 Qa5 {On a5 the queen pins nothing yet, but it eyes c3 and e1 and stays out of the way of Black's minor pieces.} 4. d4 Nf6 5. Nf3 c6 {A key move: it gives the queen a retreat on c7 and stops Nb5 or Bb5 ideas.} 6. Bc4 Bf5 {The light-squared bishop comes out before ...e6 locks it in.} 7. Bd2 {Now Nd5 is a discovered attack on the queen, so stay alert.} e6 8. Qe2 Bb4 {Pin the knight so that Nd5 tricks lose their sting.} 9. O-O-O Nbd7 10. a3 Bxc3 11. Bxc3 Qc7 {The queen is safe on c7 and Black can castle short with a sound position.}`,
      },
      {
        name: 'Main Line: 8.Nd5 discovered attack',
        moves: `1. e4 d5 2. exd5 Qxd5 3. Nc3 Qa5 4. d4 Nf6 5. Nf3 c6 6. Bc4 Bf5 7. Bd2 e6 8. Nd5 {The knight jumps with a discovered attack on the a5 queen.} Qd8 {Simply step back. The knight is now attacked twice and must make a decision.} 9. Nxf6+ Qxf6 {The queen is active on f6 and Black has no weaknesses.} 10. Qe2 Nd7 {Develop and get ready to castle. Black is comfortable.}`,
      },
      {
        name: 'Main Line: 7.Ne5 with g4',
        moves: `1. e4 d5 2. exd5 Qxd5 3. Nc3 Qa5 4. d4 Nf6 5. Nf3 c6 6. Bc4 Bf5 7. Ne5 e6 8. g4 {White chases the bishop with pawns.} Bg6 9. h4 Nbd7 {Challenge the strong e5 knight right away.} 10. Nxd7 Nxd7 11. h5 Be4 {The bishop escapes with tempo on the h1 rook. Note White cannot take on e4 because the c3 knight is pinned to the king by the a5 queen.} 12. Rh3 Bg2 13. Re3 Nb6 {Hit the c4 bishop and head for d5.} 14. Bd3 Nd5 {A beautiful outpost, hitting both c3 and e3.}`,
      },
      {
        name: 'Move order: 6.Bd2 then Bc4',
        moves: `1. e4 d5 2. exd5 Qxd5 3. Nc3 Qa5 4. d4 Nf6 5. Nf3 c6 6. Bd2 Bf5 {Same plan regardless of move order: bishop out, then ...e6.} 7. Bc4 e6 8. Qe2 Bb4 9. O-O-O Nbd7 10. a3 Bxc3 11. Bxc3 Qc7`,
      },
      {
        name: '4.Nf3 and Bc4 with short castling',
        moves: `1. e4 d5 2. exd5 Qxd5 3. Nc3 Qa5 4. Nf3 Nf6 5. Bc4 c6 6. O-O Bf5 7. d3 e6 8. Bd2 Qc7 {Step off the a5-e1 diagonal before Nd5 or Nb5 tricks appear. Next comes ...Be7 and ...O-O.}`,
      },
      {
        name: '3.Nf3 avoiding Nc3',
        moves: `1. e4 d5 2. exd5 Qxd5 3. Nf3 {White delays Nc3, so the queen is not attacked yet.} Nf6 4. d4 Bg4 {Pin the knight and pressure d4.} 5. Be2 e6 6. O-O Nc6 {More pressure on d4.} 7. c4 Qa5 {Now the queen is kicked, and a5 is a comfortable square with ideas of ...O-O-O.}`,
      },
      {
        name: '2.e5 Advance',
        moves: `1. e4 d5 2. e5 {White avoids the exchange and gains space.} Bf5 {Get the bishop out before ...e6, a big upgrade on a normal French.} 3. d4 e6 4. Nf3 c5 {Strike at the base of the chain.} 5. c3 Nc6 6. Be2 Qb6 {Pile up on d4 and b2.} 7. O-O Nge7 {The knight heads for f5 or g6 to keep hitting d4.}`,
      },
      {
        name: '2.Nc3 d4',
        moves: `1. e4 d5 2. Nc3 {White declines to exchange.} d4 {Gain space with tempo.} 3. Nce2 e5 4. Ng3 Be6 5. Nf3 f6 {Solidly protect e5. Black has a nice space advantage in the center.}`,
      },
      {
        name: 'Blackmar-Diemer Gambit 2.d4',
        moves: `1. e4 d5 2. d4 {The Blackmar-Diemer: White offers pawns for fast development.} dxe4 3. Nc3 Nf6 4. f3 exf3 {Accept the second pawn; it opens lines but Black gets a solid position.} 5. Nxf3 Bf5 {Develop the bishop actively.} 6. Bc4 e6 7. O-O c6 {A rock-solid setup: the pawn on e6 blunts the c4 bishop and Black is a pawn up.}`,
      },
    ],
  },
];
