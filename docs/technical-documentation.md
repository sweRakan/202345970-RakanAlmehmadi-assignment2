# Technical Documentation — Assignment 2

**Student:** Rakan Almehmadi
**Student ID:** 202345970
**Course:** SWE 363

## 1. Project Overview

This project is a responsive, single-page portfolio extended
from Assignment 1.

Assignment 2 adds live project search, category filtering,
saved browsing preferences, expandable project details,
transitions, and user feedback.

The website uses HTML, CSS, and plain JavaScript. It does not
require a framework, backend, database, API key, or build step.

## 2. File Structure

| Path                             | Purpose                                                          |
| -------------------------------- | ---------------------------------------------------------------- |
| index.html                       | Page content, project cards, controls, and contact form          |
| css/styles.css                   | Layout, themes, responsive styling, and transitions              |
| js/script.js                     | Search, filtering, storage, theme switching, and form validation |
| assets/images/building-alert.svg | Building Alert project illustration                              |
| assets/images/portfolio.svg      | Portfolio project illustration                                   |
| assets/images/laundry-app.png    | Dormdry project illustration                                     |
| README.md                        | Project overview and setup instructions                          |
| docs/technical-documentation.md  | Technical implementation details                                 |
| docs/ai-usage-report.md          | AI assistance and student modifications                          |
| docs/testing.md                  | Automated and manual testing records                             |
| tests/check.cjs                  | Automated checks originally written for two projects             |
| package.json                     | Optional development-test configuration                          |
| .gitignore                       | Files and folders excluded from Git                              |

The website itself has no third-party runtime dependencies.
The optional automated tests use jsdom.

## 3. Page Structure

The page contains:

- Header and navigation.
- About section.
- Projects section.
- Skills section.
- Contact section.
- Footer.

Semantic elements such as header, nav, main, section, article,
and footer organize the content.

The JavaScript file is loaded with defer so it runs after
the HTML has been parsed.

## 4. Current Projects

The portfolio contains three project cards.

| Project                     | Category | Status                   |
| --------------------------- | -------- | ------------------------ |
| Dormdry                     | concept  | Mobile app prototype     |
| KFUPM Building Alert System | concept  | Proposed website concept |
| Personal Portfolio Website  | website  | Implemented portfolio    |

### Dormdry

Dormdry is a mobile app prototype exploring shared laundry
management in student housing.

Its proposed features include:

- Organizing laundry queues.
- Reminding students to collect their clothes.
- Allowing users to report faulty washing machines.

These are proposed application features, not working services
implemented inside the portfolio.

The card includes a description, topic tags, an illustration,
and expandable project details.

### KFUPM Building Alert System

This project proposes a website for reporting campus building
maintenance issues with descriptions and photos.

It remains a concept. The portfolio does not implement
a maintenance-reporting service.

### Personal Portfolio Website

This is the implemented website containing the project cards,
theme controls, search, filters, and contact-form demonstration.

## 5. Live Search and Category Filtering

Each project card has the project-card class and a
data-category attribute.

The supported categories are:

- concept
- website

The category selector also provides an all option.

JavaScript collects the project cards once and caches their
lowercase text content. Search includes titles, descriptions,
tags, and expandable details.

The input event on the search field and the change event
on the category selector call updateProjects().

A project appears when both conditions are satisfied:

1. Its text includes the trimmed, lowercase search query.
2. Its category matches the selected category, or all is selected.

Search is case-insensitive and uses literal text matching.
It does not interpret the query as a regular expression.

Unmatched cards receive the hidden attribute, removing them
from the layout and keyboard navigation.

### Result Feedback

After each update, the page displays the number of visible
projects out of the total.

With filters reset, the final version displays:

    3 of 3 projects shown

Selecting Concepts displays two projects. Selecting Websites
displays one project.

If no projects match, an empty-state message suggests changing
the search or resetting the filters.

### Reset Filters

The Reset filters button:

- Clears the search field.
- Selects All projects.
- Updates the displayed cards.
- Saves the default filter values.
- Moves keyboard focus to the search field.

Resetting project filters does not change the selected theme.

## 6. Data Handling and localStorage

The website uses localStorage to save preferences.

| Storage Key                | Stored Value                       | Purpose                     |
| -------------------------- | ---------------------------------- | --------------------------- |
| rakan-portfolio-theme      | light or dark                      | Remember the selected theme |
| rakan-portfolio-filters-v1 | JSON containing query and category | Remember project filters    |

Example filter data:

    {"query":"Dormdry","category":"concept"}

### Restoring Filters

restoreFilters() reads and parses the saved JSON.

It accepts the saved value only when:

- The value is a non-null object.
- query is a string of no more than 120 characters.
- category is all, concept, or website.

Invalid JSON or invalid values produce a friendly message.
The page keeps its default filters so users can continue browsing.

A later successful filter save replaces invalid stored data.

### Storage Failures

Storage operations use try/catch.

If reading or writing preferences fails, the page displays
feedback while keeping the controls usable for the current visit.

Preferences are stored for the same browser profile and origin.
Changing the hostname, protocol, or port creates a different
storage context.

The search query is stored locally. Contact-form entries
are not stored.

## 7. Theme Switching

The initial theme follows the device color preference unless
a valid saved theme is available.

The theme button switches between light and dark modes.

JavaScript updates:

- The data-theme attribute on the document element.
- The button's aria-pressed state.
- The saved theme preference when storage is available.

CSS variables define the colors used by both themes.

The implementation does not automatically respond to device
theme changes after the page has loaded.

## 8. Expandable Project Details

Each project uses native details and summary elements.

Visitors can expand or collapse additional information
using the mouse or keyboard.

This feature does not require custom JavaScript and remains
available when JavaScript is disabled.

Project details distinguish proposed features from
implemented functionality.

## 9. Contact-Form Validation

The contact section is a local demonstration.
It does not send email, submit messages to a server,
or save contact entries.

The form contains:

| Field   | Validation                                                              |
| ------- | ----------------------------------------------------------------------- |
| Name    | Required, maximum 80 characters, not whitespace-only                    |
| Email   | Required, email format, maximum 254 characters                          |
| Message | Required, maximum 2000 characters, minimum 10 characters after trimming |

The submit listener prevents normal form submission.

JavaScript trims the name and message, applies custom validity
messages, and calls reportValidity().

The browser handles required-field and email-format validation.

When the form is valid, a confirmation clearly states that
the message was not sent or stored.

The confirmation uses textContent so entered text is not
interpreted as HTML.

Editing a field clears the previous confirmation. Editing
the name or message also clears its previous custom error.

The submit button remains disabled until JavaScript installs
the form handler.

## 10. Images

The website uses local project illustrations.

Dormdry references:

    assets/images/laundry-app.png

Its illustration was generated using ChatGPT's image-generation
tool to represent the project idea. It is not a screenshot
of the actual prototype.

Project images include:

- Descriptive alternative text.
- Width and height attributes.
- Lazy loading.
- Responsive styling.

CSS displays project images in a 16:9 area using object-fit: cover.

Filenames, capitalization, extensions, and folder locations
must match the paths in index.html.

Relative paths allow the website to work under a repository
subpath when hosted.

## 11. Responsive Design

CSS Grid and Flexbox organize the page.

The layout adapts as follows:

- Desktop: two project columns and a multi-column hero.
- At widths of 900px or less: hero and contact sections stack.
- At widths of 700px or less: project controls stack.
- At widths of 600px or less: project and skill cards use one column.

The container width and flexible spacing help keep the content
readable across different screen sizes.

## 12. Animation and Transitions

The website uses lightweight transitions:

- Button background and border colors transition smoothly.
- Project cards move upward slightly on pointer hover.
- Card borders provide interaction feedback.
- Anchor navigation uses smooth scrolling.

The prefers-reduced-motion media query disables the new
transitions, hover movement, and smooth scrolling when
the visitor prefers reduced motion.

## 13. Accessibility

Accessibility features include:

- Semantic page landmarks.
- A logical heading structure.
- A Skip to content link.
- Visible labels for form and filter controls.
- Alternative text for project images.
- Visible keyboard focus.
- Native keyboard-accessible project details.
- Live status messages for results and feedback.
- An accessible pressed state for the theme button.

Hidden project cards are removed from interaction.

Without JavaScript, the page still displays its main content,
project cards, images, and native expandable details.
Search controls remain hidden, and a notice explains the limitation.

## 14. Performance and Input Handling

The implementation keeps the project small by using:

- Plain JavaScript.
- Local images.
- No external fonts or API requests.
- Cached project text for searching.
- Lazy-loaded project illustrations.

Each filtering update scans the project list once.
This is suitable for the current three-project portfolio.

For a much larger catalogue, debouncing and a dedicated
project-data model could be considered.

Search queries are treated as text. Form confirmation uses
textContent rather than HTML insertion.

Stored filter values are validated before they are applied.

## 15. Running Locally

Open a terminal in the folder containing index.html.

On Windows, run:

    py -m http.server 8000

Alternatively, with Python available as python, run:

    python -m http.server 8000

Open:

    http://localhost:8000

Keep the terminal running while using the website.
Press Ctrl+C in the terminal to stop the server.

No npm installation is required to run the portfolio.

## 16. Maintenance

To add another project:

1. Add an article inside the project-grid element.
2. Give it the project-card class.
3. Assign a supported data-category value.
4. Provide accurate content and descriptive image alternative text.
5. Place its image in assets/images.
6. Test search, filtering, details, and image loading.

JavaScript automatically includes additional project-card
elements when the page reloads and calculates the total count.

If a new category is introduced, update both the HTML selector
options and the allowed category values in restoreFilters().

Update documentation and automated test expectations when
the project content or behavior changes.

## 17. Testing and Verification

Student manual testing of the updated three-project portfolio
was completed on 19 October 2026.

All documented manual checks passed, including:

- Search and category filtering.
- Reset behavior and empty-state feedback.
- Expandable details.
- Image loading.
- Responsive layout.
- Keyboard navigation and focus.
- Theme switching.
- Saved preferences.
- Contact-form validation.
- Reduced-motion behavior.

Detailed results are recorded in docs/testing.md.

The assistant previously ran 19 automated checks using jsdom
against the original two-project version. All passed at that stage.

The supplied automated tests still require updated project-count
expectations before being rerun against the three-project version.
The earlier results are not presented as an automated retest
of the final website.

Local verification is separate from deployment testing.
The published URL and its assets should be checked after deployment.

## 18. Known Limitations

- The contact form does not deliver messages.
- Dormdry is a prototype represented in the portfolio.
- The Building Alert System is a proposed concept.
- Preferences are local to a browser and are not synchronized.
- No external API is used, so no API loading state is required.
- Manual testing does not establish compatibility with every device.
- Automated tests have not been documented as rerun after Dormdry was added.

## 19. AI Assistance

ChatGPT/Codex assisted with implementation, documentation,
the Dormdry card template, wording, illustration, and review.

The student supplied the Dormdry project context, integrated
the card, and reported the manual testing results.

The detailed account of assistance and modifications is in:

    docs/ai-usage-report.md
