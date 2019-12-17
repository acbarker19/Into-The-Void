function test()
{
	alert("testing");
	document.getElementById("demo").innerHTML = "Hello JavaScript!";

}

function clearCanvas(context, backGroundColor)
{
	//clear the entire canvas
	context.fillStyle = backGroundColor;
	context.fillRect (0, 0, 1000, 1000);
}


function setTextStyle(context, theStyle)
{
	if (theStyle === "bigWithShadow")
	{
		//bigWithShadow
		context.shadowColor = "grey";
		context.shadowOffsetX = 5; 
		context.shadowOffsetY = 5; 
		context.shadowBlur = 7;
		context.font = "60px Nasalization";
		context.textBaseline = 'alphabetic';
		context.scale(1,1);
		context.fillStyle = "blue";
		
	}else if (theStyle === "smallWithShadow")
	{
		//bigWithShadow
		context.shadowColor = "grey";
		context.shadowOffsetX = 5; 
		context.shadowOffsetY = 5; 
		context.shadowBlur = 7;
		context.font = "32px Nasalization";
		context.textBaseline = 'alphabetic';
		context.scale(1,1);
		context.fillStyle = "blue";
		
	}else if(theStyle === "monitorText"){
		context.shadowColor = "grey";
		context.shadowOffsetX = 0; 
		context.shadowOffsetY = 0; 
		context.shadowBlur = 0;
		context.font = "20px 'BitWise'";
		context.textBaseline = 'alphabetic';
		context.scale(1,1);
		context.fillStyle = "lime";
	}else if (theStyle === "giantWithShadow")
	{
		//giantWithShadow
		context.shadowColor = "grey";
		context.shadowOffsetX = 5; 
		context.shadowOffsetY = 5; 
		context.shadowBlur = 5;
		context.font = "140px 'Helvetica'";
		context.textBaseline = 'alphabetic';
		context.scale(1,1);
		context.fillStyle = "red";
		
	}else if (theStyle === "normalPlain")
	{
		//normalPlain
		context.shadowColor = "grey";
		context.shadowOffsetX = 0; 
		context.shadowOffsetY = 0; 
		context.shadowBlur = 0;
		context.font = "20px 'Helvetica'";
		context.textBaseline = 'alphabetic';
		context.scale(1,1);
		context.fillStyle = "black";
		
	}else if (theStyle === "darkBG"){
		//darkBG
		context.shadowColor = "grey";
		context.shadowOffsetX = 0; 
		context.shadowOffsetY = 0; 
		context.shadowBlur = 0;
		context.font = "20px 'Helvetica'";
		context.textBaseline = 'alphabetic';
		context.scale(1,1);
		context.fillStyle = "white";
	}else if (theStyle === "smallGrey")
	{
		//smallGrey
		context.shadowColor = "grey";
		context.shadowOffsetX = 0; 
		context.shadowOffsetY = 0; 
		context.shadowBlur = 0;
		context.font = "10px 'Helvetica'";
		context.textBaseline = 'alphabetic';
		context.scale(1,1);
		context.fillStyle = "grey";
		
	}else if (theStyle === "smallBlack"){
		context.shadowColor = "black";
		context.shadowOffsetX = 0; 
		context.shadowOffsetY = 0; 
		context.shadowBlur = 0;
		context.font = "15px 'Helvetica'";
		context.textBaseline = 'alphabetic';
		context.scale(1,1);
		context.fillStyle = "black";
	}else
	{
		alert("setTextStyle called with '"+theStyle+"'");
	}
}

function drawTriangle(context, over, down)
	{
		var hullWidth = 70;
		var hullHeight = 30;
		
    	context.beginPath();
    	context.moveTo(over + hullWidth, down + 30);
    	context.lineTo(over + hullWidth + 20, down + 30);
    	context.lineTo(over + hullWidth, down + hullHeight + 30);
    	context.fill();
  
	}
	
function drawTugBoat(context, over, down)
{	
	context.fillStyle = "rgb(220, 0, 0)";
	context.fillRect (over, down+30, 70, 30);
		    
	//for the bow of the boat
	drawTriangle(context,over, down);
		   
	//draw the mast
	context.fillStyle = "rgb(0, 0, 0)";
	context.fillRect (over + 20, down, 6, 40);
	
	//draw the flag
	context.fillStyle = "rgb(0, 220, 0)";
	context.fillRect (over, down, 20, 20);
		    	
	//setTextStyle is a function in MyDrawingLibrary.js
	setTextStyle(context, "smallGrey");
	context.fillStyle = "rgb(0, 0, 0)";
				
	context.fillText("Tug Boat Tim", over+ 10, down +50);	
}

function drawZapper(context, over, down)
{	
	//draw the main body of the Zapper
	context.fillStyle = "rgb(220, 0, 0)";
	context.fillRect (over-20, down, 40, 30);
		   
	//draw the barrel
	context.fillStyle = "rgb(0, 0, 0)";
	context.fillRect (over-3, down-20, 6, 40);
		    	
	
}

function drawSpaceBG(context){
	img = document.getElementById("spaceBG");
	context.drawImage(img, 0, 0, 500, 300);
}

function drawMars(context, over, down, diameter){
	img = document.getElementById("mars");
	context.drawImage(img, over, down, diameter, diameter);
}

function drawTempShip(context, over, down){
	img = document.getElementById("tempShip");
	context.drawImage(img, over, down, 100, 100);
}

function drawTempShipRight(context, over, down){
	img = document.getElementById("tempShipRight");
	context.drawImage(img, over, down, 100, 100);
}

function drawFlames(context, over, down){
	img = document.getElementById("flames");
	context.drawImage(img, over, down, 50, 50);
}

function drawGasCan(context, over, down){
	img = document.getElementById("gasCan");
	context.drawImage(img, over, down, 50, 50);
}

function drawCockpit(context){
	img = document.getElementById("cockpit");
	context.drawImage(img, 0, 0, 500, 300);
}

function drawNote(context, over, down){
	img = document.getElementById("note");
	context.drawImage(img, over, down, 75, 75);
}

function drawScreen(context, over, down){
	img = document.getElementById("screen");
	context.drawImage(img, over, down, 180, 105);
}

function drawHulaGirl(context, over, down){
	img = document.getElementById("hulaGirl");
	context.drawImage(img, over, down, 75, 75);
}

function drawEarth(context, over, down, diameter){
	img = document.getElementById("earth");
	context.drawImage(img, over, down, diameter, diameter);
}

function drawFutureRoom(context){
	img = document.getElementById("futureRoom");
	context.drawImage(img, 0, 0, 500, 300);
}

function drawCryoBed(context, over, down){
	img = document.getElementById("cryoBed");
	context.drawImage(img, over, down, 125, 125);
}

function drawShipFlames0(context, over, down){
	img = document.getElementById("shipFlames0");
	context.drawImage(img, over, down, 100, 118);
}

function drawShipFlames1(context, over, down){
	img = document.getElementById("shipFlames1");
	context.drawImage(img, over, down, 100, 118);
}

function drawShipFlames2(context, over, down){
	img = document.getElementById("shipFlames2");
	context.drawImage(img, over, down, 100, 118);
}

function drawShipFlames3(context, over, down){
	img = document.getElementById("shipFlames3");
	context.drawImage(img, over, down, 100, 118);
}

function drawMoon(context, over, down, diameter){
	img = document.getElementById("moon");
	context.drawImage(img, over, down, diameter, diameter);
}

function drawAstronautIceCream(context, over, down){
	img = document.getElementById("astronautIceCream");
	context.drawImage(img, over, down, 108, 171);
}

function drawAstronaut(context, over, down){
	img = document.getElementById("astronaut");
	context.drawImage(img, over, down, 100, 105);
}

function drawPills(context, over, down){
	img = document.getElementById("pills");
	context.drawImage(img, over, down, 200, 150);
}

function drawAsteroids(context, over, down){
	img = document.getElementById("asteroids");
	context.drawImage(img, over, down, 232, 300);
}

function drawShipLargeRight(context, over, down){
	img = document.getElementById("tempShipRight");
	context.drawImage(img, over, down, 200, 200);
}

function drawMarsSurface(context){
	img = document.getElementById("marsSurface");
	context.drawImage(img, 0, 0, 823, 300);
}

function drawAstronautGuitar(context, over, down){
	img = document.getElementById("astronautGuitar");
	context.drawImage(img, over, down, 200, 190);
}

function drawMeteorite(context, over, down){
	img = document.getElementById("meteorite");
	context.drawImage(img, over, down, 200, 190);
}

function drawButton(context, over, down){
	img = document.getElementById("button");
	context.drawImage(img, over, down, 100, 100);
}