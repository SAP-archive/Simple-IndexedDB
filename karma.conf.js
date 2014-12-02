
module.exports = function(config) {
    config.set({
        browsers: ['Chrome', 'Firefox', 'IE'],
        files: [
            'bower_components/q/q.js',
            'app/storageUtil/StorageUtilException.js',
            'app/storageUtil/StorageUtil.js',
            'tests/testingStorageUtil.js'
        ],
        frameworks: ['qunit'],
        plugins: ['karma-chrome-launcher', 'karma-firefox-launcher', 'karma-ie-launcher', 'karma-qunit'],
        singleRun: true,
        browserNoActivityTimeout: 500000
    });


};