// Portfolio Section: Dynamic Image Display
const portfolioImages = [
    "portfolio1.jpg",
    "portfolio2.jpg",
    "portfolio3.jpg",
    "portfolio4.jpg",
  ];
  
  const portfolioContainer = document.getElementById("portfolio");
  
  function loadPortfolio() {
    portfolioImages.forEach((imageSrc, index) => {
      const imgElement = document.createElement("img");
      imgElement.src = imageSrc;
      imgElement.alt = `Portfolio Image ${index + 1}`;
      imgElement.classList.add("portfolio-img");
      portfolioContainer.appendChild(imgElement);
    });
  }
  
  // Testimonials Section: Rotating Testimonials
  const testimonials = [
    {
      name: "Alice & Bob",
      text: "The team made our special day absolutely magical! Highly recommend.",
    },
    {
      name: "Chris & Dana",
      text: "Every detail was perfect. Couldn't have asked for a better experience.",
    },
    {
      name: "Eve & Frank",
      text: "From planning to execution, everything was seamless. Truly professional!",
    },
  ];
  
  let currentTestimonial = 0;
  
  function displayTestimonial() {
    const testimonialText = document.getElementById("testimonial-text");
    const testimonialName = document.getElementById("testimonial-name");
  
    testimonialText.innerText = testimonials[currentTestimonial].text;
    testimonialName.innerText = `- ${testimonials[currentTestimonial].name}`;
  
    // Rotate testimonials every 5 seconds
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  }
  
  setInterval(displayTestimonial, 5000);
  displayTestimonial(); // Initial display
  
  // Inquiry Form Submission
  const form = document.getElementById("inquiry-form");
  
  form.addEventListener("submit", (e) => {
    e.preventDefault();
  
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
  
    if (name && email && message) {
      alert(
        `Thank you for reaching out, ${name}! We'll get back to you at ${email} soon.`
      );
      form.reset();
    } else {
      alert("Please fill in all the fields before submitting.");
    }
  });
  
  // Initialize Portfolio Section
  document.addEventListener("DOMContentLoaded", loadPortfolio);
  