/////////////////////////////////////////////////////////////////////
//start class
function MyNumber(name, age, over, down)
{

	var _name = name; 
	var _age = age;
	
	var _over = over;
	var _down = down;
	this.canDrag = false;  //public data
	
	
	this.value = "";  //public data
	
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
	
	this.setValue = function setValue(theString)
	{
		this.value = theString;
		
	}
	
	this.addDigit = function addDigit(oneCharString)
	{
		//only add oneCharString if it is a digit
		if (oneCharString >= "0" && oneCharString <= "9")
		{
			this.value += oneCharString;
		}
	}
	
	this.addValue = function addValue(theNumber)
	{
		var theIntValue = parseInt(this.value);
		
		theIntValue += theNumber;
		
		this.value = theIntValue;
		
	}
	
		
	this.draw = function draw(context)
		{
			
		    //setTextStyle is a function in MyDrawingLibrary.js
		    setTextStyle(context, "normalPlain");
	
		    //var message = _name+" age is "+_age;
		    var message = this.value;
		    
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
