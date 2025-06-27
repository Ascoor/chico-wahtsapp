# Modular Department Architecture

This document describes the new department oriented structure. Each department operates independently while sharing common infrastructure.

## Departments

- **Swimming**
  - `Private Swimming` – sessions booked with trainers.
  - `School Swimming` – organised school programs with assigned trainers.
  - `Free Period` – open sessions booked directly by clients.
- **Football**
  - Includes one or more `Academies`.
  - Players and coaches are linked to their academy and to the available fields.

All departments reference the `fields` table for playground booking and the accounting module aggregates payments across all tables.

## Configuration

Departments are defined in `src/modules/departments.ts`:

```ts
export const departments = [
  { id: 'swimming', subModules: [...] },
  { id: 'football', subModules: [...] }
];
```

Each sub-module lists its own booking, schedule and trainer tables to keep the codebase scalable.
