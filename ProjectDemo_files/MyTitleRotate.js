/////////////////////////////////////////////////////////////////////
//start class
function MyTitleRotate(name, age, over, down)
{

	var _name = name; 
	var _age = age;
	
	var _over = over;
	var _down = down;
	this.canDrag = false;  //public data
	
	var _currentAngle = 0;   //private data
	
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
		    setTextStyle(context, "smallGrey");
	
		    //var message = _name+" age is "+_age;
		    var message = _name+" (MyTitleRotate)" ;
			context.fillText(message, _over, _down);
			
			//setTextStyle is a function in MyDrawingLibrary.js
		    //setTextStyle(context, "normalPlain");
		    //context.fillText("by James Reuben", _over + 200, _down + 60);
	
			_g_Animator.drawRotated(_currentAngle, _over, _down, this.drawAtAngle);
		}
		
	this.drawAtAngle = function drawAtAngle() {
    
    	//NOTE: Since we are using '_g_Animator.drawRotated', the rotation point of the
    	//        drawing routine is at 0, -150.
    	
	
		
		//make a large box of the appropriate color 
		_g_context.fillStyle = '#eef';
		//gContext.fillRect (this.over, this.down, width, height);
		_g_context.fillRect (50 , -150, 20, 150);
    
    }
    
	
	this.move = function move()
		{
			_age++;
			
			_currentAngle += 5;
			
        	
		}
}//end class
/////////////////////////////////////////////////////////////////////
