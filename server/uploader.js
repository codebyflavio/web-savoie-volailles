Meteor.startup(function () {
    UploadServer.init({
        tmpDir: process.env.PWD + '/public/uploads/tmp',
        uploadDir: process.env.PWD + '/public/uploads',
        checkCreateDirectories: true
    });
});