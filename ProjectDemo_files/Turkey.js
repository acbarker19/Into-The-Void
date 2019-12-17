
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
//start Turkey class
function Turkey(name, age, over, down)
{
	//save the original values
	//so the 'restart' function can use them
	var _originalAge = age;
	var _originalOver = over;
	var _originalDown = down;

	var _name = name;
	var _age = age;
	
	var _over = over;
	var _down = down;     //private var only accessible in this class
	this.canDrag = false;  //public data
	
	this.test = 123;      //public var in this class
	anotherTest = 457;    //global public var accessible in any active object of any class
	
	
	//you can make your own path at:
	//http://raider.mountunion.edu/csw/CSW113/fall2015/assignments/animationFinalProject/PathCreator/pathCreator.html
	
	
	//for controlling Bird display and movement
	//this.xList = [ 51, 66, 81, 95, 110, 131, 163, 182, 207, 235, 259, 292, 323, 348, 372, 399, 439, 468, 493, 531, 557 ];
	//this.yList = [ 111, 98, 100, 112, 105, 99, 103, 110, 107, 111, 105, 103, 106, 105, 107, 115, 109, 117, 118, 110, 107 ]; 
    
    //this.xList = [ 38, 44, 50, 50, 58, 62, 68, 75, 76, 68, 68, 76, 82, 90, 94, 96, 88, 79, 69, 69, 62, 56, 57, 49, 43, 41, 34, 30, 27, 34 ];
	//this.yList = [ 77, 72, 69, 75, 78, 71, 66, 66, 71, 74, 78, 80, 75, 67, 70, 79, 82, 87, 90, 95, 96, 93, 88, 87, 90, 96, 96, 92, 85, 82 ]; 

	//this.xList = [ 11, 10, 10, 21, 25, 32, 41, 43, 35, 25, 18 ];
	//this.yList = [ 13, 21, 29, 29, 16, 8, 6, 15, 21, 20, 11 ]; 
	
	this.xList = [ 140, 114, 93, 77, 66, 66, 73, 87, 107, 130, 153, 181, 206, 224, 229, 229, 217, 205, 193, 176, 156, 147, 147, 147, 147, 147, 148, 151, 151, 152, 152, 153, 153, 184, 208, 213, 198, 178, 155, 126, 102, 85, 83, 101, 123, 144, 167, 178, 183, 167, 141, 118, 108, 103, 108, 111, 122, 126, 136, 139, 141 ];
	this.yList = [ 168, 162, 150, 135, 107, 85, 67, 53, 38, 31, 29, 32, 38, 53, 75, 93, 113, 127, 138, 146, 156, 152, 152, 152, 152, 143, 130, 113, 96, 83, 66, 52, 38, 38, 51, 81, 110, 129, 144, 143, 131, 117, 80, 55, 42, 35, 46, 55, 61, 63, 64, 64, 64, 66, 71, 81, 97, 112, 128, 144, 157 ]; 

	
	this.restart = function restart()
		{
			_age = _originalAge;
			_over = _originalOver;
			_down = _originalDown;
			
			//alert("restart Turkey with "+_age+"    "+_over+"    "+_down+"    ");
		}
		
	this.hitTest = function hitTest(point)
	{
		return false;
	}
		
	this.set_X_and_Y_lists = function set_X_and_Y_lists(theXList, theYList)
		{
			this.xList = theXList;
			this.yList = theYList;
		}
			
	
	this.draw = function draw(context)
		{
		
			var _message = _name + " age is " + _age;
			
			//setTextStyle is a function in MyDrawingLibrary.js
		    setTextStyle(context,"smallGrey");
			context.fillText(_message, 30, 260);
			context.fillText("Turkey will stop at 800", 30, 290);
			
			
		    //stop the animation at a certain value of _age
		    var stopValue = 800;
		    if (_age >= stopValue)
			{
				_age = stopValue;
				
				_twoValueVariable = 0;
				
			 }//end if (_age > stopValue)
			 
			 
		    var listIndex = Math.round(_age / 4) % (this.xList.length - 1);
		    
		    var theOver = _over + this.xList[listIndex];
		    var theDown = _down +this.yList[listIndex];
		    
		    //display the image
			img = document.getElementById("turkey1");
			context.drawImage(img, theOver, theDown,100,100);  //draw img at _g_turkeyOver, 50 with size 100 px x 100 px
		
		}
		
	this.move = function move()
		{
			_age++;
			
			
        	
		}
}//end Turkey class
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////	
