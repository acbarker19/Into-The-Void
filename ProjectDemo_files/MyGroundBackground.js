/* When an object of this type is added to the Animator class,
the 'draw' and 'move' functions will be automatically called.

This means that the object can move itself if code is added to
the 'move' function to change the values of 'this.over' and 
'this.over'.

The '_age' variable may be used to control when the object will move.

*/

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
//start class
function MyGroundBackground(name, age, theOver, theDown)
{
	//save the original values
	//so the 'restart' function can use them
	var _originalAge = age;
	var _originalOver = theOver;
	var _originalDown = theDown;

	var _name = name; 
	var _age = age;
	
	this.over = theOver;  //public data
	this.down = theDown;  //public data
	this.canDrag = false;  //public data
	
	var _size = 50;
	
	
	//set these four variables to change the click area
	var _clickAreaWidth = _size; 
	var _clickAreaHeight = _size;
	var _clickAreaOverOffset = 0; 
	var _clickAreaDownOffset = 0;
	
	/*
	//make myClickArea small and in the middle of the object
	_clickAreaWidth = 20; 
	_clickAreaHeight = 20; 
	_clickAreaOverOffset = (_size / 2) - (_clickAreaWidth / 2); 
	_clickAreaDownOffset = (_size / 2) - (_clickAreaHeight / 2); 
	*/
	 
	 /*
	//make myClickArea large and centered on the middle of the object
	_clickAreaWidth = _size * 2; 
	_clickAreaHeight = _size * 2; 
	_clickAreaOverOffset = - _size/2;
	_clickAreaDownOffset = - _size/2;
	*/

	var myClickArea = myClickArea = new MyClickArea(this.over + _clickAreaOverOffset, 
									this.down + _clickAreaDownOffset, 
									_clickAreaWidth, _clickAreaHeight);
	
	
	
	this.toString = function toString()
	{
		return _name+"  "+this.over+"  "+this.down;
	}
	
	this.restart = function restart()
		{
			_age = _originalAge;
			
			this.canDrag = false;
		}
		
			
	this.getName = function getName()
		{
			return _name;
		}
	
	
	//we return true only if 'point' is inside 'myClickArea'
	this.hitTest = function hitTest(point)
	{
		return myClickArea.hitTest(point);
	}
	
	
	
		
	this.draw = function draw(context)
		{
		
			context.fillStyle = "rgb(200, 200, 255)";
		    
		    //now draw a filled rectangle
		    context.fillRect(this.over,this.down,600,600);
		    
			context.fillStyle = "rgb(51,204,255)";
			context.fillRect(0, 0, 1000, 1000);
	
			context.fillStyle = "#090";
			context.fillRect(0, 200, 1000, 1000);
			
			context.fillStyle = "#a6a6a6";
			context.fillRect(190, 200, 120, 50);
			
			context.fillStyle = "yellow";
			context.beginPath();
			context.arc(500, 0, 40, 0, 2 * Math.PI, false);
			context.fill();
	
		  
		
		}
	
	this.move = function move()
		{
			_age++;
		
		}
		
}//end class
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////	
