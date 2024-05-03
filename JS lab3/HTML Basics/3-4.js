var clicker = document.getElementById('clickerButton');
var displayCounter = document.getElementById('clickCounter');

var savedClicks = localStorage.getItem('savedClickCount');
if (savedClicks !== null) {
    displayCounter.textContent = savedClicks;
}

function calculateAverage(clicks) {
    var averageDisplay = document.getElementById('clickAverage');
    var averagePerSecond = clicks;
    averageDisplay.textContent = averagePerSecond;
}

var totalClicks = 0;

setInterval(function() {
    calculateAverage(totalClicks);
    totalClicks = 0;
}, 1000);

function addClick() {
    totalClicks++;
    var currentCount = parseInt(displayCounter.textContent);
    displayCounter.textContent = currentCount + 1;
    localStorage.setItem('savedClickCount', displayCounter.textContent);
}

clicker.addEventListener('click', addClick);
