// particles-config.js
particlesJS("particles-container", {
  particles: {
    number: { value: 100 },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: { value: 0.7 },
    size: { value: 3, random: true },
    move: { enable: true, speed: 2, direction: "none", random: false, straight: false },
    line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
    },
    modes: {
      repulse: { distance: 100, duration: 0.4 },
      push: { particles_nb: 4 },
    },
  },
});
