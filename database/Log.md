# Changelog

All notable changes to this project will be documented in this file. The format is based on [Keep a Changelog](https://keepachangelog.com).

## [Unreleased] - 2026-09-25

### Added
- **Dynamic Header Injection System:** Engineered an asynchronous `fetch()` pipeline to load `header.html` fragments, centralizing navigation markup and reducing DOM redundancy across all pages.
- **Header Dropdown Navigation:** Implemented a state-managed dropdown menu for the "Pages" button, complete with global document click-listeners to dismiss the active state and prevent UI overlap.
- **Site Title Routing:** Converted the main header title into an interactive navigation button, establishing a consistent global shortcut back to the home page.
- **Collapsible Sidebar Mechanics:** Integrated toggle event listeners for sidebar categories, utilizing CSS `max-height` transitions and arrow rotation for smooth expand/collapse animations.
- **Smooth Scroll Interception:** Developed a custom JavaScript routing handler that overrides default anchor jumps, forcing the isolated `.content` pane to glide to target sections via `scrollIntoView()`.
- **Horizontal Card Layout:** Introduced a dual-column flexbox architecture for the Music section, positioning media thumbnails adjacent to textual content and action buttons.
- **Card Thumbnail Integration:** Added dedicated image containers with `object-fit: cover` constraints to standard project cards to prevent boundary overflow.

### Changed
- **Viewport-Locked Layout Architecture:** Refactored the global CSS from a standard document flow to a strict `100vh` flexbox container, isolating the `.content` pane for independent scrolling while keeping the header and sidebar fixed.
- **Header Proportional Scaling:** Standardized the top banner to a rigid `10vh` viewport height ratio to maintain visual symmetry and brand presence across varying display resolutions.
- **Initial Routing Logic:** Replaced HTML meta-refresh redirects in `index.html` with JavaScript `window.location.replace()` to sanitize browser history and prevent back-button redirect loops.
- **Color Theme Standardization:** Unified the UI palette, enforcing the primary red (`#c62828`) for main interactive elements and dividers, while reserving purple (`#7e57c2`) strictly for sidebar accents.

### Fixed
- **Anchor Scroll Context Binding:** Resolved an issue where default anchor links targeted the `body` instead of the `.content` div by intercepting click events and programmatically scrolling the correct container.
- **Sidebar Overflow Constraints:** Applied independent `overflow-y: auto` to the sidebar to prevent layout distortion when navigation lists exceed the available vertical real estate.
- **Button Alignment in Cards:** Utilized `flex-grow` and `margin-top: auto` on card button groups to ensure action buttons consistently align at the bottom of the card, regardless of text length.

### Metrics & Impact Summary
- **Component Modularity:** Centralized header markup, decreasing maintenance overhead and ensuring UI consistency across all pages.
- **UX Fluidity:** Smooth scrolling and collapsible menus significantly improve navigation efficiency and user engagement.
- **Viewport Stability:** The `100vh` lock eliminates double-scrollbar artifacts and delivers a native application-like browsing experience.
- **Asset Organization:** Consolidated project card structures into semantic containers for cleaner DOM hierarchy and easier future styling.