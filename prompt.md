# AI Agent Instructions – Dynamic Dark Portfolio Website

(This is your full specification. Follow it exactly. Do NOT copy any of this text into project files.)

--------------------------------------------------
1. ROLE & GLOBAL RULES
--------------------------------------------------
- You are an expert full‑stack web developer and UI/UX designer.
- Task: build a complete, production‑ready, single‑page personal portfolio website.
- The site must be:
  - Fully responsive on phones, tablets, laptops, and large desktops.
  - Dark‑themed and visually high‑quality.
  - Dynamic and interactive (animations, effects), even if CSS/JS is relatively heavy.
- IMPORTANT: Do NOT show any project code in this chat.
  - Do not use code blocks or inline code here.
  - Create/edit files directly via the file system tools (no terminal).
- All text content and comments inside the project must be in English.
- No unfinished work:
  - No TODO, FIXME, or placeholder comments.
  - No “Lorem ipsum”, “TBD”, or empty text.
  - No unused files or big blocks of commented‑out code.

--------------------------------------------------
2. TECH STACK & FILE STRUCTURE
--------------------------------------------------
Use a simple static setup:

- HTML5, CSS3, Vanilla JavaScript (ES6+).
- No frameworks (no React, Vue, etc.).
- No build tools or package managers (no bundlers, no Node step).

Create this structure (add more files only if actually used):

project-root/
  index.html
  css/
    style.css
  js/
    config.js
    main.js
  assets/
    images/
    icons/
  README.md

The project must run by simply opening index.html in a browser.

--------------------------------------------------
3. DESIGN REQUIREMENTS (DARK, RESPONSIVE, DYNAMIC)
--------------------------------------------------
3.1 Theme & Colors
- Dark theme only.
- Absolutely NO blue or blue‑like colors:
  - No blue, cyan, teal, turquoise, or clearly blue‑ish tones.
- Suggested palette:
  - Backgrounds: near‑black / very dark grays.
  - Surfaces/cards: slightly lighter dark grays.
  - Text: white or light gray with strong contrast.
  - Accents: non‑blue colors (e.g., orange, red, amber, purple, green).
- Text must be very clear and readable:
  - High contrast.
  - Reasonable font sizes and line heights.

3.2 Responsiveness
- Must look good and usable on:
  - Small phones (~360px width),
  - Tablets,
  - Laptops,
  - Large desktop screens.
- No horizontal scrolling on small screens.
- Use flexbox and/or CSS grid for:
  - Header and navigation,
  - Hero layout (text + visual),
  - Projects grid,
  - Skills layout, etc.
- Use multiple breakpoints to adapt layout, spacing, and font sizes.

3.3 Dynamic & Interactive Feel
- The design should feel dynamic, even if CSS/JS is relatively heavy.
- Use animations/transitions such as:
  - Hover and focus effects on buttons, links, cards.
  - Scroll‑based reveal animations for sections or cards (e.g., fade/slide in).
- You may use Intersection Observer or scroll listeners to trigger reveal animations.
- Optional but encouraged:
  - Animated hero background or subtle movement.
  - Animated project filtering (cards fading/sliding).
  - Animated skill tags or section headings.
- Keep animations smooth and not overly distracting.

--------------------------------------------------
4. PAGE CONTENT & SECTIONS (index.html)
--------------------------------------------------
Create a single‑page layout with these sections in logical order:

1) Header & Navigation
- Text logo (e.g., name or initials).
- Navigation links that scroll to:
  - Home (hero),
  - About,
  - Skills,
  - Projects,
  - Experience,
  - Contact.
- Responsive behavior:
  - Desktop: horizontal nav.
  - Mobile: hamburger icon that toggles a menu (overlay or slide‑out).
  - Close menu when a link is clicked.

2) Hero (Home)
- Name (e.g., “Your Name”).
- Role/title (e.g., “Full‑Stack Web Developer”).
- Short one‑sentence tagline.
- Primary call‑to‑action button (e.g., “View Projects” or “Contact Me”).
- Optional secondary link (e.g., “Download CV”).
- Visual element:
  - Inline SVG illustration OR
  - Avatar/hero image from assets/images/.
- Make this section visually strong and can include subtle dynamic elements.

3) About
- Avatar or photo (placeholder image/SVG).
- Short paragraph describing:
  - Background,
  - Main skills and focus areas,
  - Interests or specialties.
- A few highlight stats (e.g., years of experience, main stack, favorite domains).

4) Skills
- Skills sourced from js/config.js.
- Grouped by category, e.g.:
  - Frontend,
  - Backend,
  - Tools & Workflow.
- Display skills as:
  - Badges, chips, or pill‑style tags, or
  - Clearly structured lists with headings.
- You can add subtle animations when the section appears or on hover.

5) Projects
- At least 4 projects, defined in js/config.js.
- Each project must have:
  - Title,
  - Short description,
  - Tech stack (array of strings, shown as tags),
  - Category (e.g., “Frontend”, “Full‑Stack”, etc.),
  - Links object (e.g., live demo URL, source URL; realistic placeholders).
- Layout:
  - Grid of cards on desktop,
  - Single column stacked cards on small screens.
- Dynamic behavior:
  - Provide project filter buttons (e.g., All / Frontend / Full‑Stack).
  - Filtering should visually update cards (fade/slide transitions).

6) Experience
- At least 3 entries (jobs, freelance roles, or major milestones).
- Each entry:
  - Role/title,
  - Company or context,
  - Period (e.g., “2021 – Present”),
  - Short description or a few bullet points.
- Present as a timeline or vertical stacked cards (timeline line optional but nice).

7) Contact
- Brief text inviting visitors to get in touch.
- Contact form with fields:
  - Name (required),
  - Email (required, basic email pattern validation),
  - Message (required),
  - Submit button.
- On submit:
  - Prevent default form submission.
  - Validate all required fields,
  - Show inline error messages near invalid fields.
  - If valid:
    - Clear errors,
    - Show a clear success message in the contact section,
    - Optionally log the data once to console.
- Also include:
  - Direct mailto email link (from js/config.js),
  - Optional social links repeated from footer.

8) Footer
- Copyright line with the current year (generated or set correctly).
- Social links (GitHub, LinkedIn, etc.) from js/config.js.
- Back‑to‑top link or icon that smoothly scrolls to the top/hero.

All text must be realistic sample content for one fictional developer (same person everywhere, no lorem ipsum).

--------------------------------------------------
5. DATA CONFIGURATION (js/config.js)
--------------------------------------------------
Create one global object, e.g.:

const portfolioData = { ... };

(Implement it only in the file; do NOT show code here.)

It must contain at least:

- owner:
  - name,
  - role,
  - location,
  - summary (short paragraph).
- contact:
  - email,
  - optional phone,
  - socials (array or object of items like { name, url, iconKey }).
- skills:
  - Array of groups like:
    - { category: "Frontend", items: [ "HTML", "CSS", "JavaScript", ... ] }
- projects (minimum 4):
  - Each: { title, description, tech (array), category, links { live, source } }.
- experience (minimum 3):
  - Each: { role, company, location (optional), period, description or bullet list }.

Requirements:
- All values must be realistic sample data.
- No empty strings, no “TBD”, no lorem ipsum.
- Add short comments explaining each top‑level section so users know how to edit it.

--------------------------------------------------
6. JAVASCRIPT LOGIC (js/main.js)
--------------------------------------------------
Use portfolioData to drive the UI dynamically.

6.1 Data‑Driven Rendering
- On DOM ready:
  - Render skills from portfolioData.skills into the Skills section.
  - Render projects from portfolioData.projects into the Projects section.
  - Render experience from portfolioData.experience into the Experience section.
  - Insert social links and email from portfolioData.contact into appropriate areas (footer, contact).
- Avoid hard‑coding the same data in both HTML and config.js.

6.2 Navigation & Scrolling
- Smooth scrolling:
  - Clicking nav links and the back‑to‑top link scrolls smoothly to the target section.
- Active nav highlighting:
  - As the user scrolls, highlight the nav link corresponding to the section nearest the top of the viewport.
  - Use Intersection Observer or scroll events.

6.3 Responsive Mobile Nav
- Implement a hamburger icon on small screens:
  - Clicking it toggles the mobile menu visibility.
  - Close the menu when a nav link is clicked (and optionally on outside click).

6.4 Contact Form Validation
- On form submit:
  - Prevent default behavior.
  - Validate all fields:
    - Name is not empty,
    - Email matches a simple email pattern,
    - Message is not empty.
  - For invalid fields:
    - Show clear inline error messages and do not proceed.
  - For valid submission:
    - Hide errors,
    - Show a visible success message in the contact section,
    - Optionally console.log the submitted data once.

6.5 Dynamic & Animated Effects
- Implement some JS‑driven dynamic behavior to match the “dynamic even if heavy” requirement, e.g.:
  - Scroll‑in reveal animations:
    - Sections or cards appear with fade/slide when entering viewport.
  - Animated project filtering:
    - When user clicks a filter, cards hide/show with transitions.
  - Optional subtle hero animations (e.g., moving background shapes).
- Organize code with clear functions and comments where logic is not obvious.

--------------------------------------------------
7. STYLING (css/style.css)
--------------------------------------------------
Implement all visuals and responsiveness:

7.1 Base Styles
- Set a modern sans‑serif font stack.
- Apply dark theme colors (without any blue/blue‑ish colors).
- Reset or normalize basic elements (e.g., body margin, box‑sizing, etc.).

7.2 Layout
- Use a main container with max‑width and horizontal padding for content.
- Ensure consistent vertical spacing between sections.
- Use flexbox/grid for:
  - Header and nav layout,
  - Hero text + image,
  - Projects cards,
  - Skills groups,
  - Experience cards.

7.3 Components
- Header & nav:
  - Desktop and mobile variants.
- Buttons:
  - Primary and secondary styles,
  - Hover and focus states clearly visible on dark background.
- Cards:
  - For projects and experience,
  - Appropriate styling for dark theme (borders, shadows, etc.),
  - Hover effect (e.g., slight raise or glow).
- Skills:
  - Tags or badges with clear labels.
- Contact form:
  - Styled inputs and textarea,
  - Error messages distinct (color and maybe icon),
  - Success message clearly styled.
- Footer:
  - Layout for copyright and social icons,
  - Back‑to‑top link visual.

7.4 Responsiveness
- Add breakpoints for:
  - Mobile (single column, stacked),
  - Tablet (two columns where appropriate),
  - Desktop (full layout).
- Adjust font sizes, paddings, and card counts per row at different widths.

7.5 Animations
- Use CSS transitions for hovers and simple movements.
- Define CSS classes for hidden/visible states used by scroll reveal animations.

--------------------------------------------------
8. README (README.md)
--------------------------------------------------
Write a short README with:
- Title: e.g., “Dynamic Dark Portfolio Website”.
- Overview: one short paragraph describing the project.
- Features: sections, responsiveness, dark theme, dynamic interactions.
- Tech stack: HTML, CSS, JavaScript (no frameworks).
- File structure overview (brief).
- How to run: e.g., “Open index.html in a modern browser.”
- How to customize: explain editing js/config.js for content.
- Usage: simple note allowing personal/commercial use.

--------------------------------------------------
9. IMPLEMENTATION STEPS (FOLLOW IN ORDER)
--------------------------------------------------
1) Plan (no files yet)
- Read this prompt carefully.
- Decide:
  - Section IDs and HTML structure,
  - portfolioData structure,
  - Main JS behaviors (nav, scroll, filters, animations),
  - Breakpoints for responsiveness.

2) Create Base Structure
- Create folders and empty files:
  - index.html
  - css/style.css
  - js/config.js
  - js/main.js
  - README.md
  - assets/images/, assets/icons/ (if needed).

3) HTML (index.html)
- Add HTML5 boilerplate, meta tags (including viewport).
- Link css/style.css in the head.
- Use semantic layout:
  - header with logo and nav,
  - main with sections: hero, about, skills, projects, experience, contact,
  - footer.
- Give each section an ID matching nav links (home, about, skills, projects, experience, contact).
- Add script tags before closing body to load js/config.js then js/main.js.

4) Config (js/config.js)
- Define portfolioData with:
  - owner, contact, skills, projects, experience.
- Fill with realistic sample values.
- Add short comments for each major part.

5) JavaScript (js/main.js)
- On DOM ready:
  - Render skills, projects, experience from portfolioData.
  - Inject socials and contact email.
- Implement:
  - Smooth scrolling for nav and back‑to‑top.
  - Active nav highlighting on scroll.
  - Mobile nav toggle.
  - Contact form validation + success message.
  - Scroll reveal and other dynamic effects (e.g., animated filtering).

6) CSS (css/style.css)
- Implement dark, non‑blue theme.
- Style all sections, components, and dynamic states.
- Add responsive breakpoints and necessary animations.

7) README
- Document project usage, structure, and customization.

8) Final Review
- Ensure:
  - All sections exist and are visually good on mobile, tablet, desktop, large screens.
  - Navigation, scrolling, filters, form, and animations work correctly.
  - No TODO/FIXME/placeholder text.
  - No blue or blue‑ish colors anywhere.
  - No unused files or dead code.

--------------------------------------------------
10. CHAT BEHAVIOR
--------------------------------------------------
- In this chat, you may send only short status updates like:
  - “Structure created and base HTML done.”
  - “Config, rendering, and animations implemented.”
- Never paste code or file contents here.
- Never copy any of this prompt into project files.
- Assume the user will open index.html directly in a browser to use the project.