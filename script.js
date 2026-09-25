document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 1. LOAD REUSABLE HEADER
    // ==========================================
    const headerContainer = document.getElementById('header-container');
    if (headerContainer) {
        fetch('header.html')
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

                sidebarLinks.forEach(l => l.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });

});

// ==========================================
// 4. HEADER DROPDOWN MENUS
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