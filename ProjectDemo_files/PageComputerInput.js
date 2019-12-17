/////////////////////////////////////////////////////////////////////
//start class

/*params used 

pageName (used for knowing which one of many pages should be used)
animationList (list of objects to be displayed) 
     (could a combination of graphics, text, or animated objects)
optionList (each Option has displayName, displayText, and nextPageName)

*/
function PageComputerInput(pageName, animationList, optionList)
{

	var _pageName = pageName; 
	var _animationList = animationList;
	var _optionList = optionList;
	
	var coordinateCounter = 0;
	var correctCounter = 0;
	
	var _questionList = [];
	
	//_questionList.push("What color is grass?");
	//_questionList.push("What color is the sky?");
	//_questionList.push("What color is the sun?");
	
    _questionList.push("X:");
    _questionList.push("Y:");
    _questionList.push("Z:");
	_questionList.push("Going To: Mars");
	
	var _answerList = [];
    //_answerList.push("GREEN");
	//_answerList.push("BLUE");
	//_answerList.push("YELLOW");
	
	_answerList.push("55");
    _answerList.push("225");
    _answerList.push("401");
	_answerList.push("");
    
	//setTextStyle(_g_context, "monitorText");
    var _question = new CoordinateList("question",0,180,230);
	_question.value = _questionList[1];
	_animationList.push(_question);  //so that it will be displayed
	
	var _correctAnswer = _answerList[1];
	
	var _userAnswerString = new CoordinateInput("userAnswer",0,230,230);
	_animationList.push(_userAnswerString);  //so that it will be displayed
	
	//labels for correct and incorrect number counters
	//var _labelsParagraph = new MyDarkBGParagraph( 0, 50, 240,
    //    	"number correct",
    //    	"number incorrect",
    //    	"   ",
    //    	"  ");
        	
	//_animationList.push(_labelsParagraph);
	
	//var _numberOfCorrectAnswers = new MyNumber("numCorrect",0,10,10);
	//_numberOfCorrectAnswers.setValue("0");
	//_animationList.push(_numberOfCorrectAnswers);  //so that it will be displayed
	
	//var _numberOfInIncorrectAnswers = new MyNumber("numIncorrect",0,250,270);
	//_numberOfInIncorrectAnswers.setValue("0");
	//_animationList.push(_numberOfInIncorrectAnswers);  //so that it will be displayed
	
	
	//var _blocker = new MyBlocker("blocker",0,0,0,400,420);
	//_animationList.push(_blocker);  //used to 'block' or hide _question
	//    until the 'click to start' button is clicked
	 
	
	
	var _instructionParagraph = new MyDarkBGParagraph( 0, 5, 20,
        	"Click on the monitor, and input the",
        	"coordinates for Mars on the console.",
        	"Then, hit \"Enter\".",
        	"They should be written somewhere...");
        	
	_animationList.push(_instructionParagraph);
        	
	
	
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

	
	function selectNewQuestionAndAnswer()
	{
		//alert("selectNewQuestionAndAnswer");
		
		//var temp = getRandomInt(0,_questionList.length-1);
		
		//alert("random int from 0 to "+(_questionList.length-1)+"   '"+temp+"'");
		
		_question.value = _questionList[coordinateCounter];
		
		_correctAnswer = _answerList[coordinateCounter];
		
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
   				
   				selectNewQuestionAndAnswer();
   				//_numberOfCorrectAnswers.setValue("0");
   				
   				//_blocker.isVisible = true;
				_instructionParagraph.isVisible = true;
   				
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
			
			var correctAnswer = _correctAnswer;
			correctAnswer = correctAnswer;  //we want to compare strings, so add " " to the beginning
			
			var userAnswer = _userAnswerString.value;  //we want to compare strings, so add " " to the beginning
			
			//alert("userAnswer:    '"+userAnswer+"'          correctAnswer:    '"+correctAnswer+"'");
			
			
			if (userAnswer === correctAnswer)
			{
				//alert("correct");
				//_numberOfCorrectAnswers.addValue(1);
				coordinateCounter++;
				correctCounter++;
			}else
			{
				alert("Sorry, the coordinate you entered was incorrect.\nPlease enter the coordinates again, one at a time.");
				//_numberOfInIncorrectAnswers.addValue(1);
				coordinateCounter = 0;
				correctCounter = 0;
			}
			
			_userAnswerString.value = "";
			
			
			
			selectNewQuestionAndAnswer();
			
			
			
			if (correctCounter > 2)
			{
			
				document.getElementById("option0button").style.display = "inline";
				document.getElementById("option1button").style.display = "inline";
		
				
			}
					
					
			
		}else
		{
			_userAnswerString.addChar(oneCharString);
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
		
		//var info = "_animationList.length "+_animationList.length;
		//document.getElementById("extraInfo5").innerHTML =  info;	
				
		
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
