/**
 * Created by Will on 8/26/2016.
 */
module.exports = function(grunt)    {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: 'sass/buttons/',
                        src: ['**/*.sass'],
                        dest: 'css/',
                        ext: '.css',
                        extDot: 'first'
                    }
                ]
            }
        },
        cssmin: {
            options: {
                sourceMap: true
            },
            dist: {
                files: [{
                    src: ['css/**/*.css'],
                    dest: 'dist/g-signin.css'
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', [
        'sass',
        'cssmin'
    ]);
};