let homeScoreEl = document.getElementById("homeScore");
let guestScoreEl = document.getElementById("guestScore");
let homeScore = 0;
let guestScore = 0;

function increaseHomeScore(points) {
    homeScore += points;
    homeScoreEl.textContent = homeScore;
}

function increaseGuestScore(points) {
    guestScore += points;
    guestScoreEl.textContent = guestScore;
}

function resetAllScore() {
    homeScore = 0;
    guestScore = 0;
    homeScoreEl.textContent = homeScore;
    guestScoreEl.textContent = guestScore;
}

