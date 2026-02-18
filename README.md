# Professional Portfolio Website

A modern, multi-page portfolio website with 3D animations and professional design.

## Features

- **Multi-Page Architecture**: Separate pages for Home, About, Skills, Projects, Experience, and Contact
- **3D Animations**: Interactive 3D elements and particle effects
- **Responsive Design**: Fully responsive across all devices
- **Modern UI/UX**: Clean, professional design with smooth transitions
- **Interactive Elements**: Hover effects, typing animations, and scroll animations
- **Performance Optimized**: Fast loading and smooth animations

## Pages

1. **Home** - Hero section with 3D floating cards and animated background
2. **About** - Personal information, education, certifications, and interests
3. **Skills** - 3D skill cubes with proficiency levels and progress bars
4. **Projects** - Detailed project showcases with features and tech stacks
5. **Experience** - Timeline view of work experience and achievements
6. **Contact** - Contact form, social links, and availability information

## Technologies Used

- HTML5
- CSS3 (with CSS Grid and Flexbox)
- JavaScript (ES6+)
- Font Awesome Icons
- Custom 3D animations

## File Structure

```
portfolio/
├── index.html          # Home page
├── about.html          # About page
├── skills.html         # Skills page
├── projects.html       # Projects page
├── experience.html     # Experience page
├── contact.html        # Contact page
├── css/
│   ├── main.css        # Main styles
│   ├── about.css       # About page styles
│   ├── skills.css      # Skills page styles
│   ├── projects.css    # Projects page styles
│   ├── experience.css  # Experience page styles
│   └── contact.css     # Contact page styles
├── js/
│   ├── main.js         # Main JavaScript
│   └── three.min.js    # 3D animations
└── README.md
```

## Setup

1. Clone or download the repository
2. Open `index.html` in your browser
3. No build process required - pure HTML, CSS, and JavaScript

## Customization

### Update Personal Information
- Edit the HTML files to update your name, bio, and contact details
- Modify project descriptions in `projects.html`
- Update experience details in `experience.html`

### Change Colors
Edit the CSS variables in `css/main.css`:
```css
:root {
  --primary-color: #00d4ff;
  --secondary-color: #0099ff;
  --accent-color: #ff006e;
  /* ... */
}
```

### Add Projects
Add new project cards in `projects.html` following the existing structure.

### Modify Skills
Update skill levels and add new skills in `skills.html`.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Optimized animations using CSS transforms
- Lazy loading for images
- Minimal JavaScript for better performance
- Smooth 60fps animations

## License

Free to use for personal and commercial projects.

## Contact

For questions or suggestions, reach out via the contact form on the website.
