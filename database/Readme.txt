# thelemur55 - Personal Developer Portfolio

A lightweight, modular personal website built with vanilla HTML, CSS, and JavaScript. This project serves as a central hub for my development projects, Minecraft content, curated tools, and technical tutorials.

## 🚀 Features

- **Dynamic Header Injection:** Asynchronous `fetch()` pipeline to load `header.html` fragments, centralizing navigation and reducing DOM redundancy.
- **Viewport-Locked Layout:** Strict `100vh` flexbox container architecture that isolates the main content pane for independent scrolling while keeping the header and sidebar fixed.
- **Collapsible Sidebar Navigation:** Toggle event listeners with CSS `max-height` transitions for smooth expand/collapse menu mechanics.
- **Smooth Scroll Interception:** Custom JavaScript routing handler that overrides default anchor jumps, forcing the `.content` pane to glide to target sections.
- **Modular Component Design:** Centralized UI components (Header, Cards, Tutorials) for easy maintenance and consistent styling.
- **Dropdown Navigation:** State-managed dropdown menus in the header with global click-listeners to prevent UI overlap.

## ️ Tech Stack

- **HTML5** (Semantic Markup)
- **CSS3** (Flexbox, Grid, Custom Properties, Transitions)
- **Vanilla JavaScript** (ES6+, DOM Manipulation, Fetch API)

##  Project Structure

```text
thelemur55-site/
│
├── index.html            # Initial redirect to home.html
├── home.html             # Welcome and introduction
├── cataloge.html         # Curated links (Tools, AI, OS, Gaming)
├── projects.html         # General, Windows, and DataPack projects
├── music.html            # Audio remixes and media
├── minecraft.html        # Minecraft tutorials and server hosting
── about_me.html         # About me and contact information
│
├── header.html           # Reusable header fragment (injected via JS)
├── style.css             # Global stylesheet and layout architecture
├── script.js             # Core logic (Header fetch, toggles, smooth scroll)
└── Log.md                # Changelog and version history