$(document).ready(function() {
    fetch("competenties.json")
        .then(response => response.json()
        .then(data => {
            console.log(data["professionalskills"][0])
            data["professionalskills"].forEach( skill => {
                skill.cards.forEach( card => {
                    $("#doelgericht").append(
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


                }
                )
            })

        }))
    })
