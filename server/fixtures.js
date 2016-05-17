if (Tasks.find().count() === 0) {
    Tasks.insert({
        numeroCommande: '13879',
        name: 'Fransisod',
        description: 'Test description\nFranco: 50c\nETC'
    });

    Tasks.insert({
        numeroCommande: '13880',
        name: 'Fransisod',
        description: 'Test description\nFranco: 60c\nETC'
    });
}

if (Stores.find().count() === 0) {
    Stores.insert({
        name: 'Cranves Sales',
        tel: '0450447502',
        mail: 'cs@savoievolailles.com',
        image: 'http://placehold.it/1050x300',
        address: 'Place du Commerce, 74380 Cranves-Sales'
    });

    Stores.insert({
        name: 'Epagny',
        tel: '0450225923',
        mail: 'epagny@savoievolailles.com',
        image: 'http://placehold.it/1050x300',
        address: '652 Rue Du Centre 74330 Epagny'
    });
}

if (Products.find().count() === 0) {
    Products.insert({
        name: 'Fruits',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus diam dolor, posuere non convallis in, ultrices et est.',
        image: 'img/peche.jpg',
        backgroundColor: '#f38630',
        textColor: '#574fff',
        btnBorder: '#840303'
    });

    Products.insert({
        name: 'Legumes',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus diam dolor, posuere non convallis in, ultrices et est.',
        image: 'img/tomate.jpg',
        backgroundColor: '#f38630',
        textColor: '#574fff',
        btnBorder: '#840303'
    });

    Products.insert({
        name: 'Boucherie',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus diam dolor, posuere non convallis in, ultrices et est.',
        image: 'img/volailles.jpg',
        backgroundColor: '#f38630',
        textColor: '#574fff',
       btnBorder: '#840303'
    });

    Products.insert({
        name: 'Fromage',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus diam dolor, posuere non convallis in, ultrices et est.',
        image: 'img/fromage.jpg',
        backgroundColor: '#f38630',
        textColor: '#574fff',
        btnBorder: '#840303'
    });

    Products.insert({
        name: 'Charcuterie',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus diam dolor, posuere non convallis in, ultrices et est.',
        image: 'img/charcuterie.jpg',
        backgroundColor: '#f38630',
        textColor: '#574fff',
        btnBorder: '#840303'
    });

    Products.insert({
        name: 'Vins',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus diam dolor, posuere non convallis in, ultrices et est.',
        image: 'img/vin.jpg',
        backgroundColor: '#f38630',
        textColor: '#574fff',
        btnBorder: '#840303'
    });
}