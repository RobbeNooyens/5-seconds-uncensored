# 5 Seconds: Uncensored

## Overview
"5 Seconds: Uncensored" is a fun and engaging game where players are given 5 seconds to name three items related to a randomly generated question. This version of the game is designed for adults with general knowledge questions, ensuring a lively and challenging experience.

## Getting Started
### Prerequisites
To run this project, you need a web browser that supports ES6 modules and CSS animations.

### Installation
1. Clone this repository or download the zip file.
2. Ensure you have a local web server running (necessary for ES6 module support).

### Running the Game
1. Navigate to the project directory.
2. Open `index.html` in your web browser.

### Using a Local Server
For ES6 modules to work correctly, you need to serve the files using a local server.

#### Using Python HTTP Server
If you have Python installed, you can use its built-in HTTP server:
python -m http.server 8000
Then open http://localhost:8000 in your web browser.

#### Using VSCode Live Server
If you're using Visual Studio Code, you can use the Live Server extension:
1. Install the Live Server extension.
2. Right-click on `index.html` and select "Open with Live Server".

## How to Play
1. Click the "Start" button or press the spacebar to begin.
2. A random question will be displayed, and you will have 1 second to read it.
3. The timer will start counting down from 5 seconds.
4. Name three items related to the question before the timer runs out.

## Project Structure
/project-root
├── index.html
├── styles.css
├── script.js
└── questions.js

## Customization
### Adding More Categories and Subjects
To add more variety to the questions, you can modify the `categories` and `subjects` arrays in `script.js`:
const categories = [
"merken van", "soorten", "voorbeelden van", "redenen voor", "manieren om",
"bekende", "populaire", "belangrijke", "gevaarlijke", "interessante"
];

const subjects = [
"auto's", "dieren", "landen", "beroepen", "boeken",
"films", "sporten", "vakantiebestemmingen", "historische figuren", "gerechten",
"planten", "muziekinstrumenten", "tv-programma's", "kunstwerken", "uitvindingen",
"feesten", "tradities", "games", "muziekgenres", "thema's"
];

Enjoy playing "5 Seconds: Uncensored"!