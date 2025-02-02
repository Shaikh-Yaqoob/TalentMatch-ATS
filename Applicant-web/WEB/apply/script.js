document.addEventListener('DOMContentLoaded', function() {
    const sidebarLinks = document.querySelectorAll('.sidebar-app li a');

    sidebarLinks.forEach(link => {
        link.addEventListener('click', function() {
            sidebarLinks.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
            showContent(this.getAttribute('data-section'));
        });
    });
});

function showContent(section) {
    // Get all content divs
    const contents = [
        document.getElementById('loginContent'),
        document.getElementById('registerContent'),
        document.getElementById('forgetPasswordContent'),
        document.getElementById('profileContent'),
        document.getElementById('settingsContent')
    ];

    // Fade out the currently displayed content
    contents.forEach(content => {
        if (content.style.display !== 'none') {
            content.classList.add('hidden'); // Start fading out
            setTimeout(() => {
                content.style.display = 'none'; // Set display to none after fade out
                content.classList.remove('hidden'); // Reset hidden class for future use
            }, 300); // Duration must match the CSS transition time
        }
    });

    // Hide active class from all links
    const links = document.querySelectorAll(".sidebar-app li a");
    links.forEach(link => link.classList.remove("active"));

    // Display selected section content and set active class
    setTimeout(() => {
        if (section === 'login') {
            document.getElementById('title').innerText = 'Login Instructions';
            document.getElementById('loginContent').style.display = 'block';
            links[0].classList.add("active");
            document.getElementById('loginContent').classList.remove('hidden'); // Fade in
        } else if (section === 'register') {
            document.getElementById('title').innerText = 'Registration Instructions';
            document.getElementById('registerContent').style.display = 'block';
            links[1].classList.add("active");
            document.getElementById('registerContent').classList.remove('hidden'); // Fade in
        } else if (section === 'forgetPassword') {
            document.getElementById('title').innerText = 'Forget Password Instructions';
            document.getElementById('forgetPasswordContent').style.display = 'block';
            links[2].classList.add("active");
            document.getElementById('forgetPasswordContent').classList.remove('hidden'); // Fade in
        } else if (section === 'profile') {
            document.getElementById('title').innerText = 'Profile Instructions';
            document.getElementById('profileContent').style.display = 'block';
            links[3].classList.add("active");
            document.getElementById('profileContent').classList.remove('hidden'); // Fade in
        } else if (section === 'settings') {
            document.getElementById('title').innerText = 'Settings Instructions';
            document.getElementById('settingsContent').style.display = 'block';
            links[4].classList.add("active");
            document.getElementById('settingsContent').classList.remove('hidden'); // Fade in
        }
    }, 300); // Delay to match the fade-out time
}