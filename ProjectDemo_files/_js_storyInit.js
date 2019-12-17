/* Jim Klayder -- spring 2018
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

var _g_canvas;  //see init()
var _g_context;  //see init()

var _g_Animator;
var _g_currentPage;

var _g_MainScript;



function js_storyInit(theScriptName, theStartPage)
{
	//alert("start _js_storyInit( '"+theScriptName+"' , '"+theStartPage+"' ); ---  ");

	//initialize the global variables
	_g_canvas = document.getElementById("myCanvas");
	_g_context = _g_canvas.getContext("2d");
	
	_g_canvas.addEventListener("mousemove",doMouseMove,false);
	_g_canvas.addEventListener("mousedown",doMouseDown,false);
	_g_canvas.addEventListener("mouseup",doMouseUp,false);
	
	_g_canvas.addEventListener('keydown', doKeyDown, false);

	
	
	
	
	//alert("in js_storyInit   before new Animator call");
	
	_g_Animator = new Animator("Animator One");
	
	//alert("in js_storyInit   after new Animator call");
	
	
	//start the animation loop, but don't draw anything yet
	_g_Animator.startAnimateLoop();
	
	//_g_MainScript = new MainScript("Main",0,0,0);
	//
	
	//alert("in js_storyInit    before new MainScript call");
	
	_g_MainScript = new MainScript(theScriptName);
	//alert("in js_storyInit    after new MainScript call");
	
	//_g_currentPage = null;   //see MainScript.showPage
	
	
	_g_MainScript.setStoryPages(theScriptName);
			
	//var theStartPage = "three";
	_g_MainScript.showPage(theStartPage);
	
	
	//_g_MainScript.showAllPageData();
	
	
	//alert("end MainScriptInit();");
	
}


/* the 'showPage' function is called by the buttons in the
.html file


*/
function showPage(theOptionNumber)
{
	//alert("theOptionNumber   "+theOptionNumber);
	var thePageName;
	
	if (theOptionNumber == "option0")
	{
		thePageName = document.getElementById("option0nextPage").innerHTML;
	}else if (theOptionNumber == "option1")
	{
		thePageName = document.getElementById("option1nextPage").innerHTML;
	}
	
//when MainScript.showPage is called we look through the pageList
//for a given pageName		
	//alert("in showPage try to show thePageName:     "+ thePageName);		
	_g_MainScript.showPage(thePageName);
}


	//get mouse position within the _g_canvas
	//no matter where the _g_canvas is on the web page
	//http://stackoverflow.com/questions/17130395/_g_canvas-html5-real-mouse-position
	//Klayder added "Math.round"
	function getMousePos(_g_canvas, evt) 
	{
		var rect = _g_canvas.getBoundingClientRect();
		return {
			x: Math.round((evt.clientX - rect.left) / (rect.right - rect.left) * _g_canvas.width),
		    y: Math.round((evt.clientY - rect.top) / (rect.bottom - rect.top) * _g_canvas.height)
		};
	}
	
	
	function doKeyDown(e)
	{
		//alert("doKeyDown "+e.keyCode);
		
		if (_g_currentPage != null)
		{
			//alert("_g_currentPage.getName()  "+_g_currentPage.getName());
			_g_currentPage.doKeyDown(e);
			
		}

	}
		
	function doMouseMove(event)
	{
		var point = getMousePos(_g_canvas, event);
		
		var mouseDownInfo = "mouseMoveInfo point.x "+point.x+"     point.y "+point.y;
		//alert(mouseDownInfo);
		
		var info = "mouseMove "+point.x+", "+point.y;
		document.getElementById("mouseMoveInfo").innerHTML =  info;	
		
		
		if (_g_currentPage != null)
		{
			//alert("_g_currentPage.getName()  "+_g_currentPage.getName());
			_g_currentPage.doMouseMove(point);
			
		}
		
	}	
	
	function doMouseDown(event)
	{
		var point = getMousePos(_g_canvas, event);
		
		var mouseDownInfo = "mouseDownInfo point.x "+point.x+"     point.y "+point.y;
		//alert(mouseDownInfo);
		
		var info = "mouseDown "+point.x+", "+point.y;
		document.getElementById("mouseDownInfo").innerHTML =  info;	
		
		
		if (_g_currentPage != null)
		{
			//alert("_g_currentPage.getName()  "+_g_currentPage.getName());
			_g_currentPage.doMouseDown(point);
			
		}
		
	}
	
	function doMouseUp(event)
	{
		var point = getMousePos(_g_canvas, event);
		
		var mouseDownInfo = "doMouseUp point.x "+point.x+"     point.y "+point.y;
		//alert(mouseDownInfo);
		
		var info = "mouseUp "+point.x+", "+point.y;
		document.getElementById("mouseUpInfo").innerHTML =  info;	
		
		
		if (_g_currentPage != null)
		{
			//alert("_g_currentPage.getName()  "+_g_currentPage.getName());
			_g_currentPage.doMouseUp(point);
			
		}
		
	}

