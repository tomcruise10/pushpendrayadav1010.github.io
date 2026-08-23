// Small enhancement: reveal sections as they enter the viewport.
const sections = document.querySelectorAll(".section, .project, .skills-grid article");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

sections.forEach((section) => {
  section.classList.add("reveal");
  observer.observe(section);
});
