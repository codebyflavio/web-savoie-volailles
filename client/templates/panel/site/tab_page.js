Template.tabPage.rendered = function() {
    $('#tabPage a').click(function (e) {
        e.preventDefault()
        $(this).tab('show')
    });

    $('#modalSite').on('')

    $(function () {
        var hash = window.location.hash;
        hash && $('ul.nav a[href="' + hash + '"]').tab('show');

        $('.nav-tabs a').click(function (e) {
            $(this).tab('show');
            var scrollmem = $('body').scrollTop();
            window.location.hash = this.hash;
            $('html,body').scrollTop(scrollmem);
        });
    });
};