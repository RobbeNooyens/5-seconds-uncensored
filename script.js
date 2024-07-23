const questions = [
    "Noem 3 standjes in bed",
    "Noem 3 plekjes om het te doen",
    "Noem 3 erotische films",
    "Noem 3 manieren om iemand op te winden",
    "Noem 3 speeltjes",
    "Noem 3 merken van sterke drank",
    "Noem 3 manieren om een kater te verhelpen",
    "Noem 3 beroemde casino's",
    "Noem 3 horrorfilms",
    "Noem 3 dingen die je doet als je dronken bent",
    "Noem 3 redenen waarom je zou stoppen met roken",
    "Noem 3 beroemde moordzaken",
    "Noem 3 ingrediënten voor een cocktail",
    "Noem 3 gevaarlijke sporten",
    "Noem 3 bekende gevangenissen",
    "Noem 3 manieren om snel geld te verdienen",
    "Noem 3 redenen waarom je iemand zou aanklagen",
    "Noem 3 soorten drugs",
    "Noem 3 rockbands uit de jaren '80",
    "Noem 3 bekende acteurs die in actiefilms spelen",
    "Noem 3 manieren om je baan te verliezen",
    "Noem 3 plaatsen waar je niet wilt verdwalen",
    "Noem 3 dingen die je doet als je gestrest bent",
    "Noem 3 redenen om te scheiden",
    "Noem 3 manieren om een hartaanval te herkennen",
    "Noem 3 manieren om je veilig te voelen in een vreemde stad",
    "Noem 3 beroemde hackers",
    "Noem 3 films met een plottwist",
    "Noem 3 soorten verzekeringen die je nodig hebt",
    "Noem 3 manieren om te ontsnappen uit een gebouw",
    "Noem 3 redenen om naar de rechtbank te gaan",
    "Noem 3 manieren om zelfverdediging te leren",
    "Noem 3 soorten geheime diensten",
    "Noem 3 manieren om nuchter te worden",
    "Noem 3 dingen die je niet moet doen tijdens een sollicitatiegesprek",
];

let timerInterval;

function startGame() {
    const questionElement = document.getElementById('question');
    const timerElement = document.getElementById('timer');
    const squareElement = document.getElementById('square');

    const randomIndex = Math.floor(Math.random() * questions.length);
    questionElement.textContent = questions[randomIndex];

    let timeLeft = 5;
    timerElement.textContent = timeLeft;

    // Wait 1 second
    setTimeout(() => {
    }, 1000);

    clearInterval(timerInterval);

    // Reset square position and visibility
    squareElement.style.top = '-100%';
    squareElement.style.transition = 'top 5s cubic-bezier(0.25, 0.1, 0.25, 1)';

    // Move square to the middle
    setTimeout(() => {
        squareElement.style.top = '0';
    }, 50);

    timerInterval = setInterval(() => {
        timeLeft--;
        timerElement.textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);

            // Flash the square
            squareElement.style.transition = 'none';
            squareElement.style.animation = 'flash 0.5s ease';

            setTimeout(() => {
                // Drop the square with ease
                squareElement.style.animation = 'none';
                squareElement.style.transition = 'top 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)';
                squareElement.style.top = '100%';

                // Reset the square for the next start
                setTimeout(() => {
                    squareElement.style.transition = 'none';
                    squareElement.style.top = '-100%';
                }, 500);

            }, 500);
        }
    }, 1000);
}

// Add event listener for spacebar to trigger the startGame function
document.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
        startGame();
    }
});