# Rakan's Interactive Portfolio — Assignment 2

**Student:** Rakan Almehmadi · **ID:** 202345970 · **Course:** SWE 363

A responsive HTML, CSS, and JavaScript portfolio extended from my Assignment 1 website. Visitors can explore projects, read details, switch themes, and try a contact-form validation demonstration.

## What's new

- Live, case-insensitive project search across titles, descriptions, tags, and details.
- A category selector that combines with the search (Concepts or Websites).
- A live result count, helpful empty state, and Reset filters button.
- Saved search and category preferences, restored on the next visit.
- Expandable project details using native HTML `details` and `summary`.
- Subtle card and button transitions with reduced-motion support.
- Friendly feedback when stored filters are corrupt or browser storage is blocked.

The existing light/dark preference and validated contact demo remain available. The building-alert project is a concept; this portfolio does not implement that service. The contact form never sends or saves messages.

## Run locally

1. Download/extract this project, keeping all folders together.
2. Open a terminal inside the folder containing `index.html`.
3. With Python 3 installed, run:

   ```sh
   python -m http.server 8000
   ```

   On Windows, use `py -m http.server 8000` if `python` is unavailable.

4. Visit `http://localhost:8000` in your browser.
5. Stop the server with Ctrl+C.

Alternatively, open the folder in VS Code and use Live Server. No build, npm installation, framework, API key, or database is needed. Opening `index.html` directly displays the page, but use a local server to test predictable storage behavior.

## Try the features

1. Go to Projects, type `campus`, and confirm only the campus concept remains.
2. Select Websites while that search is present: the empty state explains how to recover.
3. Choose Reset filters; all three projects return.
4. Select Websites and reload: the selection is restored.
5. Expand Project details and try the Dark mode toggle.
6. In Contact, try missing fields, an invalid email, and a valid message of at least 10 non-padding characters. A valid entry produces a local confirmation only.

## Files

| Path                              | Purpose                                                |
| --------------------------------- | ------------------------------------------------------ |
| `index.html`                      | Content, semantic layout, accessible controls and form |
| `css/styles.css`                  | Responsive layouts, themes and transitions             |
| `js/script.js`                    | Filtering, storage, theme and form behavior            |
| `assets/images/`                  | Two SVG illustrations and one PNG laundry illustration |
| `docs/technical-documentation.md` | Architecture, data, errors and maintenance             |
| `docs/ai-usage-report.md`         | Transparent account of AI assistance and review status |
| `docs/testing.md`                 | Verification results and manual test checklist         |
| `tests/check.cjs`, `package.json` | Optional automated development checks                  |

## Requirement mapping

| Assignment requirement | Implementation                                                  |
| ---------------------- | --------------------------------------------------------------- |
| Continue Assignment 1  | Original content, images, layout, themes and form retained      |
| Dynamic content        | Live search, category filter, count and expandable details      |
| Data handling          | Saved filter/theme preferences and validated form               |
| Animation              | Button color and card movement/border transitions               |
| Feedback               | Empty results, live count, storage warnings and form validation |
| AI enhancement         | ChatGPT/Codex implementation and documentation assistance       |
| Documentation          | This README and the documents in `docs/`                        |

## AI assistance and authorship

ChatGPT/Codex helped generate the Assignment 2 features and documentation. I added the Dormdry project using an AI-assisted template and description, integrated its illustration, and manually tested the updated three-project portfolio. My modifications and reported manual test results are documented in docs/ai-usage-report.md and docs/testing.md. The earlier 19 automated checks apply only to the original two-project version.

## Origin and publication

Starting repository: https://github.com/sweRakan/202345970-RakanAlmehmadi-assignment1

Starting commit: `5a6bf7a16397503981dd9329e961777c299581ab`.

Required new repository name: `202345970-RakanAlmehmadi-assignment2`.

The new repository and optional live deployment are not created by this package. See the submission guide. No external API, analytics, remote font or third-party runtime library is used.
