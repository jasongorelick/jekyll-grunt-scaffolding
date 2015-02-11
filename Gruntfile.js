'use strict';

module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: {
      css_start: [
        '_site/css/*'
      ],
      css_end: [
        '_site/css/main.css'
      ],
      js_start: [
        '_site/js/*'
      ],
      js_end: [
        '_site/js/main.min.js'
      ],
      prod_start: [
        '_site/css/*', '_site/js/*'
      ],
      prod_end: [
        '_site/css/main.css', '_site/js/main.min.js'
      ]
    },
    uglify: {
      options: {
        mangle: true,
        sourceMap: true,
        sourceMapName: '_site/js/main.map',
        preserveComments: false
      },
      target: {
        files: {
          '_site/js/main.min.js': ['_js/main.js']
        }
      }
    },
    jshint: {
      options: {
        reporter: require('jshint-stylish')
      },
      all: ['_js/main.js']
    },
    compass: {
      dev: {
        options: {
          sassDir: '_sass',
          cssDir: '_site/css',
          sourcemap: true,
          noLineComments: true,
          debugInfo: false,
          outputStyle: 'compressed'
        }
      },
      prod: {
        options: {
          sassDir: '_sass',
          cssDir: '_site/css',
          sourcemap: false,
          noLineComments: true,
          debugInfo: false,
          outputStyle: 'compressed'
        }
      }
    },
    cacheBust: {
      options: {
        encoding: 'utf8',
        algorithm: 'md5',
        length: 16,
        baseDir: '_site',
        rename: true
      },
      assets: {
        files: [{
          src: ['_includes/head.html', '_includes/footer.html']
        }]
      }
    },
    watch: {
      css: {
        files: ['_sass/*'],
        tasks: ['clean:css_start', 'compass:dev', 'cacheBust', 'clean:css_end']
      },
      js: {
        files: ['_js/*'],
        tasks: ['jshint', 'clean:js_start', 'uglify', 'cacheBust', 'clean:js_end']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-cache-bust');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('default', ['jshint']);
  grunt.registerTask('compile:css', ['clean:css_start', 'compass', 'cacheBust', 'clean:css_end']);
  grunt.registerTask('compile:js', ['jshint', 'clean:js_start', 'uglify', 'cacheBust', 'clean:js_end']);
  grunt.registerTask('prepare', ['jshint', 'clean:prod_start', 'compass:prod', 'uglify', 'cacheBust', 'clean:prod_end'])

};
