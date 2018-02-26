window.onload = function() {
	//以移动设备最小分辨率为基准设定宽高。
	scaleW = window.innerWidth / 320;
	scaleH = window.innerHeight / 480;
	var resizes = document.querySelectorAll('.resize');
	for(var j = 0; j < resizes.length; j++) {
		$(resizes[j]).css('width', parseInt($(resizes[j]).css('width')) * scaleW + 'px');
		$(resizes[j]).css('height', parseInt($(resizes[j]).css('height')) * scaleH + 'px');
		$(resizes[j]).css('top', parseInt($(resizes[j]).css('top')) * scaleH + 'px');
		$(resizes[j]).css('left', parseInt($(resizes[j]).css('left')) * scaleW + 'px');
		//只对top以及left生效。
	}
	//Swiper配置
	var mySwiper = new Swiper('.swiper-container', {
		effect: 'coverflow',
		direction: 'vertical',
		loop: true,
		lazy: true,
		longSwipes: false,
		initialSlide: 0,
		pagination: {
			el: '.swiper-pagination',
		},
		mousewheelControl: true,
		onSlideChangeEnd: function(swiper) {
			swiperAnimate(swiper);
		},
		onTransitionEnd: function(swiper) {
			swiperAnimate(swiper);
		},

		watchSlidesProgress: true,
		on: {
			init: function() {
				swiperAnimateCache(this); //隐藏动画元素 
				swiperAnimate(this); //初始化完成开始动画
			},
			slideChangeTransitionEnd: function() {
				swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
			}
		}

	})
	var mySwiper2 = new Swiper('.swiper-container2', {
		effect: 'fade',
		direction: 'horizontal',
		pagination: {
			el: '.swiper-pagination',
		},
		initialSlide: 0,
		mousewheelControl: true,
		loop: true,
		autoplay: {
			delay: 2000,
			disableOnInteraction: true
		}
	})
	var mySwiper3 = new Swiper('.swiper-container3', {
		effect: 'fade',
		direction: 'horizontal',
		pagination: {
			el: '.swiper-pagination',
		},
		initialSlide: 0,
		mousewheelControl: true,
		loop: true,
		autoplay: {
			delay: 2000,
			disableOnInteraction: true
		}
	})
	var mySwiper4 = new Swiper('.swiper-container4', {
		effect: 'fade',
		direction: 'horizontal',
		pagination: {
			el: '.swiper-pagination',
		},
		initialSlide: 0,
		mousewheelControl: true,
		loop: true,
		autoplay: {
			delay: 2000,
			disableOnInteraction: true
		}
	})
	var mySwiper5 = new Swiper('.swiper-container5', {
		effect: 'fade',
		direction: 'horizontal',
		pagination: {
			el: '.swiper-pagination',
		},
		initialSlide: 0,
		mousewheelControl: true,
		loop: true,
		autoplay: {
			delay: 2000,
			disableOnInteraction: true
		}
	})

	var _Imgsrc = ['img/icons/musicon.png', 'img/icons/musicoff.png']
	var music_img = document.getElementsByClassName('music-img');
	var users_music = document.getElementsByClassName('musicPlay');
	for(var i = 0; i < music_img.length; i++) {
		music_img[i].flag = 1;
	}
	$('.music-img').on('click', function() {
		if(this.flag == 1) {
			this.src = _Imgsrc[1];
			this.flag = 0;
			users_music[0].pause();
		} else {
			this.src = _Imgsrc[0];
			this.flag = 1;
			users_music[0].play();
		}
	})
}