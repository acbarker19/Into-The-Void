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
function Ship(name, age, theOver, theDown)
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
	
	var _size = 100;
	
	var _isLaunching = false;
	
	
	//set these four variables to change the click area
	var _clickAreaWidth = _size; 
	var _clickAreaHeight = _size;
	var _clickAreaOverOffset = 0; 
	var _clickAreaDownOffset = 0;
	
	///*
	//make myClickArea slightly larger than the object
	//                 and in the middle of the object
	_clickAreaWidth = _size + 20; 
	_clickAreaHeight = _size + 20; 
	_clickAreaOverOffset = -10; 
	_clickAreaDownOffset = -10; 
	//*/
	
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

	this.toString = function toString()
	{
		return _name+"  "+this.over+"  "+this.down;
	}
	
	this.restart = function restart()
		{
			_age = _originalAge;
		}
		
	//center the object using this.over, this.down, and myClickArea
	
		
	this.draw = function draw(context)
		{
		
			//context.fillStyle = "rgb(255, 200, 255)";
		    
		    //now draw a filled rectangle
		    //context.fillRect(this.over,this.down,_size,_size);
		    
			
			//alert("Basket.draw() --- this.toString()   "+this.toString());
			
			myClickArea.draw(context);  //for debugging

			drawTempShip(context, this.over, this.down);
		
		}
	
	this.move = function move()
		{
			_age++;
			
			_down -=2;
		
		}
		
}//end class
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////	
