# Little List

A responsive todo app built with Next.js App Router, TypeScript, React, and Tailwind CSS 4.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Features

- Add, view, complete, and delete tasks
- Inline task input with Enter-to-add
- All, Active, and Completed status filters
- Lucide icons
- Responsive layout, keyboard focus states, inline forms, and reduced-motion support

Tasks live in React state only and reset when the page is refreshed. The list starts empty. Press Enter in the task field to add a task.

## Structure

- `app/page.tsx`: server-rendered page entry
- `components/todo-app.tsx`: client-side task interactions
- `lib/tasks.ts`: task type
- `app/globals.css`: Tailwind setup and shared styles
- `app/layout.tsx`: application metadata and root layout

## Checks

```bash
npm run lint
npx tsc --noEmit
npm run build
```
