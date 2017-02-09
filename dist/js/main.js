var showMenu = function () {
    $('#btnHide').click(function () {
        var $btnHide = $(this);

        if(parseInt($btnHide.val()) == 0){
            $('.hide-menu').css({
                "display" : "block"
            });
            $btnHide.addClass('menu__mobile__btn_show');
            $btnHide.val(1);
        }
        else{
            $('.hide-menu').css({
                "display" : "none"
            });
            $btnHide.removeClass('menu__mobile__btn_show');
            $btnHide.val(0);
        }

    });
};
$(document).ready(showMenu);

function Slider(sSelector) {
    var s = $(this);
    s.slider = $(sSelector);

    s.btnLeft = s.slider.find('#btnSliderLeft');
    s.btnRight = s.slider.find('#btnSliderRight');
    s.sliderBox = s.slider.find('#sliderBox');
    s.id = 1;

    s.moveLeft = function () {
        var url = s.sliderBox.css("background-image"),
            urlLenght = url.length,
            reg = new RegExp("slider_foto_([0-9])", "i"),
            index = +url.match(reg)[1]
            ;

            if(index == 1){
                s.btnLeft.addClass('btn_stop');
            }

            if(index > 1 ){
                s.btnLeft.removeClass('btn_stop');
                s.btnRight.removeClass('btn_stop');
                index -= 1;
                index = "slider_foto_" + index;
                url = url.replace(reg, index);
                s.sliderBox.css({
                    "background-image" : url
                })
            }
    };

    s.moveRight = function () {
        var url = s.sliderBox.css("background-image"),
            urlLenght = url.length,
            reg = new RegExp("slider_foto_([0-9])", "i"),
            index = +url.match(reg)[1]
            ;
        console.log(index);
        if(index == 9){
            s.btnRight.addClass('btn_stop');
        }

        if(index < 9 ){
            s.btnRight.removeClass('btn_stop');
            s.btnLeft.removeClass('btn_stop');
            index += 1;
            index = "slider_foto_" + index;
            url = url.replace(reg, index);
            s.sliderBox.css({
                "background-image" : url
            })
        }


    };


    s.btnLeft.click(s.moveLeft);
    s.btnRight.click(s.moveRight);
};

