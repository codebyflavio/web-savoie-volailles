FlowRouter.route('/panel', {
    action: function() {
        BlazeLayout.render("panelLayout", {panelMain: "test"});
    }
});

FlowRouter.route('/panel/site', {
    action: function() {
        BlazeLayout.render("panelLayout", {panelMain: "tabPage"});
    }
});

FlowRouter.route('/panel/caisse', {
    action: function() {
        BlazeLayout.render("panelLayout", {panelMain: "caisse"});
    }
});