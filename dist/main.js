(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function() {
  'use strict'

  var modules = require('./modules');

  /************************** APP internal modules **********************/



  angular.module('coding.academy', modules)


  require('./home/home.index');



    setTimeout(function () {
        //console.log('start', $('a.page-scroll'));
        // jQuery for page scrolling feature - requires jQuery Easing plugin
        $('a.page-scroll').bind('click', function(event) {
            var $anchor = $(this);
            console.log('CCCCC');
            $('html, body').stop().animate({
                scrollTop: ($($anchor.attr('href')).offset().top - 50)
            }, 1250, 'easeInOutExpo');
            event.preventDefault();
        });


        $(window).scroll(function() {
            var scroll = $(window).scrollTop();

            if (scroll >= 100) {
                $(".main-nav").addClass("navWhenScroll");
            } else {
                $(".main-nav").removeClass("navWhenScroll");

            }
        });

        new WOW().init();

    }, 500);


    function moveCompanySlider(dir) {

        var boxWidth = 164;
        var companyBoxsSlider = $('.companyBoxsSlider');
        if (companyBoxsSlider.length) {
            var currBoxNum = companyBoxsSlider.attr('data-curr-box');
            var maxBoxNum = companyBoxsSlider.attr('data-count');
            var companySliderArrowRight = $('.companySliderArrowRight');
            var companySliderArrowleft = $('.companySliderArrowleft');
            companySliderArrowRight.show();
            companySliderArrowleft.show();
            if (dir == 'right') {
                currBoxNum++;
                if (currBoxNum + 1 >= maxBoxNum)
                    companySliderArrowRight.hide();
            } else if (dir == 'left') {
                currBoxNum--;
                if (currBoxNum - 1 <= 0)
                    companySliderArrowleft.hide();
            }

            if (currBoxNum > maxBoxNum) {
                currBoxNum = 0;
            } else if (currBoxNum < 0) {
                currBoxNum = maxBoxNum;
            }

            companyBoxsSlider.stop().animate({'left': -1 * currBoxNum * boxWidth});
            companyBoxsSlider.attr('data-curr-box', currBoxNum);
        }
    }



    function setCompanySlider() {
        var companyBoxsSlider = $('#companyBoxsSlider');

        console.log('setCompanySlider', companyBoxsSlider.length);

        if (companyBoxsSlider.length) {
            var companyBoxCount = companyBoxsSlider.find('.companyBox').length;
            companyBoxsSlider.attr('data-count', companyBoxCount - 3);
            companyBoxsSlider.attr('data-curr-box', 0);
        }

        var companySliderArrowRight = $('#companySliderArrowRight');
        if (companySliderArrowRight.length)
            companySliderArrowRight.click(function (e) {
                e.preventDefault();
                moveCompanySlider('right');
            });
        var companySliderArrowleft = $('#companySliderArrowleft');
        if (companySliderArrowleft.length)
            companySliderArrowleft.click(function (e) {
                e.preventDefault();
                moveCompanySlider('left');
            });
    };
    setTimeout(setCompanySlider, 500);



})();



},{"./home/home.index":3,"./modules":4}],2:[function(require,module,exports){
// @ngInject
function HomeController( $scope ) {

  var home = this;

 




}
HomeController.$inject = ["$scope"];

module.exports = HomeController;
},{}],3:[function(require,module,exports){
(function() {
  'use strict'
  angular.module('coding.academy')

    .config(["$stateProvider", "$urlRouterProvider", function( $stateProvider, $urlRouterProvider ) {

      $urlRouterProvider.otherwise("/");

      $stateProvider
        .state('home', {
          url         : "/",
          controller  : 'HomeController',
          controllerAs: 'home',
          templateUrl : "app/home/home.html"
        })
        .state('you', {
          url        : "/you",
          templateUrl: "app/you/you.html"
        })
        .state('us', {
          url        : "/us",
          templateUrl: "app/us/us.html"
        })
        .state('training', {
          url        : "/training",
          templateUrl: "app/training/training.html"
        })
        .state('training.one', {
          url        : "/one",
          templateUrl: "app/training/one.html"
        })
        .state('training.two', {
          url        : "/two",
          templateUrl: "app/training/two.html"
        })
        .state('training.three', {
          url        : "/three",
          templateUrl: "app/training/three.html"
        })
        .state('training.four', {
          url        : "/four",
          templateUrl: "app/training/four.html"
        })
        .state('training.five', {
          url        : "/five",
          templateUrl: "app/training/five.html"
        })

        .state('contact', {
          url        : "/contact",
          templateUrl: "app/contact/contact.html"
        })
    }])

    .controller('HomeController', require('./home.controller'))

//    .run(runConfig)
//// @ngInject
//  function runConfig( $rootScope ) {
//    $rootScope.$on('$stateChangeSuccess', function() {
//      $("html, body").animate({scrollTop: 0}, 200);
//    })
//
//  }

})();

},{"./home.controller":2}],4:[function(require,module,exports){
(function() {
  'use strict'

  var modules = [

    /** Third party modules **/
    'ui.router',
    'ngAnimate'
  ];

  module.exports = modules;

})();
},{}]},{},[1])