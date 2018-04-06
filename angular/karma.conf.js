// Karma configuration
// Generated on Thu Apr 05 2018 20:02:55 GMT+0300 (Belarus Standard Time)
const path = require('path');

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: 
    [
        {pattern: './main.js', watched: true}
    ],


    // list of files / patterns to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage'],

    coverageReporter: {
            reporters: [
                {
                    type: 'html', 
                    dir: 'reports/coverage/'
                }, 
                {
                    type: 'lcovonly', 
                    dir: 'reports/coverage/', 
                    subdir: '.', 
                    file: 'lcov.info'
                }
            ]
    },

    coverageIstanbulReporter: {
        reports: ['lcov'],
        dir: './reports/',
        fixWebpackSourcePaths: true
    },

    webpack: {
            module: {
                rules: [
                    {
                        test: /\.js$/,
                        include: path.resolve('public/index.js'),
                        loader: 'istanbul-instrumenter-loader'
                    },
                    {test: /\.html$/, loader: 'text-loader'},
                ]
            },
            devtool: 'inline-source-map'
        },


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
