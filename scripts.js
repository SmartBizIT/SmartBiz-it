document.addEventListener('DOMContentLoaded', function() {
    const typedElement = document.getElementById('typed-output');

    if (typedElement) {
        const colors = ["#00FFFF", "#7FFF00", "#FFD700"]; // Color palette
        let colorIndex = 0;

        const typed = new Typed(typedElement, {
            strings: ["Empowering Businesses", "Driving Innovation", "Supercharging Enterprises"],
            typeSpeed: 150,
            backSpeed: 150,
            loop: true,
            preStringTyped: function () {
                // Change color before typing each string
                typedElement.style.color = colors[colorIndex % colors.length];
                colorIndex++;
            }
        });
    } else {
        console.error('Typed.js target element not found');
    }

    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('Thank you for contacting us! We will get back to you shortly.');
        });
    }
});

