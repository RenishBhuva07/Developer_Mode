// Question-2:Answer: START
$("#apply_css").click(function () {
    $("#q_2").css("border", "3px solid red");
    $("#q_2").css("background-color", "black");
    $("#q_2").css("color", "white");
})
// Question-2:Answer: END
// --------------------------------------------------
// Question-3:Answer: START
$("#add_class").click(function () {
    $("#q_3").addClass("display_block");
})
$("#remove_class").click(function () {
    $("#q_3").removeClass("display_block");
})
// Question-3:Answer: END
// --------------------------------------------------
// Question-4:Answer: START
var $block = $(".block");

// Toggle a sliding animation animation
$("#q_4").on("click", function () {
    $block.stop().slideToggle(1000);
});
// Question-4:Answer: END
// --------------------------------------------------
// Question-5:Answer: START
$(document).ready(function () {

    var currentIndex = 0,
        navItems = $('.nav li');

    function setSlide(index) {
        navItems.removeClass('selected');
        navItems.eq(index).addClass('selected');
        $('.slide').css('display', 'none');
        $('.slide').eq(index).css('display', 'block');
    }

    $('.nav li').click(function () {
        var index = $('.nav li').index($(this));
        currentIndex = index;
        setSlide(currentIndex);
    });

    function next() {
        if (currentIndex < (navItems.length - 1)) {
            currentIndex++;
            setSlide(currentIndex);
        }
    }

    $('.next').click(function () {
        next();
    });

    function prev() {
        if (currentIndex > 0) {
            currentIndex--;
            setSlide(currentIndex);
        }
    }

    $('.prev').click(function () {
        prev();
    });

    document.addEventListener('keydown', function (event) {
        if (event.keyCode == 39) {
            next();
        } else if (event.keyCode == 37) {
            prev();
        }
    }, true);

    function slide() {
        if (currentIndex < (navItems.length - 1)) {
            currentIndex++;
            setSlide(currentIndex);
        } else {
            currentIndex = 0;
            setSlide(currentIndex);
        }
    }

    var interval = setInterval(slide, 3000);

});
// Question-5:Answer: END
// --------------------------------------------------
// Question-6:Answer: START
$(document).ready(function () {
    alert('Hey Bro, You have successfully load a massage on pageload.');
})
// Question-6:Answer: END
// --------------------------------------------------
// --------------------------------------------------
// --------------------------------------------------