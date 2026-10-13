# Study Planner

A weekly study planner built with React and Tailwind CSS. You can plan study sessions for each day of the week, move between weeks, and see how many hours you plan to spend on each subject.

## Features

- Add study sessions with a title, subject, day and duration
- Navigate to the next and previous weeks
- A 7-day weekly view with sessions grouped by day
- An empty state for weeks with no sessions
- A progress chart showing hours per subject, with a weekly total

## Tech Stack

- React (hooks, controlled components, lifting state up, derived data)
- Tailwind CSS
- lucide-react (icons)

## How It Works

### 1. State

All the main state lives in `App.jsx`:

- **`weeksData`**: an array holding the data for each week. Every week is an object with an `id`, a `label`, and a `sessions` array.
- **`currentWeekIndex`**: tracks which week is currently displayed. It is used to read the current week from `weeksData` (`weeksData[currentWeekIndex]`) and to generate the id and date label when a new week is created.
- **`formData`**: a single object that stores the values of the add-session form (`title`, `subject`, `day`, `duration`).

### 2. Week Navigation

#### `goToNextWeek()`

Week creation logic lives in a separate file, `utils/weekIdHandler.js`. Because that file cannot access the state of `App.jsx` directly, `goToNextWeek()` is a small wrapper in `App.jsx`. It calls `handleNextWeek()` and passes in the three things it needs:

- `currentWeekIndex`
- `setCurrentWeekIndex`
- `setWeeksData`

This lets the Next button call `goToNextWeek()` without any arguments, while the helper still gets the data it needs.

When the Next button is clicked:

1. `handleNextWeek()` calculates `nextIndex` by adding 1 to `currentWeekIndex`.
2. It checks whether a week already exists at `nextIndex` in `weeksData`.
   - If it exists, the array is returned unchanged.
   - If it doesn't exist, a new week object is appended with:
     - an `id` created by `createWeekId()`, in the format `week-0001`, `week-0002`, and so on
     - a `label` created by `createWeekLabel()`, which is a date range
     - an empty `sessions` array
3. `setCurrentWeekIndex(nextIndex)` moves the view to that week.

Creating a week only creates an empty container. Sessions are added separately through the form.

#### `createWeekLabel(index)`

This function builds the date range shown in the header:

1. It copies the base date (`PLANNER_START_DATE`) into `startDate`.
2. It adds `index * 7` days to get the start of that week.
3. It adds 6 more days to get the end of the week.

Example with a base date of Oct 12:

| Week index | Start  | End    |
| ---------- | ------ | ------ |
| 0          | Oct 12 | Oct 18 |
| 1          | Oct 19 | Oct 25 |
| 2          | Oct 26 | Nov 1  |

#### `goToPreviousWeek()`

The Previous button calls `handlePreviousWeek()`, which reduces `currentWeekIndex` by 1. `Math.max(previousIndex - 1, 0)` stops the index from going below 0.

### 3. Adding a Session (Controlled Form)

The form in `AddSessionForm.jsx` uses controlled inputs. Each field's `value` comes from `formData`, and every change goes through one shared `handleFormChange` function that updates the matching field using the input's `name`:

```js
setFormData((previousFormData) => ({
  ...previousFormData,
  [name]: value,
}));
```

When **Add session** is clicked, `handleSubmit` runs:

1. It prevents the default form submission.
2. It builds a `newSession` object from `formData` (the duration is converted to a number with `parseInt`).
3. It creates `updatedSessionData` as `[...sessionData, newSession]`.
4. It updates `weeksData` immutably: it makes a shallow copy of the weeks array, then a shallow copy of the current week object, and replaces that week's `sessions` with `updatedSessionData`.
5. It resets `formData` to empty values.

#### How the current week's sessions are found

Three lines in `App.jsx` work out the data for the current week:

```js
const currentWeek = weeksData[currentWeekIndex]
const currentWeekSessions = currentWeek?.sessions?.length > 0 ? currentWeek : null
const sessionData = currentWeekSessions?.sessions ?? []
```

- `currentWeek` is the week object at the current index.
- `currentWeekSessions` is the week object if it has at least one session, otherwise `null`. `WeekColumns` uses this `null` value to show the "No planned sessions for this week yet!" empty state.
- `sessionData` is just the sessions array, or an empty array if there are none. This is the array new sessions get appended to.

### 4. Weekly View

`WeekColumns` loops over the `weekdays` array and, for each day, filters the current week's sessions with `session.day === day`. Each day is rendered by `DayColumn`, which renders a `Session` card for every session (or "No sessions" if the day is empty). Colors come from the `subjectTone` map in `utils/data.js`.

### 5. Hours per Subject (Progress Chart)

`durationBySubject` is derived data, calculated with `reduce` on each render rather than stored in state:

```js
const durationBySubject = sessionData.reduce((totals, session) => {
  const { subject, duration } = session;
  totals[subject] = (totals[subject] || 0) + duration;
  return totals;
}, {});
```

It produces an object like `{ React: 6, Maths: 4 }`. `ProgressChart` then:

- sums all the values to get the total hours
- calculates each subject's share as `(duration / totalHours) * 100`
- uses that percentage as the width of the subject's bar

## Component Structure

```
App
├── Header
│   ├── Logo
│   └── WeekMover
├── AddSessionForm
├── WeekColumns
│   └── DayColumn
│       └── Session
├── ProgressChart
└── Footer
```

## What I Practiced

- Managing multiple pieces of state and keeping them in sync
- Lifting state up and passing data and handlers down through props
- Controlled form inputs with a single change handler
- Immutable state updates (spread operator, shallow copies)
- Derived data (`durationBySubject`) instead of duplicated state
- Separating logic into utility functions
- Conditional rendering (empty states)

## Getting Started

```bash
git clone <your-repo-url>
cd <your-repo-folder>
npm install
npm run dev
```
