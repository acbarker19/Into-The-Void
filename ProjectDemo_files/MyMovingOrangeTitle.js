/////////////////////////////////////////////////////////////////////
//start class
function MyMovingOrangeTitle(name, age, over, down)
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
			
		    //setTextStyle is a function in MyDrawingLibrary.js
		    setTextStyle(context, "bigWithShadow");
	
		    //var message = _name+" age is "+_age;
		    var message = _name;
			context.fillText(message, this.over, this.down);
			
			//setTextStyle is a function in MyDrawingLibrary.js
		    setTextStyle(context, "normalPlain");
		    context.fillText("by JRK", this.over + 200, this.down + 60);
	
			//drawTugBoat is a function in MyDrawingLibrary.js
			//drawTugBoat(context, this.over + 170, this.down + 120);
			
			//you can use these lines for debugging
			//setTextStyle is a function in MyDrawingLibrary.js
		    setTextStyle(context, "smallGrey");
		    message = _name+" age is "+_age;
		    //context.fillText(message, 370, 290);
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
