let navigator = $('#navigation');
let sliderTapePosition = $('.newsSlider').width();
let scrollTop = window.pageYOffset;
let today = new Date();
let todayDay = today.getDate();
let todayMonth = today.getMonth() + 1;
let todayYear = today.getFullYear()
$('.reservDateElem').val("0" + todayDay + "/0" + todayMonth + "/" + todayYear);



$('.reservNameElem').focus(function () {
    $(this).val("");
    $('.reservNameElem').addClass('reservCheckedElem')
});
$('.reservNameElem').focusout(function () {
    if ($('.reservCheckedElem').val() == "") {
        $(this).css('border-bottom', '1px solid red');
        $('.reservNameError').css('display', 'block');
    } else {
        $(this).css('border-bottom', 'none');
        $('.reservPhoneError').css('display', 'none');
    }
});

$('.reservPhoneElem').focus(function () {
    $(this).val("");
    $('.reservPhoneElem').addClass('reservCheckedElem')
});
$('.reservPhoneElem').focusout(function () {
    if ($('.reservCheckedElem').val() == "" || Number($('.reservCheckedElem').val()) != $('.reservCheckedElem').val()) {
        $(this).css('border-bottom', '1px solid red');
        $('.reservPhoneError').css('display', 'block');
    } else {
        $(this).css('border-bottom', 'none');
        $('.reservPhoneError').css('display', 'none');
    }
});


$('.reservPeopleNumber').click(function () {
    $('.first').text($(this).text());
    $('.reservNoOfPeopleElem ul').css('display', 'none');
});

$('.second').click(() => $('.reservNoOfPeopleElem ul').css('display', 'block'));

// 
// $('.reservNameElem').click(()=>$('.reservNameElem').val(""));
// $('.reservPhoneElem').click(()=>$('.reservPhoneElem').val(""));

// document.addEventListener('click',()=> {$('.reservPhoneElem').val("")});


$(window).scroll(function () {
    if (window.pageYOffset >= 30) {
        $('#navLogo').animate({ 'margin': '10px 20px 10px 20px' }, 10);
        $('#navigation').css('background-color', '#333333');

    } else if (window.pageYOffset <= 30) {
        $('#navLogo').animate({ 'margin': '20px' }, 10);
        $('#navigation').css('background-color', 'rgba(0,0,0,0.15)');
    }


});

$(window).scroll(function () {
    if (window.pageYOffset >= 450) {
        $('.aboutPhotos').animate({
            'left': '5%',
        }, 1000, "swing");
        $('.aboutInfo').animate({
            'left': '55%',
        }, 1000, "swing");
    }
});

$(window).scroll(function () {
    if (window.pageYOffset >= 1000) {
        $('.offersInfo').slideDown(1000);
        $('.offersCardsCell').slideDown(1000);
    }
});

$(window).scroll(function () {
    if (window.pageYOffset >= 2500) {
        $('.pestoPhotoUnitCellF').slideDown(1500, 'swing');

    }
});
$(window).scroll(function () {
    if (window.pageYOffset >= 2600) {
        $('.pestoPhotoUnitCellS').slideDown(1500, 'swing');

    }
});







$('.newsSliderIndicatorFirst').click(function () {
    $('.newsSliderTape').animate({ 'left': '0' }, 500, "linear");
    $(this).siblings(".SliderIndicator").removeClass('newsSelectedIndicator');
    $(this).addClass('newsSelectedIndicator');
})
$('.newsSliderIndicatorSecond').click(function () {
    $('.newsSliderTape').animate({ 'left': `${-sliderTapePosition}px` }, 500, "linear");
    $(this).siblings(".SliderIndicator").removeClass('newsSelectedIndicator');
    $(this).addClass('newsSelectedIndicator');

})
$('.newsSliderIndicatorThird').click(function () {
    $('.newsSliderTape').animate({ 'left': `${-2 * sliderTapePosition}px` }, 500, "linear");
    $(this).siblings(".SliderIndicator").removeClass('newsSelectedIndicator');
    $(this).addClass('newsSelectedIndicator');

})


$('.menuHeadingMains').click(function () {
    $(this).siblings(".menuHeadingLink").removeClass('menuHeadingIndicator');
    $(this).addClass('menuHeadingIndicator');

    $('.menuDishsMains').siblings(".menuDishs").removeClass('menuDishsIndicator');
    $('.menuDishsMains').addClass('menuDishsIndicator');


})
$('.menuHeadingDesserts').click(function () {
    $(this).siblings(".menuHeadingLink").removeClass('menuHeadingIndicator');
    $(this).addClass('menuHeadingIndicator');

    $('.menuDishsDesserts').siblings(".menuDishs").removeClass('menuDishsIndicator');
    $('.menuDishsDesserts').addClass('menuDishsIndicator');

})
$('.menuHeadingDrinks').click(function () {
    $(this).siblings(".menuHeadingLink").removeClass('menuHeadingIndicator');
    $(this).addClass('menuHeadingIndicator');

    $('.menuDishsMainsDrinks').siblings(".menuDishs").removeClass('menuDishsIndicator');
    $('.menuDishsMainsDrinks').addClass('menuDishsIndicator');


})

let control = $(window).width();
$(window).resize(function () {
    if ($(window).width() < control) {
        console.log($(".pestoPhotoUnitGoDown .pestoCards").width());

        $('.pestoPhotoUnitGoDown  .pestoCards ').css({
            "width": `32%`,
            "height": `90%`,
        });
        $('.pestoPhotoUnitGoUp  .pestoCards ').css({
            "width": `48%`,
            "height": `90%`,
        });
        control = $(window).width();

    } else {
        control = $(window).width();
    }


    setTimeout(() => {
        $('.pestoPhotoUnitGoDown  .pestoCards ').css({
            "width": `34%`,
            "height": `100%`
        });
        $('.pestoPhotoUnitGoUp  .pestoCards ').css({
            "width": `50%`,
            "height": `100%`
        });
        // console.log('привет');
        console.log($(".pestoPhotoUnitGoDown .pestoCards").width());

    }, 1200)


});

// ()=>






$('.aScrollSwitcher .snap1').click(function(){
    console.log("asdadasdasdasdasd");
    $('.aScrollInner').animate({
        'left':0,
    });
});
$('.aScrollSwitcher .snap2').click(function(){
    $('.aScrollInner').animate({
        'left':'-100%'
    });
});
$('.aScrollSwitcher .snap3').click(function(){
    $('.aScrollInner').animate({
        'left':'-200%'
    });
});
$('.aScrollSwitcher .snap4').click(function(){
    $('.aScrollInner').animate({
        'left':'-300%'
    });
});