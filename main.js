$(document).ready(function() {
    fetch("competenties.json")
        .then(response => response.json()
        .then(data => {
            console.log(data)
            data["profesionalskills"]["subTab"].forEach(function(card){
                $("#profskills").append(
                    '<div class="contain">' + 
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

        }))
    })
