const $nameInput = document.getElementById("name");
const $phoneInput = document.getElementById("phone");
const $userList = document.querySelector(".user-list");
const $form = document.querySelector(".form");
const $delBtns = Array.from(document.getElementsByClassName("user-delete"));

$form.addEventListener("submit", (e) => {
    e.preventDefault();
    addUser($nameInput.value, $phoneInput.value);
    [$nameInput.value, $phoneInput.value] = ["", ""];
    $nameInput.focus();
});

$delBtns.forEach((btn) => btn.addEventListener("click", deletThis));

function addUser(name, phone) {
    const user = newElement("li", {class: "user"});
    const userData = newElement("div", {class: "user-data"});
    const userName = newElement("div", {class: "user-name"});
    const userPhone = newElement("div", {class: "user-phone"});
    const userDelBtn = newElement("button", {class: "btn user-delete"});

    userDelBtn.addEventListener("click", deletThis);

    userName.innerText = name;
    userPhone.innerText = phone;

    userData.appendChild(userName);
    userData.appendChild(userPhone);

    user.appendChild(userData);
    user.appendChild(userDelBtn);
    
    $userList.appendChild(user);
}

function newElement(tag, attributes) {
    const element = document.createElement(tag);
    for (attr in attributes) {
        element.setAttribute(attr, attributes[attr]);
    }
    return element;
}

function deletThis(e) {
    e.target.parentElement.remove();
}
