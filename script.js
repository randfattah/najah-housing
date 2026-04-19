document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Page transition to Login ---
    const loginLink = document.querySelector('.switch-auth a');
    const authContainer = document.querySelector('.auth-container');

    if (loginLink && authContainer) {
        loginLink.addEventListener('click', (e) => {
            e.preventDefault(); 
            
            // Add animation class (slide effect)
            authContainer.classList.add('sliding-active');
            
            // Redirect after animation
            setTimeout(() => {
                window.location.href = loginLink.getAttribute('href');
            }, 600);
        });
    }

    // --- 2. Account Type Selection (Seeker / Property Owner) ---
    const typeButtons = document.querySelectorAll('.type-btn');

    typeButtons.forEach(button => {
        button.addEventListener('click', () => {

            // Remove 'active' class from all buttons
            typeButtons.forEach(btn => btn.classList.remove('active'));

            // Add 'active' class to the clicked button
            button.classList.add('active');

            // (Optional) Get selected account type
            const selectedType = button.textContent;
            console.log("Selected account type:", selectedType);
        });
    });

});