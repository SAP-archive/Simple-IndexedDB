
module.exports = function(grunt) {


    // Project configuration.
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        uglify: {
            build: {
                src: ['app/storageUtil/StorageUtil.js', 'app/storageUtil/StorageUtilException.js'],
                dest: 'app/min/StorageUtil.min.js'
            }
        },

        jshint:{
            myFiles : ["app/storageUtil/StorageUtil.js"]
        },

        jsdoc : {
            dist : {
                src: ['app/storageUtil/StorageUtil.js', 'app/storageUtil/StorageUtilException.js'],
                options: {
                    destination: 'doc'
                }
            }
        },

        qunit: {
            options:{timeout: 50000,
                phantomPath: 'node_modules/phantomjs/lib/phantom/phantomjs.exe',
                coverage: {
                    disposeCollector: true,
                    src: ['tests/testingStorageUtil.js'],
                    instrumentedFiles: 'temp/',
                    htmlReport: 'report/coverage',
                    coberturaReport: 'report/'
                }
            },
            all: ['tests/*.html']

        },

        karma: {
            unit:{configFile: 'karma.conf.js'}
        }

    });


    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-jsdoc');
    grunt.loadNpmTasks('grunt-qunit-istanbul');
    grunt.loadNpmTasks('grunt-karma');

    // Default task(s).
    grunt.registerTask('default', ['uglify', 'jshint', 'jsdoc', 'qunit', 'karma']);



};