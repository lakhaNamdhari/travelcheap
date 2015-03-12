
module.exports = function (grunt) {
  'use strict';

  // Project configuration.
  grunt.initConfig({

    // Metadata.
    pkg: grunt.file.readJSON('package.json'),

    concat: {
      options: {
        banner: '<%= banner %>\n<%= jqueryCheck %>\n<%= jqueryVersionCheck %>',
        stripBanners: false
      },
      vendor: {
        src: [
          'bower_components/jquery/dist/jquery.js',
          'bower_components/bootstrap/dist/js/bootstrap.js'
        ],
        dest: 'dist/js/<%= pkg.name %>.vendor.js'
      },
      widgets: {
        src: [
          'widgets/accordionForm.js'
        ],
        dest: 'dist/js/<%= pkg.name %>.widgets.js'
      }
    },

	less: {
      compileCore: {
        options: {
          strictMath: true,
          sourceMap: true,
          outputSourceFiles: true,
          sourceMapURL: '<%= pkg.name %>.css.map',
          sourceMapFilename: 'dist/css/<%= pkg.name %>.css.map'
        },
        src: 'less/bootstrap.less',
        dest: 'dist/css/<%= pkg.name %>.css'
      },
      compileTheme: {
        options: {
          strictMath: true,
          sourceMap: true,
          outputSourceFiles: true,
          sourceMapURL: '<%= pkg.name %>-theme.css.map',
          sourceMapFilename: 'dist/css/<%= pkg.name %>-theme.css.map'
        },
        src: 'less/theme.less',
        dest: 'dist/css/<%= pkg.name %>-theme.css'
      }
    },
	
    esteWatch: {
		options: {
			dirs: ['less/**/', 'js/**/'],
			livereload : {
				enabled : false
			}
		},
		less: function(filepath) {
			grunt.log.ok('Time Stamp: ' + new Date());

			return ['less'];
		},
		js: function(filepath) {
			grunt.log.ok('Time Stamp: ' + new Date());

			return ['concat'];
		}
    }
  });

  // Load task modules
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-este-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  
  // Register Tasks
  grunt.registerTask('buildjs', ['concat']);
  grunt.registerTask('watch', ['esteWatch']);
};
