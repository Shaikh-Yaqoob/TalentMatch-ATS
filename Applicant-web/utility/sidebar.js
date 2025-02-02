fetch("../../utility/sidebar.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("sidebar-container").innerHTML = data;
        handleActiveLinks();
    })
    .catch(error => console.error("Error loading sidebar:", error));

// Toggle active state for menu items
document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', () => {
        // Remove active class from the currently active item
        document.querySelector('.menu-item.active')?.classList.remove('active');
        // Add active class to the clicked item
        item.classList.add('active');
        console.log("click");

    });
});

function handleActiveLinks() {
    const page = window.location.href;
    document.querySelectorAll('.menu-item').forEach(item => {
        const href = item.querySelector("a").href;
        if (href === page) {
            console.log(page);
            document.querySelector('.menu-item.active')?.classList.remove('active');
            item.classList.add('active');
        }
    })
}
