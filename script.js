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

document.addEventListener("mousemove", (e) => {
  const dart = document.querySelector(".dart-logo");
    const appium = document.querySelector(".appium-logo");
  const java = document.querySelector(".java-logo");
    const jira = document.querySelector(".jira-logo");
  const git = document.querySelector(".git-logo");
    const intellj = document.querySelector(".intellj-logo");
  const mongo = document.querySelector(".mongo-logo");
    const playWright = document.querySelector(".playwright-logo");
  const postman = document.querySelector(".postman-logo");
    const sql = document.querySelector(".sql-logo");
  const vscode = document.querySelector(".vscode-logo");
  if (!dart || !appium || !java || !jira || !git || !intellj || !mongo || !playWright || !postman || !sql || !vscode
  ) return;
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;
  dart.style.transform = `translate(${-x * 60}px, ${-y * 60}px)`;
  appium.style.transform = `translate(${-x * 50}px, ${-y * 50}px)`;
  java.style.transform = `translate(${-x * 40}px, ${-y * 40}px)`;
  jira.style.transform = `translate(${-x * 30}px, ${-y * 30}px)`;
  git.style.transform = `translate(${-x * 20}px, ${-y * 20}px)`;
  intellj.style.transform = `translate(${-x * 10}px, ${-y * 10}px)`;
  mongo.style.transform = `translate(${x * 20}px, ${y * 20}px)`;
  playWright.style.transform = `translate(${x * 30}px, ${y * 30}px)`;
  postman.style.transform = `translate(${x * 40}px, ${y * 40}px)`;
  sql.style.transform = `translate(${x * 50}px, ${y * 50}px)`;
  vscode.style.transform = `translate(${x * 60}px, ${y * 60}px)`;
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
