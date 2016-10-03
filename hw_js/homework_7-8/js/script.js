$( function() {

	//	Tabs

  $(li1).click(function(){
    $(li1).addClass("active");
    $(li2).removeClass("active");
    $(li3).removeClass("active");
    $(b1).removeClass("hide");
    $(b2).addClass("hide");
    $(b3).addClass("hide");
  });

	$(li2).click(function(){
    $(li1).removeClass("active");
    $(li2).addClass("active");
    $(li3).removeClass("active");
    $(b2).removeClass("hide");
    $(b1).addClass("hide");
    $(b3).addClass("hide");
  });

	$(li3).click(function(){
    $(li1).removeClass("active");
    $(li2).removeClass("active");
    $(li3).addClass("active");
    $(b3).removeClass("hide");
    $(b1).addClass("hide");
    $(b2).addClass("hide");
  });
  
	//	Help for inputs
	
	var showHelp = false;
  
	$(input_1).mouseover(function(){$(help_1).removeClass("hide");});
	$(input_2).mouseover(function(){$(help_2).removeClass("hide");});
	$(input_3).mouseover(function(){$(help_3).removeClass("hide");});

	$(input_1).mouseout(function(){
		$(help_1).addClass("hide");
		$(help).removeClass("button_active");
		showHelp = false;
	});
	$(input_2).mouseout(function(){
		$(help_2).addClass("hide");
		$(help).removeClass("button_active");
		showHelp = false;
	});
	$(input_3).mouseout(function(){
		$(help_3).addClass("hide");
		$(help).removeClass("button_active");
		showHelp = false;
	});
	
	$(help).click(function(e){
		e.preventDefault();
		if ( showHelp == false ) {
			$(help_1).removeClass("hide");
			$(help_2).removeClass("hide");
			$(help_3).removeClass("hide");
			showHelp = true;
		} else {
			$(help_1).addClass("hide");
			$(help_2).addClass("hide");
			$(help_3).addClass("hide");
			showHelp = false;
		}
		$(help).toggleClass("button_active");
	});

} );
