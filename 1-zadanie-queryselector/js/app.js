// 1
const $firstAttempt = Array.from(
    document.getElementsByClassName("first-attempt")
);

$firstAttempt.forEach((el) => el.classList.add("active"));

//2
const $dataBorder = Array.from(document.querySelectorAll("[data-border]"));

for (const el of $dataBorder) {
    el.setAttribute("data-el-active", "");
}

//3
$hack = Array.from(document.getElementsByClassName("hack"));

$hack.forEach((el) => el.setAttribute("title", "hacking"));

//4
$hijack = Array.from(document.getElementsByClassName("hijack"));

$hijack.forEach((el) => el.removeAttribute("title"));

//5
$twoClasses = Array.from(document.querySelectorAll(".st1.st2"));

$twoClasses.forEach((el) => {
    el.style.color = "red";
    el.style.fontSize = "15px";
});

//6
$attrib = Array.from(document.getElementsByClassName("attrib"));

$attrib.forEach((el) => {
    el.setAttribute("data-hack-active", "");
    el.removeAttribute("data-hack-inactive");
});

//7
$lastAttempt = Array.from(document.getElementsByClassName("last-attempt"));

$lastAttempt.forEach((el) => {
    el.querySelector("span").style.display = "none";
});
