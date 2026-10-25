# Testing Report — Assignment 2

**Student:** Rakan Almehmadi
**Student ID:** 202345970
**Course:** SWE 363
**Manual testing date:** 19 October 2026

## 1. Testing Environment

I ran the portfolio locally using Python's HTTP server:

    py -m http.server 8000

I accessed the website at:

    http://localhost:8000

The final version contains three project cards:

- Dormdry.
- KFUPM Building Alert System.
- Personal Portfolio Website.

## 2. Manual Functional Testing

After adding Dormdry, I tested the updated portfolio and confirmed
the following results.

| Test                                          | Expected Result                                        | Result |
| --------------------------------------------- | ------------------------------------------------------ | ------ |
| Reset filters                                 | All three projects appear                              | Passed |
| Select Concepts after resetting               | Dormdry and KFUPM Building Alert System appear         | Passed |
| Select Websites after resetting               | Only Personal Portfolio Website appears                | Passed |
| Search for Dormdry after resetting            | Only Dormdry appears                                   | Passed |
| Search for an unmatched term                  | No projects found message appears                      | Passed |
| Reset after an unsuccessful search            | All three projects return                              | Passed |
| Open and close Project details                | Additional information expands and collapses           | Passed |
| Refresh after choosing filters                | Saved search and category preferences are restored     | Passed |
| Switch the theme and refresh                  | The selected theme is restored                         | Passed |
| Submit missing or invalid contact information | Validation feedback appears                            | Passed |
| Submit valid contact information              | A local confirmation appears without sending a message | Passed |

## 3. Manual Visual and Accessibility Testing

I also completed the following checks. All passed in the browsers
and screen sizes I tested.

| Check                                                | Result |
| ---------------------------------------------------- | ------ |
| Dormdry illustration loads correctly                 | Passed |
| Existing project illustrations load correctly        | Passed |
| Layout remains readable at mobile and desktop widths | Passed |
| Keyboard navigation and visible focus work           | Passed |
| Light and dark themes remain readable                | Passed |
| Reduced-motion preferences are respected             | Passed |
| Website works in the browsers I tested               | Passed |

These are my manual testing results. They do not establish
compatibility with every browser or device.

## 4. HTML Review

ChatGPT/Codex reviewed my uploaded HTML file and found that:

- Dormdry was placed inside the project grid.
- Dormdry used the existing concept category.
- The description clearly identified Dormdry as a prototype.
- Proposed features were distinguished from implemented functionality.
- The image reference was assets/images/laundry-app.png.
- No obvious HTML nesting problems were found.

The assistant suggested using Project topics as the accessible
label for Dormdry's tags because those tags describe topics
rather than programming technologies.

The HTML review was separate from my browser testing.

## 5. Earlier Automated Verification

Before Dormdry was added, ChatGPT/Codex checked the JavaScript
syntax and ran 19 automated checks against the original
three-project Assignment 2 implementation using jsdom.

All 19 checks passed at that stage.

The automated checks covered:

- Initial project visibility and enabled controls.
- Case-insensitive search and matching project tags.
- Combined search and category filtering.
- Result counts and empty-state feedback.
- Reset behavior and search focus.
- Restoring saved filter preferences.
- Theme switching and saved theme state.
- Recovery from malformed or invalid saved filter values.
- Continued interaction when browser storage is blocked.
- Invalid name, email, and message handling.
- Local form confirmation with input treated as text.
- Clearing confirmation after editing.
- Existing asset paths and unique HTML IDs.
- Static content availability without JavaScript.

jsdom simulates a document. It does not render the website
or establish real-browser compatibility.

The assistant's attempt to install a browser for additional
testing failed because the downloads were invalid or truncated.
The manual browser results above were reported by me.

## 6. Automated Test Limitation

The supplied automated tests were originally written for
three project cards. Adding Dormdry changes the expected total
to three projects and the number of concept projects to three.

The earlier automated results therefore apply only to the
original three-project implementation.

The automated tests have not been documented as updated and
rerun for the final three-project version. My manual testing
results are separate from those earlier automated results.

## 7. Deployment Verification

The results in this report concern the locally served website.

After publishing the website, I should verify that its HTML,
CSS, JavaScript, and images load correctly at the published URL.
No deployment test result is claimed in this report.

## 8. Conclusion

All documented manual checks passed for the updated three-project
portfolio. These checks included images, project discovery,
expandable details, responsive layout, keyboard navigation,
themes, saved preferences, and contact-form validation.

The earlier 19 automated checks passed for the original
three-project version. They are not presented as an automated
retest of the updated website.
