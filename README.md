# 🌿 Plant Login UI

A minimal, elegant login and registration UI featuring a botanical aesthetic with a Monstera plant accent.

## Preview

A clean two-panel auth flow with a plant image decorating the right side of the card — hidden gracefully on mobile.

## Files

| File | Description |
|------|-------------|
| `index.html` | Markup for login and register cards |
| `style.css` | All styles, CSS variables, and responsive layout |
| `script.js` | Card toggle logic (login ↔ register) |
| `plant.jpg` | Monstera decorative image |

## Features

- **Login & Register forms** — toggled via a simple JS function, no page reload
- **Botanical accent** — `plant.jpg` is mounted as an `::after` pseudo-element on the card's right edge
- **Responsive** — plant image hidden on screens ≤ 680px; layout adapts cleanly
- **CSS variables** — easy to retheme via `:root` (accent color, backgrounds, borders)
- **Accessible inputs** — labels, placeholders, focus rings, and `required` attributes included

## Fonts

Loaded via Google Fonts (add to `<head>` if not already present):

```html
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=Playfair+Display:wght@500&display=swap" rel="stylesheet">
```

## Customization

To change the accent color, update the CSS variable in `style.css`:

```css
:root {
  --accent: #2d5a27;
  --accent-hover: #1e3e1b;
}
```

To swap the plant image, replace `plant.jpg` and update the reference in `.card::after`.

## Notes

- The register form currently reuses `id="username"` on multiple inputs — these should be made unique (`id="email"`, etc.) before connecting to a backend.
- Form `action` attributes point to placeholder routes (`/` and `/login/#`) and will need updating for real authentication.
