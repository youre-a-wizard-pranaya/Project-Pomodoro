let isRunning = false; // Track whether the timer is running
let timerInterval; // Store the interval ID for the timer

function toggleTimer() {
    const button = document.getElementById("start-stop");
    if (!isRunning) {
        // Start the timer
        isRunning = true;
        button.textContent = "Stop"; // Change button text

        let timeLeft = 25 * 60; // 25 minutes in seconds
        const display = document.getElementById("timer-display");

        timerInterval = setInterval(() => {
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;

            display.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                button.textContent = "Start"; // Reset button text
                isRunning = false; // Reset running state
                alert("Time's up!");
            }

            timeLeft--;
        }, 1000);
    } else {
        // Stop the timer
        isRunning = false;
        button.textContent = "Start"; // Change button text
        clearInterval(timerInterval); // Clear the interval
    }
}
