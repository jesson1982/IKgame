# Infinity Kingdom Guide Website

A comprehensive, responsive strategy guide website for the mobile game Infinity Kingdom.

## Features

- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Hero Database**: Browse heroes by rarity (Legendary, Epic, Rare) with detailed stats
- **Strategy Guides**: Comprehensive guides covering beginners tips, defense, attack, resource farming, and more
- **Building Guide**: Organized by categories (Military, Economic, Defensive, Special)
- **Alliance Management**: Tips for building and leading successful alliances
- **Event Calendar**: Stay updated with upcoming events and rewards
- **FAQ Section**: Answers to common questions with accordion functionality
- **Search Functionality**: Search for heroes and content
- **Social Media Integration**: Links to Discord, Facebook, Twitter, YouTube, Reddit, and TikTok
- **Newsletter Subscription**: Email subscription form for updates

## File Structure

```
infinity-kingdom-guide/
├── index.html      # Main HTML file
├── styles.css      # CSS styles with responsive design
├── script.js       # JavaScript for interactivity
└── README.md       # This file
```

## How to Use

1. Simply open `index.html` in any modern web browser
2. No server or build process required - it's a static website
3. All features work offline

## Sections

### 1. Home/Hero Section
- Welcome banner with search functionality
- Quick stats showing site metrics

### 2. Heroes Section
- Filter heroes by rarity (All, Legendary, Epic, Rare)
- View hero stats including ATK, DEF, and HP
- Click "View Details" for more information

### 3. Strategies Section
- Six comprehensive strategy guides
- Topics include beginner's guide, defense, attack, resources, dragons, and KvK

### 4. Buildings Section
- Tabbed interface organized by building type
- Priority indicators for upgrade order
- Covers Military, Economic, Defensive, and Special buildings

### 5. Alliances Section
- Four key tips for alliance management
- Recruitment, communication, resource sharing, and war coordination

### 6. Events Section
- Featured and regular events
- Event dates and reward information

### 7. FAQ Section
- Expandable accordion-style questions and answers
- Covers common gameplay questions

### 8. Newsletter
- Email subscription form
- Stay updated with latest guides

### 9. Footer
- Social media links (Discord, Facebook, Twitter, YouTube, Reddit, TikTok)
- Quick navigation links
- Contact information

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS Grid, Flexbox, and animations
- **JavaScript**: Interactive features without frameworks
- **Font Awesome**: Icon library (loaded via CDN)

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Opera
- Mobile browsers (iOS Safari, Chrome Mobile)

## Customization

### Changing Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #6c5ce7;
    --secondary-color: #a29bfe;
    --accent-color: #fdcb6e;
    /* ... other colors */
}
```

### Adding New Heroes
Add new hero cards in the HTML within the `.heroes-grid` container:
```html
<div class="hero-card" data-rarity="legendary">
    <!-- Hero content -->
</div>
```

### Updating Social Links
Edit the social media links in the footer section of `index.html`.

## Future Enhancements

- Add more heroes and strategies
- Implement user comments system
- Add video guides
- Create interactive battle calculators
- Add user authentication for personalized content
- Multi-language support

## License

This is a fan-made project. Infinity Kingdom is a trademark of its respective owners.

## Contact

- Email: contact@ikguide.info
- Discord: dk86968
- Website: www.ikguide.info
