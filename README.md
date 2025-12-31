# webChatGPT

# webChatGPT (Legacy Prototype)

A small, early-stage browser prototype that attempts to collect a prompt from an HTML form and display a ChatGPT-style response on the page.

This repository is best understood as a **front-end spike** created during early experimentation. In its current state, it is not production-ready and is **not safe to deploy as-is** because it (a) contains incomplete placeholder code and (b) demonstrates an anti-pattern for API-key handling.

---

## What this project is (and is not)

### Intended behavior
- Render an `index.html` page with a form.
- Capture a user prompt (`#prompt`) on submit.
- Send the prompt to an OpenAI model (historically `text-davinci-002`).
- Display the response in the page (`#response_from_ChatGPT`).

### Current reality (as committed)
- `index.html` and `apiQuery.js` include literal `...` placeholders that make the code incomplete.
- The project appears to attempt **direct browser-to-OpenAI API calls**, which is not a viable or safe design for any real deployment (API keys must not be exposed to browsers).

---

## Repository contents

- `index.html` — UI skeleton (form + output div + embedded iframe placeholder)
- `apiQuery.js` — jQuery submit handler + incomplete API request logic
- `style.css` — minimal page sizing styles
- `.replit` / `replit.nix` — Replit configuration (optional)

---

## How to run locally (UI-only)

Because this is a static HTML + JS prototype, you can serve it locally to view the UI:

### Option A: Python simple server
```bash
cd webChatGPT-main
python -m http.server 8000
