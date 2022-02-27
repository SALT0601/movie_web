const checkForm = document.getElementById("comment-forms");
const checkInput = checkForm.querySelector(".comment-form-comment textarea");
const checkList = document.getElementById("comment-list");

const CHECKS_KEY = "ch";

let checks = [];

function saveChecks() {
    localStorage.setItem(CHECKS_KEY, JSON.stringify(checks));
}

function deleteCheck(event) {
    const li = event.target.parentElement;
    li.remove();
    checks = checks.filter((check) => check.id !== parseInt(li.id));

    saveChecks();

}

function paintCheck(newCheck) {

    const li = document.createElement("li");
    li.id = newCheck.id;
    const h3 = document.createElement("h3");
    h3.innerText = "댓글";
    const span = document.createElement("span");
    span.innerText = newCheck.text;

    const button = document.createElement("button");
    button.innerText = "❌";
    button.className = "opacity";

    button.addEventListener("click", deleteCheck);
    li.appendChild(span);

    li.appendChild(button);


    checkList.appendChild(li);
}


function handleCheckSubmit(event) {
    event.preventDefault();
    const newCheck = checkInput.value;
    checkInput.value = "";
    const newCheckObj = {
        text: newCheck,
        id: Date.now(),
    };
    checks.push(newCheckObj);
    paintCheck(newCheckObj);
    saveChecks();
}

checkForm.addEventListener("submit", handleCheckSubmit);

const savedChecks = localStorage.getItem(CHECKS_KEY);

if (savedChecks !== null) {
    const parsedChecks = JSON.parse(savedChecks);
    checks = parsedChecks;
    parsedChecks.forEach(paintCheck);
}