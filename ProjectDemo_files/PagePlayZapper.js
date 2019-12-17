/////////////////////////////////////////////////////////////////////
//start class

/*params used 

pageName (used for knowing which one of many pages should be used)
animationList (list of objects to be displayed) 
     (could a combination of graphics, text, or animated objects)
optionList (each Option has displayName, displayText, and nextPageName)

*/
function PagePlayZapper(pageName, animationList, optionList)
{
//_numberOfAliensZapped displays the number of aliens hit with a missle
//_theZapper can be moved by the user with keys A, S, D, and W
//           and will fire missles when the user pushes the space bar
//_alien1 moves around on the page just waiting to be zapped
//_missle1 will add 1 to _numberOfHits and will restart _alien1
//         if _missle1 hits _alien1  (   see ZapperMissle.move()   )

	var _pageName = pageName; 
	var _animationList = animationList;
	var _optionList = optionList;
	
	this.userSelectedObject = null;  //for user dragging with mouse

	var offsetForNumbers = 200;
	
	
	var _numberOfAliensZapped = new MyNumber("numCorrect",0,440,44);
	_numberOfAliensZapped.setValue("0");
	
	
	_animationList.push(_numberOfAliensZapped);  //so that it will be displayed
	
	
	var _theZapper = new Zapper("_theZapper",0,220,224);
	_animationList.push(_theZapper);  //so that it will be displayed
	
	
	var _alien1 = new ZapperAlien("_alien1",1,300,-40); 
	_animationList.push(_alien1);   //so that it can be displayed in the future
	
	
	//   !!!
	//we send references to _alien1 and _numberOfAliensZapped to _missle1
	//so that _missle1 can add 1 to _numberOfHits and can restart _alien1
	//         if _missle1 hits _alien1  (   see ZapperMissle.move()   )
	
	var _missle1 = new ZapperMissle("_missle1",_alien1, _numberOfAliensZapped, 0,-10,-10);  //currently off the canvas, so that it will NOT be displayed
	_animationList.push(_missle1); //so that it will be displayed
	
	var _zapperButton = new MyStartButton("button",0,400,260);
	_animationList.push(_zapperButton); //so that it will be displayed
	
	
	
	this.toString = function toString()
		{
			var answer = "Page:"+_pageName+" -- ";
			var i;
			for (i=0;i< _optionList.length; i++)
			{
				answer += _optionList[i].toString();
			}
			return answer;
		}
		
	/**
 	* Returns a random integer between min (inclusive) and max (inclusive)
 	        (from Mozilla Developer Network page)
 	*/
	function getRandomInt(min, max) {
    	return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	
	
	
	this.restart = function restart()
		{
			if (_animationList != null)
			{
				var i;
   				for (i=0;i<_animationList.length;i++)
   				{
   					animatedObject = _animationList[i];
   				
   					//alert("animatedObject.getName()  "+animatedObject.getName());
   				
   					animatedObject.restart();
   				}
   				
   				///selectTwoNewRandomNumbers();
   				_numberOfAliensZapped.setValue("0");
   				//_alien1.setVisible(true);
   				
   				//alert("restart");
   			}
   			
   			
   			document.getElementById("option0button").style.display = "none";
			document.getElementById("option1button").style.display = "none";
		}
		
	
		
	this.doKeyDown = function doKeyDown(e)
	{
		var oneCharString = String.fromCharCode(e.keyCode);
		//alert("pageMathProblems.doKeyDown "+e.keyCode+"  "+theString);
		
		var info = "e.keyCode "+e.keyCode;
		document.getElementById("extraInfo4").innerHTML =  info;
		
		//          87 W
		//65 A      83 S        68 D
		//          88 X
		//
		//         32 (space bar)
		//
		if (e.keyCode === 87 
			|| e.keyCode === 65 || e.keyCode === 83 || e.keyCode === 68) 
		{
			_theZapper.moveUsingKeyCode(e.keyCode);
		}
		if (e.keyCode === 32)  
		{
			//alert("shoot missle  "+_theZapper.over+"  "+_theZapper.down);
			
			_missle1.restart();
			
			//make sure the missle starts at the barrel 
			//of _theZapper 
			_missle1.over = _theZapper.over;
			_missle1.down = _theZapper.down-30;
		}
		
		
	}
		
	this.getName = function getName()
		{
			return _pageName;
		}
		
		
	this.doMouseDown = function doMouseDown(point)
	{
		//alert("doMouseDown");
		
		//alert("PageBasic.doMouseDown "+_pageName+"   "+point.x +", " +point.y);
		//alert("_animationList.length "+_animationList.length);
		
		var info = "_animationList.length "+_animationList.length;
		document.getElementById("extraInfo5").innerHTML =  info;	
				
		
		var i;
		for (i=0;i< _animationList.length; i++)
		{
			if (_animationList[i].hitTest(point))
			{
				if (_animationList[i].canDrag == true)
				{
					//alert("on page "+_pageName+" mouse hit '"+_animationList[i].getName()+"'");
					this.userSelectedObject = _animationList[i];
					this.userSelectedObject.setCenterLocationTo(point);
				}
			}
			
			if (_animationList[i].getName() === "button")
			{
				_animationList[i].buttonDownColor();
				
			}
		}
		
		//alert("PagePlayZapper.doMouseDown now");
		
	}
	
	this.doMouseUp = function doMouseUp(point)
	{
		var i;
		for (i=0;i< _animationList.length; i++)
		{
			
			if (_animationList[i].getName() === "button")
			{
				_animationList[i].buttonUpColor();
				//alert("button pushed");
				_alien1.restart();
				_alien1.setVisible(true);
				
				_numberOfAliensZapped.setValue("0");
			}
		}
		
		//this.userSelectedObject.buttonUpColor();
		
		//alert("PageBasic.doMouseUp "+_pageName+"   "+point.x +", " +point.y);
		this.userSelectedObject = null;
		
		var displayInfo = "mouseDrag _______";
		document.getElementById("mouseDragInfo").innerHTML =  displayInfo;	
		
		
	}
	
	this.doMouseMove = function doMouseMove(point)
	{
		//alert("PageBasic.doMouseDown "+_pageName+"   "+point.x +", " +point.y);
		if (this.userSelectedObject != null)
		{
			this.userSelectedObject.setCenterLocationTo(point);
			
			var displayInfo = "mouseDrag "+this.userSelectedObject.getName();
			document.getElementById("mouseDragInfo").innerHTML =  displayInfo;	
		
		}
	}

	
	this.setAnimation = function setAnimation()
	{	
		//this will make an Animator with no objects
		//(but the old one will still be in memory)
		//_g_Animator = new Animator("Animator One");
		
		
		//this will make an Animator with no objects
		//(and there will NOT be an old one will still be in memory)
		_g_Animator.removeAllObjects();
		
		//use one of the next two lines for debugging
		//_g_Animator.animateAddObject(new MyMovingTitle("Hello", 0, -50, 180));
   		//_g_Animator.animateAddObject(new MyMovingTitle(_pageName, 0, -50, 280));
   		//
   		
   		/*
   		if (_animationList == null)
   			alert("in PageBasic.setAnimation found (_animationList == null)");
   		else
   			alert("in PageBasic.setAnimation found _animationList.length "+ _animationList.length);
   		*/	
   			
   		if (_animationList != null)
   		{
   			if (_animationList.length == 0)
   			{
   				alert("in PageBasic.setAnimation found _animationList.length "+ _animationList.length+". _animationList should have at least one elements. Check your MyStory class for a page named '"+_pageName+"'.");
   			
   			}
   			
   			
   			//now add all of the items in _animationList
   			//to    _g_Animator
   			var i;
   			for (i=0;i<_animationList.length;i++)
   			{
   				animatedObject = _animationList[i];
   				
   				//alert("animatedObject.getName()  "+animatedObject.getName());
   				
   				animatedObject.restart();
   				_g_Animator.animateAddObject( animatedObject );
   		
   			}
   		
   		}
   
   	}
	
	this.setOptionsInHtml = function setOptionsInHtml()
	{
		var theOption = optionList[0];
		document.getElementById("option0button").innerHTML =  theOption.buttonLabel;	
		document.getElementById("option0text").innerHTML =  theOption.displayText;	
		document.getElementById("option0nextPage").innerHTML =  theOption.nextPageName;	
			
		theOption = optionList[1];
		document.getElementById("option1button").innerHTML =  theOption.buttonLabel;	
		document.getElementById("option1text").innerHTML =  theOption.displayText;	
		document.getElementById("option1nextPage").innerHTML =  theOption.nextPageName;	
				
	
	}	
	
	
	this.setProgramInfoInHtml = function setProgramInfoInHtml()
	{
		document.getElementById("currentPageName").innerHTML =  _pageName;	
		
		var theOption = optionList[0];
		document.getElementById("nextPage_0").innerHTML =  theOption.nextPageName;	
			
		theOption = optionList[1];
		document.getElementById("nextPage_1").innerHTML =  theOption.nextPageName;	
	}
		
	/*	
	//NOTE:  drawing pages is done through _animationList
	this.draw = function draw(context)
	{
		alert("PageBasic.draw called");
			
	}
	*/	
	
	this.move = function move()
		{
			_age++;
			//no movement of the page as a whole
			
			
        	
		}
}//end class
/////////////////////////////////////////////////////////////////////
