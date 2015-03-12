
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
		  
		  // Bootstrap Components
          'bower_components/bootstrap/js/transition.js'
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
	
	copy: {
      fonts: {
        src: 'fonts/*',
        dest: 'dist/'
      },
      images: {
        src: 'images/*',
        dest: 'dist/'
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
        src: 'less/travelcheap.less',
        dest: 'dist/css/<%= pkg.name %>.css'
      }
    },
	
    esteWatch: {
		options: {
			dirs: ['less/**/', 'js/**/', 'html/**/'],
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
		},
		html: function(filepath) {
			grunt.log.ok('Time Stamp: ' + new Date());

			return ['includes'];
		}
    },
	
	includes: {
	  files: {
		src: ['html/*.html'], 
		dest: 'dist',
		flatten: true
	  }
	}
  });

  // Load task modules
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-este-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-includes');
  
  // Register Tasks
  grunt.registerTask('buildjs', ['concat']);
  grunt.registerTask('buildhtml', ['includes']);
  grunt.registerTask('watch', ['esteWatch']);
  grunt.registerTask('default', ['concat', 'copy', 'less', 'includes']);
};
