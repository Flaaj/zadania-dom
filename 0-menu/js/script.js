const $menu = document.querySelector("ul");
$menu.classList.add("menu");

const $liElements = Array.from($menu.children);
$liElements[0].classList.add("first");
$liElements[$liElements.length - 1].classList.add("last");
$liElements[2].classList.add("active");
$liElements[2].style.color = "#fff";

function myAlert() {
    alert(`Kliknięto w ${this.innerText}`);
}

$liElements.forEach((li) => {
    const link = li.querySelector("a");
    link.setAttribute("title", `Przejdź do strony ${link.innerText}`);
    link.setAttribute("href", "#");
    link.addEventListener("click", myAlert);
});

$liElements
    .find((li) => Array.from(li.classList).includes("active"))
    .querySelector("a")
    .removeEventListener("click", myAlert);
