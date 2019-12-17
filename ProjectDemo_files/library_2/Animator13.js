

function animateTest()
{
    alert("animateTest");
    //document.getElementById("scriptInfo").innerHTML = 
    //"using Animator4.js";

}




/////////////
////////////
/////////////
/////////////
////////////
/////////////
/////////////
////////////
/////////////
/////////////
////////////
/////////////
/////////////
////////////
/////////////
/////////////
////////////
/////////////
/////////////
////////////
/////////////
/////////////
////////////
/////////////
/////////////
////////////
/////////////
	
function Animator(name) //start Animator class
{

    var _canvas;
    var _context;
    
	
	//Private Members in JavaScript
    //  http://javascript.crockford.com/private.html
    // is found in a larger JavaScript discussion at:
    //   http://javascript.crockford.com/
    
     
    //  http://eclipsesource.com/blogs/2013/07/05/private-members-in-javascript/
   

	//we will use an 'underscore private convention'
	//     (use 'var' and underscore in the declaration of private data)
	
    	this.publicData = 123;   //accessible outside an object of this class
    	var _privateData = 456;  //NOT accessible outside an object of this class

    //example use within a class:
    
    //	alert("this.publicData    "+this.publicData);
    //	alert("_privateData    "+_privateData);
   
    //example use outside a class:
    
    //	alert("theObject.publicData    "+theObject.publicData);
    
    //(in the next line _g_Animator._privateData is undefined 
    //    because the data is private)
    //	alert("theObject._privateData    "+theObject._privateData);
   
    


    //users of this class will put Objects in this
    //_animateList to be animated by calling 
    //the animateAddObject function

    var _animateList = []; //private 


    var _name = name;  //private
    
    _canvas = document.getElementById("myCanvas");
    _context = _canvas.getContext("2d");
    
    this.userSelectedObject = null;  //for user dragging with mouse




    //NOTE: if you want to call a function in this
    //      init code, you must define the function
    //      BEFORE you call it



    //end of constructor code 

    this.test = function test()
    {
        alert("Animator.test() function call -----  _name: "+_name);
        //alert("Animator.test() here. publicData: "+publicData);
        //alert("Animator.test() here. privateData: "+privateData);
    }
    
    //this.test();

    //the following line of code does NOT work
    //because it is BEFORE the test2() definition
    //this.test2("hello # 1");  

    this.test2 = function test2(info)
    {
        alert("Animator.test2() here: "+info);
        //alert("Animator.test() here. publicData: "+publicData);
        //alert("Animator.test() here. privateData: "+privateData);
    }

    //the following line of code DOES work
    //because it is AFTER the test2() definition	
    //this.test2("hello # 2");
    
        
    
    this.setSelected = function setSelected(mouseX, mouseY)
    {
    	/*
    	go thru animateList IN REVERSE ORDER and find
    			the first object that contains mouseX, mouseY
    			(set that object to be selected)
    	*/
    	
    	///////////////
        
        
        this.userSelectedObject = null;  
       
       
        var done = false;
        
        for	(index = animateList.length - 1; 
        		index >= 0 && done == false; 
        		index--) 
            {
            	temp = animateList[index];
            	
            	var centerX = temp.over;
            	var centerY = temp.down;
            	
            	var upperLeftX = centerX - 50;
            	var upperLeftY = centerY - 50;
            	var lowerRightX = centerX + 50;
            	var lowerRightY = centerY + 50;

				if (temp.hit(mouseX, mouseY, upperLeftX, upperLeftY, lowerRightX, lowerRightY) )
				{
					
					this.userSelectedObject = temp;
					
					//now move this object to the end of the animateList
					//so that it will be displayed on top
					//of the other objects in animateList
					animateList.splice(index,1);
					animateList.push(this.userSelectedObject);
					
					//alert("HIT: userSelectedObject.name  "+this.userSelectedObject.name);
					done = true;
				}	
            }//end for index          
    }
 


	this.removeAllObjects = function removeAllObjects()
    {
    	//alert("_animateList.length   "+_animateList.length);
    	_animateList.splice(0, _animateList.length);
    	//_animateList = [];
      
    }

    this.animateAddObject = function animateAddObject(theObject)
    {
        //alert("Animator.animateAddObject with "+theObject.name);

        //_animateList.push(theObject);

        if (animateHasCorrectForm(theObject))
        {
                _animateList.push(theObject);
        }else
        {
                alert(theObject.name+" was not added to the animation loop.");
        }

    }

    //this function checks to make certain that theObject
    // hasName, hasDraw and hasMove
    //
    function animateHasCorrectForm(theObject)
    {
    /*
        hasName = (typeof theObject._name);

        if (hasName == 'undefined')
        {
                alert("There is an object in the _g_Animator that does not have a '_name'.");
                        return false;
        }
	*/
        var hasDraw = (typeof theObject.draw);

        if (hasDraw == 'undefined')
        {
                //alert(theObject._name + " does not have a 'draw' function.");
                alert("An object does not have a 'move' function...");
                return false;
        }

        var hasDraw = (typeof theObject.move);

        if (hasDraw == 'undefined')
        {
                //alert(theObject._name + " does not have a 'move' function...");
                alert("An object does not have a 'move' function...");
                return false;
        }
        
        var hasRestart = (typeof theObject.restart);
        
        if (hasRestart == 'undefined')
        {
                //alert(theObject._name + " does not have a 'restart' function...");
                alert("An object does not have a 'restart' function...");
                return false;
        }

        //all checks have been passed
        //so . . .
        return true;	
    }


	this.startAnimateLoop = function startAnimateLoop()
	{
      	//last parameter is the number of milliseconds to pause between
      	//calls to the first parameter
      	//for example:
      	////        var myVar = setInterval(_g_Animator.animateLoop3, 50);
      	////        would call _g_Animator.animateLoop3 once every 50 ms
      	////      ( which means 20 times every second)
      
      	var myVar = setInterval(_g_Animator.animateLoop3, 50);

	}


	this.restartAnimation = function restartAnimation() 
    {
        for (index = 0; index < _animateList.length; index++) 
        {
            temp = _animateList[index];

            temp.restart();
        }
    }


    this.move = function move() 
    {
        for (index = 0; index < _animateList.length; index++) 
        {
            temp = _animateList[index];
            //alert("temp._name "+temp._name);

            temp.move();
        }
    }

    this.draw = function draw() 
    {

        //alert("Animator.draw()");

            //clear the entire _g_canvas
            _context.fillStyle = "rgb(255,255,255)";  //white
            //_context.fillStyle = "rgb(240,240,240)";  //light gray
            //_context.fillStyle = "rgb(210,210,210)";  //gray
            //_context.fillStyle = "rgba(210,210,210, 0.3)";  //gray with blur
            _context.fillRect (0, 0, 1500, 1000);



            //finally we draw all of the objects in
            //the _animateList
            for	(index = 0; index < _animateList.length; index++) 
            {
            	temp = _animateList[index];

            	temp.draw(_context);
            }//end for index



    }//end function draw() 


    
//    the original idea for translate, rotate, draw, then restore
//    can be found at:
//https://stackoverflow.com/questions/17411991/html5-canvas-rotate-image
//    modifications made by Jim Klayder November 2017
//    added theX, theY center of rotation
//    theDrawingFunction is the drawing routine called (it must use '_g_context')

//    sample call when in a class that has 
//            private data member _currentRotationAngle
//            and public data members this.over, this.down, and this.drawAtAngle:

//    _g_Animator.drawRotated(_currentRotationAngle, this.over, this.down, this.drawAtAngle);

this.drawRotated = function drawRotated(degrees, theX, theY, theDrawingFunction){
	//alert("start Animator.drawRotated");
    //_context.clearRect(0,0,gCanvas.width,gCanvas.height);

    // save the unrotated context of the canvas so we can restore it later
    // the alternative is to untranslate & unrotate after drawing
    _context.save();

    // move to the center of the canvas
    //gContext.translate(gCanvas.width/2,gCanvas.height/2);
    
    //move to theX, theY
    _context.translate(theX, theY);

    // rotate the canvas to the specified degrees
    _context.rotate(degrees*Math.PI/180);

    // draw the image
    // since the context is rotated, the image will be rotated also
    //_context.drawImage(image,-image.width/2,-image.width/2);
    
    //_context.fillStyle = "#555";
	//_context.fillRect(0,0,40,20);
	
	theDrawingFunction();

    // we’re done with the rotating so restore the unrotated context
    _context.restore();
    
    //alert("end Animator.drawRotated");
}




    this.animateLoop3 = function animateLoop3()
    {
        _g_Animator.move();
        _g_Animator.draw();
    }

	
}

/////////////
////////////
/////////////
/////////////
////////////
/////////////
/////////////
////////////
/////////////
/////////////
////////////
/////////////
/////////////
////////////
/////////////
/////////////
////////////
/////////////
/////////////
////////////
/////////////
/////////////
////////////
/////////////
/////////////
////////////
/////////////
