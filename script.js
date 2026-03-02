// 🌀 Moving Flutter & Dart logos
document.addEventListener("mousemove", (e) => {
  const flutter = document.querySelector(".flutter-logo");
  const dart = document.querySelector(".dart-logo");
  if (!flutter || !dart) return;
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;
  flutter.style.transform = `translate(${x * 60}px, ${y * 60}px)`;
  dart.style.transform = `translate(${-x * 60}px, ${-y * 60}px)`;
});

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
