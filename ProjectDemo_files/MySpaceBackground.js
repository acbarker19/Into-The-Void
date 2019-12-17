function MySpaceBackground(name){

	this.restart = function restart(){
		
	}
	
	this.draw = function draw(){
		drawSpaceBG(_g_context);
		
		if(name == "earth"){
			drawEarth(_g_context, 0, 150, 250);
		}
		if(name == "moon"){
			drawMoon(_g_context, 250, 75, 150);
		}
		if(name == "mars"){
			drawMars(_g_context, 300, 150, 250);
		}
		if(name == "mars2"){
			drawMars(_g_context, -250, 230, 1000);
		}
		if(name == "mars3"){
			drawMarsSurface(_g_context);
		}
		if(name == "asteroids"){
			drawAsteroids(_g_context, 300, 0);
		}
		if(name == "asteroids2"){
			drawAsteroids(_g_context, 150, 0);
		}
		if(name == "asteroids3"){
			drawAsteroids(_g_context, 0, 0);
		}
		
		//drawTempShipRight(_g_context, 250, 125);
		
		//setTextStyle(_g_context, "darkBG");
		//_g_context.fillText("This page will have the ship taking off.", 5, 20);
		
		//setTextStyle(_g_context, "monitorText");
		//_g_context.fillText("Test,", 170, 200);
	}
	
	this.move = function move(){
		
	}
}