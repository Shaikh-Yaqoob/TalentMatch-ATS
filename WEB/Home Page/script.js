// Toggle active state for menu items
document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', () => {
        // Remove active class from the currently active item
        document.querySelector('.menu-item.active')?.classList.remove('active');
        // Add active class to the clicked item
        item.classList.add('active');
    });
});
