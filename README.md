# Isong Cafe - Bar & Grill Website

A modern, responsive website for Isong Cafe, a cozy bar and grill located in Mabeskraal, Rustenburg, South Africa.

## Project Overview

This website was created as a demonstration to showcase the potential of a professional online presence for Isong Cafe. It features a clean, modern design optimized for all devices and includes everything needed to attract customers and manage reservations online.

## Features

### Core Functionality
- **Responsive Design** - Fully optimized for desktop, tablet, and mobile devices
- **Hero Carousel** - Eye-catching image slideshow with automatic transitions
- **Interactive Menu** - Filterable menu system (Food/Drinks categories)
- **Online Booking System** - Functional reservation form with validation
- **Google Maps Integration** - Interactive map showing exact location
- **Mobile Navigation** - Smooth slide-in menu for mobile users
- **Call-to-Action** - Floating phone button for easy customer contact

### Sections
1. **Hero Section** - Dynamic carousel with 3 slides showcasing the venue
2. **About** - Description of Isong Cafe and its offerings
3. **Services** - Dine-in and takeaway options
4. **Menu** - Interactive menu with filtering capabilities
5. **Booking** - Table reservation form
6. **Contact** - Location, hours, phone, email, and social media links
7. **Amenities** - Bar, toilets, high chairs, payment options
8. **Parking** - Information about available parking

## Technologies Used

- **HTML5** - Semantic markup for better SEO
- **CSS3** - Custom animations and styling
- **JavaScript (ES6)** - Interactive features and form validation
- **Tailwind CSS** - Utility-first CSS framework (via CDN)
- **Swiper.js** - Touch-enabled carousel slider
- **Font Awesome** - Icon library
- **Formspree** - Form backend for handling reservations

## Development Tools

- **VS Code** - Code editor
- **Live Server Extension** - Local development server with live reload

## File Structure

```
isong-cafe-website/
│
├── index.html          # Main HTML file
├── style.css           # Custom CSS styles and animations
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## Installation & Setup

### Option 1: Development with VS Code Live Server

1. Open the project folder in Visual Studio Code
2. Install the "Live Server" extension by Ritwick Dey (if not already installed)
3. Right-click on `index.html` and select "Open with Live Server"
4. The website will open in your default browser with live reload enabled
5. Any changes you make will automatically refresh in the browser

### Option 2: Simple Local Testing

1. Download all project files to a folder
2. Open `index.html` in any modern web browser
3. The website will work immediately (requires internet for CDN resources)

### Option 3: Web Hosting Deployment

1. Upload `index.html`, `style.css`, and `script.js` to your web hosting
2. Ensure files are in the public HTML directory (often `public_html` or `www`)
3. Access via your domain name

## Configuration

### Booking Form Setup

The booking form currently uses Formspree. To set up your own form endpoint:

1. Create a free account at [Formspree.io](https://formspree.io)
2. Create a new form
3. Replace the form action URL in `index.html`:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

### Google Maps Configuration

The embedded map uses a Plus Code. To update:

1. Find your location on Google Maps
2. Get the Plus Code or coordinates
3. Update the iframe src in `index.html`

### Contact Information

Update these details in `index.html`:
- Phone number
- Email address
- Physical address
- Business hours
- Social media links

## Customization Guide

### Changing Colors

The site uses an orange and gray color scheme. To change:

**In HTML (Tailwind classes):**
- Primary color: `bg-orange-500`, `text-orange-500`, `hover:bg-orange-600`
- Replace with other Tailwind colors like `bg-blue-500`, `bg-green-500`, etc.

**In CSS (style.css):**
- Look for color values and update hex codes

### Updating Menu Items

Edit the menu section in `index.html`:

```html
<div class="menu-item" data-category="food">
    <img src="IMAGE_URL" alt="ITEM_NAME">
    <div class="p-4">
        <h3>ITEM_NAME</h3>
        <p>DESCRIPTION</p>
        <p class="text-orange-500 font-semibold">PRICE</p>
    </div>
</div>
```

### Adding More Carousel Slides

In `index.html`, add new slides within the swiper-wrapper:

```html
<div class="swiper-slide" style="background-image: url('YOUR_IMAGE_URL');">
    <div class="hero-overlay">
        <div class="container mx-auto px-4 text-center text-white">
            <h1>Your Heading</h1>
            <p>Your subheading</p>
            <!-- Add buttons/content here -->
        </div>
    </div>
</div>
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Optimization

The website is optimized for performance with:
- Lazy loading images
- CDN-hosted libraries
- Minimal custom JavaScript
- Optimized CSS animations
- Compressed assets

## Accessibility Features

- Semantic HTML5 elements
- ARIA labels for navigation and forms
- Keyboard navigation support
- Alt text for images
- High contrast text
- Responsive font sizes

## SEO Features

- Meta descriptions
- Open Graph tags for social sharing
- Semantic HTML structure
- Mobile-friendly design
- Fast loading times
- Descriptive page title

## Known Issues & Limitations

- **CDN Dependency** - Requires internet connection for Tailwind CSS, Font Awesome, and Swiper.js
- **Form Handling** - Currently uses Formspree (free tier has limits)
- **Image Placeholders** - Demo uses Unsplash images; replace with actual venue photos
- **Static Site** - No database or dynamic content management system

## Future Enhancements

Potential features to add:
- Online ordering system
- Customer reviews section
- Gallery/photo carousel
- Events calendar
- Newsletter signup
- Multi-language support
- Blog section
- Special offers/promotions banner

## Maintenance

### Regular Updates Needed
- Menu items and prices
- Business hours
- Contact information
- Special announcements
- Seasonal promotions
- Event information

### Security
- Keep CDN links updated to latest versions
- Regularly check form submissions
- Monitor for spam submissions
- Update SSL certificate (if self-hosted)

## Support & Contact

For questions, updates, or technical support regarding this website:

- **Email:** [Your Email]
- **Phone:** [Your Phone]
- **WhatsApp:** [Your WhatsApp]

## License

This website was custom-built for Isong Cafe. All rights reserved.

## Credits

- **Design & Development:** [Your Name/Company]
- **Images:** Unsplash (placeholder images)
- **Icons:** Font Awesome
- **Frameworks:** Tailwind CSS, Swiper.js

---

**Version:** 1.0  
**Last Updated:** January 2025  
**Status:** Demo/Production Ready

---

## Quick Start Checklist

Before going live, make sure to:

- [ ] Replace placeholder images with actual venue photos
- [ ] Update all contact information
- [ ] Configure booking form with your Formspree account
- [ ] Test booking form submissions
- [ ] Verify Google Maps location
- [ ] Update business hours if needed
- [ ] Test on multiple devices and browsers
- [ ] Set up domain name
- [ ] Configure web hosting
- [ ] Set up SSL certificate (HTTPS)
- [ ] Submit to Google My Business
- [ ] Add to Google Search Console
- [ ] Share on social media

## Troubleshooting

### Form Not Submitting
- Check Formspree form ID is correct
- Verify internet connection
- Check browser console for errors

### Images Not Loading
- Verify image URLs are correct
- Check file paths
- Ensure internet connection for external images

### Mobile Menu Not Working
- Check JavaScript file is loaded
- Verify no console errors
- Clear browser cache

### Map Not Displaying
- Check Plus Code is correct
- Verify iframe src URL
- Check for any blocking browser extensions

---

For additional help or to request features, please contact the developer.
