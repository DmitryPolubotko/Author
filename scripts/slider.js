function Slider(sSelector){
	var s = this;
	
	s.slider = $(sSelector);
	//alert("ok");
	
	s.next			= s.slider.find(".b-moveRight__arrow"); // стрелка -->
	s.previous		= s.slider.find(".b-moveLeft__arrow");	// стрелка <--
	s.pictures		= s.slider.find(".b-image__one");		// все фото в гвлерее
	s.imageInSlide	= s.slider.find(".b-image__preview");	// отображаемое фото в окне слайдера
	s.current		= 1;									// 
	s.max			= s.pictures.length;					// количество фото в галерее
	
	s.showImage = function(iShift){
		s.current += iShift;
		if(s.current > s.max){
			s.current = 1;
		}
		else if(s.current < 1){
			s.current = s.max;
		}
		s.imageInSlide.attr("src", "images/slider/slide/" + s.current + ".jpg");
	}
	s.showNext = function(){
		s.showImage(+1);
	}
	s.showPrevious = function(){
		s.showImage(-1);
	}

	s.next.click(s.showNext);
	s.previous.click(s.showPrevious);
}