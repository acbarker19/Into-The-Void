/////////////////////////////////////////////////////////////////////
//start class

/*params used 

pageName (used for knowing which one of many pages should be used)
animationList (list of objects to be displayed) 
     (could a combination of graphics, text, or animated objects)
optionList (each Option has displayName, displayText, and nextPageName)

*/
function PageMathProblems(pageName, animationList, optionList)
{

	var _pageName = pageName; 
	var _animationList = animationList;
	var _optionList = optionList;
	
	
	this.userSelectedObject = null;  //for user dragging with mouse

	var offsetForNumbers = 200;
	
	var _mathAddBox = new MathAddBox("addBox",0,offsetForNumbers,100);
	
	var _myNumber1 = new MyNumber("num1",0,offsetForNumbers,40);
	var _myNumber2 = new MyNumber("num2",0,offsetForNumbers,60);
	
	var _myAnswer = new MyNumber("answer",0,offsetForNumbers,120);
	
	var _numberOfCorrectAnswers = new MyNumber("numCorrect",0,270,240);
	
	_myNumber1.setValue("123");
	_myNumber2.setValue("234");
	_myAnswer.setValue("");
	_numberOfCorrectAnswers.setValue("0");
	
	_animationList.push(_mathAddBox);  //so that it will be displayed
	_animationList.push(_myNumber1);  //so that it will be displayed
	_animationList.push(_myNumber2);  //so that it will be displayed
	_animationList.push(_myAnswer);  //so that it will be displayed
	_animationList.push(_numberOfCorrectAnswers);  //so that it will be displayed
	
	var _blocker = new MyBlocker("blocker",0,offsetForNumbers-40,20,160,60);
	_animationList.push(_blocker);  //used to 'block' or hide the Math Problem
	//    until the 'click to start' button is clicked
	 
	
	var _startButton = new MyStartButton("button",0,400,260);
	_animationList.push(_startButton); //so that it will be displayed
	
	
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
	
	function selectTwoNewRandomNumbers()
	{
		var temp;
		
		temp = getRandomInt(100,499);
		temp = getRandomInt(100,104);
		
   		_myNumber1.setValue(temp);
   			
   		temp = getRandomInt(100,499);
   		temp = getRandomInt(100,104);
   		
   		_myNumber2.setValue(temp);
   				
   		_myAnswer.setValue("");
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
   				
   				selectTwoNewRandomNumbers();
   				_numberOfCorrectAnswers.setValue("0");
   				
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
		
		
		if (e.keyCode === 13)  //the return key has been pressed
		{
			//alert("bingo");
			//alert("'return' was pressed and e.keyCode is: "+e.keyCode);
			
			var correctAnswer = _myNumber1.value + _myNumber2.value;
			correctAnswer = " "+correctAnswer;  //we want to compare strings, so add " " to the beginning
			
			var userAnswer = " "+_myAnswer.value;  //we want to compare strings, so add " " to the beginning
			
			//alert("userAnswer:    "+userAnswer+"          correctAnswer:    "+correctAnswer);
			
			
			if (userAnswer === correctAnswer)
			{
				alert("correct");
				_numberOfCorrectAnswers.addValue(1);
			}else
			{
				alert("Sorry, your answer is not correct");
			}
			
			selectTwoNewRandomNumbers();
			
			
			
			if (_numberOfCorrectAnswers.value > 2)
			{
			
				document.getElementById("option0button").style.display = "inline";
				document.getElementById("option1button").style.display = "inline";
		
				
			}
					
					
			
		}else
		{
			_myAnswer.addDigit(oneCharString);
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
				
				if (_animationList[i].getName() === "button")
				{
					_animationList[i].buttonDownColor();
				
				}
			}
		}
		
	}
	
	this.doMouseUp = function doMouseUp(point)
	{
		//alert("PageBasic.doMouseUp "+_pageName+"   "+point.x +", " +point.y);
		this.userSelectedObject = null;
		
		var displayInfo = "mouseDrag _______";
		document.getElementById("mouseDragInfo").innerHTML =  displayInfo;	
		
		var i;
		for (i=0;i< _animationList.length; i++)
		{
			
			if (_animationList[i].getName() === "button")
			{
				_animationList[i].buttonUpColor();
				//alert("button pushed");
				
				_blocker.isVisible = false;
				//_alien1.restart();
				//_alien1.setVisible(true);
				
				//_numberOfAliensZapped.setValue("0");
			}
		}
		
		
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
