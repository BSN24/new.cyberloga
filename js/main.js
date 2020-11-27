$(document).ready(function () {
    "use strict";

    svg4everybody();

    if ($('.modal').length > 0) {
        $('.modal').iziModal({
            bodyOverflow: true,
            overlayColor: "rgba(255, 255, 255, 0.4)",
            width: false,
            closeOnEscape: true,
            overlayClose: false,
            closeButton: true,
            zindex: 10000,
            focusInput: false
        });
    }

    $('.input-phone').mask('+7(999)-999-99-99');

    $('.form__select').selectric();

    (function () {
        $('.order-sms-btn').click(function (e) {
            var inputSms = $('.input-sms').val().trim();
            var error = $('.error');

            if (inputSms === '1234') {
                console.log('send');
                error.text('').hide();
                location.href = '/thanks.html'
            } else {
                console.log('error');
                error.text('Неверный код').show();
            }
        })
    })();

    function sendForm() {
        $('#modal-sms').iziModal('open');
    }

    //functions date picker
    (function () {
        function formatDate(date) {
            var dd = date.getDate();
            if (dd < 10) dd = '0' + dd;

            var mm = date.getMonth() + 1;
            if (mm < 10) mm = '0' + mm;


            var yy = date.getFullYear();
            return dd + '.' + mm + '.' + yy;
        }

        var currentDate = new Date();
        var month = currentDate.setDate(currentDate.getDate() + 30);

        var myDatepicker = $('.form__input-date').datepicker({
            minDate: new Date(),
            maxDate: new Date(month),
            toggleSelected: false,
            startDate: new Date(),
            timepicker: true,
            position: 'top left'
        });

    })();

    $('form').each(function () {
        $(this).validate({
            errorElement: "span",
            errorPlacement: function (e, t) {
                e.appendTo(t.parents("div:first"));
            },
            ignore: ":hidden",
            rules: {
                name: {required: !0, minlength: 2, maxlength: 30},
                phone: {required: !0, minlength: 17, maxlength: 18},
                club: {required: !0},
                age: {required: !0},
                date: {required: !0},
                sms_check: {required: !0},
                price_min: {required: !0, number: true},
                check_policy: {required: true}
            },
            messages: {
                name: {
                    required: "Пожалуйста введите имя",
                    minlength: "Ваше Имя слишком короткое",
                    maxlength: "Ваше Имя слишком длинное"
                },
                phone: {
                    required: "Пожалуйста введите номер телефона",
                    minlength: "Ошибка, проверьте правильность ввода номера"
                },
                club: {required: "Пожалуйста выберите клуб"},
                date: {required: "Пожалуйста выберите дату и время"},
                sms_check: {required: "Введите код из СМС сообщения"},
                price_min: {
                    required: "Введите сумму пополнения",
                    min: `Сумма не соответствует условиям акции, минимальная сумма ${$('input[name=price_min]').attr('min')} руб.`
                },
                check_policy: {required: "Подтвердите согласие с политикой конфиденциальности"}
            },
            submitHandler: function (e) {
                sendForm();
            }
        })
    });

    $('.sale-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        fade: true,
        cssEase: 'linear'
    });

    $('.image-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        prevArrow: '<button class="slick-prev" aria-label="Назад"><svg><use xlink:href="img/svg-sprite/symbol/sprite.svg#left-arrow"></use></svg></button>',
        nextArrow: '<button class="slick-next" aria-label="Вперед"><svg><use xlink:href="img/svg-sprite/symbol/sprite.svg#right-arrow"></use></svg></button>',
    });

});