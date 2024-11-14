// DOM Elements
const navbar = document.querySelector(".navbar");
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const appointmentBtns = document.querySelectorAll(".appointment-btn");
const modal = document.getElementById("appointmentModal");
const closeModal = document.querySelector(".close-modal");
const appointmentForm = document.getElementById("appointmentForm");
const navLinks = document.querySelectorAll(".nav-link");

// Navbar Scroll Effect
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    navbar.style.background = "rgba(255, 255, 255, 0.95)";
    navbar.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
  } else {
    navbar.style.background = "#ffffff";
    navbar.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
  }
});

// Mobile Navigation Toggle
navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Close mobile menu when clicking a link
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    navToggle.classList.remove("active");
  });
});

// Modal Handling
appointmentBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    modal.style.display = "block";
    setTimeout(() => {
      modal.classList.add("active");
    }, 10);
  });
});

closeModal.addEventListener("click", closeModalFunction);

function closeModalFunction() {
  modal.classList.remove("active");
  setTimeout(() => {
    modal.style.display = "none";
  }, 300);
}

// Close modal when clicking outside
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModalFunction();
  }
});

// Form Validation and Submission
appointmentForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get form values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const service = document.getElementById("service").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;

  // Basic validation
  if (!name || !email || !phone || !service || !date || !time) {
    showAlert("Please fill in all required fields", "error");
    return;
  }

  if (!isValidEmail(email)) {
    showAlert("Please enter a valid email address", "error");
    return;
  }

  if (!isValidPhone(phone)) {
    showAlert("Please enter a valid phone number", "error");
    return;
  }

  // Simulate form submission
  showAlert("Appointment request submitted successfully!", "success");
  appointmentForm.reset();
  setTimeout(closeModalFunction, 2000);
});

// Utility Functions
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isValidPhone(phone) {
  const phoneRegex = /^\+?[\d\s-]{10,}$/;
  return phoneRegex.test(phone);
}

function showAlert(message, type) {
  // Create alert element
  const alertDiv = document.createElement("div");
  alertDiv.className = `alert alert-${type}`;
  alertDiv.style.position = "fixed";
  alertDiv.style.top = "20px";
  alertDiv.style.right = "20px";
  alertDiv.style.padding = "15px 25px";
  alertDiv.style.borderRadius = "5px";
  alertDiv.style.color = "#fff";
  alertDiv.style.backgroundColor = type === "success" ? "#4CAF50" : "#f44336";
  alertDiv.style.zIndex = "2001";
  alertDiv.textContent = message;

  // Add to DOM
  document.body.appendChild(alertDiv);

  // Remove after 3 seconds
  setTimeout(() => {
    alertDiv.remove();
  }, 3000);
}

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Newsletter Form Handling
const newsletterForm = document.querySelector(".newsletter-form");
if (newsletterForm) {
  newsletterForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const emailInput = newsletterForm.querySelector('input[type="email"]');

    if (!emailInput.value || !isValidEmail(emailInput.value)) {
      showAlert("Please enter a valid email address", "error");
      return;
    }

    showAlert("Thank you for subscribing to our newsletter!", "success");
    newsletterForm.reset();
  });
}

// Add animation on scroll for sections
const revealElements = document.querySelectorAll(
  ".section-title, .section-subtitle, .feature-item, .service-card, .team-card"
);

const revealOnScroll = () => {
  revealElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight - 100) {
      element.style.opacity = "1";
      element.style.transform = "translateY(0)";
    }
  });
};

// Initialize styles for reveal elements
revealElements.forEach((element) => {
  element.style.opacity = "0";
  element.style.transform = "translateY(20px)";
  element.style.transition = "all 0.6s ease-out";
});

// Add scroll event listener for animations
window.addEventListener("scroll", revealOnScroll);
// Initial check for elements in view
revealOnScroll();

document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("appointmentModal");
  const openModalBtn = document.getElementById("openModalButton"); // Adjust this to your actual button
  const closeModalBtn = document.querySelector(".close-modal");

  // Open modal function
  function openModal() {
    modal.classList.add("active");
    document.body.style.overflow = "auto"; // Allow body to scroll
  }

  // Close modal function
  function closeModal() {
    modal.classList.remove("active");
    document.body.style.overflow = "initial"; // Reset body scroll
  }

  // Event listeners
  openModalBtn.addEventListener("click", openModal);
  closeModalBtn.addEventListener("click", closeModal);

  // Close modal on clicking outside the modal content
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("appointmentModal");
  const openModalBtn = document.getElementById("openModalButton"); // Adjust this to your actual button
  const closeModalBtn = document.querySelector(".close-modal");

  // Open modal function
  function openModal() {
    modal.classList.add("active");
    document.body.style.overflow = "auto"; // Allow body to scroll
  }

  // Close modal function
  function closeModal() {
    modal.classList.remove("active");
    document.body.style.overflow = "initial"; // Reset body scroll
  }

  // Event listeners
  openModalBtn.addEventListener("click", openModal);
  closeModalBtn.addEventListener("click", closeModal);

  // Close modal on clicking outside the modal content
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });
});
