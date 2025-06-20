# Dashboard Layout Guide

## Breakpoints

| Range | Sidebar Behaviour |
|-------|------------------|
| `< xl` | Sidebar overlays full screen when open, hidden when closed. |
| `xl – 2xl` | Sidebar shown as mini rail (`w-sidebar-mini`). Labels appear in tooltips. |
| `≥ 2xl` | Sidebar expanded to `w-sidebar-full`. |

RTL layouts mirror these positions.

## Spacing Rules

Header and main content apply `ml`/`mr` margins equal to the sidebar width on large screens. When the sidebar toggles, both elements update using the `sidebar` transition property for smooth motion.

## Spinner Usage

Use `<Spinner size="sm" />` inside buttons and `<Spinner size="xl" />` for page overlays. Colors adapt via the `color` prop (`primary`, `muted`, or `white`).
