
module.exports = function (grunt) {
  'use strict';

  // Project configuration.
  grunt.initConfig({

    // Metadata.
    pkg: grunt.file.readJSON('package.json'),

	// Concatination Task
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
	
	// Copying Task
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

	// LESS to CSS Task
	less: {
		dev: {
			options: {
				strictMath: true,
				sourceMap: true,
				outputSourceFiles: true,
				sourceMapURL: '<%= pkg.name %>.css.map',
				sourceMapFilename: 'styles/css/<%= pkg.name %>.css.map'
			},
			src: 'styles/less/travelcheap.less',
			dest: 'styles/css/<%= pkg.name %>.css'
		}
    },
	
	// Watch Task
    esteWatch: {
		options: {
			dirs: ['styles/less/**/', 'html/**/'],
			livereload : {
				enabled : false
			}
		},
		less: function(filepath) {
			grunt.log.ok('Time Stamp: ' + new Date());

			return ['less'];
		},
		/*
		js: function(filepath) {
			grunt.log.ok('Time Stamp: ' + new Date());

			return ['concat'];
		},
		*/
		html: function(filepath) {
			grunt.log.ok('Time Stamp: ' + new Date());

			return ['includes'];
		}
    },
	
	// Importing HTML within HTML Task
	includes: {
		files: {
			src: ['html/*.html'], 
			dest: '',
			flatten: true
		}
	}
  });

  // Load Tasks
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-este-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-includes');
  
  // Register Tasks
  //grunt.registerTask('default', ['concat', 'copy', 'less', 'includes']);
};
