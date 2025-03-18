//counter

  function updateCountdown() {
    const targetDate = new Date("2025-12-03").getTime();
    setInterval(() => {
      const now = new Date().getTime();
      const timeLeft = targetDate - now;
      document.querySelector(".count-days").textContent = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      document.querySelector(".count-hours").textContent = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      document.querySelector(".count-minutes").textContent = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      document.querySelector(".count-seconds").textContent = Math.floor((timeLeft % (1000 * 60)) / 1000);
    }, 1000);
  }
  updateCountdown();

  document.addEventListener("DOMContentLoaded", function () {
    const scrollTopBtn = document.getElementById("scroll-top");
  
    // Show/hide button on scroll
    window.addEventListener("scroll", function () {
      if (window.scrollY > 300) {
        scrollTopBtn.classList.add("show");
      } else {
        scrollTopBtn.classList.remove("show");
      }
    });
  
    // Scroll to top on click
    scrollTopBtn.addEventListener("click", function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

  
   //Frequently Asked Questions Toggle
    
   document.addEventListener("DOMContentLoaded", function () {
    // Initially collapse all FAQ items
    document.querySelectorAll('.faq-item').forEach((faqItem) => {
        faqItem.querySelector('.faq-content').style.display = 'none'; // Hide content
    });

    // Keep the active FAQ item open
    const activeFaq = document.querySelector('.faq-active .faq-content');
    if (activeFaq) {
        activeFaq.style.display = 'block'; // Show active content
    }

    // FAQ Toggle Functionality
    document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle').forEach((faqItem) => {
        faqItem.addEventListener('click', () => {
            const content = faqItem.parentNode.querySelector('.faq-content');
            const isActive = content.style.display === 'block';

            // Collapse all items
            document.querySelectorAll('.faq-content').forEach((faqContent) => {
                faqContent.style.display = 'none';
            });

            // If the clicked item was not active, open it
            if (!isActive) {
                content.style.display = 'block';
            }
        });
    });
});

//form control

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".email-form");
  const loadingMessage = document.querySelector(".loading");
  const successMessage = document.querySelector(".sent-message");

  // Initially hide loading and success messages
  loadingMessage.style.display = "none";
  successMessage.style.display = "none";

  form.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent the default form submission

      // Show loading message
      loadingMessage.style.display = "block";
      successMessage.style.display = "none"; // Hide success message initially

      // Simulate a delay for 5 seconds (5000 milliseconds)
      setTimeout(() => {
          loadingMessage.style.display = "none"; // Hide loading message
          successMessage.style.display = "block"; // Show success message
      }, 5000);
  });
});


    // Scroll top button
     
let scrollTop = document.querySelector('.scroll-top');
  
function toggleScrollTop() {
  if (scrollTop) {
    window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
  }
}
scrollTop.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

window.addEventListener('load', toggleScrollTop);
document.addEventListener('scroll', toggleScrollTop);