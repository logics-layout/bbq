
$(document).on('click', '.popup-link', function (e) {
    e.preventDefault();
    $(this).magnificPopup({
        type:'inline',
        midClick: true, // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
        closeMarkup: '<button title="%title%" type="button" class="mfp-close"><svg class="icon__del" width="30" height="30"><use xlink:href="#del"></use></svg></button>'
    }).click();
});
