        // Mobile menu toggle
        const mobileMenuButton = document.querySelector('.mobile-menu-button');
        const mobileMenu = document.querySelector('.mobile-menu');
        
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
        
        // Payment method toggle
        const paymentMethods = document.querySelectorAll('.payment-method');
        const creditCardFields = document.getElementById('credit-card-fields');
        const mpesaFields = document.getElementById('mpesa-fields');
        
        paymentMethods.forEach(method => {
            method.addEventListener('click', () => {
                // Remove active class from all buttons
                paymentMethods.forEach(m => m.classList.remove('active', 'bg-blue-600', 'text-white'));
                paymentMethods.forEach(m => m.classList.add('bg-gray-200', 'text-gray-800'));
                
                // Add active class to clicked button
                method.classList.add('active', 'bg-blue-600', 'text-white');
                method.classList.remove('bg-gray-200', 'text-gray-800');
                
                // Show corresponding fields
                if (method.textContent.includes('Credit Card')) {
                    creditCardFields.classList.remove('hidden');
                    mpesaFields.classList.add('hidden');
                } else if (method.textContent.includes('M-Pesa')) {
                    creditCardFields.classList.add('hidden');
                    mpesaFields.classList.remove('hidden');
                } else {
                    creditCardFields.classList.add('hidden');
                    mpesaFields.classList.add('hidden');
                }
            });
        });
        
        // Donation amount selection
        const donationOptions = document.querySelectorAll('.donation-option');
        
        donationOptions.forEach(option => {
            option.addEventListener('click', () => {
                donationOptions.forEach(opt => opt.classList.remove('bg-blue-600', 'text-white'));
                donationOptions.forEach(opt => opt.classList.add('bg-blue-100', 'text-blue-800'));
                
                option.classList.add('bg-blue-600', 'text-white');
                option.classList.remove('bg-blue-100', 'text-blue-800');
            });
        });
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    mobileMenu.classList.add('hidden');
                }
            });
        });
        
        // Animation on scroll
        const fadeElements = document.querySelectorAll('.fade-in');
        
        const fadeInOnScroll = () => {
            fadeElements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                
                if (elementTop < windowHeight - 100) {
                    element.style.opacity = '1';
                }
            });
        };
        
        // Set initial state
        fadeElements.forEach(element => {
            element.style.opacity = '0';
            element.style.transition = 'opacity 1.5s ease';
        });
        
        // Check on load
        window.addEventListener('load', fadeInOnScroll);
        
        // Check on scroll
        window.addEventListener('scroll', fadeInOnScroll);

        document.addEventListener('contextmenu', event => event.preventDefault());

        function g() {
  document.addEventListener("contextmenu", (e) => e.preventDefault()),
    (document.onkeydown = function (e) {
      if (
        e.keyCode == 123 ||
        (e.ctrlKey && e.shiftKey && e.keyCode == 73) ||
        (e.ctrlKey && e.shiftKey && e.keyCode == 67) ||
        (e.ctrlKey && e.shiftKey && e.keyCode == 74) ||
        (e.ctrlKey && e.keyCode == 85)
      )
        return !1;
    });
}
g();

