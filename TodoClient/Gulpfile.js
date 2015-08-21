var gulp = require('gulp');
var exec = require("child_process").exec;

gulp.task("bundle", function (callback) {
    exec("aurelia bundle", function(err) {
        callback(err);
    });
});

gulp.task('default', function() {
    
});