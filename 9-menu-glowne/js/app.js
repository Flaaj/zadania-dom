const $menu = document.getElementById("menu");
$menu.classList.add("menu");

const links = Array.from($menu.querySelectorAll("a"));
const liElems = Array.from($menu.querySelectorAll("li"));
let notExpanded = true;
links.forEach((link) => {
    link.addEventListener("mouseover", (e) => {
        e.target.parentElement.classList.add("active");
    });
    link.addEventListener("mouseout", (e) => {
        e.target.parentElement.classList.remove("active");
    });
    link.addEventListener("click", (e) => {
        e.preventDefault();
        if (notExpanded) {
            const parentLi = e.target.parentElement;
            liElems.forEach((el) => el.classList.add("collapsed"));
            parentLi.classList.remove("collapsed");
            parentLi.classList.add("expand");
            parentLi.addEventListener("transitionend", transitionEndHandle);
        } else {
            liElems.forEach((el) => {
                el.classList.remove("collapsed", "expand");
            });
        }
        notExpanded = !notExpanded
    });
});

function transitionEndHandle(e) {
    e.target.removeEventListener("transitionend", transitionEndHandle);
    console.log(e.target.querySelector("a").href);
}
