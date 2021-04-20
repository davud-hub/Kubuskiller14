$(document).ready(function() {
    $.get("competenties.json", function( data, status){
        
        var data=JSON.parse(data);

        data.forEach(function(card){
            $("#contain-box").append(
            '<div class="c-card">' +
                '<div class="c-header">' +
                    card.title +
                '</div>' +
                '<div class="c-body">' +
                    '<div>' +
                        card.text +
                    '</div>' +
                '</div>' +
            '</div>'
            )
        })
    })
})