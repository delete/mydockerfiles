var grunt = require('grunt');
var fs = require('fs');

grunt.initConfig({
   uglify: {
      my_target: {
         files: {
            'dist/main.min.js': ['src/main.js']
         }
      }
   },

   watch: {
      dist: {
         files: ['src/*.js'],
         tasks: ['build']
      }
   },

   concat: {
      maps: {
         src: [
            'src/map.js',
            'src/elements.js',
         ],
         dest: 'src/maps.js',
      },
      script: {
          src: [
              'src/helpers.js',
              'src/funcs.js',
          ],
          dest: 'src/script.js',
      },
      main: {
          src: [
              'src/maps.js',
              'src/script.js',
          ],
          dest: 'src/main.js',
      },
   },
});

grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-concat');

grunt.registerTask('perm', 'Give the right permission', function() {
    fs.chown('src/main.js', 1000, 1000);
    fs.chown('src/script.js', 1000, 1000);
    fs.chown('src/maps.js', 1000, 1000);
    fs.chown('dist/main.min.js', 1000, 1000);
});

grunt.registerTask('default', ['concat', 'uglify', 'perm']);
grunt.registerTask('build', ['concat', 'uglify', 'perm']);
grunt.registerTask('dev', ['watch', 'perm']);

module.exports = grunt;
