function initialise() {
    showdata("beroepstaken");
    showdata("beheersingniveaus");
    showdata("professionalskills");
}

function showdata(tab){
    fetch("competenties.json")
    .then(response => response.json()
        .then(data => {
            data[tab].forEach(tabs => {
                tabs.cards.forEach(card => {
                    console.log("#" + tabs.tabTitle)
                    $("#" + tabs.tabTitle).append(
                        '<div class="c-card">' +
                        '<div class="c-header">' +
                        card.title +
                        '</div>' +
                        '<div class="c-body">' +
                        '<div>' +
                        card.text +
                        '</div>' +
                        '</div>' +
                        '</div>' +
                        '</div>'
                        )
                })
            })
        })
    )
}

$(document).ready(initialise);