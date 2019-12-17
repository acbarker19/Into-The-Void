function Bedroom(){
	
	this.restart = function restart(){
		
	}
	
	this.draw = function draw(){
		drawFutureRoom(_g_context);
		drawCryoBed(_g_context, 325, 175);
		
		setTextStyle(_g_context, "darkBG");
		_g_context.fillText("You decide to go to sleep in your cryobed.", 5, 20);
		
		//setTextStyle(_g_context, "monitorText");
		//_g_context.fillText("Test,", 170, 200);
	}
	
	this.move = function move(){
		
	}
}