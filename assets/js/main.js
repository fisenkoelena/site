document.addEventListener("DOMContentLoaded", function () {
    const gototop = document.querySelector(".ufive_uptop");
    const root = document.documentElement;

    window.addEventListener("scroll", () => {
        if (window.scrollY >= 500) {
            gototop.classList.add("ufive_upview");
        } else {
            gototop.classList.remove("ufive_upview");
        }
    });

    gototop.addEventListener("click", () => {
        scrollToTop(700);
    });

    function scrollToTop(duration) {
        const start = root.scrollTop;
        const startTime = performance.now();

        function animateScroll(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            root.scrollTop = start * (1 - progress);

            if (progress < 1) {
                requestAnimationFrame(animateScroll);
            }
        }

        requestAnimationFrame(animateScroll);
    }
});