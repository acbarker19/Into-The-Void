/////////////////////////////////////////////////////////////////////
//start class
function MySingleLine(age, over, down, theLine)
{

	var _age = age;
	
	var _over = over;
	var _down = down;
	this.canDrag = true;  //public data
	
	var _theLine = theLine;
	
	this.restart = function restart()
		{
			//no need to restart
		}
		
			
	this.getName = function getName()
		{
			return "MySingleLine";
		}
	
		
	this.hitTest = function hitTest(point)
	{
		return false;
	}
	
	
		
	this.draw = function draw(context)
		{
			
		    //setTextStyle is a function in MyDrawingLibrary.js
		    setTextStyle(context, "normalPlain");
	
		    var message = _theLine;
			context.fillText(message, _over, _down);
			
		}
	
	this.move = function move()
		{
			_age++;
			
        	
		}
}//end class
/////////////////////////////////////////////////////////////////////
