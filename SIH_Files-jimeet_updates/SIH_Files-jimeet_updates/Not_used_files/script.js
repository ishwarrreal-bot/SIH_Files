document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    const userRoleBtn = document.getElementById('userRoleBtn');
    const adminRoleBtn = document.getElementById('adminRoleBtn');

    const userFormsSection = document.getElementById('userForms');
    const adminFormSection = document.getElementById('adminForm');

    const loginTabBtn = document.getElementById('loginTabBtn');
    const signupTabBtn = document.getElementById('signupTabBtn');

    const userLoginForm = document.getElementById('userLoginForm');
    const userSignupForm = document.getElementById('userSignupForm');

    // --- Dark Mode Functionality ---
    darkModeToggle.addEventListener('change', () => {
        body.classList.toggle('dark-mode', darkModeToggle.checked);
        localStorage.setItem('darkMode', darkModeToggle.checked);
    });

    // Check for saved dark mode preference
    if (localStorage.getItem('darkMode') === 'true') {
        darkModeToggle.checked = true;
        body.classList.add('dark-mode');
    }

    // --- Role Selection Functionality (User/Admin) ---
    function selectRole(role) {
        // Update active class on role buttons
        userRoleBtn.classList.toggle('active', role === 'user');
        adminRoleBtn.classList.toggle('active', role === 'admin');

        // Show/hide relevant form sections
        userFormsSection.classList.toggle('active', role === 'user');
        adminFormSection.classList.toggle('active', role === 'admin');
    }

    userRoleBtn.addEventListener('click', () => selectRole('user'));
    adminRoleBtn.addEventListener('click', () => selectRole('admin'));

    // --- User Tab Selection Functionality (Login/Sign Up) ---
    function selectUserTab(tab) {
        // Update active class on tab buttons
        loginTabBtn.classList.toggle('active', tab === 'login');
        signupTabBtn.classList.toggle('active', tab === 'signup');

        // Show/hide relevant user forms
        userLoginForm.classList.toggle('active', tab === 'login');
        userSignupForm.classList.toggle('active', tab === 'signup');
    }

    loginTabBtn.addEventListener('click', () => selectUserTab('login'));
    signupTabBtn.addEventListener('click', () => selectUserTab('signup'));

    // Initialize: Select User role and Login tab on load
    selectRole('user');
    selectUserTab('login');
});