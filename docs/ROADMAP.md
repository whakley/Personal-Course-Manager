# Development Roadmap

This roadmap tracks the order in which the first version of Personal Course Manager will be built. Check off a task only when it works in the running application.

## Current milestone

### Course overview prototype

The goal is to select a sample course and immediately see its important information. This milestone uses sample data and does not require a database.

- [x] Create the Electron, React, and TypeScript project
- [x] Run the starter application
- [x] Create a course list component
- [x] Move sample course data into a separate file
- [ ] Give each sample course realistic overview information
- [ ] Display the course list as a sidebar
- [ ] Store the selected course in `App`
- [ ] Make each course button select its course
- [ ] Build the course overview component
- [ ] Display the selected course's schedule, instructor, grading, policies, upcoming work, and files
- [ ] Add a basic two-column layout and styling
- [ ] Confirm that switching courses updates the overview

## Next milestone

### Local course storage

The goal is to preserve courses after the application closes.

- [ ] Define the initial course data model
- [ ] Add SQLite to the Electron main process
- [ ] Create and save a course
- [ ] Load saved courses when the application starts
- [ ] Edit and archive a course
- [ ] Reorder courses
- [ ] Show useful errors when a database operation fails

## Later milestones

### File library

- [ ] Choose the first supported file formats
- [ ] Select files with a Windows file picker
- [ ] Copy imported files into the application's data directory
- [ ] Assign files to a course and category
- [ ] Open imported files from the application
- [ ] Preserve originals when conversion is unsupported or loses information

### Course information extraction

- [ ] Start with text-based PDF syllabi
- [ ] Extract course schedule, instructor, office hours, grading, policies, assignments, and exams
- [ ] Keep the source page and passage for extracted information
- [ ] Show a review screen before saving extracted information
- [ ] Let the user correct uncertain or conflicting information

### Local calendar

- [ ] Display classes, assignments, and exams
- [ ] Add and edit events manually
- [ ] Review extracted events before adding them
- [ ] Support recurring class meetings and exceptions
- [ ] Prevent duplicate events when a document is processed again

### Google Calendar integration

- [ ] Connect a Google account
- [ ] Select the target Google Calendar
- [ ] Send approved events to Google Calendar
- [ ] Store Google event IDs to prevent duplicates
- [ ] Define how later edits and deletions are handled

The first integration will send approved events from the app to Google Calendar. Two-way synchronization and Apple Calendar or iCloud support can be considered later.

### Course search and questions

- [ ] Search course files and extracted information
- [ ] Ask questions in natural language
- [ ] Return answers with supporting passages and page references
- [ ] Distinguish missing, uncertain, and conflicting information

## Deferred features

- Advanced slide organization
- Note taking
- Flashcard creation and Anki integration
- Apple Calendar and iCloud integration
- Advanced workspace customization

