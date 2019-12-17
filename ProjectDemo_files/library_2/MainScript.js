/* Jim Klayder -- spring 2016
   beginning point for Javascript adventure stories
   
   _g_currentPage is used for mouse events
   
   each Page should have functions for:
   doMouseUp, doMouseDown, doMouseMove, doMouseOver, doMouseOut
   
   NOTE: could also add touch events
*/


/*
from:   http://rectangleworld.com/blog/archives/15

Here is the relevant code which determines mouse position over the canvas, 
and which accounts for possible positioning and scaling of the canvas that may have occured in the browser:

var bRect = theCanvas.getBoundingClientRect();
mouseX = (evt.clientX - bRect.left)*(theCanvas.width/bRect.width);
mouseY = (evt.clientY - bRect.top)*(theCanvas.height/bRect.height);
///


HTML mouse events
http://www.w3schools.com/tags/ref_eventattributes.asp

Canvas mouse events
http://www.informit.com/articles/article.aspx?p=1903884&seqNum=6

(onmousedown, onmousemove, onmouseup, onmouseover, and onmouseout)




*/


/////////////////////////////////////////////////////////////////////
//start class
function MainScript(name)
{

	var _name = name; 
	 
	
	
	//alert("start MainScript constructor");
	
	var _storyPage;
	
	
	//PageBasic(pageName, animationList, optionList)
	
	var animationList;
	var optionList;

	

	//alert("end MainScript constructor");
	
	this.setStoryPages = function setStoryPages(theStoryTitle)
		{
		
			//alert("before new MyStory");
			var temp = new MyStory();
			_storyPage = temp.getStoryPages(theStoryTitle);
			
			
			//alert("after new MyStory");
			
			
		}
	
	this.restart = function restart()
		{
			
		}
	
	this.showAllPageData = function showAllPageData()
	{
		var answer = "showAllPageData   ";
		var i;
		for (i=0;i<_storyPage.length;i++)
		{
			answer = i+"  "+_storyPage[i].toString();
			alert(answer);
		}
		
		
	
	}
	
/*
if a page is found then we load the animationList and use the
optionList to set the button names, displayText, and nextPageName
*/		
	this.showPage = function showPage(thePageName)
		{
			//alert("start MainScript.showPage() :   "+thePageName);
			if (_g_currentPage != null)
			{
				//alert("_g_currentPage != null");
			}
			var pageFound = false;
			var i;
			for (i=0;i<_storyPage.length;i++)
			{
				if (thePageName == _storyPage[i].getName())
				{
					pageFound = true;
					
					_storyPage[i].restart();
					_storyPage[i].setOptionsInHtml();
					_storyPage[i].setProgramInfoInHtml();
					_storyPage[i].setAnimation();
					//alert(thePageName+" found and displayed");
					
					_g_currentPage = _storyPage[i];
				}
			}
			
			if (pageFound == false)
			{
				_storyPage[0].restart();
				_storyPage[0].setOptionsInHtml();
				_storyPage[0].setProgramInfoInHtml();
				_storyPage[0].setAnimation();
				
				_g_currentPage = _storyPage[0];
					
				alert("Page '"+thePageName+"' not found. (You will view Page 0.)");
			}
		}
		
		this.showPageUsingNumber = function showPageUsingNumber(theNumber)
		{
			if (_storyPage == null)
			{
				alert("MainScript.showPageUsingNumber found _storyPage == null");
			}else
			{
				var low = 0;
				var high = _storyPage.length - 1;
				
				if (theNumber < 0)
				{
					alert("MainScript.showPageUsingNumber --- number too low --- "+theNumber);
					
				}else if (theNumber > high)
				{
					alert("MainScript.showPageUsingNumber --- number too high --- "+theNumber);
					
				}else
				{
					var pageName = _storyPage[theNumber].getName();
					this.showPage(pageName);
				
				}
			
			}
		
		}
		
	
}//end class
/////////////////////////////////////////////////////////////////////
