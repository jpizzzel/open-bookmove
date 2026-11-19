export default [
  {
    id: 'evans-gambit',
    name: 'Evans Gambit',
    side: 'white',
    eco: 'C51–C52',
    category: 'e4',
    level: 'intermediate',
    description:
      'Give a wing pawn to win time for c3 and d4 in the Italian Game. Rapid development, open lines and attacking chances against an uncastled king.',
    lines: [
      {
        name: 'Accepted: 5...Ba5 6...d6',
        moves:
          '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 {The Evans Gambit: deflect the bishop to gain time for c3 and d4.} Bxb4 5. c3 {Kick the bishop and prepare d4.} Ba5 {The main line, keeping the pin on c3.} 6. d4 d6 7. Qb3 {Pressure on f7 and b7.} Qd7 8. dxe5 Bb6 9. Nbd2 {Development first. White has open lines and a lead in development.}',
      },
      {
        name: 'Accepted: 5...Ba5 6...exd4 7...Nge7',
        moves:
          '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Ba5 6. d4 exd4 7. O-O {Castle first. Development matters more than pawns here.} Nge7 8. cxd4 d5 9. exd5 Nxd5 10. Ba3 {Stop Black from castling. The king is stuck in the center.}',
      },
      {
        name: 'Accepted: 5...Ba5 6...exd4 7...Bb6',
        moves:
          '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Ba5 6. d4 exd4 7. O-O Bb6 8. cxd4 d6 9. Nc3 {The "Normal Position": a big center and free development for the pawn.}',
      },
      {
        name: 'Accepted: 5...Be7',
        moves:
          '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Be7 {A safer retreat.} 6. d4 Na5 {Chase the dangerous c4 bishop.} 7. Be2 {Keep the bishop. It will be useful later.} exd4 8. Qxd4 Nf6 9. e5 Nc6 10. Qh4 Nd5 11. Qg3 {Pressure on g7 and a space advantage.}',
      },
      {
        name: 'Accepted: 5...Bc5',
        moves:
          '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bxb4 5. c3 Bc5 6. d4 exd4 7. O-O d6 8. cxd4 Bb6 9. Nc3 {The same Normal Position by another route.}',
      },
      {
        name: 'Declined: 4...Bb6',
        moves:
          '1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. b4 Bb6 {Declining is solid.} 5. a4 {Threatening a5 to trap the bishop.} a6 6. Nc3 Nf6 7. Nd5 Nxd5 8. exd5 Nd4 9. a5 Ba7 10. d6 {A thorn in Black\'s position that cramps the queenside.}',
      },
    ],
  },
];
