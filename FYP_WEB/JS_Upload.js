// script.js
document.getElementById('uploadButton').addEventListener('click', function() {
    document.getElementById('resumeInput').click();
});

document.getElementById('resumeInput').addEventListener('change', function(event) {
    const fileName = event.target.files[0] ? event.target.files[0].name : 'No file chosen';
    alert('You selected: ' + fileName);
});
