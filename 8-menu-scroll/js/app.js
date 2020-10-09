const $links = Array.from(document.getElementsByClassName("nav-link"));
const $nav = document.querySelector(".nav");

$links.forEach((link) => {
    link.addEventListener("click", scrollToArticle);
});

function scrollToArticle(e) {
    e.preventDefault();

    const lastActive = $nav.querySelector(".nav-el-active");
    lastActive.classList.remove("nav-el-active");

    this.parentElement.classList.add("nav-el-active");

    const scrollTo = document.querySelector(this.getAttribute("href"));
    scrollTo.scrollIntoView({behavior: "smooth"});
}
