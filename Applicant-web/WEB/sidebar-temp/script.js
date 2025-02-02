function loadContent(page) {
    // Define paths for each page using an object
    const paths = {
        home: {
            url: '/WEB/home/home.html',
            cssFile: '/WEB/home/styles.css',
            jsFile: '/WEB/home/script.js'
        },
        profile: {
            url: '/WEB/Profile/profile.html',
            cssFile: '/WEB/Profile/styles.css',
            jsFile: '/WEB/Profile/script.js'
        },
        applications: {
            url: '/WEB/AppliedApplications/appliedApplications.html',
            cssFile: '/WEB/AppliedApplications/styles.css',
            jsFile: '/WEB/AppliedApplications/script.js'
        },
        jobs: {
            url: '/WEB/Jobs/jobs.html',
            cssFile: '/WEB/Jobs/styles.css',
            jsFile: '/WEB/Jobs/script.js'
        },
        howToApply: {
            url: '/WEB/HowToApply/howToApply.html',
            cssFile: '/WEB/HowToApply/styles.css',
            jsFile: '/WEB/HowToApply/script.js'
        },
        about: {
            url: '/WEB/About/about.html',
            cssFile: '/WEB/About/styles.css',
            jsFile: '/WEB/About/script.js'
        }
    };

    // Get paths for the requested page or fall back to 'home' if not found
    const { url, cssFile, jsFile } = paths[page] || paths['home'];

    // Load the HTML content dynamically
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to load HTML file: ${url}`);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('content-area').innerHTML = data;
            loadCSS(cssFile); // Load the CSS
            loadJS(jsFile);   // Load the JavaScript
        })
        .catch(error => console.error('Error loading page:', error));
}

// Functions to dynamically load CSS and JavaScript
function loadCSS(file) {
    let existingCSS = document.getElementById('dynamic-css');
    if (existingCSS) {
        existingCSS.remove();
    }

    let link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = `${file}?v=${new Date().getTime()}`; // Adding a cache-busting query string
    link.id = 'dynamic-css';
    document.head.appendChild(link);
}



function loadJS(file) {
    let existingJS = document.getElementById('dynamic-js');
    if (existingJS) {
        existingJS.remove();
    }

    let script = document.createElement('script');
    script.src = `${file}?v=${new Date().getTime()}`; // Adding cache-busting query string
    script.id = 'dynamic-js';
    document.body.appendChild(script);
}

