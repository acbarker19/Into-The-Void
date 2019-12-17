/////////////////////////////////////////////////////////////////////
//start class
function ZapperMissle(name, theFirstAlien, numberOfHits, age, over, down)
{
	var _name = name; 
	
	var alienList = [];
	alienList.push(theFirstAlien);
	
	var _numberOfHits = numberOfHits;
	
	//save the original values
	//so the 'restart' function can use them
	var _originalAge = age;
	var _originalOver = over;
	var _originalDown = down;

	
	var _age = age;
	
	this.over = over; //public data
	this.down = down; //public data
	this.canDrag = true;  //public data
	
	var _isVisible = true;
	
	//this._numberOfHits;  //public data -- should be set before using a ZapperMissle (see function move() below)
	
	
	var _pixelSpeed = 7; //number of pixels to move each time thru the animation loop
	
	
	
	
	
	this.restart = function restart()
		{
			_age = _originalAge;
			
			this.over = _originalOver;
			this.down = _originalDown;
			
			_isVisible = true;
			
		}
		
	
		
	this.getName = function getName()
		{
			return _name;
		}
		
	
	
		
	this.hitTest = function hitTest(point)
	{
		return false;
	}
	
	this.getPoint = function getPoint()
		{
			return {x:this.over, y:this.down};
		}
		
		
	this.draw = function draw(context)
		{
		
			if (_isVisible)
			{
			
				context.fillStyle = "rgb(0, 220, 0)";
				context.fillRect (this.over, this.down, 6, 10);
			}
		}
	
	this.move = function move()
	{
			_age++;
			
			if (_isVisible)
			{
				this.down -= _pixelSpeed;
			
				var theMisselPoint = this.getPoint();
				var index;
				var theAlien;
				for	(index = 0; index < alienList.length; index++) 
            	{
            		theAlien = alienList[index];
            		if (theAlien.hitTest(theMisselPoint))
            		{
            			//alert("hit alien !");
            			
            			theAlien.restart();
            			theAlien.setVisible(true);
            			
            			_numberOfHits.addValue(1);
            		
            			if (_numberOfHits.value > 2)
						{
			
							document.getElementById("option0button").style.display = "inline";
							document.getElementById("option1button").style.display = "inline";
		
				
						}
            			
            		
            			_isVisible = false; 
            			//this missle is no longer active 
            			//until "restart();" is called
            			
            		}//end if (theAlien.hitTest(theMisselPoint))
            	}//end for
            } //end if (_isVisible)
			

        	
	}//end function move()
	
}//end class
/////////////////////////////////////////////////////////////////////
