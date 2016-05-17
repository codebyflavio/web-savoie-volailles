Template.panelCM.helpers({
    products: function () {
        return Products.find();
    }
});

Template.panelCM.events({
    'click .editProductsCol': function(e, template) {
        e.preventDefault();
        if (confirm('Edit?')) {

            var productOptions = {
                name: template.$('[name=productName]').val(),
                description: template.$('[name=productDescription]').val()
            };

            Products.update(this._id, {$set: productOptions}, function(error) {
                if (error) {
                    alert(error.reason);
                    throwError('Error');
                } else {
                    Router.go('tabPage');
                }
            });
        }
    },

    'click .deleteProductsCol': function(e) {
        e.preventDefault();

        if (confirm("Delete?")) {
            var currentProduct = this._id;
            Products.remove(currentProduct);
            Router.go('tabPage');
        }
    }
});