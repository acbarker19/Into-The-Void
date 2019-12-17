/////////////////////////////////////////////////////////////////////
//start class
function MySplashPage(name, age, over, down)
{

	//save the original values for restart
	var _originalName = name;   //private data
	var _originalAge = age;     //private data
	var _originalOver = over;   //private data
	var _originalDown = down;     //private data
	
	var _name = name;   //private data
	var _age = age;     //private data
	
	this.over = over;  //public data
	this.down = down;  //public data
	this.canDrag = false;  //public data
	
	
	
	
	this.restart = function restart()
	{
		_name = _originalName;
		_age = _originalAge
		this.over = _originalOver;
		this.down = _originalDown;	
	}
			
	this.getName = function getName()
		{
			return _name;
		}
		
	this.hitTest = function hitTest(point)
	{
		return false;  //this object cannot be hit with the mouse
	
	}
		
		
	this.draw = function draw(context)
		{
			clearCanvas(_g_context, "rgb(0,0,0)");

			drawSpaceBG(_g_context);
			
			setTextStyle(_g_context, "bigWithShadow");
			_g_context.fillText("Into the Void", 50, 100);
				
			setTextStyle(_g_context, "darkBG");
			_g_context.fillText("Commander Tom's most daring mission yet!", 55 , 140);
				
			//the drawTugBoat function is in MyDrawingLibrary.js -- TO BE REMOVED AND REPLACED WITH SHIP
			//drawTugBoat(_g_context, 100, 220);
			
			drawMars(_g_context, 380, 180, 150);
			
			drawTempShipRight(_g_context, 175, 180);
		}
	
	this.move = function move()
		{
			_age++;
			
			if (_age < 80)  //only move while _age is small
			{
				this.over += 5;
			}
        	
		}
	
}//end class
/////////////////////////////////////////////////////////////////////
