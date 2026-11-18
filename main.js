// Govern & Grow — site scripts
document.querySelectorAll("[data-year]").forEach(el => el.textContent = new Date().getFullYear());

// Mobile menu
const toggle = document.querySelector(".toggle");
const menu = document.getElementById("menu");
if (toggle && menu) {
  const close = () => {
    menu.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.textContent = "Menu";
  };
  toggle.addEventListener("click", () => {
    const open = menu.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open);
    toggle.textContent = open ? "Close" : "Menu";
  });
  menu.querySelectorAll("a").forEach(a => a.addEventListener("click", close));
  document.addEventListener("keydown", e => { if (e.key === "Escape") close(); });
}

// Service links pre-tick the matching interest in the contact form
document.querySelectorAll("[data-service]").forEach(link => {
  link.addEventListener("click", () => {
    const box = document.querySelector(`.checks input[value="${link.dataset.service}"]`);
    if (box) box.checked = true;
    const name = document.getElementById("name");
    if (name) setTimeout(() => name.focus({ preventScroll: true }), 450);
  });
});
