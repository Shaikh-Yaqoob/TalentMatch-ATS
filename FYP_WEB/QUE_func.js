// Function to display the selected category on page load
window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    document.getElementById("selected-category").textContent += category;
};

// Function to show the input fields when "ADD NEW QUESTION" button is clicked
function showInputFields() {
    const inputFieldsDiv = document.getElementById('input-fields');
    inputFieldsDiv.style.display = 'block';  // Display the input fields
}

// Function to add a new question
function addQuestion() {
    // Get the values entered by the user
    const questionText = document.querySelector('input[name="newQuestion"]').value;
    const correctAnswer = document.querySelector('input[name="newAnswer"]').value;
    const optionA = document.querySelector('input[name="newOptionA"]').value;
    const optionB = document.querySelector('input[name="newOptionB"]').value;
    const optionC = document.querySelector('input[name="newOptionC"]').value;

    // Check if all fields have been filled
    if (!questionText || !correctAnswer || !optionA || !optionB || !optionC) {
        alert("Please fill in all fields before adding a question.");
        return;
    }

    // Count the current number of questions (pre-existing + newly added)
    const existingQuestions = document.querySelectorAll('.question-block').length;
    const newQuestionNumber = existingQuestions + 1; // Increment by 1 for the new question

    // Create a new div to represent the newly added question
    const newQuestionDiv = document.createElement('div');
    newQuestionDiv.classList.add('question-block');

    // Structure of the new question
    newQuestionDiv.innerHTML = `
        <h4>Question ${newQuestionNumber}: ${questionText}</h4>
        <p>Correct Answer: ${correctAnswer}</p>
        <p>Option A: ${optionA}</p>
        <p>Option B: ${optionB}</p>
        <p>Option C: ${optionC}</p>
        <hr>
    `;

    // Append the new question block to the question container
    const questionContainer = document.getElementById('question-container');
    questionContainer.appendChild(newQuestionDiv);  // Adds the new question after the dummy questions

    // Clear the input fields after adding the question
    document.querySelector('input[name="newQuestion"]').value = '';
    document.querySelector('input[name="newAnswer"]').value = '';
    document.querySelector('input[name="newOptionA"]').value = '';
    document.querySelector('input[name="newOptionB"]').value = '';
    document.querySelector('input[name="newOptionC"]').value = '';

    // Hide the input fields again after submitting
    const inputFieldsDiv = document.getElementById('input-fields');
    inputFieldsDiv.style.display = 'none';
}
