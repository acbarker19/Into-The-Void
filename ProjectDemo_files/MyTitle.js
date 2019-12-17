/////////////////////////////////////////////////////////////////////
//start class
function MyTitle(name, age, over, down)
{

	var _name = name; 
	var _age = age;
	
	var _over = over;
	var _down = down;
	this.canDrag = false;  //public data
	
	this.restart = function restart()
		{
			//no need to restart
		}
	
	this.getName = function getName()
		{
			return _name;
		}
			
	this.hitTest = function hitTest(point)
	{
		return false;
	}
		
	this.draw = function draw(context)
		{
			
		    //setTextStyle is a function in MyDrawingLibrary.js
		    setTextStyle(context, "bigWithShadow");
	
		    //var message = _name+" age is "+_age;
		    var message = _name;
			context.fillText(message, _over, _down);
			
			//setTextStyle is a function in MyDrawingLibrary.js
		    //setTextStyle(context, "normalPlain");
		    //context.fillText("by James Reuben", _over + 200, _down + 60);
	
			
		}
	
	this.move = function move()
		{
			_age++;
			
        	
		}
}//end class
/////////////////////////////////////////////////////////////////////
