
# SASS Boilerplate

A scalable and futuristic SASS boilerplate designed to streamline project setup for modern frontend development. This boilerplate follows expert development practices and emphasizes modularity, maintainability, and flexibility.

---

## **File Structure**

```
assets/
  css/              # Compiled CSS files
    fonts/          # Web fonts (e.g., WOFF, WOFF2)
    style.css       # Main compiled CSS file
  js/               # JavaScript files
    modules/        # Reusable JavaScript modules
    main.js         # Entry JavaScript file
  media/            # Media files (images, icons, etc.)
    icon/           # Icons including favicon
  pdf/              # PDF and downloadable files
  sass/             # SASS source files
    abstracts/      # Variables, fonts
    base/           # Resets, typography, base, functions, and mixins (common, generated)
    components/     # Buttons, cards, modals, etc.
    layout/         # Header, footer, navbar, etc.
    pages/          # Page-specific styles
    themes/         # Light/dark themes, etc.
    index.scss      # Main entry SASS file
index.html           # Main HTML file
README.md            # Project documentation
manifest.json        # Web app manifest
LICENSE              # License file
```

---

## **SASS Directory Overview**

### **1. Abstracts**
Contains variables, font definitions, and any other configuration-level styles. Forwarded in `abstracts/_index.scss` and imported into other layers as needed.

**Files:**
- `_variables.scss`
- `_fonts.scss`
- `_index.scss`

### **2. Base**
Defines foundational styles like resets, typography, and reusable functions or mixins.

**Files:**
- `_reset.scss`: CSS reset styles
- `_typography.scss`: Typography definitions
- `_functions.scss`: Utility functions
- `mixins/`: Common and generated mixins
  - `_common.scss`
  - `_generated.scss`
  - `_index.scss`
- `_base.scss`: Global defaults
- `_index.scss`: Aggregates all base styles for easy import

### **3. Components**
Encapsulates individual UI components like buttons, cards, dialogs, etc. Each component has its own file for modularity.

**Files:**
- `_button.scss`
- `_card.scss`
- `_dialog.scss`
- ...
- `_index.scss`: Aggregates all component files

### **4. Layout**
Handles layout-specific styles such as header, footer, and navigation.

**Files:**
- `_header.scss`
- `_footer.scss`
- `_index.scss`: Aggregates all layout files

### **5. Pages**
Page-specific styles for individual pages.

**Files:**
- `_home.scss`
- `_about.scss`
- `_index.scss`: Aggregates all page styles

### **6. Themes**
Manages theme-specific styles, like light and dark modes.

**Files:**
- `_light.scss`
- `_dark.scss`
- `_index.scss`: Aggregates all theme files

---

## **Setup and Usage**

### **1. Clone the Repository**
```bash
git clone https://github.com/HadiuzzamanBappy/BoilerPlate-HTML-SASS
cd BoilerPlate-HTML-SASS
```

### **2. Install Dependencies**
Ensure you have SASS installed. You can use Dart Sass or any other preferred SASS compiler.

```bash
npm install -g sass
```

### **3. Compile SASS**
Compile the `index.scss` file to generate the main CSS output:

```bash
sass sass/index.scss assets/css/style.css
```
or else use Live SASS Compiler from VS Code

### **4. File Import Management**
Use `@use` and `@forward` to manage imports:
- Each folder has an `_index.scss` file to aggregate its files.
- Use the aggregated `_index.scss` in `sass/index.scss` for easy access to styles.

Example from `sass/index.scss`:
```scss
@use 'abstracts/index' as abs;
@use 'base/index' as base;
@use 'components/index' as comp;
@use 'layout/index' as layout;
@use 'pages/index' as pages;
@use 'themes/index' as themes;
```

### **5. Development Workflow**
1. Write modular styles in their respective files.
2. Forward styles in `_index.scss` files.
3. Import everything in `sass/index.scss`.
4. Compile `sass/index.scss` for the final CSS output.

---

## **Best Practices**

1. **Use Namespaces:** Use `@use` with namespaces to avoid style conflicts and improve clarity.
2. **Modularity:** Keep styles organized in their respective directories to ensure maintainability.
3. **Scalability:** Use `@forward` to aggregate files and simplify imports in larger projects.
4. **Consistency:** Follow a consistent naming convention (e.g., prefixing partial files with `_`).
5. **Compile Only `index.scss`:** Ensure that only `index.scss` is compiled to generate the CSS output.

---

## **Contributing**
1. Fork the repository
2. Create a feature branch (`git checkout -b feature-name`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature-name`)
5. Open a Pull Request

---

## Author
Frontend enthusiast passionate about scalable designs and responsive interfaces. Feel free to connect!
If anyone have any Enquiry: **hbappy79@gmail.com**
---

## **License**
This project is licensed under the MIT License. See the `LICENSE` file for details.
