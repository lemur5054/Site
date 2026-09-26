document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 1. LOAD REUSABLE HEADER
    // ==========================================
    const headerContainer = document.getElementById('header-container');
    if (headerContainer) {
        fetch('/header.html')
            .then(response => response.text())
            .then(data => {
                headerContainer.innerHTML = data;
                // Initialize dropdowns AFTER the header is injected into the DOM
                initHeaderDropdowns();
            })
            .catch(error => console.error('Error loading header:', error));
    }

    // ==========================================
    // 2. SIDEBAR TOGGLE (Collapsible Menus)
    // ==========================================
    const toggleButtons = document.querySelectorAll('.toggle-btn');

    toggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            const list = button.nextElementSibling;
            
            if (list) {
                list.classList.toggle('collapsed');
                button.classList.toggle('collapsed');
            }
        });
    });

    // ==========================================
    // 3. SMOOTH SCROLLING FOR SIDEBAR LINKS
    // ==========================================
    const sidebarLinks = document.querySelectorAll('.sidebar-list a[href^="#"]');

    sidebarLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); 

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'start' 
                });
            }
        });
    });

    // ==========================================
    // 4. SCROLL SPY (Highlight active section on scroll)
    // ==========================================
    const contentArea = document.querySelector('.content');
    
    if (contentArea) {
        const sections = document.querySelectorAll('.content section[id]');
        const navLinks = document.querySelectorAll('.sidebar-list a[href^="#"]');

        const updateActiveLink = () => {
            let current = '';
            
            sections.forEach(section => {
                const rect = section.getBoundingClientRect();
                const containerRect = contentArea.getBoundingClientRect();
                
                // If the top of the section is near the top of the visible area (100px buffer)
                if (rect.top <= containerRect.top + 100) {
                    current = section.getAttribute('id');
                }
            });

            // Update the active class in the sidebar
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        };

        // Listen to scroll events inside the content area
        contentArea.addEventListener('scroll', updateActiveLink);
        
        // Run once on page load to set the initial active state
        updateActiveLink();
    }

});

// ==========================================
// 5. HEADER DROPDOWN MENUS
// ==========================================
function initHeaderDropdowns() {
    const pagesBtn = document.getElementById('pages-btn');
    const pagesDropdown = document.getElementById('pages-dropdown');

    if (pagesBtn && pagesDropdown) {
        // Toggle dropdown on button click
        pagesBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent the click from immediately closing the dropdown
            pagesDropdown.classList.toggle('show');
        });

        // Close dropdown when clicking anywhere else on the page
        document.addEventListener('click', (e) => {
            if (!pagesDropdown.contains(e.target) && e.target !== pagesBtn) {
                pagesDropdown.classList.remove('show');
            }
        });
    }
}