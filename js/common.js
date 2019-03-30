$(document).ready(function() {


	// if ($("#swiper-container").length > 0) {
	// 	var swiper = new Swiper('#swiper-container', {
	// 		// direction: 'vertical', // вертикальный слайдер
	// 		slidesPerView: 3,
	// 		spaceBetween: 30,
	// 		// effect: 'fade', // анимация
	// 		loop: true,
	// 		observer: false, // помощь инициализации
	// 		slidesPerGroup: 1,
	// 		slideToClickedSlide: false, // клик на слайд = переход на слайд
	// 		watchOverflow: true, // уберет навигацию когда она не нужна
	// 		// autoplay: {
	// 	 //        delay: 2500,
	// 	 //        disableOnInteraction: false,
	//   //     	},
	//       	navigation: {
	// 	        nextEl: '#swiper-button-next',
	// 	        prevEl: '#swiper-button-prev',
	//       	},
	// 	    pagination: {
	// 	        el: '#swiper-pagination',
	// 	        clickable: true,
	// 	        // type: 'progressbar', //прогрессивная полоса
	// 	    },
	// 	    scrollbar: {
	// 	        el: '#swiper-scrollbar',  //нижний скролл
	// 	        hide: true,
	// 	    },
	// 	    breakpoints: {
	// 	        1200: {
	// 	          slidesPerView: 3,
	// 	        },
	// 	        768: {
	// 	          slidesPerView: 2,
	// 	        },
	// 	        640: {
	// 	          slidesPerView: 1,
	// 	        }
	//       	}
	//     });
	// }


	// Помощь анимации
	// data-wow-delay="0.3s" // задержка анимации
	// data-wow-offset="10" // — расстояние в пикселях от нижнего края браузера до верхней границы элемента необходимое для начала анимации;
	new WOW().init();


	// Стилизация селектов
	// (function($) {
	// $(function() {
	//   $('select').styler();
	// });
	// })(jQuery);



	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));



	//Попап менеджер FancyBox
	// data-fancybox="gallery" создание галереи
	// data-caption="<b>Подпись</b><br>"  Подпись картинки
	// data-width="2048" реальная ширина изображения
	// data-height="1365" реальная высота изображения
	// data-type="ajax" загрузка контента через ajax без перезагрузки
	// data-type="iframe" загрузка iframe (содержимое с другого сайта)
	$(".fancybox").fancybox({
		hideOnContentClick: true,
		protect: false, //защита изображения от загрузки, щелкнув правой кнопкой мыши. 
		loop: true, // Бесконечная навигация по галерее
		arrows : true, // Отображение навигационные стрелки
		infobar : true, // Отображение инфобара (счетчик и стрелки вверху)
		toolbar : true, // Отображение панели инструментов (кнопки вверху)
		buttons : [ // Отображение панели инструментов по отдельности (кнопки вверху)
        // 'slideShow',
        // 'fullScreen',
        // 'thumbs',
        // 'share',
        //'download',
        //'zoom',
        'close'
    	],
    	touch : {
			vertical : false,  // Позволяет перетаскивать содержимое по вертикали
		},
    	animationEffect : "zoom", // анимация открытия слайдов "zoom" "fade" "zoom-in-out"
    	transitionEffect: 'slide', // анимация переключения слайдов "fade" "slide" "circular" "tube" "zoom-in-out" "rotate'
    	animationDuration : 500, // Длительность в мс для анимации открытия / закрытия
    	transitionDuration : 1366, // Длительность переключения слайдов
    	slideClass : '', // Добавить свой класс слайдам

	});


	// Маска для формы телефона
    $("input[type='tel']").inputmask({"mask": "+7 (999) 999-9999"});
    // <input type="tel" placeholder="+7 (___) ___-___" name="tel">


	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$(document).ready(function () {
    $("#form").submit(function () {
        $.ajax({
            type: "POST"
            , url: "mail.php"
            , data: $(this).serialize()
        }).done(function () {
            $(this).find("input").val("");
            $("#form").trigger("reset");
            $.fancybox.open($("#pop"));
            setTimeout(function () {
                $.fancybox.close();
            }, 1500);
        });
        return false;
    });
	});


    // фиксированная шапка // Документация https://markgoodyear.com/labs/headhesive/
    function headerFunc() {
    	var options = {
	        offset: '#showHere',
	        offsetSide: 'top',
	        classes: {
	            clone:   'banner--clone',
	            stick:   'banner--stick',
	            unstick: 'banner--unstick'
	        }
		};
		var banner = new Headhesive('.banner', options);
    }


    // Скролл // Документация http://manos.malihu.gr/jquery-custom-content-scroller/
    $(".Scrollbar").mCustomScrollbar({
    	// theme:"rounded", // полузунок не зависит от высоты контента
        autoHideScrollbar: false,
        scrollInertia: 400,
        scrollButtons:{ 
        	enable: true 
        }  
    });


    //Плавный скролл до блока .div по клику на .scroll
    $('a[data-target="anchor"]').bind('click.smoothscroll', function(){
    	var target = $(this).attr('href'),
    		bl_top = $(target).offset().top;
    	$('body, html').animate({scrollTop: bl_top}, 700);
    	return false;
    });


	// Скрыть - раскрыть блок
	$('.menuToggle').on('click', function() {
	   $(this).addClass('active');

       $('.menu').slideToggle(300, function(){
           
            if( $(this).css('display') === "none"){
                $(this).removeAttr('style');
                $('.menuToggle').removeClass('active');
            }
            // if( $(this).css('display') === "block"){
            //     $(this).css('display', 'flex');
            // }

       });

    });


	// аккордеон
	$(".open_toggle").on('click', function(e) {
        e.preventDefault();
        if($(this).next("div").is(":visible")){
            $(this).next("div").slideUp(200);
            $(this).removeClass("active");
        } else {
            $(".block_toggle").slideUp(200);
            $(this).next("div").slideDown(200);
            $(this).parents().siblings().children(".open_toggle").removeClass("active");
            $(this).addClass("active");
        }
    });


// Меню для сайта
	  $('#menu li').on('click', function(e){
	    e.preventDefault();
	  });
	    
	  $('#menu li').hover(function () {
	     clearTimeout($.data(this,'timer'));
	     $('.hidden_list',this).stop(true,true).fadeIn(600);
	  }, function () {
	    $.data(this,'timer', setTimeout($.proxy(function() {
	      $('.hidden_list',this).stop(true,true).fadeOut(600);
	    }, this), 100));
	  });


// табы
  	$('ul.tab_list a').click(function(e) {
        e.preventDefault();
        $('ul.tab_list .active').removeClass('active');
        $(this).addClass('active');
        var tab = $(this).attr('href');
        $('.block_content').not(tab).css({'display':'none'});
        $(tab).fadeIn(400);
    });


// Конпка вверх
    $(window).scroll(function() {
	    if($(this).scrollTop() != 0) {
	    $('#toTop').fadeIn();
	    } else {
	    $('#toTop').fadeOut();
	    }
	});

	$('#toTop').click(function() {
	    $('body,html').animate({scrollTop:0},800);
	});


// API гугл карты
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap" async defer></script>
var map;
function initMap() {

      map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 54.7511, lng: 55.9825},
          zoom: 15,
          disableDefaultUI: true,
          styles: [] // стиль карты https://snazzymaps.com/  (минификатор кода: https://ru.piliapp.com/minify/yui-compressor/)
          });
      var marker = new google.maps.Marker({
          position: {lat: 54.7511, lng: 55.9825},
          map: map,
          title: 'адресс',
          icon: 'img/marker.png' 
      });
      var contentString = '<div id="content">'+
            '<div id="siteNotice">'+
            '<p>контент</p>'+
            '</div>'+
            '</div>';
      var infowindow = new google.maps.InfoWindow({
         content: contentString,
         maxWidth: 400
      });
      marker.addListener('click', function() {
          infowindow.open(map, marker);
      });
}


});




