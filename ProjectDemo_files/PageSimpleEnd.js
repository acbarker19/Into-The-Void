/////////////////////////////////////////////////////////////////////
//start class

/*params used 

pageName (used for knowing which one of many pages should be used)
animationList (list of objects to be displayed) 
     (could a combination of graphics, text, or animated objects)
optionList (each Option has displayName, displayText, and nextPageName)

*/
function PageSimpleEnd(pageName, animationList, optionList)
{

	var _pageName = pageName; 
	var _animationList = animationList;
	var _optionList = optionList;
	
	this.userSelectedObject = null;  //for user dragging with mouse

	var _numItemsDropped = 0;
	
	var _title = new MyTitle("Page: "+_pageName, 0, 70, 80);
	
	
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
	
	this.restart = function restart()
		{
			//alert("PageCleanRoom.restart");
			
			if (_animationList != null)
			{
				var i;
				for (i=0;i<_animationList.length;i++)
				{
					animatedObject = _animationList[i];
				
					//alert("animatedObject.getName()  "+animatedObject.getName());
				
					animatedObject.restart();
				}
   			}
   			
   			this.userSelectedObject = null; 
   			_numItemsDropped = 0;
   			
   			
   			document.getElementById("option0button").style.display = "none";
			document.getElementById("option1button").style.display = "none";
		
		}
		
	this.getName = function getName()
		{
			return _pageName;
		}
		
		
	this.doMouseDown = function doMouseDown(point)
	{
		//alert("PageBasic.doMouseDown "+_pageName+"   "+point.x +", " +point.y);
		//alert("_animationList.length "+_animationList.length);
		
		var info = "_animationList.length "+_animationList.length;
		document.getElementById("extraInfo5").innerHTML =  info;	
				
		
		var i;
		for (i=0;i< _animationList.length; i++)
		{
			if (_animationList[i].hitTest(point))
			{
				if (_animationList[i].canDrag)
				{
					//alert("on page "+_pageName+" mouse hit '"+_animationList[i].getName()+"'");
					
					this.userSelectedObject = _animationList[i];
					this.userSelectedObject.setCenterLocationTo(point);
				}
			}
		}
		
	}
	
	this.doMouseUp = function doMouseUp(point)
	{
		if (this.userSelectedObject != null)
		{
			
			var lastObject = _animationList[animationList.length - 1];
			var nameOfLastObject = lastObject.getName();
			alert("nameOfObject2 "+nameOfObject2);
			
			
			
			
		}
		
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
			//no movement
			
        	
		}
}//end class
/////////////////////////////////////////////////////////////////////
