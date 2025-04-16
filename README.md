# BeatBase - Interactive Music Catalog

## Project Overview
BeatBase is a web-based music catalog that showcases a collection of songs using data from Spotify. The application features a landing page with an intuitive interface and a catalog page that displays tracks in a format similar to popular streaming services.

## Features
- **Landing Page**: Welcoming introduction with a clean, modern design
- **Music Catalog**: Display of tracks with album art, artist, title, and duration
- **Search Function**: Real-time filtering of tracks as you type
- **Genre Filtering**: Ability to filter tracks by their musical genre
- **Sorting Options**: Sort tracks by title (A-Z or Z-A) or duration (short to long or long to short)
- **Responsive Design**: Optimized for both desktop and mobile viewing

## Technologies Used
- **HTML5**: Structure and content
- **CSS3**: Styling and animations
- **JavaScript (ES6+)**: Dynamic content and user interactions
- **Spotify API**: One-time data fetch to populate the catalog

## How It Works
The application uses arrays and objects to store and manipulate the music data. The catalog implements multiple operations on this data, including filtering, searching, and sorting, providing users with a dynamic and interactive experience.

## Development Process
This project was developed as part of a web development assignment focusing on data structures and DOM manipulation. The data was fetched once from the Spotify API and stored locally to avoid making live API calls.

## Learning Resources

### HTML
- [MDN HTML Guide](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [W3Schools HTML Tutorial](https://www.w3schools.com/html/)
- [HTML.com](https://html.com/)

### CSS
- [MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [W3Schools CSS Tutorial](https://www.w3schools.com/css/)
- [CSS-Tricks](https://css-tricks.com/)

### JavaScript
- [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [W3Schools JavaScript Tutorial](https://www.w3schools.com/js/)
- [JavaScript.info](https://javascript.info/)
- [Eloquent JavaScript Book](https://eloquentjavascript.net/)

### Data Structures in JavaScript
- [MDN Array Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [MDN Object Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
- [JavaScript Array Methods](https://www.w3schools.com/js/js_array_methods.asp)

### Responsive Design
- [MDN Responsive Design](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)
- [W3Schools Responsive Web Design](https://www.w3schools.com/css/css_rwd_intro.asp)
- [CSS Media Queries](https://css-tricks.com/a-complete-guide-to-css-media-queries/)

## How to Run the Project
1. Clone the repository
2. Open the project directory
3. Use a local server (recommended):
   ```
   npx http-server
   ```
4. Open your browser and navigate to http://localhost:8080 (or the port shown in the terminal)

## Future Improvements
- Add a "favorites" feature to let users save their preferred tracks
- Include audio previews of tracks
- Implement a dark/light mode toggle
- Expand the data to include more details about artists and albums

## License
This project is created for educational purposes. The music data is sourced from Spotify but is not updated in real-time.

## Acknowledgments
- Spotify for providing the initial data
- [FontAwesome](https://fontawesome.com/) for icons
- [Google Fonts](https://fonts.google.com/) for typography