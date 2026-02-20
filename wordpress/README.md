# 10X Landing Page — WordPress Block Version

WordPress block theme + custom blocks plugin that recreates the React/Vite landing page using native WordPress blocks.

## Structure

```
wordpress/
├── theme/10x-theme/          ← Block theme (activate in WP)
│   ├── theme.json             ← Design tokens: colors, fonts, spacing
│   ├── style.css              ← Theme metadata
│   ├── functions.php          ← Google Fonts + custom CSS enqueue
│   ├── assets/css/custom.css  ← Glassmorphism, component styles
│   ├── assets/images/         ← Static images (copy from React public/)
│   ├── templates/             ← Block templates
│   └── parts/                 ← Template parts
├── plugin/10x-blocks/         ← Custom blocks plugin (activate in WP)
│   ├── 10x-blocks.php         ← Plugin entry point
│   ├── src/
│   │   ├── playbook-section/  ← Playbook content section block
│   │   └── comparison-table/  ← Playbooks vs Prompts comparison block
│   └── assets/frontend.js     ← Expand/collapse + sidenav interactivity
├── page-content.html          ← Full page content (paste into WP editor)
└── README.md
```

## Setup

### 1. Install theme
Copy `theme/10x-theme/` into `wp-content/themes/` on your WordPress site.

### 2. Copy static assets
From the React project's `public/` directory, copy into the theme:
- `prompt vs AI 2.jpg` → `assets/images/prompt-vs-ai-2.jpg`
- `agentic_marketer_dashboard.html` → keep in WP root or a known URL
- `enhanced_dashboard.html` → keep in WP root or a known URL

From `src/assets/`:
- `goog-explosion.gif` → `assets/images/goog-explosion.gif`

### 3. Install plugin
Copy `plugin/10x-blocks/` into `wp-content/plugins/`.

### 4. Activate
1. Go to **Appearance → Themes** and activate **10X Landing Page**
2. Go to **Plugins** and activate **10X Blocks**

### 5. Create the page
1. Create a new Page in WordPress
2. In **Page Attributes**, select the **Landing Page** template
3. Switch to the **Code Editor** (⋮ menu → Code Editor)
4. Paste the contents of `page-content.html`
5. Switch back to Visual Editor and publish

## Custom blocks

### `10x/playbook-section`
3-column content section with:
- Copy box (title + description)
- YouTube video embed
- Media column (GIF image or scaled dashboard iframe preview)
- Optional expand/collapse text
- CTA buttons (Get the playbook, View Output/View sample, Request a demo)

### `10x/comparison-table`
- Comparison image (Playbooks vs Prompts chart)
- Expandable data table with bounce-animated chevron toggle
- Table data is stored as a block attribute (editable)

## What's included (Phase 1)
- [x] Hero section
- [x] Side navigation with smooth-scroll + expandable submenu
- [x] Playbook 1: 5 Ways to Avoid Workslop
- [x] Playbook 2: From SEO to GEO
- [x] Playbook 3: Competitor Launch Analyst
- [x] Playbooks vs Prompts comparison image + dropdown table
- [x] Full design system (colors, fonts, glassmorphism, gradients)

## Not yet included (future phases)
- [ ] Email gating system (GateSection, GatedContent, UnlockModal)
- [ ] ROI Calculator (interactive block)
- [ ] PlaybookShowcase carousel
- [ ] Playbook Detail Modal
- [ ] Playbooks 4+
