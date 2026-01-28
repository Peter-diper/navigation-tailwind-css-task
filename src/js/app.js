const womenMegaBtn = document.querySelector("#mega-women");
const manMegaBtn = document.querySelector("#mega-menu-man-btn");
const megaMenu = document.querySelector("#mega-menu-women");
const megaMenuMan = document.querySelector("#mega-menu-man");
const drowerOpenBtn = document.querySelector("#drowerOpenBtn");
const modal = document.querySelector("#modal");
const drower = document.querySelector("#drower");
const overlay = document.querySelector("#overlay");
const closeIcon = document.querySelector("#close-icon");
const mobileWomenMenu = document.querySelector("#women-mobile");
const mobileMenMenu = document.querySelector("#men-mobile");

const womenMobileMenuBtn = document.querySelector("#women-mobile-menu");
const menMobileMenuBtn = document.querySelector("#men-mobile-menu");

console.log(mobileWomenMenu);
console.log(menMobileMenuBtn);

const borderClasses =
  "border-b border-indigo-600 text-indigo-600 transition-all".split(" ");

womenMegaBtn.addEventListener("click", () => {
  if (womenMegaBtn.ariaChecked === "false") {
    womenMegaBtn.ariaChecked = "true";
    console.log("first");
    womenMegaBtn.classList.add(...borderClasses);
    manMegaBtn.ariaChecked = "false";
    manMegaBtn.classList.remove(...borderClasses);
  } else {
    womenMegaBtn.ariaChecked = "false";
    womenMegaBtn.classList.remove(...borderClasses);
  }
  // show
  if (megaMenu.dataset.id === "0") {
    setTimeout(() => {
      megaMenuMan.classList.replace("flex", "hidden");
    }, 10);
    megaMenuMan.dataset.id = 0;
    megaMenu.dataset.id = 1;
    megaMenu.classList.replace("hidden", "flex");
    setTimeout(() => {
      megaMenu.classList.replace("opacity-20", "opacity-100");
    }, 15);

    return;
  }
  // hide
  megaMenu.classList.replace("opacity-100", "opacity-20");
  setTimeout(() => {
    megaMenu.classList.replace("flex", "hidden");
  }, 70);

  megaMenu.dataset.id = 0;
});

manMegaBtn.addEventListener("click", () => {
  // show
  if (manMegaBtn.ariaChecked === "false") {
    manMegaBtn.ariaChecked = "true";
    console.log("first");
    manMegaBtn.classList.add(...borderClasses);
    womenMegaBtn.ariaChecked = "false";
    womenMegaBtn.classList.remove(...borderClasses);
  } else {
    manMegaBtn.ariaChecked = "false";
    manMegaBtn.classList.remove(...borderClasses);
  }
  //show
  if (megaMenuMan.dataset.id === "0") {
    setTimeout(() => {
      megaMenu.classList.replace("flex", "hidden");
    }, 10);
    megaMenu.dataset.id = 0;
    megaMenuMan.dataset.id = 1;
    megaMenuMan.classList.replace("hidden", "flex");
    setTimeout(() => {
      megaMenuMan.classList.replace("opacity-20", "opacity-100");
    }, 15);

    return;
  }
  // hide
  megaMenuMan.classList.replace("opacity-100", "opacity-20");
  setTimeout(() => {
    megaMenuMan.classList.replace("flex", "hidden");
  }, 70);

  megaMenuMan.dataset.id = 0;
});

drowerOpenBtn.addEventListener("click", () => {
  modal.classList.remove("hidden");
  setTimeout(() => {
    drower.classList.remove("-left-full");
    drower.style.transition = "250ms";
  }, 1);
});

overlay.addEventListener("click", closeModal);
closeIcon.addEventListener("click", closeModal);

womenMobileMenuBtn.addEventListener("click", () => {
  womenMobileMenuBtn.classList.add(...borderClasses);
  menMobileMenuBtn.classList.remove(...borderClasses);
  mobileWomenMenu.classList.remove("hidden");
  mobileMenMenu.classList.add("hidden");
});

menMobileMenuBtn.addEventListener("click", () => {
  menMobileMenuBtn.classList.add(...borderClasses);
  womenMobileMenuBtn.classList.remove(...borderClasses);
  mobileMenMenu.classList.remove("hidden");
  mobileWomenMenu.classList.add("hidden");
});

function closeModal() {
  drower.classList.add("-left-full");
  setTimeout(() => {
    modal.classList.add("hidden");
  }, 150);
}
