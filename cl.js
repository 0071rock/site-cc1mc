// Dark Mode Toggle
const darkModeToggle = () => {
    const html = document.documentElement;
    const isDarkMode = html.getAttribute('data-theme') === 'dark';
    
    if (isDarkMode) {
        html.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    } else {
        html.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
};

// Load saved theme preference on page load
const loadTheme = () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateToggleButton(savedTheme);
};

// Update toggle button text
const updateToggleButton = (theme) => {
    const btn = document.getElementById('darkModeBtn');
    if (btn) {
        btn.textContent = theme === 'dark' ? '☀️ Light' : '🌙 Dark';
    }
};

// Initialize on page load
document.addEventListener('DOMContentLoaded', loadTheme);
