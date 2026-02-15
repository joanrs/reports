/**
 * Common Header Initialization
 * This script dynamically loads all CSS and shared resources.
 */
(function () {
    // Detect base URL from existing variable or script path
    const base = (typeof base_url !== 'undefined') ? base_url : './';
    const normalizedBase = base.endsWith('/') ? base : base + '/';

    // List of common CSS files
    const styles = [
        'css/bootstrap.min.css',
        'css/fontawesome.min.css',
        'css/brands.min.css',
        'css/solid.min.css',
        'css/v4-font-face.min.css',
        'css/base.css',
        'css/premium.css'
    ];

    // Load Stylesheets
    styles.forEach(href => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = normalizedBase + href;
        document.head.appendChild(link);
    });

    // Load External Libraries CSS
    const highlightLight = document.createElement('link');
    highlightLight.id = 'hljs-light';
    highlightLight.rel = 'stylesheet';
    highlightLight.href = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/github.min.css';
    document.head.appendChild(highlightLight);

    const highlightDark = document.createElement('link');
    highlightDark.id = 'hljs-dark';
    highlightDark.rel = 'stylesheet';
    highlightDark.href = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/github-dark.min.css';
    highlightDark.disabled = true;
    document.head.appendChild(highlightDark);

    // Load Scripts (non-blocking)
    const hljsScript = document.createElement('script');
    hljsScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js';
    hljsScript.onload = () => { if (typeof hljs !== 'undefined') hljs.highlightAll(); };
    document.head.appendChild(hljsScript);

    const bsScript = document.createElement('script');
    bsScript.src = normalizedBase + 'js/bootstrap.bundle.min.js';
    document.head.appendChild(bsScript);

    const baseJs = document.createElement('script');
    baseJs.src = normalizedBase + 'js/base.js';
    document.head.appendChild(baseJs);

    const searchScript = document.createElement('script');
    searchScript.src = normalizedBase + 'search/main.js';
    document.head.appendChild(searchScript);

    // Common shortcuts definition
    window.shortcuts = { "help": 191, "next": 78, "previous": 80, "search": 83 };
})();
