// export function greet(name) {
//   return `Hello, ${name}`;
// }

export function generateNavbar(items) {
  const navUl = document.getElementById("nav-ul");
  items.forEach((item) => {
    const a = document.createElement("a");
    const li = document.createElement("li");
    a.href = item.link;
    a.innerHTML = `<i class="fa ${item.icon}"></i>`;
    a.appendChild(document.createTextNode(item.name));
    a.appendChild(li);
    navUl.appendChild(a);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  generateNavbar(navigation_items);
});

generateNavbar();

export function toggleDarkMode() {
  const lightModeBtn = document.getElementById("lightMode");
  const darkModeBtn = document.getElementById("darkMode");
  const body = document.body;

  // Initial setup: check if dark mode is enabled
  const isDarkMode = localStorage.getItem("darkMode") === "enabled";

  if (isDarkMode) {
    body.classList.add("darkMode");
    darkModeBtn.classList.add("hidden");
    lightModeBtn.classList.remove("hidden");
  }

  lightModeBtn.addEventListener("click", () => {
    body.classList.remove("darkMode");
    darkModeBtn.classList.remove("hidden");
    lightModeBtn.classList.add("hidden");
    localStorage.setItem("darkMode", "disabled");
  });

  darkModeBtn.addEventListener("click", () => {
    body.classList.add("darkMode");
    darkModeBtn.classList.toggle("hidden");
    lightModeBtn.classList.toggle("hidden");
    localStorage.setItem("darkMode", "enabled");
  });
  // console.log(localStorage);
}

toggleDarkMode();
// localStorage.clear();
