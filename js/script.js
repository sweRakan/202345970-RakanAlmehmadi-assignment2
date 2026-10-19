"use strict";

const themeToggle = document.querySelector("#theme-toggle");
const contactForm = document.querySelector("#contact-form");
const contactSubmit = document.querySelector("#contact-submit");
const formStatus = document.querySelector("#form-status");
const nameInput = document.querySelector("#name");
const messageInput = document.querySelector("#message");
const year = document.querySelector("#year");

const themeStorageKey = "rakan-portfolio-theme";

// Apply a theme and keep the button's accessible state in sync.
function applyTheme(theme) {
  const isDark = theme === "dark";

  document.documentElement.dataset.theme = theme;
  themeToggle.setAttribute("aria-pressed", String(isDark));
}

// Use a saved preference, or fall back to the device's preference.
let initialTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
  ? "dark"
  : "light";

try {
  const savedTheme = localStorage.getItem(themeStorageKey);

  if (savedTheme === "light" || savedTheme === "dark") {
    initialTheme = savedTheme;
  }
} catch {
  showStorageWarning();
}

applyTheme(initialTheme);
themeToggle.hidden = false;

themeToggle.addEventListener("click", function () {
  const currentTheme = document.documentElement.dataset.theme;
  const nextTheme = currentTheme === "dark" ? "light" : "dark";

  applyTheme(nextTheme);

  try {
    localStorage.setItem(themeStorageKey, nextTheme);
  } catch {
    showStorageWarning();
  }
});

// Show the current year automatically.
year.textContent = String(new Date().getFullYear());

// Clear previous feedback when the visitor changes an entry.
contactForm.addEventListener("input", function (event) {
  formStatus.textContent = "";

  if (event.target === nameInput || event.target === messageInput) {
    event.target.setCustomValidity("");
  }
});

// This is a local demonstration: no message is sent or stored.
contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = nameInput.value.trim();
  const message = messageInput.value.trim();

  nameInput.setCustomValidity(
    name.length === 0 ? "Please enter your name." : "",
  );

  messageInput.setCustomValidity(
    message.length < 10
      ? "Please enter at least 10 characters excluding outer spaces."
      : "",
  );

  if (!contactForm.reportValidity()) {
    return;
  }

  // textContent treats user input as text instead of HTML.
  formStatus.textContent =
    `Thanks, ${name}! Your entries passed validation. ` +
    "This is a demo, so your message was not sent or stored.";
});

// Enable the form only after its submit handler is ready.
contactSubmit.disabled = false;

// A blocked storage API must not prevent any of the page interactions.
function showStorageWarning() {
  document.querySelector("#storage-status").textContent =
    "Your choices work for this visit, but this browser could not save or restore them.";
}

const searchInput = document.querySelector("#project-search");
const categorySelect = document.querySelector("#project-category");
const projectCards = Array.from(document.querySelectorAll(".project-card"));
const projectCount = document.querySelector("#project-count");
const emptyState = document.querySelector("#project-empty");
const filterStorageKey = "rakan-portfolio-filters-v1";
// Cache searchable text once; include descriptions, tags, and project details.
const searchableProjects = projectCards.map(card => ({
  card,
  text: card.textContent.toLowerCase(),
  category: card.dataset.category,
}));

function restoreFilters() {
  try {
    const raw = localStorage.getItem(filterStorageKey);
    if (!raw) return;
    const saved = JSON.parse(raw);
    if (!saved || typeof saved !== "object" ||
        typeof saved.query !== "string" || saved.query.length > 120 ||
        !["all", "concept", "website"].includes(saved.category)) {
      throw new Error("Invalid saved filters");
    }
    searchInput.value = saved.query;
    categorySelect.value = saved.category;
  } catch {
    document.querySelector("#storage-status").textContent =
      "Saved filters could not be restored. All projects are shown; you can choose new filters.";
  }
}

function updateProjects(save = true) {
  const query = searchInput.value.trim().toLowerCase();
  const category = categorySelect.value;
  let visible = 0;
  for (const project of searchableProjects) {
    const matches = project.text.includes(query) &&
      (category === "all" || project.category === category);
    project.card.hidden = !matches;
    if (matches) visible += 1;
  }
  projectCount.textContent = `${visible} of ${projectCards.length} projects shown`;
  emptyState.hidden = visible !== 0;
  if (save) {
    try {
      localStorage.setItem(filterStorageKey, JSON.stringify({
        query: searchInput.value,
        category,
      }));
    } catch {
      showStorageWarning();
    }
  }
}

restoreFilters();
updateProjects(false);
document.querySelector("#project-controls").hidden = false;
searchInput.addEventListener("input", () => updateProjects());
categorySelect.addEventListener("change", () => updateProjects());
document.querySelector("#reset-projects").addEventListener("click", () => {
  searchInput.value = "";
  categorySelect.value = "all";
  updateProjects();
  searchInput.focus();
});
