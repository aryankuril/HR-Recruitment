document.addEventListener("DOMContentLoaded", function () {
    const jobCards = document.querySelector(".job-cards"); // Select the slider
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");

    const scrollAmount = 300; // Adjust scroll step
    let autoSlide;

    // Function to slide right
    function slideNext() {
        jobCards.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }

    // Function to slide left
    function slidePrev() {
        jobCards.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }

    // Auto-slide function
    function startAutoSlide() {
        autoSlide = setInterval(slideNext, 3000); // Move every 3 sec
    }

    // Stop auto-slide when interacting
    function stopAutoSlide() {
        clearInterval(autoSlide);
        setTimeout(startAutoSlide, 5000); // Restart auto-slide after 5 sec
    }

    // Event listeners
    nextBtn.addEventListener("click", () => {
        slideNext();
        stopAutoSlide();
    });

    prevBtn.addEventListener("click", () => {
        slidePrev();
        stopAutoSlide();
    });

    jobCards.addEventListener("mouseenter", stopAutoSlide); // Pause on hover
    jobCards.addEventListener("mouseleave", startAutoSlide); // Resume on leave

    startAutoSlide(); // Start auto-sliding on load
});
