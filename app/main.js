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


