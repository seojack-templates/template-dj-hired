/**
 * Scoped CSS for the dj-hired template.
 * EVERY selector must be prefixed with ".dj-hired-demo" so the styles
 * cannot leak (this matters when the source is seeded into the builder).
 */
export const DJ_HIRED_CSS = `
.dj-hired-demo {
    --ink: #14141a;
    --paper: #ffffff;
    font-family: 'Inter', ui-sans-serif, system-ui, sans-serif;
    color: var(--ink);
    background: var(--paper);
}
.dj-hired-demo * { box-sizing: border-box; }
.dj-hired-demo h1 { font-size: clamp(2rem, 5vw, 3.5rem); margin: 0 0 1rem; }
`;