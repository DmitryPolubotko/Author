function Gallery(sSelector){
	var g = this;
	
	g.gallery = $(sSelector);
	//alert("ok");
	
	g.pictures			= g.gallery.find(".b-portfImage");					// все дивы с фото в гвлерее
	g.arrowPrev			= g.gallery.find(".b-preview__arrow_prev");			// стрелка <--
	g.arrowNext			= g.gallery.find(".b-preview__arrow_next");			// стрелка -->
	g.preview			= g.gallery.find(".b-portfolio__preview");			// блок просмотра
	g.previewImages		= g.gallery.find(".b-preview__image");				// большое фото
	g.previewText		= g.gallery.find(".b-preview__text");				// подпись к большому фото
	g.quantity			= g.gallery.find(".b-preview__quantity");			// место для подписи
	g.currentPhotoNum	= g.gallery.find(".b-preview__currentPhotoNum");	// для вывода номера текущего фото
	g.current			= 0;												// номер текущего фото (0)
	g.maxPpoto			= g.pictures.length;
	
	//создаем методы
	g.showPreview = function(){
		//alert($(this).attr("class"));
		var picture = $(this);
		g.current = g.pictures.index(picture);
		g.display(picture);
	}
	g.display = function(oPicture){
		var  smallImage		= oPicture.find(".b-portfImage__img")
			,bigImageSrc	= smallImage.attr("src").replace("small_", "")
			;
		g.previewImages.attr("src", bigImageSrc);
		g.preview.addClass("b-preview_shown");
		g.previewText.html(smallImage.attr("alt"));
		g.currentPhotoNum.html(g.current + 1);
	}
	g.closePreview = function(event){
		if(!event || $(event.target).hasClass("b-portfolio__preview")){
			g.preview.removeClass("b-preview_shown");
		}
	}
	g.escClosePreview = function(event){
		if(event.which == 27){
			g.preview.removeClass("b-preview_shown");
		}
	}
	g.showImage = function(iShift){
		g.current += iShift;
		if(g.current >= g.maxPpoto){
			g.current = 0;
		}
		else if(g.current < 0){
			g.current = g.maxPpoto - 1;
		}
		g.display(g.gallery.find(".b-portfImage:eq(" + g.current + ")"));
	}
	g.prevPhoto = function(){	// показать преддыдущее фото
		g.showImage(-1);
	}
	g.nextPhoto = function(){	// показать следующее фото
		g.showImage(1);
	}
	g.NextPrevKey = function(){
		if(event.which == 37){
			g.showImage(-1);
		}
		else if(event.which == 39){
			g.showImage(+1);
		}
	}
	g.showQuantity = function(){ // подпись к фото, номра какой из скольки показан рисунок
		g.quantity.html(g.maxPpoto);
	}
	
	g.pictures.click(g.showPreview);
	g.preview.click(g.closePreview);
	$("body").keyup(g.escClosePreview);
	g.arrowPrev.click(g.prevPhoto);
	g.arrowNext.click(g.nextPhoto);
	$("body").keyup(g.NextPrevKey);
	g.showQuantity();
}