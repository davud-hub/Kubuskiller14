$(document).ready(function () {
    fetch("competenties.json")
        .then(response => response.json()
            .then(data => {

                data["professionalskills"].forEach(tabs => {

                    tabs.cards.forEach(card => {

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


            }))


        })