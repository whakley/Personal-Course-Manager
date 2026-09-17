# Technical Decisions

This file records decisions that affect the project's design. Each entry explains the choice and when it should be reconsidered.

## Electron React and TypeScript

**Status:** Accepted  
**Date:** September 16, 2026

The application will use Electron for the Windows desktop shell, React for the interface, and TypeScript for application code.

This choice builds on existing React and Node.js experience while providing access to local files and Windows desktop features. React and TypeScript are also useful beyond Electron projects.

Reconsider this choice if Electron prevents a required Windows integration or creates a measured performance or packaging problem that cannot be solved reasonably.

## SQLite for local structured data

**Status:** Planned  
**Date:** September 16, 2026

SQLite will store courses, extracted information, file metadata, and calendar events. The application is intended for one person on one computer, so running a separate PostgreSQL server would add unnecessary setup.

The user's imported files will remain files on disk. SQLite will store their locations and related metadata rather than placing entire documents inside the database.

Reconsider this choice if the application later needs multiple users, access from several computers, or a hosted web service.

## Sample data before persistent storage

**Status:** Accepted  
**Date:** September 16, 2026

The first course overview will use sample data. This allows the course-selection interaction and screen layout to be designed before database and file-processing work begins.

The sample data will be replaced by SQLite-backed data after the course overview interaction works.

## Application to Google Calendar synchronization

**Status:** Planned  
**Date:** September 16, 2026

The first Google Calendar integration will send user-approved events from Personal Course Manager to one selected Google Calendar. Each synchronized event will keep its Google event ID so retries do not create duplicates.

Two-way synchronization will be evaluated after the one-way flow is reliable because it requires rules for conflicting edits and deletions.

## Preserve uploaded originals

**Status:** Planned  
**Date:** September 16, 2026

The application may create PDF copies for consistent viewing, but conversion will not be assumed to reduce file size or preserve every feature. An original will be retained when conversion is unsupported or would lose useful content.

