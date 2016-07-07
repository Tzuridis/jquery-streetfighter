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
        .mousedown(function(event) {
            if (event.which === 1) {
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
            )};
        })
        .mouseup(function(event) {
            if (event.which === 1) {
            console.log('mouseup')
            $('.ryu-throwing').hide();
            $('.ryu-ready').show();
            $('.cool').hide();
            $('.ryu-still').hide();
        }
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

    // Second RYU

    $(document).ready(function() {
    $('.ryu2').mouseenter(function() {
        $('.ryu2-still').hide();
        $('.ryu2-ready').show();
        $('.ryu2-throwing').hide();
        $('.cool2').hide();
    })
        .mouseleave(function() {
            $('.ryu2-ready').hide();
            $('.ryu2-still').show();
            $('.ryu2-throwing').hide();
            $('.cool2').hide();
        })
        .mousedown(function(event) {
            if (event.which === 2) {
            playHadouken();
            $('.ryu2-ready').hide();
            $('.ryu2-throwing').show();
            $('.ryu2-still').hide()
            $('.hadouken2').finish().show()
                .animate({
                        'left': '1020px'
                    },
                    500,
                    function() {
                        $(this).hide();
                        $(this).css('left', '520px');
                    }
            )};
        })
        .mouseup(function(event) {
            if (event.which === 2) {
            console.log('mouseup')
            $('.ryu2-throwing').hide();
            $('.ryu2-ready').show();
            $('.cool2').hide();
            $('.ryu2-still').hide();
        }
        })


});

function playHadouken() {
    $('#hadouken-sound')[0].volume = 0.5;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();
}

$(document).keydown(function(event) {
    if (event.which === 67) {
        console.log("Keydown")
        $('.ryu2-ready').hide()
        $('.cool2').show()
        $('.ryu2-still').hide();
        $('.ryu2-throwing').hide();
    }
})
    .keyup(function(event) {
        if (event.which === 67) {
            console.log("Keyup")
            $('.ryu2-ready').hide();
            $('.cool2').hide();
            $('.ryu2-still').show();
            $('.ryu2-throwing').hide();
        }
    })