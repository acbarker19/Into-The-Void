// Jim Klayder -- February 2017 -- this class show how to make a plain 
//                                 drawing function with no movement in Animator11
/////////////////////////////////////////////////////////////////////
//   naming conventions
//   http://raider.mountunion.edu/csw/CSW223/Spring2017/labs/animateLab2/conventionForVariableNames.html

/////////////////////////////////////////////////////////////////////
//start class

//Adapted by Alec Barker
function GroundBackground(name, age, over, down)
{

	var _name = name; 
	var _age = age;
	var _over = over;
	var _down = down;
	
	this.restart = function restart()
		{
			//MyTitle does not need to restart
		}
		
	this.draw = function draw(context)
		{
			
		    //setTextStyle is a function in MyDrawingLibrary.js
/*		    setTextStyle(context, "smallWithShadow");
	
		    //var message = _name+" age is "+_age;
		    var message = _name;
			context.fillText(message, _over, _down);
			
			//setTextStyle is a function in MyDrawingLibrary.js
		    setTextStyle(context, "normalPlain");
		    context.fillText("by Alec Barker", _over + 80, _down + 30); */
	
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
			//MyTitle does not need to move
			
        	
		}
}//end class
/////////////////////////////////////////////////////////////////////
