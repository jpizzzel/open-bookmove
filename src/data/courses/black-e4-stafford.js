export default [
  {
    id: 'stafford-gambit',
    name: 'Stafford Gambit',
    side: 'black',
    eco: 'C42',
    category: 'vs-e4',
    level: 'beginner',
    description:
      'A trappy Petrov sideline where Black gives up the e5 pawn for rapid development and nasty tricks against f2. Objectively dubious, but deadly in blitz. Learn the traps and know when to bail out.',
    lines: [
      {
        name: 'The famous Bg5 trap',
        moves: `1. e4 e5 2. Nf3 Nf6 3. Nxe5 Nc6 {The Stafford Gambit. Black offers a pawn for development.} 4. Nxc6 dxc6 {Recapture toward the center. Black's queen and bishops are now wide open.} 5. d3 Bc5 {Aim straight at f2.} 6. Bg5 {Looks natural, attacking the knight and the queen behind it...} Nxe4 {A queen sacrifice!} 7. Bxd8 Bxf2+ 8. Ke2 Bg4# {Checkmate. The king has no escape.}`,
      },
      {
        name: '5.d3 Bc5 6.Be2 h5',
        moves: `1. e4 e5 2. Nf3 Nf6 3. Nxe5 Nc6 4. Nxc6 dxc6 5. d3 Bc5 6. Be2 {The sensible move, preventing ...Bg4 ideas.} h5 {The h-pawn supports ...Ng4 and stops Bg4 trades. If White castles, ...Ng4 brings huge pressure on f2 and h2.} 7. c3 {A careful move: it prepares d4 to blunt the c5 bishop. Black has compensation but must keep up the pressure.}`,
      },
      {
        name: '5.e5 Ne4 6.d3 Bc5: 7.dxe4?? loses the queen',
        moves: `1. e4 e5 2. Nf3 Nf6 3. Nxe5 Nc6 4. Nxc6 dxc6 5. e5 {Kick the knight.} Ne4 {Go forward, not back.} 6. d3 Bc5 {Ignore the attack on the knight!} 7. dxe4 Bxf2+ 8. Ke2 Bg4+ {The bishop checks and skewers the queen.} 9. Kxf2 Qxd1 {Black wins the queen.}`,
      },
      {
        name: '5.e5 Ne4 6.d3 Bc5 7.Be3 9.g3 trap',
        moves: `1. e4 e5 2. Nf3 Nf6 3. Nxe5 Nc6 4. Nxc6 dxc6 5. e5 Ne4 6. d3 Bc5 7. Be3 {Trying to trade off the dangerous bishop.} Bxe3 8. fxe3 Qh4+ 9. g3 {The natural block. (9.Kd2 is illegal because the e4 knight covers d2, and 9.Ke2 leaves the king in the open.)} Nxg3 {The knight sacrifice opens the h-file.} 10. hxg3 Qxh1 {Black wins the exchange and White's king is drafty.}`,
      },
      {
        name: '5.Nc3 Bc5 6.Bc4 Ng4 attack',
        moves: `1. e4 e5 2. Nf3 Nf6 3. Nxe5 Nc6 4. Nxc6 dxc6 5. Nc3 Bc5 6. Bc4 Ng4 {Two pieces already hit f2.} 7. O-O Qh4 {Threatening ...Qxh2 mate.} 8. h3 h5 {The point: if 9.hxg4 hxg4, the h-file opens for Black's rook and queen with a crushing attack. White should not take the knight.}`,
      },
      {
        name: '4.Nf3 declining the gambit',
        moves: `1. e4 e5 2. Nf3 Nf6 3. Nxe5 Nc6 4. Nf3 {White refuses to take on c6.} Nxe4 {Simply win the pawn back. The game resembles a calm Petrov.} 5. d4 d5 6. Bd3 Bd6 {Mirror White's setup with a perfectly normal position.}`,
      },
    ],
  },
];
