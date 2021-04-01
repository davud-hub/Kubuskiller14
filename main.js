// import json from "translations.json"
let translateData = {
    "navigationbar": {
        "beroepstaken": {
            "nl": "Beroepstaken"
        },
        "beheersings": {
            "nl": "Beheersingsniveaus"
        },
        "profskill": {
            "nl": "Profesional Skills"
        }
    },
    "bn": {
        "zelfstandigheid": {
            "nl": "Zelfstandigheid"
        },
        "complexiteit": {
            "nl": "Complexiteit"
        }
    }
};


let languages = [
    "nl",
    "en"
];

$().ready(function () {
    let currentLang = localStorage.getItem('lang') ? localStorage.getItem('lang') : languages[0];
    $('#beroepstaken-tab').html(translateData["navigationbar"]["beroepstaken"][currentLang]);
    $('#beheersingsniveaus-tab').html(translateData["navigationbar"]["beheersings"][currentLang]);
    $('#profession-tab').html(translateData["navigationbar"]["profskill"][currentLang]);
    $('#zelfstandigheid_tab').html(translateData["bn"]["zelfstandigheid"][currentLang]);
    $('#complexiteit_tab').html(translateData["bn"]["complexiteit"][currentLang]);
});

function fade(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 50);
}

function unfade(element) {
    var op = 0.1;  // initial opacity
    element.style.display = 'div';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 10);
}