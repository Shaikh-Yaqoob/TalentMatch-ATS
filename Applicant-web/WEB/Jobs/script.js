document.querySelector('.reset-btn').addEventListener('click', () => {
    document.getElementById('location').value = '';
    document.querySelectorAll('.sidebar input[type="checkbox"], .sidebar input[type="radio"]').forEach(input => {
        input.checked = false;
    });
    document.querySelector('.sidebar input[type="number"]').value = '';
});
