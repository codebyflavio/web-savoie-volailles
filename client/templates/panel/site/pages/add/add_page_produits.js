Template.addPageProduits.rendered = function () {

    $('#produitsTitle').on('keyup', function () {
        $('#panelPreviewProduit .titlePreview').text($(this).val());
    });

    $('#produitsDescription').on('keyup', function () {
        $('#panelPreviewProduit .descriptionPreview').text($(this).val());
    });

    ///////////////////////////////////////////////////////////////
    $('#produitsColorBackground').on('change', function () {
        $('#panelPreviewProduit').css('background-color', $(this).val());
    });

    $('#produitsColorText').on('change', function () {
        $('.descriptionPreview, .titlePreview').css('color', $(this).val());
    });

    $('#produitsColorBtnBorder').on('change', function () {
        $('.titlePreview').css('border-color', $(this).val());
    });

    $('.createProduit').on('click', function () {
        if (confirm('Add?')) {
            Products.insert({
                name: $('.titlePreview').text(),
                description: $('.descriptionPreview').text(),
                backgroundColor: $('#panelPreviewProduit').css('background-color'),
                textColor: $('.descriptionPreview, .titlePreview').css('color'),
                btnBorder: $('.titlePreview').css('border-color')
        });

        }
    })
};