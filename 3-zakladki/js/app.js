//1
const $tabs = Array.from(document.querySelectorAll(".tab-el"));
const $contents = Array.from(document.querySelectorAll(".tab-content"));

$tabs.forEach((tab) => {
    const $link = tab.firstElementChild;
    $link.addEventListener("click", (e) => {
        const $tabActive = document.querySelector(".tab-el-active");
        $tabActive.classList.remove("tab-el-active");
        tab.classList.add("tab-el-active");
        
        // 2
        const id = e.target.hash;
        const $contentActive = document.querySelector(".tab-content-active");
        $contentActive.classList.remove("tab-content-active");

        const displayContent = document.querySelector(id)
        displayContent.classList.add("tab-content-active")
    });
});
