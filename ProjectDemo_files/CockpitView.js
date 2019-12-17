function CockpitView(){
	
	this.restart = function restart(){
		
	}
	
	this.draw = function draw(){
		drawSpaceBG(_g_context);
		
		drawEarth(_g_context, -25, 150, 200);
		
		drawCockpit(_g_context);
		
		drawNote(_g_context, 415, 0);
		setTextStyle(_g_context, "smallBlack");
		_g_context.fillText("55,", 445, 30);
		_g_context.fillText("225,", 440, 45);
		_g_context.fillText("401", 440, 60);
		
		drawHulaGirl(_g_context, 415, 215);
		
		drawScreen(_g_context, 160, 175);
		//setTextStyle(_g_context, "monitorText");
		//_g_context.fillText("Test,", 170, 200);
	}
	
	this.move = function move(){
		
	}
}