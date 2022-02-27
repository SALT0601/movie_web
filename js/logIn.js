const logIn = document.querySelector(".logIn");
const emAlert1 = document.querySelector(".em-alert1");
const emAlert2 = document.querySelector(".em-alert2");
const pwAlert1 = document.querySelector(".pw-alert1");
const pwAlert2 = document.querySelector(".pw-alert2");
const HIDDEN_CLASSNAME = "hidden";
const em = document.getElementById("sign-in-email");
const pw = document.getElementById("sign-in-pw");
const pwCheck = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
const emCheck = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;


function btnLogEvt() {
    if (em.value == "") {
        emAlert1.classList.remove(HIDDEN_CLASSNAME);
        em.focus();
        return false;
    };
    if (!em.value == "") {
        emAlert1.classList.add(HIDDEN_CLASSNAME);

    };
    if (!emCheck.test(em.value)) {
        emAlert2.classList.remove(HIDDEN_CLASSNAME);
        em.focus();
        return false;
    }

    if (emCheck.test(em.value)) {
        emAlert2.classList.add(HIDDEN_CLASSNAME);

    }
    if (pw.value == "") {
        pwAlert1.classList.remove(HIDDEN_CLASSNAME);
        pw.focus();
        return false;
    };
    if (!pw.value == "") {
        pwAlert1.classList.add(HIDDEN_CLASSNAME);
    };

    location.href = "movie.html";
    logIn.classList.add(HIDDEN_CLASSNAME);


}







