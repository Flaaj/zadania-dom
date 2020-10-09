const list = document.querySelector(".list");
const addBtn = document.getElementById("add");
const elems = document.getElementsByClassName("element");

addBtn.addEventListener("click", addElement);
elems[0].querySelector(".clone").addEventListener("click", cloneElement);
elems[0].querySelector(".delete").addEventListener("click", delElement);

function addElement() {
    const element = newElement("div", {class: "element"});
    const h3 = newElement("h3", {class: "element-title"});
    const cloneBtn = newElement("button", {class: "clone"});
    const delBtn = newElement("button", {class: "delete"});

    h3.innerHTML = `Element numer <span class="nr">${elems.length + 1}</span>`;
    cloneBtn.addEventListener("click", cloneElement);
    delBtn.addEventListener("click", delElement);

    element.appendChild(h3);
    element.appendChild(cloneBtn);
    element.appendChild(delBtn);

    list.appendChild(element);
}

function cloneElement(e) {
    const clonedElement = e.target.parentElement.cloneNode(true);
    const cloneBtn = clonedElement.querySelector(".clone");
    const delBtn = clonedElement.querySelector(".delete");

    cloneBtn.addEventListener("click", cloneElement);
    delBtn.addEventListener("click", delElement);

    list.appendChild(clonedElement);
}

function delElement(e) {
    e.target.parentElement.remove();
}

function newElement(tag, attributes) {
    const element = document.createElement(tag);
    for (attr in attributes) {
        element.setAttribute(attr, attributes[attr]);
    }
    return element;
}
