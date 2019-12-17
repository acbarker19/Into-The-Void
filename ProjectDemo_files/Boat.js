/////////////////////////////////////////////////////////////////////
//start class
function Boat(name, age, over, down)
{
	//save the original values
	//so the 'restart' function can use them
	var _originalAge = age;
	var _originalOver = over;
	var _originalDown = down;

	var _name = name; 
	var _age = age;
	
	var _over = over;
	var _down = down;
	this.canDrag = true;  //public data
	
	var _hullWidth = 70;
	var _hullHeight = 30;
	
	
	var _pixelSpeed = 3; //number of pixels to move each time thru the animation loop
	
	
	this.restart = function restart()
		{
			_age = _originalAge;
			_over = _originalOver;
			_down = _originalDown;
			
		}
		
	this.getName = function getName()
		{
			return _name;
		}
		
	this.hitTest = function hitTest(point)
	{
		return false;
	}
	
	//private function
	function drawTriangle(context) 
	{

    	context.beginPath();
    	context.moveTo(_over + _hullWidth, _down+30);
    	context.lineTo(_over + _hullWidth + 20, _down+30);
    	context.lineTo(_over + _hullWidth, _down +_hullHeight+30);
    	context.fill();
  
	}
	
		
	this.draw = function draw(context)
		{
			
			//the drawTugBoat function is in MyDrawingLibrary.js
			drawTugBoat(_g_context, _over, _down);
			
			
			//set twoValueVariable to either 0 or 1
			//(since age is updated 20 times every second
			//    if we divide by 10, then twoValueVariable changes
			//    once every half second)
			// (divide by 20 would be once every second)
			// (divide by 200 would be once every 10 seconds)
			var twoValueVariable = Math.round(_age / 10) % 2;
			
			//just alternate between drawing red and green blocks
			
			//draw the flag
		    if (twoValueVariable == 0)
		    	{
		    		context.fillStyle = "rgb(220, 0, 0)";
					context.fillRect (_over, _down, 20, 20);
			
		    	}else
		    	{
		    		context.fillStyle = "rgb(0, 220, 0)";
					context.fillRect (_over, _down, 20, 20);
			
		    	}
		  
		}
	
	this.move = function move()
	{
			_age++;
			
		//only move if _age is less than 10 seconds
		if ( _age < 20 * 10 ) // there are 20 frames per second
		{
			
			_over += _pixelSpeed;
			
			//if we move off the canvas to the right
			//then reset _over to the left
			if (_over > 500)
				_over = -120;
			//_down++;
			
			//temp will change every 5 tics
			//temp will have a value 0 - 7
			var _temp = Math.round(_age / 10) % 8;
			
			
			if (_temp == 0)
			{
				_down++;  //go down
			}else if (_temp == 1)
			{
				_down += 2;  //go down fast 
			}else if (_temp == 2)
			{
				_down++;  //go down
			}else if (_temp == 3)
			{
				//do nothing
			}else if (_temp == 4)
			{
				_down--;  //go up
			}else if (_temp == 5)
			{
				_down -= 2;  //go up fast 
			}else if (_temp == 6)
			{
				_down--;  //go up
			}else if (_temp == 7)
			{
				//do nothing
			}
		}//end  if ( _age < 20 * 10 )
        	
	}//end function move()
	
}//end class
/////////////////////////////////////////////////////////////////////
