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
function ShipRight(name, age, theOver, theDown)
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
	
	var _flamesOn;
	var _currentDrawing;
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
			
			_flamesOn = false;
			_currentDrawing = 0;
			
			var point = {
				x:  _originalOver,
		    	y:  _originalDown
			};
			
			this.setCenterLocationTo(point);
		}
		
			
	this.getName = function getName()
		{
			return _name;
		}
	
	this.launch = function launch(){
		_isLaunching = true;
		move();
	}
	
	//we return true only if 'point' is inside 'myClickArea'
	this.hitTest = function hitTest(point)
	{
		return myClickArea.hitTest(point);
	}
	
	//center the object using this.over, this.down, and myClickArea
	this.setCenterLocationTo = function setCenterLocationTo(point)
	{
		this.over = point.x - _size / 2;
		this.down = point.y - _size / 2;
		
		myClickArea = new MyClickArea(this.over, 
									this.down, 
									100, 100);
		
	}
	
	
		
	this.draw = function draw(context)
		{
		
			//context.fillStyle = "rgb(255, 200, 255)";
		    
		    //now draw a filled rectangle
		    //context.fillRect(this.over,this.down,_size,_size);
		    
			
			//alert("Basket.draw() --- this.toString()   "+this.toString());
			
			myClickArea.draw(context);  //for debugging
			
			drawTempShipRight(context, this.over, this.down);
		
		}
	
	this.move = function move()
		{
			_age++;
			
			if(name == "flying" && _age < 200){
				this.over += 2;
			}

			if(name == "slingshot"){
				if(_age < 80){
					this.over += 2;
				}
				if(_age >= 80 && _age < 140){
					this.over += 2;
					this.down -= 2;
				}
				if(_age >= 140 && _age < 200){
					this.over -= 2;
					this.down -= 2;
				}
				if(_age >= 200){
					this.over -=2;
				}
			}
		
		}
		
}//end class
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////	
