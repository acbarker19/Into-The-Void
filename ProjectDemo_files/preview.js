
var _g_canvas;  //see init()
var _g_context;  //see init()

var _g_Animator;


function init()
{

	//initialize the global variables
	_g_canvas = document.getElementById("myCanvas");
	_g_context = _g_canvas.getContext("2d");
	
	_g_Animator = new Animator("Animator One");
	
	//start the animation loop, but don't draw anything yet
	_g_Animator.startAnimateLoop();
	_g_Animator = null; 
	
	_g_MyTimer = new MyTimer("Timer 1", 0, 170, 180);
	
	
	//drawPage("blankPage");
	//drawPage("welcomePage");
	drawPage("startClock");
	
	
	//drawPage("justTesting");
	
	alert("preview init()");
	
}

function drawPage(whichPage)
{
	_g_Animator = null;
	
	if (whichPage === "instructionsPage")
		drawInstructionsPage();
	else if (whichPage === "titlePage")
		drawTitlePage();
	else if (whichPage === "summaryPage")
		drawSummaryPage();
	else if (whichPage === "blankPage")
		drawBlankPage();
	else if (whichPage === "welcomePage")
		drawWelcomePage();
	else if (whichPage === "challengesPage")
		drawChallengesPage();
	else if (whichPage === "turkeyAnimation")
		drawTurkeyAnimationPage();
	else if (whichPage === "shortAnimation")
		drawShortAnimationPage();
	else if (whichPage === "longAnimation")
		drawLongAnimationPage();
	else if (whichPage === "startClock")
		drawStartClockPage();
	else 
		drawErrorPage(whichPage);
		
		
} 

function drawBlankPage() 
{
	//_g_canvas and _g_context are initialized in init()

	clearCanvas(_g_context, "rgb(255,255,255)");

	setTextStyle(_g_context, "bigWithShadow");
	_g_context.fillText("Blank Page", 50, 100);
		
	setTextStyle(_g_context, "normalPlain");
	_g_context.fillText('this is a blank page',
		50,200);
		
	//drawTugBoat(_g_context, 50, 200);
	
}


function drawWelcomePage() 
{
	//_g_canvas and _g_context are initialized in init()

	clearCanvas(_g_context, "rgb(255,255,255)");

	setTextStyle(_g_context, "bigWithShadow");
	_g_context.fillText("Welcome Page", 50, 100);
		
	setTextStyle(_g_context, "normalPlain");
	_g_context.fillText('this is a welcome page',
		50,200);
		
	//drawTugBoat(_g_context, 50, 200);
	
}


function drawInstructionsPage() 
{
	//_g_canvas and _g_context are initialized in init()

	clearCanvas(_g_context, "rgb(255,255,255)");

	setTextStyle(_g_context, "bigWithShadow");
	_g_context.fillText("Instructions", 90, 100);
		
	setTextStyle(_g_context, "normalPlain");
	_g_context.fillText('basic instructions go here',
		50,200);
		
	//drawTugBoat(_g_context, 50, 200);
	
}


function drawTurkeyAnimationPage() 
{
	//_g_canvas and _g_context are initialized in init()

	clearCanvas(_g_context, "rgb(255,255,255)");


	
	_g_Animator = new Animator("Animator One");
	_g_Animator.animateAddObject(new Turkey("Turkey", 0, 50, 0));
     
	
}

function drawShortAnimationPage() 
{
	//_g_canvas and _g_context are initialized in init()

	clearCanvas(_g_context, "rgb(255,255,255)");


	_g_Animator = new Animator("Animator One");
	_g_Animator.animateAddObject(new MyMovingTitle("Tug Boat Tim", 0, -340, 80));
   
}


function drawLongAnimationPage() 
{
	//_g_canvas and _g_context are initialized in init()

	clearCanvas(_g_context, "rgb(255,255,255)");

	
	_g_Animator = new Animator("Animator One");
	_g_Animator.animateAddObject(new MyTitle("Tug Boat Tim", 0, 70, 80));
    _g_Animator.animateAddObject(new Boat("Tug Boat Tim", 0, 240, 190));
     
	
}


function drawStartClockPage() 
{
	//_g_canvas and _g_context are initialized in init()

	clearCanvas(_g_context, "rgb(255,255,255)");

	
	_g_Animator = new Animator("Animator One");
	
	//_g_MyTimer.restart();
	_g_Animator.animateAddObject(_g_MyTimer);
     
	
}

function clockReset()
{
	_g_MyTimer.reset();
}


function clockSetPause(theValue)
{
	_g_MyTimer.setPause(theValue);
}

function clockTogglePause()
{
	_g_MyTimer.clockTogglePause();
}




function drawTitlePage() 
{
	//_g_canvas and _g_context are initialized in init()

	clearCanvas(_g_context, "rgb(255,255,255)");

	setTextStyle(_g_context, "bigWithShadow");
	_g_context.fillText("My Clock Timer", 40, 100);
		
	//setTextStyle(_g_context, "normalPlain");
	//_g_context.fillText('A brave little tug boat who meets the challenge.',
	//	40,150);
		
	//the drawTugBoat function is in MyDrawingLibrary.js
	//drawTugBoat(_g_context, 300, 220);
	
	//alert("drawTitlePage");
	
}


function drawSummaryPage() 
{
	//_g_canvas and _g_context are initialized in init()

	clearCanvas(_g_context, "rgb(255,255,255)");

	setTextStyle(_g_context, "bigWithShadow");
	_g_context.fillText("Synopsis", 120, 80);
		
	setTextStyle(_g_context, "normalPlain");
	var textOver = 90;
	var textDown = 160;
	var textDownAdvance = 30;
	
	_g_context.fillText('Tug Boat Tim is a little tug boat who',
		textOver,textDown);
	textDown += textDownAdvance;
	_g_context.fillText('has several adventures while on the',
		textOver,textDown);
	textDown += textDownAdvance;
	_g_context.fillText('way to completing his mission of ',
		textOver,textDown);
	textDown += textDownAdvance;
	_g_context.fillText('rescuing his friend, Big Boat Billy.',
		textOver,textDown);
		
	//drawTugBoat(_g_context, 50, 200);
	
}


function drawChallengesPage() 
{
	//_g_canvas and _g_context are initialized in init()

	clearCanvas(_g_context, "rgb(255,255,255)");

	setTextStyle(_g_context, "bigWithShadow");
	_g_context.fillText("Challenges", 80, 80);
		
	setTextStyle(_g_context, "normalPlain");
	var textOver = 20;
	var textDown = 160;
	var textDownAdvance = 30;
	
	_g_context.fillText('1. Raise the anchor by dragging it with the mouse.',
		textOver,textDown);
	textDown += textDownAdvance;
	_g_context.fillText('2. Send a Morse Code message using the keyboard.',
		textOver,textDown);
	textDown += textDownAdvance;
	_g_context.fillText('3. Push the stranded ship to safety.',
		textOver,textDown);
	textDown += textDownAdvance;
	_g_context.fillText('4. Sound the horn by pulling the cord.',
		textOver,textDown);
		
	//drawTugBoat(_g_context, 50, 200);
	
}


function drawErrorPage(whichPage) 
{
	//_g_canvas and _g_context are initialized in init()

	clearCanvas(_g_context, "rgb(255,255,255)");

	setTextStyle(_g_context, "bigWithShadow");
	_g_context.fillText("Error Page", 50, 100);
		
	setTextStyle(_g_context, "normalPlain");
	_g_context.fillText("Sorry. The page '"+whichPage+"'",
		50,200);
		
	_g_context.fillText("does not exist.",
		50,230);
	
	
}



