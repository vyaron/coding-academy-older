(function() {
  'use strict'

  //var modules = require('./modules');

  /************************** APP internal modules **********************/



  //angular.module('coding.academy', modules)


  //require('./home/home.index');



    $(document).ready(function () {
        //console.log('start', $('a.page-scroll'));
        // jQuery for page scrolling feature - requires jQuery Easing plugin
        $('a.page-scroll').bind('click', function(event) {
            var $anchor = $(this);
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


        //function moveCompanySlider(dir) {
        //
        //    var boxWidth = 164;
        //    var companyBoxsSlider = $('.companyBoxsSlider');
        //    if (companyBoxsSlider.length) {
        //        var currBoxNum = companyBoxsSlider.attr('data-curr-box');
        //        var maxBoxNum = companyBoxsSlider.attr('data-count');
        //        var companySliderArrowRight = $('.companySliderArrowRight');
        //        var companySliderArrowleft = $('.companySliderArrowleft');
        //        companySliderArrowRight.show();
        //        companySliderArrowleft.show();
        //        if (dir == 'right') {
        //            currBoxNum++;
        //            if (currBoxNum + 1 >= maxBoxNum)
        //                companySliderArrowRight.hide();
        //        } else if (dir == 'left') {
        //            currBoxNum--;
        //            if (currBoxNum - 1 <= 0)
        //                companySliderArrowleft.hide();
        //        }
        //
        //        if (currBoxNum > maxBoxNum) {
        //            currBoxNum = 0;
        //        } else if (currBoxNum < 0) {
        //            currBoxNum = maxBoxNum;
        //        }
        //
        //        companyBoxsSlider.stop().animate({'left': -1 * currBoxNum * boxWidth});
        //        companyBoxsSlider.attr('data-curr-box', currBoxNum);
        //    }
        //}



        //(function setCompanySlider() {
        //    var companyBoxsSlider = $('#companyBoxsSlider');
        //
        //    console.log('setCompanySlider', companyBoxsSlider.length);
        //
        //    if (companyBoxsSlider.length) {
        //        var companyBoxCount = companyBoxsSlider.find('.companyBox').length;
        //        companyBoxsSlider.attr('data-count', companyBoxCount - 3);
        //        companyBoxsSlider.attr('data-curr-box', 0);
        //    }
        //
        //    var companySliderArrowRight = $('#companySliderArrowRight');
        //    if (companySliderArrowRight.length)
        //        companySliderArrowRight.click(function (e) {
        //            e.preventDefault();
        //            moveCompanySlider('right');
        //        });
        //    var companySliderArrowleft = $('#companySliderArrowleft');
        //    if (companySliderArrowleft.length)
        //        companySliderArrowleft.click(function (e) {
        //            e.preventDefault();
        //            moveCompanySlider('left');
        //        });
        //})();


        $.fn.serializeObject = function()
        {
            var o = {};
            var a = this.serializeArray();
            $.each(a, function() {
                if (o[this.name] !== undefined) {
                    if (!o[this.name].push) {
                        o[this.name] = [o[this.name]];
                    }
                    o[this.name].push(this.value || '');
                } else {
                    o[this.name] = this.value || '';
                }
            });
            return o;
        };

        $("#sendContact").click(function () {
            //console.log('AHA');
            var frmContact = $("#frmContact").serializeObject();

            if (frmContact.email || frmContact.phone) {

                $.post("server/sendContact.php", $("#frmContact").serialize(),
                    function (res) {
                        //console.log('Sent!', res);
                        $("#frmContactSuccess").addClass('show');
                        setTimeout(function () {
                            $("#frmContactSuccess").removeClass('show');
                        }, 8000);

                    });

            }
            return false;

        });



    });








})();


