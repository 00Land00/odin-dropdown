function initDropdown() {
    const dropdowns = document.querySelectorAll('.dropdown');
    
    function toggleDropdown() {
        const content = this.querySelector('.dropdown-content');
        content.style.display = content.style.display === 'block'? 'none' : 'block';
    }

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', toggleDropdown);
        const content = dropdown.querySelector('.dropdown-content');
        content.style.display = 'none';
    });
}

(() => {
    window.addEventListener('DOMContentLoaded', () => {
        // add button event handler
        initDropdown();
    });
})();