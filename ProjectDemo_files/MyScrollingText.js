/*
theText -- the scrolling text to display
startAge -- the starting age (movement stop when _age reaches 1000
startOver -- number of pixels over
startDown -- number of pixels down
*/

/////////////////////////////////////////////////////////////////////
//start class
function MyScrollingText(theText, startAge, startOver, startDown)
{

	//save the original values for restart
	var _originalTheText = theText;   //private data
	var _originalAge = startAge;     //private data
	var _originalOver = startOver;   //private data
	var _originalDown = startDown;     //private data
	
	this.theText = theText;   //public data
	var _age = startAge;     //private data
	
	this.over = startOver;  //public data
	this.down = startDown;  //public data
	this.canDrag = false;  //public data
	
	
	this.restart = function restart()
	{
		this.theText = _originalTheText;
		_age = _originalAge;
		this.over = _originalOver;
		this.down = _originalDown;	
		
		//alert("MyScrollingText.restart  this.down "+ this.down);
	}
	
	this.getName = function getName()
		{
			return "MyScrollingText";
		}		
	
	this.hitTest = function hitTest(point)
	{
		return false;  //this object cannot be hit with the mouse
	
	}
		
		
	this.draw = function draw(context)
		{
			
		    //setTextStyle is a function in MyDrawingLibrary.js
		    setTextStyle(context, "normalPlain");
	
		    //var message = _name+" age is "+_age;
		    var message = this.theText;
			context.fillText(message, this.over, this.down);
			
			/*
			//you can use these lines for debugging
			//setTextStyle is a function in MyDrawingLibrary.js
		    setTextStyle(context, "smallGrey");
		    message = "MyScrollingText age is "+_age;
		    context.fillText(message, 27, 290);
		    */
		}
	
	this.move = function move()
		{
			_age++;
			
			if (_age < 1000)  //only move while _age is small
			{
				this.over -= 3;
			}
        	
		}
	
}//end class
/////////////////////////////////////////////////////////////////////
