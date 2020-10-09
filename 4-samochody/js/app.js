const $cars = Array.from(document.getElementsByClassName("car"));

$cars.forEach((car) => {
    const $button = car.querySelector(".car-toggle-detail");
    $button.addEventListener("click", () => {
        const detailsStyle = car.querySelector(".car-detail").style;
        [detailsStyle.display, $button.innerText] =
            detailsStyle.display === "none"
                ? ["", "SCHOWAJ DETALE"]
                : ["none", "POKAŻ DETALE"];
        car.classList.toggle("car-show-detail");
    });
});
