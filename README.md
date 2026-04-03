# Vinsan Advisory Intelligence - Frontend Component

This repository contains the Next.js frontend web application and the design specifications for the Vinsan Advisory Intelligence platform.

## Project Structure

- `frontend/`: The core Next.js web application initialized with React, Tailwind CSS, TypeScript, and ESLint.
- `stitch_screens/`: Contains the exported HTML UI boilerplate, raw image mockups, and overarching Design System configurations sourced from the overarching Stitch workspace.
- `download_screens.py`: A Python script automatically utilized to pull down the project assets from Stitch.

## The Design System

The platform's aesthetic follows **"The Sovereign Analyst"** creative north star—a high-end, bespoke digital concierge. By avoiding traditional "boxed-in" dashboard layouts, it moves towards an authoritative yet breathless **Digital Editorial** experience.

Key principles located in `stitch_screens/design_systems.json`:
- **"No-Line" Hierarchy:** Borders are swapped for shifts in background surface tones. 
- **Typography:** Utilizing *Manrope* for bold headers/monumental figures and *Inter* for workhorse readability in dense data tables.
- **Elevation Layers:** The UI treats interfaces like stacked sheets of premium paper, leveraging gentle shadow diffusions and Glassmorphism (blur) over generic dropshadows.

## Quick Start

To manage the Next.js frontend application locally:

```bash
# Navigate to the frontend workspace
cd frontend

# Start the development server
npm run dev
```

Now open [http://localhost:3000](http://localhost:3000) with your browser to launch the base app.

## Upcoming Milestones

The source files currently stored in `stitch_screens/` contain HTML representations and complete visual mockups (screens) that will need to systematically be converted into reusable, responsive React components. They combine to construct the application (Dashboard, Interactive Spreadsheets, Risk Profiling, User Settings, etc.), fully integrated with this Next.js baseline!
