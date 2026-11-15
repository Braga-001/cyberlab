const form = document.getElementById("supportForm");
const problem = document.getElementById("problem");
const result = document.getElementById("result");
const telegramBtn = document.getElementById("telegramBtn");
const submitBtn = document.getElementById("submitBtn");

// PUT YOUR TELEGRAM USERNAME HERE
const telegramNumber = "16507351926";

// SUBMIT FORM
form.addEventListener("submit", function(event) {
    event.preventDefault();

    const userProblem = problem.value.trim();

    if (userProblem === "") {
        alert("Please describe your problem first!");
        return;
    }

    // CREATE MESSAGE
    const message = "Hello, I need your help. " + userProblem;

    // ENCODE MESSAGE
    const encodedMessage = encodeURIComponent(message);

    // TELEGRAM LINK
    const telegramLink =
    "https://t.me/+" + telegramNumber +
    "?text=" + encodedMessage;

// SHOW RESULT
telegramBtn.href = telegramLink;
result.classList.remove("hidden");

    submitBtn.textContent = "Problem Submitted ✓";

    result.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
});

// ENTER KEY SUPPORT
problem.addEventListener("keydown", function(event) {
    if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault();
        form.requestSubmit();
    }
});