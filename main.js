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
let cardData = {
    "gebruikersinteractie": {
        "analyseren": {
            "1": {
                "nl": ""
            },
            "2": {
                "nl": ""
            },
            "3": {
                "nl": ""
            },
            "4": {
                "nl": ""
            }
        },
        "adviseren": {
            "1": {
                "nl": ""
            },
            "2": {
                "nl": ""
            },
            "3": {
                "nl": ""
            },
            "4": {
                "nl": ""
            }
        },
        "ontwerpen": {
            "1": {
                "nl": ""
            },
            "2": {
                "nl": ""
            },
            "3": {
                "nl": ""
            },
            "4": {
                "nl": ""
            }
        },
        "realiseren": {
            "1": {
                "nl": ""
            },
            "2": {
                "nl": ""
            },
            "3": {
                "nl": ""
            },
            "4": {
                "nl": ""
            }
        },
        "manage-control": {
            "1": {
                "nl": ""
            },
            "2": {
                "nl": ""
            },
            "3": {
                "nl": ""
            },
            "4": {
                "nl": ""
            }
        }
    },
    "organisatieprocessen": {
        "analyseren": {
            "1": {
                "nl": ""
            },
            "2": {
                "nl": ""
            },
            "3": {
                "nl": ""
            },
            "4": {
                "nl": ""
            }
        },
        "adviseren": {
            "1": {
                "nl": ""
            },
            "2": {
                "nl": ""
            },
            "3": {
                "nl": ""
            },
            "4": {
                "nl": ""
            }
        },
        "ontwerpen": {
            "1": {
                "nl": ""
            },
            "2": {
                "nl": ""
            },
            "3": {
                "nl": ""
            },
            "4": {
                "nl": ""
            }
        },
        "realiseren": {
            "1": {
                "nl": ""
            },
            "2": {
                "nl": ""
            },
            "3": {
                "nl": ""
            },
            "4": {
                "nl": ""
            }
        },
        "manage-control": {
            "1": {
                "nl": ""
            },
            "2": {
                "nl": ""
            },
            "3": {
                "nl": ""
            },
            "4": {
                "nl": ""
            }
        }
    },
    "infrastructuur": {
        "analyseren": {
            "1": {
                "nl": ""
            },
            "2": {
                "nl": ""
            },
            "3": {
                "nl": ""
            },
            "4": {
                "nl": ""
            }
        },
        "adviseren": {
            "1": {
                "nl": ""
            },
            "2": {
                "nl": ""
            },
            "3": {
                "nl": ""
            },
            "4": {
                "nl": ""
            }
        },
        "ontwerpen": {
            "1": {
                "nl": ""
            },
            "2": {
                "nl": ""
            },
            "3": {
                "nl": ""
            },
            "4": {
                "nl": ""
            }
        },
        "realiseren": {
            "1": {
                "nl": ""
            },
            "2": {
                "nl": ""
            },
            "3": {
                "nl": ""
            },
            "4": {
                "nl": ""
            }
        },
        "manage-control": {
            "1": {
                "nl": ""
            },
            "2": {
                "nl": ""
            },
            "3": {
                "nl": ""
            },
            "4": {
                "nl": ""
            }
        }
    },
    "software": {
        "analyseren": {
            "1": {
                "nl": ""
            },
            "2": {
                "nl": ""
            },
            "3": {
                "nl": ""
            },
            "4": {
                "nl": ""
            }
        },
        "adviseren": {
            "1": {
                "nl": ""
            },
            "2": {
                "nl": ""
            },
            "3": {
                "nl": ""
            },
            "4": {
                "nl": ""
            }
        },
        "ontwerpen": {
            "1": {
                "nl": ""
            },
            "2": {
                "nl": ""
            },
            "3": {
                "nl": ""
            },
            "4": {
                "nl": ""
            }
        },
        "realiseren": {
            "1": {
                "nl": ""
            },
            "2": {
                "nl": ""
            },
            "3": {
                "nl": ""
            },
            "4": {
                "nl": ""
            }
        },
        "manage-control": {
            "1": {
                "nl": ""
            },
            "2": {
                "nl": ""
            },
            "3": {
                "nl": ""
            },
            "4": {
                "nl": ""
            }
        }
    },
    "hardware-interfacing": {
        "analyseren": {
            "1": {
                "nl": ""
            },
            "2": {
                "nl": ""
            },
            "3": {
                "nl": ""
            },
            "4": {
                "nl": ""
            }
        },
        "adviseren": {
            "1": {
                "nl": ""
            },
            "2": {
                "nl": ""
            },
            "3": {
                "nl": ""
            },
            "4": {
                "nl": ""
            }
        },
        "ontwerpen": {
            "1": {
                "nl": ""
            },
            "2": {
                "nl": ""
            },
            "3": {
                "nl": ""
            },
            "4": {
                "nl": ""
            }
        },
        "realiseren": {
            "1": {
                "nl": ""
            },
            "2": {
                "nl": ""
            },
            "3": {
                "nl": ""
            },
            "4": {
                "nl": ""
            }
        },
        "manage-control": {
            "1": {
                "nl": ""
            },
            "2": {
                "nl": ""
            },
            "3": {
                "nl": ""
            },
            "4": {
                "nl": ""
            }
        }
    }
}
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