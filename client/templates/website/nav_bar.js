Template.navBar.helpers({
    products: function (){
        return Products.find();
    }
});

Template.navBar.helpers({
    stores: function () {
        return Stores.find();
    }
});