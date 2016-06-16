/**
* @Author: Sharif Abdelrahman <SharifAbdelrahman>
* @Date:   15-06-2016
* @Email:  sharif.abdelrahman14@gmail.com
* @Last modified by:   SharifAbdelrahman
* @Last modified time: 16-06-2016
*/



// "imports" for gulp
var gulp =require('gulp');
var sass =require('gulp-sass');

//installed gulp sass plugin with commandLine

// this function takes the scss file
// converts it to css and puts it in the css firectory

gulp.task('sass', function(){
  return gulp.src('app/scss/styles.scss')
      .pipe(sass())
      .pipe(gulp.dest('app/css'))
});
