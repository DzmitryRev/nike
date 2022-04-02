import "./styles/index.scss";

let burger = document.querySelector(".burger");
let list = document.querySelector(".nav-list");

burger.addEventListener("click", () => {
  list.classList.toggle("open");
  list.classList.contains("open")
    ? burger.classList.add("rotated")
    : burger.classList.remove("rotated");
});
