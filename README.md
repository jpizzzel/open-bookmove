# OpenBook

A free, open-source chess opening trainer. Learn opening lines move by move, with notes explaining each idea, then keep them in memory with spaced repetition.

No account, no paywall, no tracking. Your progress is stored in your own browser.

## What it does

- **Library of 44 openings** for White and Black: 411 lines and about 2,500 moves to learn. It covers the Italian, Ruy Lopez, Sicilian Najdorf and Dragon, Caro-Kann, French, Queen's Gambit, London, King's Indian, Nimzo-Indian, Grünfeld, English and more.
- **Learn mode.** Each new move is shown with an arrow and a note on why it is played. Then you replay the whole line from memory before it counts as learned.
- **Spaced repetition per move.** Every one of your moves has its own review schedule (tomorrow, 3 days, a week, then longer). Moves you miss come back sooner.
- **Fast reviews.** Reviews skip ahead to a few moves before the move being tested, so deep lines don't make you replay 15 moves each time. You can turn this off in Settings.
- **Opponent alternatives.** While learning, you see the other replies your opponent could play and which line covers each.
- **Drill your mistakes.** A focused session on the moves you keep getting wrong.
- **Build your own repertoire.** Play moves on the board or paste a PGN, for example a Lichess study export. Variations and `{comments}` are kept. Any built-in course can be copied and edited.
- **Export.** Download any course as PGN, and back up or restore your progress as a JSON file.
- Chapters, mastery breakdown, daily goal, streak, activity heatmap, board themes and keyboard shortcuts.

## Run it locally

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # validates every course, then builds to dist/
```

`dist/` is a static site. Host it anywhere: GitHub Pages, Netlify, Cloudflare Pages, or any web server.

## Publish on GitHub Pages

1. Push this folder to a new GitHub repository.
2. In the repository, open **Settings → Pages** and set **Source** to **GitHub Actions**.
3. Every push to `main` now builds and deploys the site (see `.github/workflows/deploy.yml`).

## Adding or fixing openings

Courses live in `src/data/courses/`, one file per opening. Lines are plain PGN movetext with optional `{notes}`. See [CONTRIBUTING.md](CONTRIBUTING.md).

Always run `npm run validate` after editing. It checks that every move is legal and that each course gives the learner exactly one move in every position.

## Project layout

```
src/
  data/courses/   opening content (one file per course)
  lib/            pgn parser, move trees, spaced repetition, storage, board wrapper
  views/          home, library, course, trainer, explorer/editor, settings
scripts/validate.mjs   content checker (runs before every build)
```

## Credits and license

- Board: [chessground](https://github.com/lichess-org/chessground) (GPL-3.0), the board used by Lichess. Pieces are the cburnett set.
- Move rules: [chess.js](https://github.com/jhlywa/chess.js) (BSD-2-Clause).

OpenBook is licensed under the **GNU GPL v3.0 or later** (see `LICENSE`), which chessground requires. You can use, share and modify it freely. If you distribute a modified version, it has to stay open source under the same license.

The opening notes in this project were written for it. OpenBook is an independent project and is not affiliated with any commercial opening-training service.
