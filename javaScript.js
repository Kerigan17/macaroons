'use strict';

//Добавленный код для задания 5
console.log("Код добавлен!");

$(function (){
    let loader = $('.loader');
    let thx = $('.thanks');

    thx.hide();

    $('#menu__icon').click(function (){
        $('#menu__hidden').addClass('open')
    })
    $('#menu__hidden *').each(function (item){
        $(this).on('click', function (){
            $('#menu__hidden').removeClass('open')
        })
    })
    $('#submit').click(function (){
        let zakaz = $('#zakaz');
        let name = $('#name');
        let phone = $('#phone');
        let hasError = false;

        $('.error').hide();

        if (!zakaz.val()) {
            zakaz.next().show();
            hasError = true;
        }
        if (!name.val()) {
            name.next().show();
            hasError = true;
        }
        if (!phone.val()) {
            phone.next().show();
            hasError = true;
        }

        if (!hasError) {
            loader.css('display', 'flex');

            $.ajax({
                method: "POST",
                url: "https://testologia.site/checkout",
                data: { product: zakaz.val(), name: name.val(), phone: phone.val() }
            })
                .done(function( msg ) {
                    loader.hide();
                    console.log(msg);

                    if (msg.success === 1) {
                        $('#zakazat').hide();
                        thx.show();
                    } else if (msg.success === 0){
                        alert('Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ');
                    }
                })
        }
    })
})




/*

*/