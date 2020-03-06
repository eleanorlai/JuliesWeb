"use strict";

const _ = require("gulp-load-plugins")();
const del = require("del");
const gulp = require("gulp");
const pkg = require("./package.json");

var gulpCleanCSS = require("gulp-clean-css");
var gulpUglify = require("gulp-uglify");
var gulpConcat = require("gulp-concat");
var gulpRsync = require("gulp-rsync");
var gulpFileInclude = require('gulp-file-include');

/*******************************************************************************
 * CONFIG                                                                      *
 *******************************************************************************/

const srcFolder = "src";
const buildProdFolder = "httpdocs";

gulp.task("prod:fontawesome:webfonts", function() {
    return gulp
        .src([`./node_modules/@fortawesome/fontawesome-pro/webfonts/*.{woff,woff2,ttf,eot}`]) // not using svg
        .pipe(gulp.dest(`${buildProdFolder}/assets/webfonts`));
});

// gulp.task("prod:fontawesome:css", function() {
//   return gulp
//     .src("./node_modules/@fortawesome/fontawesome-pro/css/all.min.css")
//     .pipe(_.rename("fontawesome-all.min.css"))
//     .pipe(gulp.dest(`${buildProdFolder}/assets/css`));
// });

gulp.task("prod:css:common", function() {
    return gulp
        .src([`${srcFolder}/css/common/*.min.css`])
        .pipe(gulpConcat("common.min.css"))
        .pipe(gulp.dest(`${buildProdFolder}/assets/css`));
});

gulp.task("prod:css", function() {
    return gulp
        .src(`${srcFolder}/scss/app.scss`)
        .pipe(_.sass({ precision: 10 }))
        .pipe(_.autoprefixer())
        .pipe(gulpCleanCSS())
        .pipe(_.rename({ suffix: ".min" }))
        .pipe(gulp.dest(`${buildProdFolder}/assets/css`));
});

gulp.task("prod:js:common", function() {
    return gulp
        .src(`${srcFolder}/js/common/*.min.js`)
        .pipe(gulpConcat("common.min.js"))
        .pipe(gulp.dest(`${buildProdFolder}/assets/js`));
});


gulp.task("prod:js", function() {
    return gulp
        .src(`${srcFolder}/js/app.js`)
        .pipe(gulpUglify())
        .pipe(_.rename({ suffix: ".min" }))
        .pipe(gulp.dest(`${buildProdFolder}/assets/js`));
});

gulp.task("prod:assets:img", function() {
    return gulp.src(`${srcFolder}/img/**`).pipe(gulp.dest(`${buildProdFolder}/assets/img`));
});

gulp.task("demo:html", function() {
    return gulp
        .src([`${srcFolder}/html/*.html`])
        .pipe(gulpFileInclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest(`${buildProdFolder}/v2-demo`));
});

// https://www.npmjs.com/package/gulp-rsync
gulp.task("deploy", function() {
    return gulp.src("httpdocs/**").pipe(
        gulpRsync({
            root: "httpdocs/",
            hostname: "po1",
            destination: "/data/sites/po1.gagaoolala.com/v2/",
            recursive: true,
            chmod: "ugo=rwX",
            archive: true,
            verbose: false,
            compress: true,
            exclude: ["src/*", "node_modules", ".gitignore", "gulpfile.js", "README.md", "package.json", "package-lock.json", ".git", "composer.*", ".ebextensions", ".DS_Store"]
        })
    );
});
