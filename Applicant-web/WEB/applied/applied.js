document.addEventListener('DOMContentLoaded', function () {
    const sidebarLinks = document.querySelectorAll('.sidebar-applied ul li a');

    sidebarLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent default link behavior

            // Remove 'active' class from all links
            sidebarLinks.forEach(link => link.classList.remove('active'));

            // Add 'active' class to the clicked link
            this.classList.add('active');

            // Get the section to show
            const section = this.getAttribute('data-section');
            showContent(section);
        });
    });
});

function showContent(section) {
    // Get both content divs
    const appliedJobsContent = document.getElementById('appliedJobs');
    const savedJobsContent = document.getElementById('savedJobs');

    // Fade out the currently displayed content
    const contents = [appliedJobsContent, savedJobsContent];
    contents.forEach(content => {
        if (content.style.display !== 'none') {
            content.classList.add('hidden'); // Start fading out
            setTimeout(() => {
                content.style.display = 'none'; // Set display to none after fade out
                content.classList.remove('hidden'); // Reset hidden class for future use
            }, 300); // Duration should match CSS transition time
        }
    });

    // Show the selected section
    setTimeout(() => {
        if (section === 'appliedJobs') {
            appliedJobsContent.style.display = 'block';
            appliedJobsContent.classList.remove('hidden'); // Fade in
        } else if (section === 'savedJobs') {
            savedJobsContent.style.display = 'block';
            savedJobsContent.classList.remove('hidden'); // Fade in
        }
    }, 300); // Delay to match fade-out time
}
