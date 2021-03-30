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