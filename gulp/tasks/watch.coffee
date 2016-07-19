gulp   = require("gulp")
config = require("../config")
$      = config.plugins

gulp.task "watch", ->
  [
    "coffee"
    "scss"
    "haml"
  ].forEach((name) ->
    gulp.start("watch:#{name}")
  )

gulp.task "watch:coffee", ->
  $.watch(config.src.coffee, -> gulp.start("compile:coffee"))

gulp.task "watch:scss", ->
  $.watch(config.src.scss, -> gulp.start("compile:scss"))

gulp.task "watch:haml", ->
  $.watch(config.src.haml, -> gulp.start("compile:haml"))