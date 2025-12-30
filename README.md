# 🦀 Rusty PDF

A lightweight React PDF viewer powered by Rust/WASM with theming support.

[![npm version](https://img.shields.io/npm/v/rusty-pdf.svg)](https://www.npmjs.com/package/rusty-pdf)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Features

- 📄 **Rust-Powered PDF Rendering** - Fast PDF display via WebAssembly
- 🎨 **Theme Support** - Light, dark, or system preference modes
- 📱 **Simple Navigation** - Built-in page controls and download button
- ⚡ **Lightweight** - Only 66KB unpacked

---

## Installation

```bash
npm install rusty-pdf
```

---

## Usage

```jsx
import RustyPdf from 'rusty-pdf';
import 'rusty-pdf/styles.css';

function App() {
  return (
    <RustyPdf 
      url="https://example.com/document.pdf"
      theme="system"
    />
  );
}
```

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `url` | `string` | **required** | URL of the PDF file to display |
| `theme` | `'light' \| 'dark' \| 'system'` | `'system'` | Theme mode for the viewer |

---

## Themes

The viewer supports three theme modes:

| Theme | Description |
|-------|-------------|
| `light` | Light background with dark text |
| `dark` | Dark background with light text |
| `system` | Automatically matches OS preference |

```jsx
// Force light mode
<RustyPdf url="/doc.pdf" theme="light" />

// Force dark mode  
<RustyPdf url="/doc.pdf" theme="dark" />

// Follow system preference (default)
<RustyPdf url="/doc.pdf" theme="system" />
```

---

## Built-in Controls

The viewer includes a toolbar with:

| Control | Description |
|---------|-------------|
| **‹** | Previous page |
| **Page indicator** | Shows current page / total pages |
| **›** | Next page |
| **↓** | Download PDF |

---

## Styling

Import the included stylesheet:

```jsx
import 'rusty-pdf/styles.css';
```

Or customize by targeting these CSS classes:

```css
.pdf-wrapper { }      /* Main container */
.pdf-toolbar { }      /* Navigation bar */
.pdf-loading { }      /* Loading spinner container */
.pdf-spinner { }      /* Loading animation */
.canvas-container { } /* PDF canvas wrapper */
.pdf-footer { }       /* Footer with credits */
.pdf-light { }        /* Light theme */
.pdf-dark { }         /* Dark theme */
```

---

## Complete Example

```jsx
import React from 'react';
import RustyPdf from 'rusty-pdf';
import 'rusty-pdf/styles.css';

function PDFViewer() {
  return (
    <div style={{ height: '100vh' }}>
      <RustyPdf 
        url="https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf"
        theme="dark"
      />
    </div>
  );
}

export default PDFViewer;
```

---

## Requirements

- React 16.8.0 or higher
- Modern browser with WebAssembly support

---

## How It Works

This package uses Rust compiled to WebAssembly to power the PDF rendering engine. The WASM module handles:

1. **PDF Parsing** - Loading and parsing PDF file structure
2. **Page Rendering** - Drawing pages to an HTML canvas
3. **File Operations** - Downloading the PDF file

---

## Roadmap

Upcoming features planned for future releases:

| Feature | Description | Status |
|---------|-------------|--------|
| 🔍 **Text Search** | Search for text within PDFs with highlighting | Planned |
| 🖍️ **Highlights** | Select and highlight text with multiple colors | Planned |
| 📝 **Sticky Notes** | Add notes to selected text | Planned |
| 💾 **Annotations Persistence** | Save/load highlights and notes via callbacks | Planned |
| 🔎 **Zoom Controls** | Zoom in/out functionality | Planned |

---

## License

MIT © [codeninja-404](https://github.com/codeninja-404)
