gulp   = require("gulp")
config = require("../config")
$      = config.plugins

gulp.task("copy", ["copy:font"])

gulp.task "copy:font", ->
  gulp.src(config.src.fonts)
  .pipe($.plumber())
  .pipe($.flatten())
  .pipe(gulp.dest(config.dist.fonts))