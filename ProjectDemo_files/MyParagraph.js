/////////////////////////////////////////////////////////////////////
//start class
function MyParagraph(age, over, down, line1, line2, line3, line4)
{
	var _age = age;
	
	var _over = over;
	var _down = down;
	this.canDrag = false;  //public data
	
	var _line1 = line1;
	var _line2 = line2;
	var _line3 = line3;
	var _line4 = line4;
	
	this.isVisible = true;   //public data
	
	
	this.restart = function restart()
		{
			//no need to restart
		}
		
	this.getName = function getName()
		{
			return "MyParagraph";
		}
		
	this.hitTest = function hitTest(point)
	{
		return false;
	}
		
	this.draw = function draw(context)
	{
		if (this.isVisible)
		{
		    //setTextStyle is a function in MyDrawingLibrary.js
		    setTextStyle(context, "normalPlain");
	
		    //var message = _name+" age is "+_age;
		    context.fillText(_line1, _over, _down);
			
			var offset = 30;
			var tempDown = _down + offset;
			context.fillText(_line2, _over, tempDown);
			
			tempDown += offset;
			context.fillText(_line3, _over, tempDown);
			
			tempDown += offset;
			context.fillText(_line4, _over, tempDown);
		}
	}
	
	this.move = function move()
		{
			_age++;
			
        	
		}
}//end class
/////////////////////////////////////////////////////////////////////
