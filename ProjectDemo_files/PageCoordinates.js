function PageCoordinates(pageName, animationList, optionList){
	var _pageName = pageName; 
	var _animationList = animationList;
	var _optionList = optionList;
	
	this.restart = function restart(){
		if (_animationList != null){
			var i;
			for (i=0;i<_animationList.length;i++)
			{
				animatedObject = _animationList[i];
			
				//alert("animatedObject.getName()  "+animatedObject.getName());
			
				animatedObject.restart();
				
//PUT STUFF HERE
			}
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
		
		if (e.keyCode === 13){  //the enter key has been pressed
//PUT STUFF HERE			
		}else{
			_userAnswerString.addChar(oneCharString);
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
	
	this.age = function age(){
		age++;
	}
}