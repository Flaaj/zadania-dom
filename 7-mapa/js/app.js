const $map = document.querySelector(".map");

const tooltip = document.createElement("div");
tooltip.className = "map-tooltip";
tooltip.style.left = "-9999px";
tooltip.style.top = "-9999px";
$map.appendChild(tooltip);

cities.forEach((city) => {
    const el = document.createElement("a");
    el.setAttribute("href", city.href);
    el.className = "map-marker";
    el.dataset.name = city.name;
    el.dataset.population = city.population;
    el.style.left = `${city.map_x}px`;
    el.style.top = `${city.map_y}px`;
    el.innerText = city.name;
    el.addEventListener("mouseover", () => {
        tooltip.style.left = `${city.map_x + 30}px`;
        tooltip.style.top = `${city.map_y + 30}px`;
        tooltip.innerHTML = ` <h2>${city.name}</h2> <div>Population: <strong>${city.population}</strong></div>`;
    });
    el.addEventListener("mouseout", () => {
        tooltip.style.left = "-9999px";
        tooltip.style.top = "-9999px";
        tooltip.innerHTML = "";
    });
    $map.appendChild(el);
});
