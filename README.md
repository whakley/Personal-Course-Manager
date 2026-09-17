# Personal Course Manager

Personal Course Manager is a Windows desktop application for organizing course files, surfacing important course information, and managing classes, assignments, and exams from one place.

The project currently uses Electron, React, and TypeScript. It is being developed as a personal learning project and local alternative to the parts of Canvas that are useful for day-to-day course management.

## Current status

The project is in its first milestone: building a course list and course overview with sample data. File uploads, persistent storage, document extraction, and calendar integration have not been added yet.

See the [development roadmap](docs/ROADMAP.md) for the current checklist and [technical decisions](docs/DECISIONS.md) for the reasoning behind the main technology choices.

## Requirements

- Windows 10 or newer
- Node.js 22.12 or newer
- npm

## Run the application

From the repository folder:

```powershell
cd app
npm install
npm run dev
```

Press `Ctrl+C` in the terminal to stop the development application.

If Electron's executable was not downloaded during installation, run this from the `app` folder and then retry `npm run dev`:

```powershell
node node_modules/electron/install.js
```

## Project structure

```text
app/
├─ src/
│  ├─ main/       Electron process and Windows integration
│  ├─ preload/    Controlled bridge between Electron and React
│  └─ renderer/   React user interface
├─ resources/     Files packaged with the application
└─ package.json   Dependencies and project commands
```

Generated files such as `app/out` and installed dependencies such as `app/node_modules` should not be edited directly.

## Useful commands

Run these commands from the `app` folder:

```powershell
npm run dev        # Run the development application
npm run typecheck  # Check TypeScript types
npm run lint       # Check code quality rules
npm run format     # Format the project files
npm run build      # Create a production build
```
