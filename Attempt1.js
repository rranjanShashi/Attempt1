function generatePrankAnswer() {
  var questionInput = document.getElementById("questionInput").value;
  var answerContainer = document.getElementById("answerContainer");

  // Make sure the input is not empty
  if (questionInput.trim() === "") {
    alert("Please enter a question.");
    return;
  }

  // Make request to OpenAI API
  fetch("/generate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      question: questionInput,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      // Display generated prank answer
      answerContainer.innerHTML = `<p><strong>FutureBot:</strong> ${data.answer}</p>`;
    })
    .catch((error) => {
      console.error("Error:", error);
      answerContainer.innerHTML = "<p>Oops! Something went wrong. Please try again later.</p>";
    });
}
