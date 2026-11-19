export default [
  {
    id: 'alekhine-modern-white',
    name: 'Alekhine Defense: Modern Variation',
    side: 'white',
    eco: 'B04–B05',
    category: 'e4',
    level: 'intermediate',
    description:
      'Chase the knight with e5, then play the solid Modern Variation with 4.Nf3. Keep a space advantage without overextending.',
    lines: [
      {
        name: '4...Bg4: Main Line',
        moves:
          '1. e4 Nf6 {Alekhine\'s provocation: tempt White\'s pawns forward, then attack them.} 2. e5 {Gain space with tempo.} Nd5 3. d4 d6 4. Nf3 {The Modern Variation. Develop instead of overextending with more pawn moves.} Bg4 {Pin the knight that defends e5.} 5. Be2 e6 6. O-O Be7 7. h3 {Put the question to the bishop.} Bh5 8. c4 {Now kick the knight. White builds a broad center.} Nb6 9. Nc3 O-O 10. Be3 d5 11. c5 {Gain more space with tempo. White has a queenside space edge.}',
      },
      {
        name: '4...Bg4: 5...c6',
        moves:
          '1. e4 Nf6 2. e5 Nd5 3. d4 d6 4. Nf3 Bg4 5. Be2 c6 6. O-O Bxf3 7. Bxf3 {The bishop pair is a long-term trump.} dxe5 8. dxe5 e6 9. Qe2 Nd7 10. c4 {Kick the knight and grab more space.}',
      },
      {
        name: '4...g6: Kengis Line',
        moves:
          '1. e4 Nf6 2. e5 Nd5 3. d4 d6 4. Nf3 g6 {Fianchetto to pressure the center from afar.} 5. Bc4 {Hit the d5 knight and aim at f7.} Nb6 6. Bb3 Bg7 7. Qe2 {Support e5 and prepare O-O and h3.} Nc6 8. O-O O-O 9. h3 {Take g4 from the bishop.} a5 10. a4 {Stop ...a4 from trapping the bishop.}',
      },
      {
        name: '4...dxe5',
        moves:
          '1. e4 Nf6 2. e5 Nd5 3. d4 d6 4. Nf3 dxe5 5. Nxe5 {A centralized knight. Watch for tricks on f7.} g6 6. Bc4 c6 7. O-O Bg7 8. Re1 {Pressure along the e-file.} O-O 9. Bb3 {A pleasant space edge and active pieces.}',
      },
      {
        name: '4...Nc6',
        moves:
          '1. e4 Nf6 2. e5 Nd5 3. d4 d6 4. Nf3 Nc6 {Black pressures e5 and d4 directly.} 5. c4 Nb6 6. e6 {A pawn sacrifice that cripples Black\'s pawn structure.} fxe6 7. Nc3 g6 8. h4 {Attack on the kingside. Black\'s e6 pawns block their own bishop.} Bg7 9. h5',
      },
      {
        name: '4...c6',
        moves:
          '1. e4 Nf6 2. e5 Nd5 3. d4 d6 4. Nf3 c6 {Solid. The knight keeps c7 as a retreat.} 5. Be2 g6 6. c4 Nc7 7. exd6 {Release the tension and leave Black with a slightly awkward knight.} Qxd6 8. Nc3 Bg7 9. O-O O-O 10. h3 {Free development and extra central space.}',
      },
    ],
  },
];
