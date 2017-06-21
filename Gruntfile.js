// require('load-grunt-tasks')(grunt);
module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);
  grunt.initConfig({
  	babel: {
  		options: {
  			sourceMap: true,
  			presets: ['env']
  		},
      dist: {
         files: [{
           expand: true,
           cwd: 'app/',
           src: ['**/*.js'],
          //  dest: 'app/dist/src',
           ext:'.js'
         }]
       }
     }
  });
  // grunt.loadNpmTasks('grunt-babel');
  grunt.registerTask('default', ["babel"]);
}
