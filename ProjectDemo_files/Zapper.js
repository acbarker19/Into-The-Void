/////////////////////////////////////////////////////////////////////
//start class
function Zapper(name, age, over, down)
{
	//save the original values
	//so the 'restart' function can use them
	var _originalAge = age;
	var _originalOver = over;
	var _originalDown = down;

	var _name = name; 
	var _age = age;
	
	this.over = over;  //public data
	this.down = down;  //public data
	this.canDrag = true;  //public data
	
	
	var _pixelSpeed = 3; //number of pixels to move each time thru the animation loop
	
	
	this.restart = function restart()
		{
			_age = _originalAge;
			over = _originalOver;
			down = _originalDown;
			
		}
		
	this.getName = function getName()
		{
			return _name;
		}
		
	this.hitTest = function hitTest(point)
	{
		return false;
	}
	
		//          87 W
		//65 A      83 S        68 D
		//          
	this.moveUsingKeyCode = function moveUsingKeyCode(theCode)
	{
		if (theCode === 87)
		{
			//alert("move up");
			this.down -= 10;
		}else if (theCode === 65)
		{
			//alert("move left");
			this.over -= 10;
		}else if (theCode === 83)
		{
			//alert("move down");
			this.down += 10;
		}else if (theCode === 68)
		{
			//alert("move right");
			this.over += 10;
		}else
		{
			alert("unknown key code "+theCode);
		}
	}
	
	//private function
	function drawTriangle(context) 
	{

    	context.beginPath();
    	context.moveTo(over + _hullWidth, down+30);
    	context.lineTo(over + _hullWidth + 20, down+30);
    	context.lineTo(over + _hullWidth, down +_hullHeight+30);
    	context.fill();
  
	}
	
		
	this.draw = function draw(context)
		{
			
			//the drawZapper function is in MyDrawingLibrary.js
			drawZapper(_g_context, this.over, this.down);
			
			
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
					context.fillRect (this.over-10, this.down+10, 20, 20);
			
		    	}else
		    	{
		    		context.fillStyle = "rgb(0, 220, 0)";
					context.fillRect (this.over-10, this.down+10, 20, 20);
			
		    	}
		  
		}
	
	this.move = function move()
	{
			_age++;
		
	}//end function move()
	
}//end class
/////////////////////////////////////////////////////////////////////
