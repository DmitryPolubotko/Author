function menu(sSelector){
	var m = this;
	
	m.menuUl = $(sSelector);
	m.menuLi = m.menuUl.find("li");
	
	m.showMenu = function(){
		$(this).children("ul").show();
	}
	m.hideMenu = function(){
		$(this).children("ul").hide();
	}
	
	m.menuLi.mouseover(m.showMenu);
	m.menuLi.mouseout(m.hideMenu);
}