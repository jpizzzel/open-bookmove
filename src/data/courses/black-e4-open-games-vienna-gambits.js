export default [
  {
    id: 'open-games-vienna-gambits',
    name: '1...e5 vs the Vienna, Gambits & Sidelines',
    side: 'black',
    eco: 'C20–C30, C44',
    category: 'vs-e4',
    level: 'intermediate',
    description:
      'Part three of the 1...e5 repertoire: how to meet the Vienna, King\'s Gambit, Center Game, Danish, Ponziani, Bishop\'s Opening and the early queen attack with sound, active moves.',
    lines: [
      {
        name: 'Vienna Gambit: 5.Nf3 Be7',
        moves: `1. e4 e5 2. Nc3 {The Vienna Game.} Nf6 3. f4 {The Vienna Gambit.} d5 {Counter in the center, the most principled reply.} 4. fxe5 Nxe4 {A beautiful central knight.} 5. Nf3 Be7 6. d4 O-O 7. Bd3 f5 {Support the e4 knight with a pawn.} 8. exf6 Bxf6 9. O-O Nc6 {Pressure on d4 and active pieces.}`,
      },
      {
        name: 'Vienna Gambit: 5.Qf3 Nc6',
        moves: `1. e4 e5 2. Nc3 Nf6 3. f4 d5 4. fxe5 Nxe4 5. Qf3 {Hitting the knight.} Nc6 {Defend indirectly: 6.Qxe4?? Nd4 is very strong, and 6.Nxe4 Nd4 hits the queen and c2.} 6. Bb5 Nxc3 7. bxc3 Qh4+ 8. g3 Qe4+ 9. Qxe4 dxe4 {An equal endgame with no problems for Black.}`,
      },
      {
        name: 'Vienna Gambit: 5.d3 Nxc3',
        moves: `1. e4 e5 2. Nc3 Nf6 3. f4 d5 4. fxe5 Nxe4 5. d3 Nxc3 6. bxc3 d4 {Gain space and open the a7-g1 diagonal for the bishop.} 7. Nf3 Nc6 8. Be2 Bc5 {Black's pieces are very active and White's king is drafty.}`,
      },
      {
        name: 'Vienna: 3.Bc4 Nc6',
        moves: `1. e4 e5 2. Nc3 Nf6 3. Bc4 Nc6 {Solid development. Taking on e4 leads to wild complications after Qh5.} 4. d3 Bb4 {Pin the knight and pressure e4.} 5. Bg5 h6 6. Bxf6 Bxc3+ 7. bxc3 Qxf6 8. Ne2 d6 {Black has the bishop pair and the healthier structure.}`,
      },
      {
        name: 'Vienna: 3.g3 d5',
        moves: `1. e4 e5 2. Nc3 Nf6 3. g3 d5 {Strike the center before the g2 bishop adds pressure.} 4. exd5 Nxd5 5. Bg2 Nxc3 6. bxc3 Bd6 7. Nf3 O-O 8. O-O c6 {A strong center and easy development.}`,
      },
      {
        name: 'King\'s Gambit: 3.Nf3 d5 5.Bc4',
        moves: `1. e4 e5 2. f4 {The King\'s Gambit!} exf4 {Accept. Black will give the pawn back for fast development.} 3. Nf3 d5 {The Modern Defense: open the center while White's king is weakened.} 4. exd5 Nf6 5. Bc4 Nxd5 6. O-O Be7 {Black develops and castles. The f4 pawn is still a thorn.}`,
      },
      {
        name: 'King\'s Gambit: 5.Bb5+',
        moves: `1. e4 e5 2. f4 exf4 3. Nf3 d5 4. exd5 Nf6 5. Bb5+ c6 6. dxc6 Nxc6 {Black is ahead in development.} 7. d4 Bd6 8. O-O O-O`,
      },
      {
        name: 'King\'s Gambit: 5.c4',
        moves: `1. e4 e5 2. f4 exf4 3. Nf3 d5 4. exd5 Nf6 5. c4 c6 {Undermine the d5 pawn.} 6. d4 Bb4+ 7. Nc3 cxd5 8. Bxf4 O-O`,
      },
      {
        name: 'King\'s Gambit: Bishop\'s Gambit 3.Bc4',
        moves: `1. e4 e5 2. f4 exf4 3. Bc4 Nf6 {Develop and attack e4.} 4. Nc3 c6 {Prepare ...d5 to blunt the c4 bishop.} 5. Bb3 d5 6. exd5 cxd5 7. d4 Bd6 {Black holds the f4 pawn and has a fine center.}`,
      },
      {
        name: 'Center Game',
        moves: `1. e4 e5 2. d4 exd4 3. Qxd4 {The Center Game. The queen comes out early.} Nc6 {Develop with tempo.} 4. Qe3 Nf6 5. Nc3 Bb4 {Pin and pressure e4.} 6. Bd2 O-O 7. O-O-O Re8 {Black hits e4 hard and is ahead in development.}`,
      },
      {
        name: 'Danish Gambit',
        moves: `1. e4 e5 2. d4 exd4 3. c3 {The Danish Gambit.} d5 {Decline with a central counter. Best practical choice.} 4. exd5 Qxd5 5. cxd4 Nc6 6. Nf3 Bg4 7. Be2 Bb4+ 8. Nc3 Bxf3 9. Bxf3 Qc4 {The queen stops castling and pressures d4.}`,
      },
      {
        name: 'Ponziani Opening',
        moves: `1. e4 e5 2. Nf3 Nc6 3. c3 {The Ponziani, preparing d4.} Nf6 {Counterattack e4 at once.} 4. d4 Nxe4 5. d5 Ne7 6. Nxe5 Ng6 {Challenge the e5 knight.} 7. Qd4 Qe7 8. Qxe4 Qxe5 9. Qxe5 Nxe5 {An equal endgame.}`,
      },
      {
        name: 'Bishop\'s Opening',
        moves: `1. e4 e5 2. Bc4 {The Bishop's Opening.} Nf6 {Hit e4 immediately.} 3. d3 c6 {Prepare ...d5 to take over the center and blunt the bishop.} 4. Nf3 d5 5. Bb3 Bd6 {A strong center and comfortable development.}`,
      },
      {
        name: 'Early queen: 2.Qh5',
        moves: `1. e4 e5 2. Qh5 {Threatening e5 and eyeing f7.} Nc6 {Defend e5.} 3. Bc4 g6 {Shut down the Scholar's Mate threat on f7.} 4. Qf3 Nf6 {Block the queen's view of f7 and develop.} 5. Ne2 Bg7 6. Nbc3 d6 {White's queen is misplaced and Black is developing fast.}`,
      },
    ],
  },
];
