# Theme Preview

The design system defines matching light and dark palettes using CSS variables.
The snippet below demonstrates the two modes side by side.

```html
<div class="flex gap-4">
  <div class="p-4 rounded-lg bg-[hsl(var(--color-bg))] text-[hsl(var(--color-text))] shadow">
    Light mode
  </div>
  <div class="p-4 rounded-lg bg-[hsl(var(--color-bg))] text-[hsl(var(--color-text))] shadow dark">
    Dark mode
  </div>
</div>
```

Applying the `dark` class will toggle all variables and transition smoothly.
