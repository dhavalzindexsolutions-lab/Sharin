# UI Design System – Atomic Design

This repository contains the **foundation of the Design System** for the UI of the Sharin web application, developed according to **Atomic Design** principles and with a modular architecture in **React**.

The goal is to ensure visual consistency, component reusability, and front-end scalability.

---

## Project Structure

The filesystem structure follows the **Atomic Design** paradigm, organized in levels of increasing complexity:

```
src/
│
├── tokens/          # Design Tokens: base values for the design system
│   ├── colors.js
│   ├── typography.js
│   ├── spacing.js
│   └── index.js
│
├── atoms/           # Elementary components (e.g. Button, Input, Icon)
│
├── molecules/       # Combinations of atoms (e.g. FormField, Card)
│
├── organisms/       # Complex and autonomous blocks (e.g. Navbar, Footer)
│
├── templates/       # Layout structures or page patterns
│
└── pages/           # Complete pages, composed of templates and organisms
```

---

## Design Tokens

**Design Tokens** represent the foundation of the design system and contain shared values across all project levels and between projects:

- **Colors** (`tokens/colors.js`)
- **Spacing and layout** (`tokens/spacing.js`)
- **Typography** (`tokens/typography.js`)
- **Border radius, shadows, animations**, etc.

These tokens are used consistently across all components (atoms, molecules, etc.), ensuring a single source of truth for the visual style of the application.

Example of token definition:

```js
// src/tokens/colors.js
export const colors = {
  primary: '#1E40AF',
  secondary: '#64748B',
  background: '#FFFFFF',
  text: '#0F172A',
  success: '#22C55E',
  error: '#EF4444',
};
```

Example of usage in a component:

```jsx
import { colors } from '@/tokens/colors';

export const Button = ({ label }) => (
  <button style={{ backgroundColor: colors.primary, color: colors.background }}>
    {label}
  </button>
);
```

---

## Setup & Usage

### Installation
```bash
git clone https://gitlab.com/sharinapp2.0/atomic-ui.git
cd atomic-ui
npm install
```

### Development run
```bash
npm run dev
```

### Build for distribution
```bash
npm run build
```

---

## Goals

- Promote **reusability** of UI components.
- Maintain **visual and semantic consistency** in design.
- Provide a **shared foundation** between design and development.
- Make the UI **scalable and maintainable** over time.

---

## Contributing Guidelines

- Each new component must respect the Atomic Design hierarchy.
- Style values **must not be hardcoded** but must derive from design tokens.
- Use **Storybook** (or similar) to document and visually test components.
- Follow the naming convention and file pattern of existing components.
- Each new component must be released in the correct section (atoms/, molecules/, organisms/) complete with **Storybook** and **documentation**.
- The developer who **creates or modifies the component** is responsible for updating the changelog with the features introduced.
- The version tag is released by the SHARIN team after complete review of the component and its documentation.

---

## Recommended Tools

Use your usual IDE and tools for development; for component documentation, it is recommended to use **Storybook** (or similar).

---

## Final Notes

This repository represents an **isolated module** of the main project, designed to be integrated as a dependency (npm package or submodule) in the main web application.

Any updates to tokens or components will have immediate impact on the entire UI ecosystem.

---

## References

* [Atomic Design by Brad Frost](https://atomicdesign.bradfrost.com/chapter-2/)
* [The Ultimate Guide to React Atomic Design Principles](https://www.dhiwise.com/post/the-ultimate-guide-to-react-atomic-design-principles)

---

**Author:** SharinApp  
**License:** MIT  
**Version:** 0.1.0# Sharin
# Sharin
