var swiper = new Swiper('.swiper-container', {
      slidesPerView: 4,
      speed: 2000,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      autoplay: {
      delay: 2000,
    },
    });

    // swiper-bottom

    var swiper = new Swiper('.swiper-container', {
          slidesPerView: 4,
          speed: 2000,
          pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true,
          },

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
