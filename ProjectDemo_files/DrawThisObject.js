function DrawThisObject(name, over, down){

	this.restart = function restart(){
		
	}
	
	this.draw = function draw(){
		if(name == "astronautIceCream"){
			drawAstronautIceCream(_g_context, over, down);
		}
		if(name == "astronaut"){
			drawAstronaut(_g_context, over, down);
		}
		if(name == "pills"){
			drawPills(_g_context, over, down);
		}
		if(name == "shipLargeRight"){
			drawShipLargeRight(_g_context, over, down);
		}
		if(name == "flames"){
			drawFlames(_g_context, over, down);
		}
		if(name == "astronautGuitar"){
			drawAstronautGuitar(_g_context, over, down);
		}
		if(name == "meteorite"){
			drawMeteorite(_g_context, over, down);
		}
	}
	
	this.move = function move(){
		
	}
}