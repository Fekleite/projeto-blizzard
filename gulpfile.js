const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

function buildStyles() {
  return gulp.src('./scss/*.scss')
    .pipe(sass({ outputStyle: 'compressed' })) // compila sass 
    .pipe(autoprefixer({
      overrideBrowserslist: ['last 2 versions'], // adiciona autoprefixer
      cascade: false
    }))
    .pipe(gulp.dest('./css')) // saida de arquivos css
    .pipe(browserSync.stream()); // atualiza o css da página
};

gulp.task('sass', buildStyles);

function pluginsCSS() {
  return gulp.src('./css/lib/*.css')
    .pipe(concat('plugins.css'))
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream());
}

gulp.task('plugincss', pluginsCSS);

function concatJs() {
  return gulp.src('./js/scripts/*.js')
    .pipe(concat('all.js')) // junta os arquivos js
    .pipe(babel({ // transforma o js moderno em js antigo
        presets: ['@babel/env']
    }))
    .pipe(uglify()) // minifica o js
    .pipe(gulp.dest('./js'))
    .pipe(browserSync.stream()); // atualiza o js da página
}

gulp.task('js', concatJs);

function pluginsJs() {
  return gulp.src(['./js/lib/aos.min.js', './js/lib/swiper.min.js'])
    .pipe(concat('plugins.js'))
    .pipe(gulp.dest('./js'))
    .pipe(browserSync.stream());
}

gulp.task('pluginjs', pluginsJs);

function browser() { // cria servidor local
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
}

gulp.task('browser-sync', browser);

function watch() { 
  gulp.watch('./scss/*.scss', buildStyles); // observa alterações de scss
  gulp.watch('./css/lib/*.css', pluginsCSS); // observa alterações de lib css
  gulp.watch('*.html').on('change', browserSync.reload); // observa alterações de html
  gulp.watch('./js/scripts/*.js', concatJs) // observa alterações de js
  gulp.watch('./js/lib/*.js', pluginsJs) // observa alterações de lib js
}

gulp.task('watch', watch);

gulp.task('default', gulp.parallel('watch', 'browser-sync', 'sass', 'js', 'pluginjs', 'plugincss'));