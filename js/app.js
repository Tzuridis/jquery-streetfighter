$(document).ready(function() {
    $('.ryu').mouseenter(function() {
        $('.ryu-still').hide();
        $('.ryu-ready').show();
        $('.ryu-throwing').hide();
        $('.cool').hide();
    })
        .mouseleave(function() {
            $('.ryu-ready').hide();
            $('.ryu-still').show();
            $('.ryu-throwing').hide();
            $('.cool').hide();
        })
        .mousedown(function() {
            playHadouken();
            $('.ryu-ready').hide();
            $('.ryu-throwing').show();
            $('.ryu-still').hide()
            $('.hadouken').finish().show()
                .animate({
                        'left': '1020px'
                    },
                    500,
                    function() {
                        $(this).hide();
                        $(this).css('left', '520px');
                    }
            );
        })
        .mouseup(function() {
            console.log('mouseup')
            $('.ryu-throwing').hide();
            $('.ryu-ready').show();
            $('.cool').hide();
            $('.ryu-still').hide();
        })


});

function playHadouken() {
    $('#hadouken-sound')[0].volume = 0.5;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();
}

$(document).keydown(function(event) {
    if (event.which === 88) {
        console.log("Keydown")
        $('.ryu-ready').hide()
        $('.cool').show()
        $('.ryu-still').hide();
        $('.ryu-throwing').hide();
    }
})
    .keyup(function(event) {
        if (event.which === 88) {
            console.log("Keyup")
            $('.ryu-ready').hide();
            $('.cool').hide();
            $('.ryu-still').show();
            $('.ryu-throwing').hide();
        }
    })