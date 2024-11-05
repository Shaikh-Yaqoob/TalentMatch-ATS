// Function to toggle visibility of sections
function showSection(sectionId) {
    const sections = [
        "job-details",
        "aptitude-tests",
        "candidates",
        "shortlisted-candidates",
        "final-shortlisted-candidates"
    ];

    sections.forEach((id) => {
        document.getElementById(id).style.display = (id === sectionId) ? "block" : "none";
    });
}

// Show specific sections
function showJobDetails() {
    showSection("job-details");
}

function showAptitudeTests() {
    showSection("aptitude-tests");
}

function showCandidates() {
    showSection("candidates");
}

function showShortlistedCandidates() {
    showSection("shortlisted-candidates");
}

function showFinalShortlistedCandidates() {
    showSection("final-shortlisted-candidates");
}

// Aptitude Tests category selection
function submitCategory() {
    const selectedJobTitle = document.querySelector('input[name="jobTitle"]:checked');
    if (selectedJobTitle) {
        const jobTitle = selectedJobTitle.value;
        window.location.href = `questions.html?category=${encodeURIComponent(jobTitle)}`;
    } else {
        alert("Please select a category.");
    }
}
