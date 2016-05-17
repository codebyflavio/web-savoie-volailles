//Router.configure({
//    loadingTemplate:'loading'
//});
//Router.route('/', function () {
//    this.layout('websiteLayout');
//    this.render('contentMain');
//});

FlowRouter.route('/', {
    action: function() {
        BlazeLayout.render("websiteLayout", {siteMain: "contentMain"});
    }
});