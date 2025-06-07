
function toggleAnswer(button) {
    const faqItem = button.closest('.faq-item');
    const answer = faqItem.querySelector('.faq-answer');
    const allItems = document.querySelectorAll('.faq-item');
    
    // Close all other items
    allItems.forEach(item => {
        if (item !== faqItem) {
            const otherAnswer = item.querySelector('.faq-answer');
            const otherButton = item.querySelector('.faq-question');
            otherAnswer.classList.remove('open');
            otherButton.classList.remove('active');
        }
    });
    
    // Toggle current item
    const isOpen = answer.classList.contains('open');
    if (isOpen) {
        answer.classList.remove('open');
        button.classList.remove('active');
    } else {
        answer.classList.add('open');
        button.classList.add('active');
    }
}




document.addEventListener('DOMContentLoaded', function() {
    // Get references to the hamburger icon and the mobile menu
    const hamburger = document.getElementById('hamburger-icon');
    const mobileMenu = document.getElementById('mobile-nav-menu');
    const desktopNavLinks = document.getElementById('desktop-nav-links'); // Get the desktop links element

    console.log(hamburger);
    // Event listener for the hamburger icon 

    hamburger && hamburger.addEventListener('click', function() {
        // Toggle the 'open' class on the hamburger icon for the X animation
        hamburger.classList.toggle('open');
        // Toggle the 'open' class on the mobile menu to show/hide it
        mobileMenu.classList.toggle('open');

        // Optional: Hide the desktop navigation links if the menu opens on wider screens
        // This is usually handled by CSS media queries, but useful for robustness.
        // if (window.innerWidth > 1024) { // Only apply if current screen is larger than mobile breakpoint
        //     desktopNavLinks.classList.toggle('hidden'); // You'd need a .hidden { display: none; } class in CSS
        // }
    });

    // Optional: Close the mobile menu when a link inside it is clicked
    mobileMenu && mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('open'); // Remove hamburger animation
            mobileMenu.classList.remove('open'); // Hide the menu
        });
    });

    // Optional: Close the mobile menu if the screen is resized back to desktop view
    window.addEventListener('resize', () => {
        if (window.innerWidth > 1024) { // Your MD breakpoint
            hamburger.classList.remove('open');
            mobileMenu.classList.remove('open');
        }
    });

    // --- FAQ Toggle Functionality ---
    // This part is for your help section's dropdown answers
    // window.toggleAnswer = function(button) {
    //     const parentHelps = button.closest('.helps') || button.closest('.helps1');
    //     const currentAnswer = parentHelps.querySelector('.answer');
        
    //     // Get all answers on the page
    //     const allAnswers = document.querySelectorAll('.answer');
    //     const allButtons = document.querySelectorAll('button'); // Adjust selector as needed
        
    //     if (currentAnswer) {
    //         const isCurrentlyOpen = currentAnswer.style.display === 'block';
            
    //         // Close all answers and reset all buttons
    //         allAnswers.forEach(answer => {
    //             answer.style.display = 'none';
    //         });
            
    //         // Reset all buttons to down arrow
    //         allButtons.forEach(btn => {
    //             btn.innerHTML = '&#x25BC;';
    //         });
            
    //         // If the current answer was closed, open it
    //         if (!isCurrentlyOpen) {
    //             currentAnswer.style.display = 'block';
    //             button.innerHTML = '&#x25B2;';
    //         }
    //     }
    // };
});





document.addEventListener('DOMContentLoaded', () => {
    const testimonialsWrapper = document.querySelector('.testimonials-wrapper');
    const testimonialItems = document.querySelectorAll('.testimonial-item');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
  
    let currentIndex = 0;
    const itemsPerPage = 3; // NOW SHOWING 3 TESTIMONIALS AT A TIME
    const totalTestimonials = testimonialItems.length; // This will correctly be 7 with the added items
  
    function updateSliderPosition() {
      // Calculate the percentage to shift the wrapper
      // For 3 items per page, each click shifts by 1/3 of the wrapper's width.
      const offset = -(currentIndex * (100 / itemsPerPage));
      testimonialsWrapper.style.transform = `translateX(${offset}%)`;
    }
  
    prevBtn.addEventListener('click', () => {
      // If at the beginning, loop to the last possible starting point
      currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalTestimonials - itemsPerPage;
      // Ensure index doesn't go negative or beyond the last valid starting point
      if (currentIndex < 0) {
        currentIndex = 0;
      }
      // Also, if totalTestimonials is not perfectly divisible by itemsPerPage,
      // ensure the last "page" starts at the correct index.
      if (currentIndex > totalTestimonials - itemsPerPage) {
          currentIndex = totalTestimonials - itemsPerPage;
          if (currentIndex < 0) currentIndex = 0; // Fallback in case itemsPerPage is greater than total testimonials
      }
      updateSliderPosition();
    });
  
    nextBtn.addEventListener('click', () => {
      // If not at the end, move to the next item
      // Otherwise, loop back to the first item (index 0)
      if (currentIndex < totalTestimonials - itemsPerPage) {
        currentIndex++;
      } else {
        currentIndex = 0;
      }
      updateSliderPosition();
    });
  
    // Set the initial position when the page loads
    updateSliderPosition();
  });