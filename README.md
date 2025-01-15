
# HTML, CSS, and SASS Boilerplate

## About This Project
This boilerplate provides a solid foundation for starting frontend projects with HTML, CSS, and SASS. It is designed to be scalable, organized, and customizable, making it easy to develop modern, responsive web interfaces.

### Features
- **Modular SASS Architecture:** Organized folder structure for SASS with reusable mixins, variables, and components.
- **Scalable Structure:** Designed to accommodate small to large projects.
- **PWA Ready:** Includes `manifest.json` for Progressive Web Apps.
- **Custom Fonts and Icons:** Ready to use font and favicon integration.
- **Utility-Focused:** Utility classes and reusable code to speed up development.

---

## Folder Structure

```plaintext
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
    abstracts/      # Variables, functions, mixins
    base/           # Resets, typography, base styles, and mixins
    components/     # Buttons, cards, modals, etc.
    layout/         # Header, footer, navbar, etc.
    pages/          # Page-specific styles
    themes/         # Light/dark themes, etc.
    utils/          # Utility or helper classes
    vendor/         # Third-party libraries
    index.scss      # Main entry SASS file
index.html           # Main HTML file
README.md            # Project documentation
manifest.json        # Web app manifest
LICENSE              # License file
```

---

## How to Use

### Clone the Repository
```bash
git clone https://github.com/HadiuzzamanBappy/BoilerPlate-HTML-SASS.git
cd BoilerPlate-HTML-SASS
```

### Compile SASS to CSS
You can use a SASS compiler of your choice. Below are two options:

#### Using Dart Sass
```bash
sass assets/sass/index.scss assets/css/style.css
```

#### Using node-sass
```bash
node-sass assets/sass/index.scss -o assets/css/
```

### Serve the Project
For quick development, use a local server (e.g., Live Server in VS Code or `http-server`):
```bash
npx http-server
```

Open `index.html` in your browser to see the project in action.

---

## Contribution Guidelines
1. Fork the repository.
2. Create a new branch for your feature or fix:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your descriptive message here"
   ```
4. Push to your branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request.

---

## Author
**Hadiuzzaman Bappy**

Frontend enthusiast passionate about scalable designs and responsive interfaces. Feel free to connect!

---

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.
