# AI Usage Report — Assignment 2

**Student:** Rakan Almehmadi
**Student ID:** 202345970
**Course:** SWE 363
**AI tool:** ChatGPT/Codex

## 1. Purpose of AI Assistance

I used ChatGPT/Codex to help extend my Assignment 1 portfolio
with the interactive features required for Assignment 2.

The assistant used my existing portfolio and the assignment
instructions as the starting point. It generated the initial
Assignment 2 additions and drafted supporting documentation.

I also requested step-by-step guidance for opening the project,
running it locally, adding a project card, placing an image,
and reviewing my HTML.

## 2. How AI Was Used

| Area                | AI Assistance                                                                            |
| ------------------- | ---------------------------------------------------------------------------------------- |
| Requirements        | Suggested features addressing dynamic content, data handling, transitions, and feedback  |
| HTML                | Generated search controls, category filters, result feedback, and expandable details     |
| JavaScript          | Implemented filtering, saved preferences, and storage-error handling                     |
| CSS                 | Added responsive controls and transitions with reduced-motion support                    |
| Documentation       | Drafted the README, technical documentation, testing report, and AI usage report         |
| Dormdry description | Turned my explanation of the project into a short English description                    |
| Dormdry card        | Provided an HTML template and placement instructions                                     |
| Illustration        | Generated an illustration representing the laundry-management idea                       |
| Troubleshooting     | Explained how image filenames and relative paths must match                              |
| Review              | Reviewed my uploaded index file and suggested a more accurate label for its project tags |

No use of another AI coding tool is claimed.

## 3. AI-Assisted Assignment 2 Features

The initial implementation added:

- Live project search.
- Category filtering.
- A result count.
- An empty-results message.
- A Reset filters button.
- Saved search and category preferences.
- Expandable project details.
- Subtle transitions.
- Feedback when stored preferences cannot be restored or saved.

The existing theme preference and contact-form validation
were retained from Assignment 1.

These additions were generated with AI assistance. I do not
claim to have independently written the initial implementation.

## 4. Student Modification Log

I extended the prepared portfolio by adding Dormdry as a third
project card in index.html.

Dormdry is a prototype from my coursework about managing shared
laundry facilities in student housing. I explained the problems
behind the idea, including forgotten laundry, confusion about
turns, and faulty washing machines.

I used an AI-provided HTML template and AI-assisted wording
to present the project. I added the card to the project grid,
used the existing concept category, and added its illustration.

| Item              | My Action                                   | Assistance Received                                             |
| ----------------- | ------------------------------------------- | --------------------------------------------------------------- |
| Project selection | Selected Dormdry from my coursework         | I supplied the project idea and context                         |
| Project content   | Explained the problem and proposed features | AI helped prepare the English wording                           |
| HTML integration  | Added the Dormdry card to index.html        | AI supplied a template and placement instructions               |
| Category          | Used concept for the prototype              | AI explained how it fits the existing filter                    |
| Illustration      | Added the image and its relative path       | AI generated the illustration and explained how to include it   |
| Testing           | Checked the updated website locally         | AI suggested test steps and helped document my reported results |

This was an AI-assisted modification. I do not claim independent
authorship of the supplied template, description, or illustration.

## 5. Testing and Review

I ran the project locally using:

    py -m http.server 8000

I checked the updated three-project portfolio and confirmed that:

- Reset filters displayed all three projects.
- Concepts displayed Dormdry and KFUPM Building Alert System.
- Websites displayed only Personal Portfolio Website.
- Searching for Dormdry displayed only Dormdry.
- Unmatched searches displayed an empty-results message.
- Project details expanded and collapsed.
- The project illustrations loaded correctly.
- Saved filters and theme preferences remained after refreshing.
- Contact-form validation and local confirmation worked.
- The layout remained readable at the screen sizes I tested.
- Keyboard navigation and visible focus worked.
- Light and dark themes remained readable.
- Reduced-motion behavior worked.
- The website worked in the browsers I tested.

All documented manual checks passed.

ChatGPT/Codex separately reviewed my uploaded HTML file.
Earlier, it ran 19 automated checks on the original two-project
implementation. Those results are not an automated retest
of my updated three-project version.

The detailed verification record is in docs/testing.md.

## 6. Learning Outcomes

This work gave me practice with:

- Adding content inside an existing HTML structure.
- Using article, img, ul, li, details, and summary elements.
- Connecting an image through a relative file path.
- Assigning a project category using a data attribute.
- Checking whether new content works with existing interactions.
- Distinguishing a prototype from an implemented service.
- Recording manual testing separately from automated testing.

The JavaScript provides further examples of event listeners,
DOM updates, JSON, localStorage, and exception handling.
I should be able to explain these parts before presenting
the implementation as code I fully understand.

## 7. Student Reflection

Adding Dormdry helped me connect the portfolio to a project
from my own coursework. The template helped me follow the
HTML structure, and the testing steps helped me verify that
the new card worked with the existing search and filters.

I encountered an image-loading issue while integrating the
illustration. This helped me understand that the filename
and folder location must match the image path in the HTML.
I later checked that the illustration loaded successfully.

Using AI made it easier to get explanations and examples,
but I still needed to integrate the changes and test the
website on my computer.

## 8. Responsible Use and Modifications

I disclose that ChatGPT/Codex generated the initial Assignment 2
additions and assisted with the Dormdry template, description,
illustration, troubleshooting, and documentation.

The Dormdry illustration is AI-generated artwork representing
the idea. It is not a screenshot of the actual prototype.

Dormdry is described as a prototype, and the Building Alert
System is described as a concept. The portfolio does not claim
that their proposed services are implemented.

The contact form validates entries locally. It does not send
or store messages.

I distinguish my manual testing from the assistant's earlier
automated checks. I do not claim an automated retest of the
three-project version or verification of a published website.

The documentation was drafted with AI assistance and reflects
the project information and manual results I provided.

## 9. Final Reflection

The portfolio now includes Dormdry alongside the existing
projects. I added the card with AI assistance and completed
manual checks of the updated website.

All documented manual checks passed, including image loading,
search, category filtering, responsive layout, keyboard
navigation, themes, saved preferences, and form validation.

This work gave me practice integrating a project into an
existing website and checking its behavior. My next step
is to upload the updated files to the Assignment 2 repository
and verify the published website if I deploy it.
