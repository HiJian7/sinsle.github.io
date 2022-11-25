// 模板主页脚本
$(function(){
	"use strict";

	// preloader
	$(".loader-wrapper").fadeOut();

	// sidebar
	$(".sidebar").sideNav({
		edge: "left"
	});

	// navbar on scroll
    $(window).on("scroll", function() {

        if ($(document).scrollTop() > 1) {

            $(".navbar").css({
                "box-shadow": "rgba(0, 0, 0, .13) 0px 0px 13px"
            });

        } else {

            $(".navbar").css({
                "box-shadow": "none"
            });

        }

    });

	// slider
	$(".slider-slide").owlCarousel({
		items: 1,
		slideSpeed: 1000,
		dots: true,
		paginationSpeed: 400,
		singleItem: true,
		loop: true,
		margin: 10
	});

	// popular course
	$(".popular-slide").owlCarousel({
		items: 1,
		loop: false,
		margin: 15
	});

	// tabs
	$("ul.tabs").tabs();

	// modal
	$(".modal").modal({
		dismissible: false
	});

	// series
	$(".series-slide").owlCarousel({
		items: 1,
		loop: false
	});

});

// 网站运行时间
function secondToDate(second){if(!second){return 0}var time=new Array(0,0,0,0,0);if(second>=365*24*3600){time[0]=parseInt(second/(365*24*3600));second%=365*24*3600}if(second>=24*3600){time[1]=parseInt(second/(24*3600));second%=24*3600}if(second>=3600){time[2]=parseInt(second/3600);second%=3600}if(second>=60){time[3]=parseInt(second/60);second%=60}if(second>0){time[4]=second}return time}function setTime(){var create_time=Math.round(new Date(Date.UTC(2019,11,22,0,0,0)).getTime()/1000);var timestamp=Math.round((new Date().getTime()+8*60*60*1000)/1000);currentTime=secondToDate((timestamp-create_time));currentTimeHtml=currentTime[0]+"年"+currentTime[1]+"天";document.getElementById("htmer_time").innerHTML=currentTimeHtml}setInterval(setTime,1000);

// 备用