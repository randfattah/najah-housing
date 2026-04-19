document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Show/Hide Password Logic ---
    const passwordInput = document.querySelector('.password-wrapper input');
    const eyeIcon = document.querySelector('.eye-icon');

    if (passwordInput && eyeIcon) {
        eyeIcon.addEventListener('click', () => {
            const isPassword = passwordInput.type === 'password';
            passwordInput.type = isPassword ? 'text' : 'password';
            eyeIcon.textContent = isPassword ? '🙈' : '👁️';
        });
    }

    // --- 2. Login Form Submission Logic ---
    const loginForm = document.querySelector('form');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = document.querySelector('input[type="email"]');
            const email = emailInput ? emailInput.value.trim() : "";
            const password = passwordInput ? passwordInput.value.trim() : "";

            if (!email || !password) {
                alert('Please fill in all fields');
                return;
            }
            alert(`Welcome back!\nYou logged in with: ${email}`);
        });
    }

    // --- 3. Forgot Password Feature (Modal) ---
    const modal = document.getElementById('forgotPasswordModal');
    const forgotLink = document.querySelector('.forgot-pass a');
    const closeBtn = document.querySelector('.close-btn');
    const forgotForm = document.getElementById('forgotForm');

    if (forgotLink && modal) {
        forgotLink.addEventListener('click', (e) => {
            e.preventDefault();
            modal.style.display = 'block'; // Open modal
        });
    }

    if (closeBtn && modal) {
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none'; // Close on X click
        });
    }

    // Close modal when clicking outside of it
    window.addEventListener('click', (e) => {
        if (e.target == modal) {
            modal.style.display = 'none';
        }
    });

    // Handle password reset form submission
    if (forgotForm) {
        forgotForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const resetEmail = document.getElementById('resetEmail').value;
            alert(`A reset link has been sent to: ${resetEmail}`);
            modal.style.display = 'none';
        });
    }

    // --- 4. Social Login Buttons ---
    const facebookBtn = document.querySelector('.facebook');
    const twitterBtn = document.querySelector('.twitter');

    if (facebookBtn) facebookBtn.addEventListener('click', () => alert('Facebook login (demo)'));
    if (twitterBtn) facebookBtn.addEventListener('click', () => alert('Google login (demo)'));

    // --- 5. Page Transition Animation ---
    const switchLink = document.querySelector('.switch-auth a');
    const authContainer = document.querySelector('.auth-container');

    if (switchLink && authContainer) {
        switchLink.addEventListener('click', (e) => {
            e.preventDefault(); 
            authContainer.classList.add('sliding-active');
            
            const targetUrl = switchLink.getAttribute('href');
            setTimeout(() => {
                window.location.href = targetUrl;
            }, 600);
        });
    }
});