/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 *
 */


// Import music data at the top level
import musicCatalog from './data.js';

// DOM elements and functions
document.addEventListener('DOMContentLoaded', function() {
    // Check if we're on the catalog page
    if (document.querySelector('.catalog-page')) {
        const tracksContainer = document.getElementById('tracks-container');
        const searchInput = document.getElementById('search-input');
        const genreFilter = document.getElementById('genre-filter');
        const sortOptions = document.getElementById('sort-options');
        
        // Populate genres dropdown
        function populateGenres() {
            const genres = [...new Set(musicCatalog.map(track => track.genre))];
            genres.forEach(genre => {
                const option = document.createElement('option');
                option.value = genre;
                option.textContent = genre;
                genreFilter.appendChild(option);
            });
        }
        
        // Display tracks
        function displayTracks(tracks) {
            tracksContainer.innerHTML = '';
            
            tracks.forEach((track, index) => {
                const trackElement = document.createElement('div');
                trackElement.className = 'track-item';
                
                trackElement.innerHTML = `
                    <div class="track-number">${index + 1}</div>
                    <div class="track-info">
                        <img src="${track.coverImage}" alt="${track.title}" class="track-image">
                        <div class="track-details">
                            <div class="track-name">${track.title}</div>
                            <div class="track-artist">${track.artist}</div>
                        </div>
                    </div>
                    <div class="track-album">${track.album}</div>
                    <div class="track-duration">${track.duration}</div>
                `;
                
                tracksContainer.appendChild(trackElement);
            });
        }
        
        // Filter tracks based on search input and genre selection
        function filterTracks() {
            const searchTerm = searchInput.value.toLowerCase();
            const selectedGenre = genreFilter.value;
            
            let filteredTracks = musicCatalog.filter(track => {
                const matchesSearch = 
                    track.title.toLowerCase().includes(searchTerm) || 
                    track.artist.toLowerCase().includes(searchTerm) ||
                    track.album.toLowerCase().includes(searchTerm);
                    
                const matchesGenre = selectedGenre === '' || track.genre === selectedGenre;
                
                return matchesSearch && matchesGenre;
            });
            
            // Apply sorting
            const sortValue = sortOptions.value;
            if (sortValue === 'title-asc') {
                filteredTracks.sort((a, b) => a.title.localeCompare(b.title));
            } else if (sortValue === 'title-desc') {
                filteredTracks.sort((a, b) => b.title.localeCompare(a.title));
            } else if (sortValue === 'duration-asc') {
                filteredTracks.sort((a, b) => {
                    const aDuration = convertDurationToSeconds(a.duration);
                    const bDuration = convertDurationToSeconds(b.duration);
                    return aDuration - bDuration;
                });
            } else if (sortValue === 'duration-desc') {
                filteredTracks.sort((a, b) => {
                    const aDuration = convertDurationToSeconds(a.duration);
                    const bDuration = convertDurationToSeconds(b.duration);
                    return bDuration - aDuration;
                });
            }
            
            displayTracks(filteredTracks);
        }
        
        // Helper function to convert MM:SS to seconds
        function convertDurationToSeconds(duration) {
            const [minutes, seconds] = duration.split(':').map(Number);
            return minutes * 60 + seconds;
        }
        
        // Event listeners
        searchInput.addEventListener('input', filterTracks);
        genreFilter.addEventListener('change', filterTracks);
        sortOptions.addEventListener('change', filterTracks);
        
        // Initialize
        populateGenres();
        displayTracks(musicCatalog);
    }
});