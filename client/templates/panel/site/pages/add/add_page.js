Template.addPage.rendered = function(){
    var showPageProduits = function(){$('.addPageProduits').show()};
    var hidePageProduits = function(){$('.addPageProduits').hide()};
    var showPageMagasins = function(){$('.addPageMagasins').show()};
    var hidePageMagasins = function(){$('.addPageMagasins').hide()};
    var showPagePromos = function(){$('.addPagePromos').show()};
    var hidePagePromos = function(){$('.addPagePromos').hide()};

    $('#radioProduit').on('click', function(){
        showPageProduits();
        hidePageMagasins();
        hidePagePromos();
    });

    $('#radioMagasin').on('click', function(){
        hidePageProduits();
        showPageMagasins();
        hidePagePromos();
    });

    $('#radioPromo').on('click', function(){
        hidePageProduits();
        hidePageMagasins();
        showPagePromos();
    });
};