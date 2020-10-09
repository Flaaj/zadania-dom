$linkList = Array.from(document.getElementsByClassName("nav-link"));
console.table($linkList)
$linkList.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        document
            .querySelector(".nav-el-active")
            .classList.remove("nav-el-active");
        e.target.parentElement.classList.add("nav-el-active");
    });
});
