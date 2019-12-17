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
function MyStartButton(name, age, theOver, theDown)
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
	
	
	var _normalColor = "rgb(100, 100, 200)";
	var _buttonDownColor = "rgb(0, 200, 0)";
	var _currentColor = _normalColor;
	
	var _size = 50;
	
	
	//set these four variables to change the click area
	var _clickAreaWidth = _size*2; 
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
			
			var point = {
				x:  _originalOver,
		    	y:  _originalDown
			};
			
			this.setCenterLocationTo(point);
			
			this.canDrag = false;
		}
		
	
		
	this.buttonDownColor = function buttonDownColor()
	{
		//alert("buttonDownColor   "+_currentColor);
		_currentColor = _buttonDownColor;
	}
	
	
	this.buttonUpColor = function buttonUpColor()
	{
		_currentColor = _normalColor;
	}

			
	this.getName = function getName()
		{
			return _name;
		}
	
	//private function
	function drawTriangle(context) 
	{

    	context.beginPath();
    	context.moveTo(this.over, this.down);
    	context.lineTo(this.over + _size , this.down);
    	context.lineTo(this.over, this.down + _size);
    	context.fill();
  
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
		
		myClickArea = new MyClickArea(this.over + _clickAreaOverOffset, 
									this.down + _clickAreaDownOffset, 
									_clickAreaWidth, _clickAreaHeight);
		
	}
	
	
		
	this.draw = function draw(context)
		{
		
			//context.fillStyle = "rgb(200, 200, 255)";
		    
		    //now draw a filled rectangle
		    //context.fillRect(this.over,this.down,_size,_size);
		    
	
		    //now draw a filled circle
		    var centerX = this.over + _size / 2;
      		var centerY = this.down + _size / 2;
      		var radius = _size / 2;

      		context.beginPath();
      		
      		
      		context.arc(centerX, centerY, radius, 0.5*Math.PI,  1.5*Math.PI, false);
      		context.arc(centerX + 50, centerY, radius, 1.5*Math.PI,  0.5*Math.PI, false);
      		
      		context.lineWidth=5;
      		var lineLength = _size+2;
      		
      		context.moveTo(this.over+24, this.down+_size);
    		context.lineTo(this.over+24+lineLength, this.down+_size);
			//context.drawLine(this.over+24, this.down+_size, this.over+40, this.down+_size); 
			//context.drawLine(this.over+24, this.down+_size, this.over+40, this.down+_size); 
			
      		/////////color changes
      		context.fillStyle = _currentColor;
      		////////////
      		
      		
      		context.fill();
      		context.lineWidth = 5;
      		context.strokeStyle = '#003300';
      		context.stroke();
      		
      		//context.fillRect(centerX,this.down,_size,_size);
      		
      		//context.lineWidth=10;
			//context.strokeRect(20,20,80,100); 
	
		   
			context.font="16px Arial";
			context.fillStyle = "rgb(255, 0, 0)";
		    var message = "click to start";
		    //var message = "ball draw test";   //_name;
			
			context.fillText(message, this.over+6, this.down+29);
			
			
			//alert("Ball.draw() --- this.toString()   "+this.toString());
			//alert(message);
			
			//myClickArea.draw(context);  //for debugging
			
		
		}
	
	this.move = function move()
		{
			_age++;
		
		}
		
}//end class
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////	
