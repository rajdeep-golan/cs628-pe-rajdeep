## Input

The Movie List application receives user input through a genre selection dropdown and clicks on individual movie cards.These interactions drive the application's dynamic filtering and event handling functionalities.

## Process

The application initializes with a predefined movie dataset, dynamically populating a genre filter dropdown. User genre selection updates the component's state, triggering a re-render that filters the movie list to display only matching entries, or all if "All Genres" is chosen. Clicking a movie card activates an event handler, preparing the movie's title for output.

## Output

The primary output is a dynamically rendered list of movie cards, each showing the movie's title, genre, and release year. This list instantly updates based on the active genre filter. Additionally, clicking any movie card produces a JavaScript alert box displaying that movie's title.
