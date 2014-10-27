module.exports = function(config){
config.set({
      basePath : '../../../',
      files : [ 'src/main/webapp/js/lib/angular/angular.js', 
                'src/main/webapp/js/lib/angular-route/angular-route.js', 
                'src/main/webapp/js/lib/angular-mocks/angular-mocks.js', 
                'src/main/webapp/js/lib/oauth-ng/dist/oauth-ng.js', 
                'src/main/webapp/js/lib/ngstorage/ngStorage.min.js',
                'src/main/webapp/js/lib/angular-base64/angular-base64.min.js',
                'src/main/webapp/js/lib/angular-chosen-localytics/chosen.js',  
                'src/main/webapp/js/lib/angular-chosen-localytics/chosen.js',  
                'src/main/webapp/js/lib/ui-router/angular-ui-router.js',
                'src/main/webapp/js/app/**/*.js', 
                'src/main/webapp/js/lib/*-mo-*/**/*.js',
                'src/test/js/*Suite/**/*.js',
                'src/main/webapp/js/lib/jquery/dist/jquery.min.js',
                'src/main/webapp/js/lib/highcharts/highcharts.js',
                ],
      autoWatch : true,
      preprocessors : {
            'src/main/webapp/js/app/**/*.js': 'coverage',
            'src/main/webapp/js/lib/*-mo-*/**/*.js': 'coverage'
      },
      frameworks : [ 'jasmine' ],
      //browsers : [ 'Chrome' ],
//      browsers : [ 'Firefox' ],
      browsers : [ 'PhantomJS' ],
      plugins : [ 'karma-chrome-launcher', 'karma-phantomjs-launcher', 'karma-firefox-launcher', 'karma-jasmine', 'karma-junit-reporter', 'karma-coverage' ],
      singleRun: true, 
      reporters: ['dots', 'junit', 'coverage'],
      junitReporter : {
         outputFile : 'target/karma/test-results.xml',
         suite : 'unit'
      },
      coverageReporter : {
            type : 'html',
            dir : 'target/karma/coverage/'
      }
   });
};