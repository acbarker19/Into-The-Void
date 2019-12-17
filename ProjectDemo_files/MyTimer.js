/////////////////////////////////////////////////////////////////////
//start MyTimer class
function MyTimer(name, age, over, down)
{

	var _name = name; 
	var _age = age;
	var _over = over;
	var _down = down;
	
	var _pause = "true";
	
	this.restart = function restart()
		{
			_age = 0;
			_pause = "false";
		}
		
	this.reset = function reset()
		{
			_age = 0;
			_pause = "true";
		}
		
	this.setPause = function setPause(theValue)
		{
			_pause = theValue;
		}
		
		
	this.clockTogglePause = function clockTogglePause()
		{
			if ( _pause == "false" )
				_pause = "true";
			else
				_pause = "false";
		}
		
		
	this.draw = function draw(context)
		{
			
		    //setTextStyle is a function in MyDrawingLibrary.js
		    setTextStyle(context, "giantWithShadow");
	
		    //var message = _name+" age is "+_age;
		    var numSeconds = Math.round(_age / 20);
		    
		    var message = numSeconds;
		    
		    if (numSeconds < 10)
		    	message = "0"+numSeconds;
		    	
			context.fillText(message, _over, _down);
			
			//setTextStyle is a function in MyDrawingLibrary.js
		    //setTextStyle(context, "normalPlain");
		    //context.fillText("by James Reuben", _over + 200, _down + 60);
	
			//drawTugBoat is a function in MyDrawingLibrary.js
			//drawTugBoat(context, _over + 170, _down + 120);
			
			//setTextStyle is a function in MyDrawingLibrary.js
		    setTextStyle(context, "smallGrey");
		    message = _name+" age is "+_age;
		    context.fillText(message, 370, 290);
		}
	
	this.move = function move()
		{
			if ( _pause == "false" )
			{
				_age++;
			}
			
			/*
			if (_age < 80)  //only move while _age is small
			{
				_over += 5;
			}
			*/
        	
		}
}//end MyTimer class
/////////////////////////////////////////////////////////////////////
