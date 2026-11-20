export default [
  {
    id: 'nimzo-indian-defense',
    name: 'Nimzo-Indian Defense',
    side: 'black',
    eco: 'E20–E59',
    category: 'vs-d4',
    level: 'advanced',
    description:
      "Pin the c3 knight with ...Bb4, fight for e4 with pieces, and be ready to give up the bishop to double White's pawns. Flexible, rich, and a favorite of world champions.",
    lines: [
      {
        name: 'Classical 4.Qc2: 5.a3 main line',
        moves: `1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 {The pin stops e4 and threatens to double White's pawns.} 4. Qc2 {White avoids doubled pawns by recapturing with the queen.} O-O 5. a3 Bxc3+ 6. Qxc3 b6 {The bishop goes to b7 to control e4.} 7. Bg5 Bb7 8. e3 d6 9. f3 Nbd7 10. Bd3 c5 11. Ne2 Rc8 {Line up against White's queen on the c-file.}`,
      },
      {
        name: 'Classical 4.Qc2: 7.Nf3',
        moves: `1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Qc2 O-O 5. a3 Bxc3+ 6. Qxc3 b6 7. Nf3 Bb7 8. e3 d6 9. Be2 Nbd7 10. O-O Ne4 {Plant the knight on e4 and kick the queen.} 11. Qc2 f5 {Support the knight and prepare kingside play.}`,
      },
      {
        name: 'Classical 4.Qc2: 5.e4',
        moves: `1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Qc2 O-O 5. e4 d5 {Hit the center immediately while White's king is still in the middle.} 6. e5 Ne4 7. Bd3 c5 {Attack the base of the chain on d4.}`,
      },
      {
        name: 'Classical 4.Qc2: 5.Nf3',
        moves: `1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Qc2 O-O 5. Nf3 c5 6. dxc5 Na6 {The knight will recapture on c5 with tempo.} 7. a3 Bxc3+ 8. Qxc3 Nxc5 9. b4 Nce4`,
      },
      {
        name: 'Classical 4.Qc2: 5.Bg5',
        moves: `1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Qc2 O-O 5. Bg5 h6 6. Bh4 c5 7. dxc5 Na6 8. a3 Bxc3+ 9. Qxc3 Nxc5 10. f3 d5 {Open the center while White is behind in development.}`,
      },
      {
        name: 'Rubinstein 4.e3: Main line',
        moves: `1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. e3 O-O 5. Bd3 d5 6. Nf3 c5 7. O-O Nc6 8. a3 Bxc3 9. bxc3 dxc4 {Open the position to make White's doubled pawns a target.} 10. Bxc4 Qc7 11. Bd3 e5 {Hit the center; the e5 pawn fights for the key squares.}`,
      },
      {
        name: 'Rubinstein 4.e3: 5.Nge2',
        moves: `1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. e3 O-O 5. Nge2 {White wants to recapture on c3 with a knight.} d5 6. a3 Be7 {Keep the bishop: there is no reason to give it up now.} 7. cxd5 exd5 8. g3 c6`,
      },
      {
        name: 'Hübner-style vs 4.Nf3: 5.g3',
        moves: `1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Nf3 c5 5. g3 cxd4 6. Nxd4 O-O 7. Bg2 d5 8. cxd5 Nxd5 9. Qb3 Qa5 {Keep the pin and defend the bishop.} 10. Bd2 Nc6 11. Nxc6 bxc6`,
      },
      {
        name: '4.Nf3 c5 5.e3',
        moves: `1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Nf3 c5 5. e3 O-O 6. Bd3 d5 7. O-O Nc6 8. a3 Bxc3 9. bxc3 dxc4 10. Bxc4 Qc7 {Transposing to the main Rubinstein plans.}`,
      },
      {
        name: 'Sämisch: 4.a3',
        moves: `1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. a3 Bxc3+ {Forced, but it gives White doubled c-pawns.} 5. bxc3 c5 6. e3 Nc6 7. Bd3 O-O 8. Ne2 b6 9. e4 Ne8 {A classic idea: stop e5 with tempo-gaining ...f5 and attack the weak c4 pawn.} 10. O-O Ba6`,
      },
      {
        name: 'Kmoch: 4.f3',
        moves: `1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. f3 {White insists on e4.} d5 {Stop it directly.} 5. a3 Be7 6. e4 dxe4 7. fxe4 e5 {Strike the big center before it rolls forward.} 8. d5 Bc5 {The bishop takes the g1–a7 diagonal.} 9. Nf3`,
      },
      {
        name: 'Leningrad: 4.Bg5',
        moves: `1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Bg5 h6 5. Bh4 c5 6. d5 d6 7. e3 Bxc3+ 8. bxc3 e5 {Set the pawns on dark squares, away from White's remaining bishop.} 9. Bd3 Nbd7`,
      },
    ],
  },
];
