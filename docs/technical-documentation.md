# Technical Documentation

## 1. Project Overview

This project is a static front-end portfolio website built using HTML, CSS, and JavaScript.

---

## 2. Structure
```
202280240-DanhAlsawad-assignment-1/
│
├── README.md
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── assets/
│   └── images/
├── docs/
│   ├── ai-usage-report.md
│   └── technical-documentation.md
│
└── .gitignore
```


### index.html
Contains:
- Navigation bar
- About section
- Projects section with images
- Contact form
- Theme toggle button

### styles.css
Handles:
- Layout styling
- Section backgrounds
- Card design
- Image styling
- Responsive adjustments
- Dark/Light theme styles

### script.js
Handles:
- Dark/Light theme toggle
- Active navigation highlighting

---

## 3. Responsive Design

- Used percentage-based widths.
- Applied max-width for images.
- Implemented media queries for smaller screens.

---

## 4. Dark Mode Implementation

- A CSS class `.dark` is toggled on the body element.
- JavaScript listens to button click events.
- Colors and backgrounds change dynamically.

---

## 5. Image Handling

- Images stored in `assets/images`.
- Styled using:
  - width: 100%
  - object-fit
  - border-radius
- Ensured proper responsiveness.

---

## 6. Browser Testing

Tested on:
- Google Chrome
- Edge

No major compatibility issues found.
