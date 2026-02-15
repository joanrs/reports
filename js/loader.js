/**
 * Smart Loader for Modular MkDocs Theme
 */

document.addEventListener("DOMContentLoaded", function () {
    const navbarPlaceholder = document.getElementById("site-navbar");
    const footerPlaceholder = document.getElementById("site-footer");

    // base_url check from index.html (assigned by MkDocs or manually)
    const base = (typeof base_url !== 'undefined') ? base_url : './';

    // Normalize base trailing slash
    const normalizedBase = base.endsWith('/') ? base : base + '/';

    // Helper to replace placeholders and fix links
    function processTemplate(html) {
        // Replace {{BASE_URL}} placeholders
        let processed = html.replace(/{{BASE_URL}}/g, normalizedBase);

        // Convert any href="." to correct base
        processed = processed.replace(/href="\."/g, `href="${normalizedBase}"`);

        return processed;
    }

    // 1. Load Navbar
    if (navbarPlaceholder) {
        fetch(normalizedBase + 'includes/navbar.html')
            .then(response => response.text())
            .then(html => {
                navbarPlaceholder.innerHTML = processTemplate(html);
                highlightActiveLink();
            });
    }

    // 2. Load Footer
    if (footerPlaceholder) {
        fetch(normalizedBase + 'includes/footer.html')
            .then(response => response.text())
            .then(html => {
                footerPlaceholder.innerHTML = processTemplate(html);
            });
    }

    // 3. Highlight Active Link based on current URL
    function highlightActiveLink() {
        const currentPath = window.location.pathname;
        const navLinks = document.querySelectorAll('.navbar .nav-link');

        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href && !href.startsWith('#') && currentPath.includes(href.replace(/\.\.\//g, ''))) {
                link.classList.add('active');
            }
        });
    }
});
