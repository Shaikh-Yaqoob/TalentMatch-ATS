function showJobDetails() {
    document.getElementById("job-details").style.display = "block";
    document.getElementById("aptitude-tests").style.display = "none";
    document.getElementById("candidates").style.display = "none";
    document.getElementById("shortlisted-candidates").style.display = "none";
    document.getElementById("final-shortlisted-candidates").style.display = "none";
}

function showAptitudeTests() {
    document.getElementById("job-details").style.display = "none";
    document.getElementById("aptitude-tests").style.display = "block";
    document.getElementById("candidates").style.display = "none";
    document.getElementById("shortlisted-candidates").style.display = "none";
    document.getElementById("final-shortlisted-candidates").style.display = "none";
}

function showCandidates() {  // New function for 'Candidates'
    document.getElementById("job-details").style.display = "none";
    document.getElementById("aptitude-tests").style.display = "none";
    document.getElementById("candidates").style.display = "block";
    document.getElementById("shortlisted-candidates").style.display = "none";
    document.getElementById("final-shortlisted-candidates").style.display = "none";
}

function showShortlistedCandidates() {
    document.getElementById("job-details").style.display = "none";
    document.getElementById("aptitude-tests").style.display = "none";
    document.getElementById("candidates").style.display = "none";
    document.getElementById("shortlisted-candidates").style.display = "block";
    document.getElementById("final-shortlisted-candidates").style.display = "none";
}

function showFinalShortlistedCandidates() {
    document.getElementById("job-details").style.display = "none";
    document.getElementById("aptitude-tests").style.display = "none";
    document.getElementById("candidates").style.display = "none";
    document.getElementById("shortlisted-candidates").style.display = "none";
    document.getElementById("final-shortlisted-candidates").style.display = "block";
}
//Aptitude Tests
function submitCategory() {
    const selectedJobTitle = document.querySelector('input[name="jobTitle"]:checked');
    if (selectedJobTitle) {
        // Redirect to the new page and pass the selected job title as a query parameter
        const jobTitle = selectedJobTitle.value;
        window.location.href = `questions.html?category=${encodeURIComponent(jobTitle)}`;
    } else {
        alert("Please select a category.");
    }
}
