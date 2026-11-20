// Sicilian Najdorf repertoire for Black (1.e4 c5 2.Nf3 d6 ... 5...a6), plus anti-Sicilian answers.
export default [
  {
    id: 'sicilian-najdorf',
    name: 'Sicilian Najdorf',
    side: 'black',
    eco: 'B90–B99',
    category: 'vs-e4',
    level: 'advanced',
    description:
      'The most respected fighting reply to 1.e4. The little move ...a6 keeps every option open: ...e5 or ...e6, queenside expansion with ...b5, and counterplay down the half-open c-file.',
    lines: [
      {
        name: 'English Attack: 6.Be3 e5 7.Nb3',
        moves: `1. e4 c5 {Fight for d4 without mirroring White. The game becomes unbalanced from move one.} 2. Nf3 d6 3. d4 cxd4 {Trade a wing pawn for a center pawn. Black gets the half-open c-file.} 4. Nxd4 Nf6 {Attack e4 so White must spend a move defending it.} 5. Nc3 a6 {The Najdorf. Keeps knights and bishops off b5 and prepares ...e5 or ...b5.} 6. Be3 e5 {Kick the d4 knight and claim space in the center. The d5 square is the price.} 7. Nb3 Be6 {Fight for d5, the key square in this structure.} 8. f3 Be7 9. Qd2 O-O 10. O-O-O Nbd7 11. g4 b5 {Opposite-side castling means a pawn race. Black's attack starts on the queenside.} 12. g5 b4 13. Ne2 Ne8 {The knight steps back but stays ready to jump to c7 or be supported by ...f6.}`,
      },
      {
        name: 'English Attack: 6.Be3 e5 7.Nf3',
        moves: `1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Be3 e5 7. Nf3 {A quieter retreat aiming at d5 with Bc4.} Be7 8. Bc4 O-O 9. O-O Be6 {Challenge the Bc4 so White cannot build up on d5 for free.} 10. Bb3 Nc6`,
      },
      {
        name: '6.Bg5: Main Line with 10.g4',
        moves: `1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Bg5 e6 {Against the pin, ...e6 keeps the pawn structure solid and prepares ...Be7.} 7. f4 Be7 8. Qf3 Qc7 {The queen eyes the c-file and e5, and the a7 pawn is never left hanging.} 9. O-O-O Nbd7 10. g4 b5 {Counterattack immediately. Every tempo counts with opposite-side kings.} 11. Bxf6 Nxf6 12. g5 Nd7 13. f5 Nc5 {The knight heads for an active post and supports ...b4.}`,
      },
      {
        name: '6.Bg5: 10.Bd3',
        moves: `1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Bg5 e6 7. f4 Be7 8. Qf3 Qc7 9. O-O-O Nbd7 10. Bd3 b5 11. Rhe1 Bb7 {The bishop puts pressure on e4, White's most sensitive point.}`,
      },
      {
        name: 'Classical: 6.Be2',
        moves: `1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Be2 e5 {Against quiet development Black grabs space at once.} 7. Nb3 Be7 8. O-O O-O 9. Be3 Be6 10. Qd2 Nbd7 11. a4 Rc8 {The rook moves to the c-file, where the ...d5 and ...Rxc3 ideas live.}`,
      },
      {
        name: 'Sozin / Fischer Attack: 6.Bc4',
        moves: `1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Bc4 e6 {Blunt the bishop. After ...e6 it bites on granite.} 7. Bb3 b5 {Gain space and threaten ...b4 to kick the c3 knight off its defence of e4.} 8. O-O Be7 9. Qf3 Qc7 {Keep the a8 rook protected and watch e5.} 10. Qg3 O-O 11. Bh6 Ne8 {Calmly cover g7. The attack has no follow-up.}`,
      },
      {
        name: '6.f3',
        moves: `1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. f3 e5 7. Nb3 Be6 8. Be3 Be7 9. Qd2 O-O 10. O-O-O Nbd7 11. g4 b5 {Same plan as against the English Attack. Race on the queenside.}`,
      },
      {
        name: 'Adams Attack: 6.h3',
        moves: `1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. h3 {White wants g4 next.} e5 7. Nde2 h5 {Stop g4 in its tracks.} 8. g3 Be6 9. Bg2 Nbd7 10. a4 Be7`,
      },
      {
        name: 'Anti-Sicilian: Moscow 3.Bb5+',
        moves: `1. e4 c5 2. Nf3 d6 3. Bb5+ Bd7 {Offer a trade of light-squared bishops. That removes Black's "bad" bishop.} 4. Bxd7+ Qxd7 5. O-O Nc6 6. c3 Nf6 7. Re1 e6 8. d4 cxd4 9. cxd4 d5 {Strike the center before White can lock it with d5.} 10. e5 Ne4 {The knight is strong on e4 and hard to remove.}`,
      },
      {
        name: 'Anti-Sicilian: 4.Qxd4',
        moves: `1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Qxd4 {Recapturing with the queen avoids the main lines, but the queen is exposed.} Nc6 {Develop with tempo.} 5. Bb5 Bd7 6. Bxc6 Bxc6 7. Nc3 Nf6 8. Bg5 e6 9. O-O-O Be7 10. Rhe1 O-O {The bishop pair and a solid structure give Black a comfortable game.}`,
      },
      {
        name: 'Anti-Sicilian: Alapin 2.c3',
        moves: `1. e4 c5 2. c3 Nf6 {Hit e4 at once. White must push e5 or develop awkwardly.} 3. e5 Nd5 4. d4 cxd4 5. Nf3 Nc6 6. cxd4 d6 {Undermine the e5 spearhead.} 7. Bc4 Nb6 8. Bb5 dxe5 9. Nxe5 Bd7 10. Nxd7 Qxd7 {White is left with an isolated d-pawn to defend.}`,
      },
      {
        name: 'Anti-Sicilian: Closed 2.Nc3 and 3.g3',
        moves: `1. e4 c5 2. Nc3 d6 3. g3 Nc6 4. Bg2 g6 {Against a fianchetto, mirror it. The long diagonal must be contested.} 5. d3 Bg7 6. f4 e6 7. Nf3 Nge7 {The knight goes to e7 so the f-pawn and the Bg7 stay free.} 8. O-O O-O`,
      },
      {
        name: 'Anti-Sicilian: Grand Prix 2.Nc3 and 3.f4',
        moves: `1. e4 c5 2. Nc3 d6 3. f4 Nc6 4. Nf3 g6 5. Bc4 Bg7 6. O-O e6 {Shut out the Bc4 and keep the f7 point safe.} 7. d3 Nge7 8. Qe1 O-O {White aims for Qh4 and f5. Black meets it with ...d5 or ...f5 at the right moment.}`,
      },
      {
        name: 'Anti-Sicilian: Smith-Morra Gambit',
        moves: `1. e4 c5 2. d4 cxd4 3. c3 dxc3 {Accept the pawn. A careful setup holds it.} 4. Nxc3 Nc6 5. Nf3 d6 6. Bc4 e6 {Close the a2-g8 diagonal so White gets no sacrifices on f7 or e6.} 7. O-O Nf6 8. Qe2 Be7 9. Rd1 e5 {Block the d-file before the rook gets active.} 10. h3 O-O`,
      },
    ],
  },
];
