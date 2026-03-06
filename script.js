// 🌀 Moving Flutter & Dart logos
// Keep a stable viewport unit for iOS Safari while browser bars expand/collapse
(() => {
  const setViewportHeight = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  };

  let resizeTimer;
  const scheduleViewportUpdate = () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(setViewportHeight, 120);
  };

  document.addEventListener("DOMContentLoaded", setViewportHeight);
  window.addEventListener("resize", scheduleViewportUpdate, { passive: true });
  window.addEventListener("orientationchange", scheduleViewportUpdate, { passive: true });
  setViewportHeight();
})();

const movingLogos = document.querySelectorAll(
  ".moving-logo:not(.dart-logo):not(.flutter-logo)"
);

if (movingLogos.length) {
  let mouseX = 0;
  let mouseY = 0;
  let currentX = 0;
  let currentY = 0;
  let rafId = null;

  const animateLogos = () => {
    currentX += (mouseX - currentX) * 0.12;
    currentY += (mouseY - currentY) * 0.12;

    movingLogos.forEach((logo, index) => {
      const depth = Number.parseFloat(logo.dataset.depth || "30");
      const direction = index % 2 === 0 ? -1 : 1;
      const tx = currentX * depth * direction * 2;
      const ty = currentY * depth * direction * 2;
      logo.style.transform = `translate(${tx}px, ${ty}px)`;
    });

    rafId = requestAnimationFrame(animateLogos);
  };

  document.addEventListener(
    "mousemove",
    (e) => {
      mouseX = e.clientX / window.innerWidth - 0.5;
      mouseY = e.clientY / window.innerHeight - 0.5;
      if (!rafId) {
        rafId = requestAnimationFrame(animateLogos);
      }
    },
    { passive: true }
  );
}

// ✨ Preloader fade-out
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  if (preloader) {
    preloader.style.opacity = "0";
    preloader.style.transition = "opacity 0.6s ease";
    setTimeout(() => preloader.style.display = "none", 600);
  }
});

// 💡 Skill hover tooltips
const tooltip = document.getElementById("tooltip");
if (tooltip) {
  document.querySelectorAll(".skills-grid span").forEach(skill => {
    skill.addEventListener("mouseenter", (e) => {
      tooltip.innerText = e.target.dataset.desc;
      tooltip.style.opacity = "1";
    });
    skill.addEventListener("mousemove", (e) => {
      tooltip.style.left = `${e.pageX + 15}px`;
      tooltip.style.top = `${e.pageY + 15}px`;
    });
    skill.addEventListener("mouseleave", () => {
      tooltip.style.opacity = "0";
    });
  });
}

// 🌈 Page Transition Effect (Fade + Slide)
document.querySelectorAll("a[href]").forEach(link => {
  const target = link.getAttribute("href");
  if (!target || target.startsWith("#") || target.includes("mailto") || target.includes("tel")) return;
  
  link.addEventListener("click", (e) => {
    e.preventDefault();
    document.body.classList.add("fade-out");
    setTimeout(() => {
      window.location.href = target;
    }, 300);
  });
});

// Add fade-out animation
const style = document.createElement("style");
style.innerHTML = `
  .fade-out {
    animation: fadeOutSlide 0.3s forwards ease-in;
  }
  @keyframes fadeOutSlide {
    from { opacity: 1; transform: translateY(0); }
    to { opacity: 0; transform: translateY(-30px); }
  }
`;
document.head.appendChild(style);
