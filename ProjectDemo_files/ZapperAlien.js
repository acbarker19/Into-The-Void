/////////////////////////////////////////////////////////////////////
//start class
function ZapperAlien(name, age, over, down)
{
	//save the original values
	//so the 'restart' function can use them
	var _originalAge = age;
	var _originalOver = over;
	var _originalDown = down;

	var _name = name; 
	var _age = age;
	
	this.over = over; //public data
	this.down = down; //public data
	this.canDrag = true;  //public data
	
	var _leftRightDirection = "left";
	var _upDownDirection = "down";
	
	var _isVisible = true;
	
	var _pixelSpeed = 7; //number of pixels to move each time thru the animation loop
	
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
	
	
	this.restart = function restart()
		{
			_age = _originalAge;
			this.over = _originalOver;
			this.down = _originalDown;
			_isVisible = false;
			
			_leftRightDirection = "left";
			_upDownDirection = "down";
		}
		
	
	this.getName = function getName()
		{
			return _name;
		}
		
	this.setVisible = function setVisible(value)
		{
			_isVisible = value;
			//alert("ZapperAlien.setVisible("+value+");");
		}
		
	this.hitTest = function hitTest(point)
	{
		if (myClickArea.hitTest(point))
			{
				
				return true;  // //if this object was hit, then return true
			}
			
	
		
		return false;  //if the object was not visible and hit then return false
	}
	
	
		
	this.draw = function draw(context)
        {
            if (_isVisible)
            {

                    context.fillStyle = "rgb(220, 120, 0)";
                    context.fillRect (this.over, this.down, _size, _size);

                    //myClickArea.draw(context);  //for debugging
            }
        }
	
	this.move = function move()
	{
			_age++;
			
			if (_isVisible)
			{

                            if (_age % 40 == 0)
                            {
                                    //change direction every 40 clicks (about 2 seconds)


                                    if (_leftRightDirection == "left")
                                    {
                                            _leftRightDirection = "right";
                                    }else
                                    {
                                            _leftRightDirection = "left";
                                    }

                                    //so _leftRightDirection should be
                                    //either "left" or "right"


                                    //alert("_leftRightDirection is now "+_leftRightDirection);
                            }


                            if (this.down > 140)
                            {
                                    _upDownDirection = "up";

                            }
                            if (this.down < 20)
                            {
                                    _upDownDirection = "down";

                            }

                            if (_upDownDirection == "up")
                            {
                                    this.down -=  1;
                            }else
                            {
                                    this.down +=  1;
                            }

                            if (_leftRightDirection == "left")
                            {
                                    this.over -=  _pixelSpeed;
                            }else
                            {
                                    this.over +=  _pixelSpeed;
                            }

		
			
			} //end if (_isVisible)
			
			myClickArea.setArea(this.over-2, this.down-2, _size  +4, _size+4)
			
		
        	
	}//end function move()
	
}//end class
/////////////////////////////////////////////////////////////////////
