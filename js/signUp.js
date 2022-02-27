// 알림 글자 띄우기
const logIn = document.querySelector(".logIn");
const usAlert = document.querySelector(".us-alert");
const emAlert1 = document.querySelector(".em-alert1");
const emAlert2 = document.querySelector(".em-alert2");
const fnAlert = document.querySelector(".fn-alert");
const lnAlert = document.querySelector(".ln-alert");
const pwAlert1 = document.querySelector(".pw-alert1");
const pwAlert2 = document.querySelector(".pw-alert2");
const pwAlert3 = document.querySelector(".pw-alert3");
const yAlert = document.querySelector(".y-alert");
const mAlert = document.querySelector(".m-alert");
const dAlert = document.querySelector(".d-alert");

const HIDDEN_CLASSNAME = "hidden";

// 인풋 가져오기
const us = document.getElementById("signUp-us");
const em = document.getElementById("signUp-em");
const fn = document.getElementById("signUp-fn");
const ln = document.getElementById("signUp-ln");
const pw = document.getElementById("signUp-pw");
const pw2 = document.getElementById("signUp-pw2");
const y = document.getElementById("signUp-y");
const m = document.getElementById("signUp-m");
const d = document.getElementById("signUp-d");

const pwCheck = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
const emCheck = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;

// 함수
function btnSignUpEvt() {
    // username
    if (us.value == "") {
        usAlert.classList.remove(HIDDEN_CLASSNAME);
        us.focus();
        return false;
    };
    if (!us.value == "") {
        usAlert.classList.add(HIDDEN_CLASSNAME);

    };
    //email
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

    };

    //first name
    if (fn.value == "") {
        fnAlert.classList.remove(HIDDEN_CLASSNAME);
        fn.focus();
        return false;
    };
    if (!fn.value == "") {
        fnAlert.classList.add(HIDDEN_CLASSNAME);

    };
    //last name
    if (ln.value == "") {
        lnAlert.classList.remove(HIDDEN_CLASSNAME);
        ln.focus();
        return false;
    };
    if (!ln.value == "") {
        lnAlert.classList.add(HIDDEN_CLASSNAME);

    };
    //password
    if (pw.value == "") {
        pwAlert1.classList.remove(HIDDEN_CLASSNAME);
        pw.focus();
        return false;
    };
    if (!pw.value == "") {
        pwAlert1.classList.add(HIDDEN_CLASSNAME);
    };

    if (!pwCheck.test(pw.value)) {
        pwAlert2.classList.remove(HIDDEN_CLASSNAME);
        pw.focus();
        return false;
    };
    if (pwCheck.test(pw.value)) {
        pwAlert2.classList.add(HIDDEN_CLASSNAME);
    };

    if (pw.value != pw2.value) {
        pwAlert3.classList.remove(HIDDEN_CLASSNAME);
        pw2.focus();
        return false;
    }
    if (pw.value == pw2.value) {
        pwAlert3.classList.add(HIDDEN_CLASSNAME);

    }
    //year
    if (y.value == "") {
        yAlert.classList.remove(HIDDEN_CLASSNAME);
        y.focus();
        return false;
    };
    if (!y.value == "") {
        yAlert.classList.add(HIDDEN_CLASSNAME);

    };
    //month
    if (m.value == "") {
        mAlert.classList.remove(HIDDEN_CLASSNAME);
        m.focus();
        return false;
    };
    if (!m.value == "") {
        mAlert.classList.add(HIDDEN_CLASSNAME);

    };

    //day 
    if (d.value == "") {
        dAlert.classList.remove(HIDDEN_CLASSNAME);
        d.focus();
        return false;
    };
    if (!d.value == "") {
        dAlert.classList.add(HIDDEN_CLASSNAME);

    };
    location.href = "movie.html";
    logIn.classList.add(HIDDEN_CLASSNAME);


}