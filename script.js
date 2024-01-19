function toggleAnswer(id) {
    const answer = document.getElementById(`answer${id}`);
    if (answer) {
        answer.classList.toggle("active");
    }
}

