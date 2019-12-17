var _g_pathMainLabel = "*";  //  "*" will show the path  // "" will not show the path
var _g_pathSideLabel = "**";  //  "**" will show the side path  // "" will not show the side path

/*
	Alec Barker
	CSW 223
	4/10/18
	http://raider.mountunion.edu/csw/CSW223/Spring2018/projects/ProjectThree/project3.html
	My story uses the 'testStoryBasicPageNumbers' story as a template. Images are created in the
	StoryDemo.html page and added as functions in the MyDrawingLibrary.js page. My challenge uses
	the PageDropObjectInBasket.js page.
	
	I adapted the getBasicPageNumbers() function to create the story. I originally just used to
	basic paragraphs and titles that were included with the project that Dr. Klayder, but I began
	quite a few classes to use. Some were objects that could be interacted with, such as the Ship and 
	GasCan class, while others were used for backgrounds and such. I loaded pictures as functions in the
	MyDrawingLibrary class and used those functions in other classes I created. This let me use the same
	image multiple times without having to create it on each class. I just had to call the function. I
	changed the buttons so that they all have relevant text. Before, unused buttons simply said "Nothing".
*/

/////////////////////////////////////////////////////////////////////
//start class
function MyStory()
{

    this.getStoryPages = function getStoryPages(name)  //public function
    {
        //alert("MyStory.getStoryPages()  "+name);

        if (name === "testStoryBasicPageNumbers")
        {
                //alert("MyStory.getStoryPages --- found '"+name+"'");
                return getStoryBasicPageNumbers();
        }else if (name === "testZero")
        {
                //alert("MyStory.getStoryPages --- found '"+name+"'");
                return getStoryPagesTestZero();
        }else if (name === "testOne")
        {
                //alert("MyStory.getStoryPages --- found '"+name+"'");
                return getStoryPagesTestOne();
        }else if (name === "orangeStory")
        {
                //alert("MyStory.getStoryPages --- found '"+name+"'");
                return  getStoryOranges();
        }else if (name === "zapperStory")
        {
                //alert("MyStory.getStoryPages --- found '"+name+"'");
                return  getStoryZapper();
        }
        
        
       
        //in all other cases
        return getStoryPagesNotFound(name);
    }
    
    function getStoryPagesNotFound(name)   //private function
    {

        var _storyPage = [];

        var animationList = [];
        animationList.push(new MyTitle("Story Not Found", 0, 30, 80));
        animationList.push(new MyTitle(name, 0, 30, 180));
        
        var theText = "Your story named '"+name+"' was not found in the MyStory.js file. If '"+name+"' is the name of your story, then check the MyStory.js file to make certain that the story name is listed in the 'getStoryPages' function. If '"+name+"' is not the name of your story, then check the .html file to correct the spelling of the name.";
        animationList.push(new MyScrollingText(theText, 150, 250, 270));

		animationList.push(new MyMovingTitle("tester", 0, 30, 180));

        var optionList = [];
        optionList.push(new PageOption("Sorry.",
        "Your story was not found.",
        "notFound"));

        optionList.push(new PageOption("Sorry.",
        "Your story was not found.",
        "notFound"));

        //alert("optionList[0].value   "+optionList[0].value);

        _storyPage.push(new PageBasic("notFound",animationList,optionList));
        //////////
        //////////
        
        return _storyPage;

	}

	
    function getStoryBasicPageNumbers()   //private function
    {
    
    	//alert("start getBasicPageNumbers()");

        _storyPage = [];
        
        
        var animationList = [];
        animationList.push(new MyTitle("Page Not Found", 0, 30, 80));
        animationList.push(new MyTitle(name, 0, 30, 180));
        
        var theText = "The requested page was not found in the MyStory.js file. Check the name of your page reference.";
        animationList.push(new MyScrollingText(theText, 150, 250, 270));

		//animationList.push(new MyMovingTitle("tester", 0, 30, 180));

        var optionList = [];
        optionList.push(new PageOption("Sorry.",
        "Your story was not found.",
        "notFound"));

        optionList.push(new PageOption("Sorry.",
        "Your story was not found.",
        "notFound"));

        //alert("optionList[0].value   "+optionList[0].value);

        _storyPage.push(new PageBasic("notFound",animationList,optionList));
        //////////
        //////////
//CHANGE NAMES HERE
        animationList = [];
        //animationList.push(new MyMovingTitle("Hello There", 0, 150, 80));
        animationList.push(new MySplashPage("Splash Page", 20, -250, 80));
        //animationList.push(new MyMovingTitle("Page One", -200, -450, 180));


        optionList = [];
        optionList.push(new PageOption("Start Game",
        "Click here to start the game. " + _g_pathMainLabel,
        "fuelingChallenge"));

        optionList.push(new PageOption("New Game",
        "Click here to start a new game. " + _g_pathMainLabel,
        "fuelingChallenge"));

        //alert("optionList[0].value   "+optionList[0].value);

		
        _storyPage.push(new PageBasic("splashPage",animationList,optionList));
		//so this page has the name "pageOne"
        //////////
        //////////


        animationList = [];
			
		animationList.push(new MyGroundBackground("BG", 0, 0, 0));
			
		animationList.push(new MyParagraph(0, 5, 20,
			"Before leaving Earth, Major Tom must",
			"fuel the ship. Drag the fuel cans to",
			"the spaceship.",
			""));
			
		animationList.push(new GasCan("Ball1",0, 50, 200));
        animationList.push(new GasCan("Ball2",0, 145, 270));
        animationList.push(new GasCan("Ball3",0, 400, 185));

		animationList.push(new Ship("Basket", 0, 250, 170));

        optionList = [];
        optionList.push(new PageOption("Launch Ship",
        "After fueling the ship is complete, you launch the ship. " + _g_pathMainLabel,
        "launchShip"));

        optionList.push(new PageOption("Strap In",
        "You're sitting on top of a giant explosive soda can that is about to launch you into space. What could go wrong? " + _g_pathMainLabel,
        "launchShip"));

        _storyPage.push(new PageMoveGasCans("fuelingChallenge",animationList,optionList));
        
		//////////
        //////////


        animationList = [];
		animationList.push(new MyTitle("Launch", 0, 150, 80));
		
		animationList.push(new MyGroundBackground("BG", 0, 0, 0));
		animationList.push(new MyParagraph(0, 10, 20,
			"This ship launches,",
			"and you are asked to",
			"enter the coordinates of",
			"Mars on the computer."));
		animationList.push(new Ship("liftoff", 0, 250, 170));
		
        //animationList.push(new MyMovingTitle("       hello ----", 0, -450, 180));

        optionList = [];
        //Option(displayName, displayText, nextPageName)
        optionList.push(new PageOption("Let the Ship Navigate",
        "You decide to let the ship find its own way to Mars. " + _g_pathSideLabel,
        "shipNavigate"));

        optionList.push(new PageOption("Input Coordinates",
        "You decide to enter Mars' coordinates into the computer. " + _g_pathMainLabel,
        "coordinatesChallenge"));



        _storyPage.push(new PageBasic("launchShip",animationList,optionList));

		//////////
        //////////


        animationList = [];
        animationList.push(new MyTitle("Throttle Up", 0, 150, 80));
        //animationList.push(new MyMovingTitle("       hello ----", 0, -450, 180));

		animationList.push(new MySpaceBackground("earth"));
		animationList.push(new ShipRight("flying", 0, 300, 125));
		
		animationList.push(new MyDarkBGParagraph(0, 10, 20,
			"You decide to let the ship navigate.",
			"",
			"",
			""));
		
        optionList = [];
        //Option(displayName, displayText, nextPageName)
        optionList.push(new PageOption("Fly Away",
        "Leave Earth's orbit. " + _g_pathSideLabel,
        "aroundMoon"));

        optionList.push(new PageOption("Ditch Planet Earth",
        "You never liked it much, anyway. Too many Walmarts. " + _g_pathSideLabel,
        "aroundMoon"));

        _storyPage.push(new PageBasic("shipNavigate",animationList,optionList));

		
		//////////
        //////////
		
		
        animationList = [];
        animationList.push(new MyTitle("Slingshot", 0, 150, 80));
		animationList.push(new MySpaceBackground("moon"));
		animationList.push(new ShipRight("slingshot", 0, 200, 275));
		animationList.push(new MyDarkBGParagraph(0, 10, 20,
			"Your ship does a gravitational",
			"slingshot around the moon.",
			"",
			""));
			
        //animationList.push(new MyMovingTitle("       hello ----", 0, -450, 180));

        optionList = [];
        //Option(displayName, displayText, nextPageName)
        optionList.push(new PageOption("Continue",
        "Continue on your path. " + _g_pathSideLabel,
        "returnToEarth"));

        optionList.push(new PageOption("Continue",
        "Looks like we're back to square one. " + _g_pathSideLabel,
        "returnToEarth"));



        _storyPage.push(new PageBasic("aroundMoon",animationList,optionList));

		
		//////////
        //////////
		
		
        animationList = [];
        animationList.push(new MyTitle("Return", 0, 150, 80));
			
        //animationList.push(new MyMovingTitle("       hello ----", 0, -450, 180));

		animationList.push(new MySpaceBackground("earth"));
		animationList.push(new MyDarkBGParagraph(0, 10, 20,
			"You have returned to Earth. You must",
			"choose a way to get to Mars.",
			"",
			""));
		animationList.push(new ShipRight("flying", 0, -50, 125));
		
        optionList = [];
        //Option(displayName, displayText, nextPageName)
        optionList.push(new PageOption("Let the Ship Navigate",
        "You decide to let the ship find its own way to Mars. " + _g_pathSideLabel,
        "shipNavigate"));

        optionList.push(new PageOption("Input Coordinates",
        "You decide to enter Mars' coordinates into the computer. " + _g_pathMainLabel,
        "coordinatesChallenge"));



        _storyPage.push(new PageBasic("returnToEarth",animationList,optionList));

		
		//////////
        //////////
		


        animationList = [];
        animationList.push(new MyTitle("Coordinates", 0, 150, 80));
		animationList.push(new MyParagraph(0, 50, 150,
			"This will be a challenge page.",
			"You will be given coordinates to Mars,",
			"and you have to enter them into the computer.",
			""));
			
		animationList.push(new CockpitView());
			
        //animationList.push(new MyMovingTitle("       hello ----", 0, -450, 180));

        optionList = [];
        //Option(displayName, displayText, nextPageName)
        optionList.push(new PageOption("Fly Away",
        "Leave Earth's orbit. " + _g_pathMainLabel,
        "leaveEarth"));

        optionList.push(new PageOption("Stay Here",
        "Stay in Earth's orbit. " + _g_pathSideLabel,
        "stayAtEarth"));



        _storyPage.push(new PageComputerInput("coordinatesChallenge",animationList,optionList));

		//////////
        //////////


        animationList = [];
        animationList.push(new MyTitle("Stay", 0, 150, 80));
		animationList.push(new MySpaceBackground("earth"));
		animationList.push(new ShipRight("ship", 0, 300, 125));
		animationList.push(new MyDarkBGParagraph(0, 10, 20,
			"You stay in Earth's orbit.",
			"",
			"",
			""));
        //animationList.push(new MyMovingTitle("       hello ----", 0, -450, 180));
		
        optionList = [];
        //Option(displayName, displayText, nextPageName)
		optionList.push(new PageOption("Fly Away",
        "Leave Earth's orbit. " + _g_pathMainLabel,
        "leaveEarth"));
		
        optionList.push(new PageOption("Ditch Planet Earth",
        "You never liked it much, anyway. Too many Walmarts. " + _g_pathMainLabel,
        "leaveEarth"));
		
		_storyPage.push(new PageBasic("stayAtEarth",animationList,optionList));
	
		//////////
        //////////

        animationList = [];
        animationList.push(new MyTitle("Leave", 0, 150, 80));
		
        //animationList.push(new MyMovingTitle("       hello ----", 0, -450, 180));

		animationList.push(new MySpaceBackground("earth"));
		animationList.push(new ShipRight("flying", 0, 300, 125));
		animationList.push(new MyDarkBGParagraph(0, 10, 20,
			"Your ship takes off, and you must",
			"prepare for the long trip to Mars.",
			"",
			""));
		
        optionList = [];
        //Option(displayName, displayText, nextPageName)
        optionList.push(new PageOption("Eat Some Food",
        "You eat some food. " + _g_pathMainLabel,
        "eatFood"));
		
		optionList.push(new PageOption("Eat Some Food",
        "You hope it's steak. " + _g_pathMainLabel,
        "eatFood"));
		
		_storyPage.push(new PageBasic("leaveEarth",animationList,optionList));
	
		//////////
        //////////


        animationList = [];
        animationList.push(new MyTitle("Eat", 0, 150, 80));
		animationList.push(new MyParagraph(0, 50, 150,
			"You eat some food before",
			"your cryosleep.",
			"",
			""));
		animationList.push(new DrawThisObject("astronautIceCream", 350, 100));
        //animationList.push(new MyMovingTitle("       hello ----", 0, -450, 180));
		
        optionList = [];
        //Option(displayName, displayText, nextPageName)
		optionList.push(new PageOption("Take Pills",
        "You take your cryopills. " + _g_pathMainLabel,
        "takePills"));
		
        optionList.push(new PageOption("Hope the Pills Taste Better",
        "After almost puking, you take your cryopills. " + _g_pathMainLabel,
        "takePills"));
		
		_storyPage.push(new PageBasic("eatFood",animationList,optionList));
	
		//////////
        //////////

		
        animationList = [];
        animationList.push(new MyTitle("Take Pills", 0, 100, 80));
		animationList.push(new MyParagraph(0, 50, 150,
			"You take your cryopills,",
			"which allow you to go into",
			"cryosleep and sleep for",
			"months at a time."));
		
		animationList.push(new DrawThisObject("pills", 300, 100));
		
        //animationList.push(new MyMovingTitle("       hello ----", 0, -450, 180));
		
        optionList = [];
        //Option(displayName, displayText, nextPageName)
		optionList.push(new PageOption("Get Some Rest",
        "You decide to go to sleep to prepare for the long journey ahead. " + _g_pathMainLabel,
        "getRest"));
		
        optionList.push(new PageOption("Take a Nap",
        "There's not much else to do, so you take a nap. " + _g_pathMainLabel,
        "getRest"));
		
		_storyPage.push(new PageBasic("takePills",animationList,optionList));
	
		//////////
        //////////


        animationList = [];
        animationList.push(new MyTitle("Rest", 0, 150, 80));
        //animationList.push(new MyMovingTitle("       hello ----", 0, -450, 180));

		animationList.push(new Bedroom());
		animationList.push(new DrawThisObject("astronaut", 150, 150));
		
        optionList = [];
        //Option(displayName, displayText, nextPageName)
		optionList.push(new PageOption("Wake Up",
        "An alarm is going off, causing you to wake up. " + _g_pathMainLabel,
        "wakeUp"));
		
        optionList.push(new PageOption("Reluctantly Wake Up",
        "An alarm is going off, causing you to wake up. You turn off your alarm clock, and try to go back to sleep, but the buzzing continues. " + _g_pathMainLabel,
        "wakeUp"));
		
		_storyPage.push(new PageBasic("getRest",animationList,optionList));
		
		//////////
        //////////


        animationList = [];
        animationList.push(new MyTitle("Awaken", 0, 150, 80));
		animationList.push(new MySpaceBackground("asteroids"));
		animationList.push(new ShipRight("ship", 0, 125, 200));
		animationList.push(new MyDarkBGParagraph(0, 10, 20,
			"There is an alert for an asteroid field ahead.",
			"You must choose to go through the asteroids",
			"and save fuel, or go around the asteroids and",
			"lose fuel."));
        //animationList.push(new MyMovingTitle("       hello ----", 0, -450, 180));

        optionList = [];
        //Option(displayName, displayText, nextPageName)
		optionList.push(new PageOption("Go Through the Asteroids",
        "You decide to enter the asteroid field and save fuel. " + _g_pathMainLabel,
        "asteroidChallenge"));
		
        optionList.push(new PageOption("Avoid the Asteroids",
        "You decide to attempt going around the asteroid field and lose fuel. " + _g_pathSideLabel,
        "avoidAsteroids"));
		
		_storyPage.push(new PageBasic("wakeUp",animationList,optionList));
		
		//////////
        //////////


        animationList = [];
        animationList.push(new MyTitle("Avoid Asteroids", 0, 150, 80));
		animationList.push(new MySpaceBackground("asteroids"));
		animationList.push(new ShipRight("ship", 0, 125, 200));
		animationList.push(new MyDarkBGParagraph(0, 10, 20,
			"You try to avoid the asteroids,",
			"but you can't see the end of the",
			"asteroid field.",
			""));
        //animationList.push(new MyMovingTitle("       hello ----", 0, -450, 180));
		
        optionList = [];
        //Option(displayName, displayText, nextPageName)
		
		optionList.push(new PageOption("Continue",
        "Continue flying, and try to find a way around the asteroid field. " + _g_pathSideLabel,
        "wakeUp"));
		
		optionList.push(new PageOption("Go Through the Asteroids",
        "You decide to enter the asteroid field and save fuel. " + _g_pathMainLabel,
        "asteroidChallenge"));
		
		_storyPage.push(new PageBasic("avoidAsteroids",animationList,optionList));
		
		//////////
        //////////

        animationList = [];
        animationList.push(new MyTitle("Asteroids", 0, 150, 80));
		animationList.push(new MySpaceBackground("asteroids2"));
		animationList.push(new ShipRight("ship", 0, 200, 200));
		animationList.push(new MyDarkBGParagraph(0, 10, 20,
			"You decide to go through the asteroids.",
			"",
			"",
			""));
        //animationList.push(new MyMovingTitle("       hello ----", 0, -450, 180));
		
        optionList = [];
        //Option(displayName, displayText, nextPageName)
		
		optionList.push(new PageOption("The Ship Is Damaged",
        "While going through the asteroid field, your ship is damaged. " + _g_pathMainLabel,
        "damagedShip"));
		
		optionList.push(new PageOption("You Broke Some Stuff",
        "Were you texting and flying when you hit those asteroids? " + _g_pathMainLabel,
        "damagedShip"));
		
		_storyPage.push(new PageBasic("asteroidChallenge",animationList,optionList));
		
		//////////
        //////////

		
        animationList = [];
        animationList.push(new MyTitle("Damaged", 0, 150, 80));
		animationList.push(new MySpaceBackground("asteroids3"));
		animationList.push(new ShipRight("ship", 0, 350, 200));
		animationList.push(new MyDarkBGParagraph(0, 10, 20,
			"Your ship was damaged while navigating",
			"the asteroid field.",
			"",
			""));
        //animationList.push(new MyMovingTitle("       hello ----", 0, -450, 180));
		
        optionList = [];
        //Option(displayName, displayText, nextPageName)
		
		optionList.push(new PageOption("Check the Ship",
        "You made it out alive, but the ship is damaged, and you decide to check it. " + _g_pathMainLabel,
        "checkShip"));
		
		optionList.push(new PageOption("Check the Ship",
        "You don't want to check the ship, but an annoying alarm is buzzing until you do. " + _g_pathMainLabel,
        "checkShip"));
		
		_storyPage.push(new PageBasic("damagedShip",animationList,optionList));
		
		//////////
        //////////

        animationList = [];
        animationList.push(new MyTitle("Damage", 0, 150, 80));
		animationList.push(new MyParagraph(0, 50, 150,
			"This page will ask the player",
			"if they want to repair the ship.",
			"",
			""));
        //animationList.push(new MyMovingTitle("       hello ----", 0, -450, 180));

		animationList.push(new MySpaceBackground("space"));
		animationList.push(new DrawThisObject("flames", 250, 80));
		animationList.push(new DrawThisObject("shipLargeRight", 150, 50));
		animationList.push(new MyDarkBGParagraph(0, 10, 20,
			"You checked the ship, and the damage looks",
			"severe. You think that it is able to be repaired.",
			"",
			""));
		
        optionList = [];
        //Option(displayName, displayText, nextPageName)
		optionList.push(new PageOption("Repair the Ship",
        "You decide to do an EVA and repair the outer hull of the ship. " + _g_pathMainLabel,
        "repairShip"));
		
        optionList.push(new PageOption("Don't Repair the Ship",
        "You decide not to repair the outer hull of the ship. " + _g_pathSideLabel,
        "doNotRepairShip"));
		
		_storyPage.push(new PageBasic("checkShip",animationList,optionList));
		
		//////////
        //////////

		
        animationList = [];
        animationList.push(new MyTitle("Damage", 0, 150, 80));
		animationList.push(new MyParagraph(0, 50, 150,
			"This page will ask the player",
			"if they want to repair the ship.",
			"",
			""));
        //animationList.push(new MyMovingTitle("       hello ----", 0, -450, 180));

		animationList.push(new MySpaceBackground("space"));
		animationList.push(new DrawThisObject("flames", 250, 80));
		animationList.push(new DrawThisObject("shipLargeRight", 150, 50));
		animationList.push(new MyDarkBGParagraph(0, 10, 20,
			"The ship is no longer able to move.",
			"",
			"",
			""));
		
        optionList = [];
        //Option(displayName, displayText, nextPageName)
		optionList.push(new PageOption("Repair the Ship",
        "You decide to do an EVA and repair the outer hull of the ship. " + _g_pathMainLabel,
        "repairShip"));
		
        optionList.push(new PageOption("Don't Repair the Ship",
        "You decide not to repair the outer hull of the ship. " + _g_pathSideLabel,
        "doNotRepairShipAgain"));
		
		_storyPage.push(new PageBasic("doNotRepairShip",animationList,optionList));
		
		//////////
        //////////

		
        animationList = [];
        animationList.push(new MyTitle("Damage", 0, 150, 80));
		animationList.push(new MyParagraph(0, 50, 150,
			"This page will ask the player",
			"if they want to repair the ship.",
			"",
			""));
        //animationList.push(new MyMovingTitle("       hello ----", 0, -450, 180));

		animationList.push(new MySpaceBackground("space"));
		animationList.push(new DrawThisObject("flames", 250, 80));
		animationList.push(new DrawThisObject("shipLargeRight", 150, 50));
		animationList.push(new MyDarkBGParagraph(0, 10, 20,
			"The ship's computer is no longer working.",
			"",
			"",
			""));
		
        optionList = [];
        //Option(displayName, displayText, nextPageName)
		optionList.push(new PageOption("Repair the Ship",
        "You decide to do an EVA and repair the outer hull of the ship. " + _g_pathMainLabel,
        "repairShip"));
		
        optionList.push(new PageOption("Don't Repair the Ship",
        "You decide not to repair the outer hull of the ship. " + _g_pathSideLabel,
        "doNotRepairShip"));
		
		_storyPage.push(new PageBasic("doNotRepairShipAgain",animationList,optionList));
		
		//////////
        //////////


        animationList = [];
        animationList.push(new MyTitle("Repair", 0, 150, 80));
		animationList.push(new MyParagraph(0, 50, 150,
			"This page have an animation of",
			"Major Tom repairing the ship.",
			"",
			""));
        //animationList.push(new MyMovingTitle("       hello ----", 0, -450, 180));

		animationList.push(new MySpaceBackground("space"));
		animationList.push(new DrawThisObject("flames", 250, 80));
		animationList.push(new DrawThisObject("shipLargeRight", 150, 50));
		animationList.push(new DrawThisObject("astronaut", 300, 20));
		animationList.push(new MyDarkBGParagraph(0, 10, 20,
			"You work on repairing the ship.",
			"",
			"",
			""));
		
        optionList = [];
        //Option(displayName, displayText, nextPageName)
		
		optionList.push(new PageOption("Check The Systems",
        "You decide to check your ship's systems. " + _g_pathMainLabel,
        "systemsCheck"));
		
		optionList.push(new PageOption("Check The Systems",
        "You used a lot of duct tape, and you want to make sure it actually fixed everything. " + _g_pathMainLabel,
        "systemsCheck"));
		
		_storyPage.push(new PageBasic("repairShip",animationList,optionList));
		
		//////////
        //////////


        animationList = [];
        animationList.push(new MyTitle("Systems Check", 0, 150, 80));
		animationList.push(new MyParagraph(0, 50, 150,
			"You check all the systems on",
			"your ship.",
			"",
			""));
        //animationList.push(new MyMovingTitle("       hello ----", 0, -450, 180));

		animationList.push(new MySpaceBackground("space"));
		//animationList.push(new DrawThisObject("flames", 250, 80));
		animationList.push(new DrawThisObject("shipLargeRight", 150, 50));
		//animationList.push(new DrawThisObject("astronaut", 300, 20));
		animationList.push(new MyDarkBGParagraph(0, 10, 20,
			"Everything seems to be in working",
			"order now.",
			"",
			""));
		
        optionList = [];
        //Option(displayName, displayText, nextPageName)
		
		optionList.push(new PageOption("Go Back To Sleep",
        "You start the engines and go back to cryosleep for the rest of your journey. " + _g_pathMainLabel,
        "backToSleep"));
		
		optionList.push(new PageOption("That Was Hard Work",
        "You start the engines and take a nap. " + _g_pathMainLabel,
        "backToSleep"));
		
		_storyPage.push(new PageBasic("systemsCheck",animationList,optionList));
		
		//////////
        //////////
		

        animationList = [];
        animationList.push(new MyTitle("Sleep", 0, 150, 80));
		animationList.push(new MyParagraph(0, 50, 150,
			"You go back to sleep for",
			"the rest of your journey.",
			"",
			""));
			
		animationList.push(new Bedroom());
		animationList.push(new DrawThisObject("astronaut", 150, 150));
        //animationList.push(new MyMovingTitle("       hello ----", 0, -450, 180));

        optionList = [];
        //Option(displayName, displayText, nextPageName)
		
		optionList.push(new PageOption("Wake Up",
        "You have entered Mars' orbit. " + _g_pathMainLabel,
        "putOnSuit"));
		
		optionList.push(new PageOption("Wake Up",
        "The computer alerts you that Mars is nearby. " + _g_pathMainLabel,
        "putOnSuit"));
		
		_storyPage.push(new PageBasic("backToSleep",animationList,optionList));
		
		//////////
        //////////
		
		

        animationList = [];
        animationList.push(new MyTitle("Suit Up", 0, 150, 80));
		animationList.push(new MyParagraph(0, 50, 150,
			"You put your space suit on as",
			"your ship approaches Mars.",
			"",
			""));
        //animationList.push(new MyMovingTitle("       hello ----", 0, -450, 180));

		animationList.push(new DrawThisObject("astronaut", 350, 125));
		
        optionList = [];
        //Option(displayName, displayText, nextPageName)
		
		optionList.push(new PageOption("Prepare for Descent",
        "You have reached Mars and must prepare to descend to the Red Planet. " + _g_pathMainLabel,
        "prepareToDescend"));
		
		optionList.push(new PageOption("Prepare for Descent",
        "It's gonna be a bumpy ride. " + _g_pathMainLabel,
        "prepareToDescend"));
		
		_storyPage.push(new PageBasic("putOnSuit",animationList,optionList));
		
		//////////
        //////////
		
		animationList = [];
        //animationList.push(new MyTitle("Prepare", 0, 150, 80));
		animationList.push(new MyParagraph(0, 50, 200,
			"You must click each button so that you can",
			"prepare the ship for descent to Mars.",
			"",
			""));
        //animationList.push(new MyMovingTitle("       hello ----", 0, -450, 180));

		animationList.push(new Button("button", 0, 100, 100));
		animationList.push(new Button("button2", 0, 250, 100));
		animationList.push(new Button("button3", 0, 400, 100));
		
        optionList = [];
        //Option(displayName, displayText, nextPageName)
		
		optionList.push(new PageOption("Stay Onboard",
        "You decide to stay onboard the ship. " + _g_pathSideLabel,
        "stayOnboard"));
		
		optionList.push(new PageOption("Descend to Mars",
        "You decide to descend to Mars' surface. " + _g_pathMainLabel,
        "descendToMars"));
		
		_storyPage.push(new PageHitButtons("prepareToDescend",animationList,optionList));
		
		//////////
        //////////
		
		//////////
        //////////


        animationList = [];
        animationList.push(new MyTitle("Systems Check", 0, 150, 80));
		animationList.push(new MyParagraph(0, 50, 150,
			"You check all the systems on",
			"your ship.",
			"",
			""));
        //animationList.push(new MyMovingTitle("       hello ----", 0, -450, 180));

		animationList.push(new MySpaceBackground("mars"));
		animationList.push(new ShipRight("shipRight", 0, 180, 150));
		animationList.push(new MyDarkBGParagraph(0, 10, 20,
			"You decide to stay in Mars",
			"orbit for a little while.",
			"",
			""));
		
        optionList = [];
        //Option(displayName, displayText, nextPageName)
		
		optionList.push(new PageOption("Descend to Mars",
        "You decide to descend to Mars' surface. " + _g_pathMainLabel,
        "descendToMars"));
		
		optionList.push(new PageOption("Ditch the Ship",
        "You're sick of the ship, so you decide that you are going to leave it in some parking lot on Mars. " + _g_pathMainLabel,
        "descendToMars"));
		
		_storyPage.push(new PageBasic("stayOnboard",animationList,optionList));
		
		//////////
        //////////


        animationList = [];
        animationList.push(new MyTitle("Descent", 0, 150, 80));
		animationList.push(new MyParagraph(0, 50, 150,
			"This page will have an animation",
			"showing the ship descending to Mars.",
			"",
			""));
        //animationList.push(new MyMovingTitle("       hello ----", 0, -450, 180));
		
		animationList.push(new MySpaceBackground("mars2"));
		animationList.push(new Ship("descent", 0, 250, 100));
		animationList.push(new MyDarkBGParagraph(0, 10, 20,
			"Your engines ignite as you",
			"reverse thrust and descend",
			"to Mars surface.",
			""));
		
        optionList = [];
        //Option(displayName, displayText, nextPageName)
		
		optionList.push(new PageOption("Land Your Ship",
        "Land on the surface of Mars. " + _g_pathMainLabel,
        "landShip"));
		
		optionList.push(new PageOption("Continue Your Descent",
        "Continue descending and land on Mars. " + _g_pathMainLabel,
        "landShip"));
		
		_storyPage.push(new PageBasic("descendToMars",animationList,optionList));
		
		//////////
        //////////
		

        animationList = [];
        animationList.push(new MyTitle("Landing", 0, 150, 80));
        //animationList.push(new MyMovingTitle("       hello ----", 0, -450, 180));
		
		animationList.push(new MySpaceBackground("mars3"));
		animationList.push(new Ship("Basket", 0, 250, 200));
		animationList.push(new MyParagraph(0, 10, 20,
			"You successfully landed on the surface of Mars.",
			"",
			"",
			""));
		
        optionList = [];
        //Option(displayName, displayText, nextPageName)
		
		optionList.push(new PageOption("End Game",
        "Go to the end game screen. " + _g_pathMainLabel,
        "end"));
		
		optionList.push(new PageOption("Game Over",
        "Go to the end game screen. " + _g_pathMainLabel,
        "end"));
		
		_storyPage.push(new PageBasic("landShip",animationList,optionList));
		
		//////////
        //////////


        animationList = [];
		
		animationList.push(new MySpaceBackground("mars3"));
		animationList.push(new DrawThisObject("meteorite", 25, 100));
		animationList.push(new DrawThisObject("astronautGuitar", 150, 125));
        animationList.push(new MyTitle("The End", 0, 120, 80));
        //animationList.push(new MyMovingTitle("       hello ----", 0, -450, 180));

        optionList = [];
        //Option(displayName, displayText, nextPageName)
		
		optionList.push(new PageOption("Restart",
        "Restart the game.",
        "splashPage"));
		
		optionList.push(new PageOption("Start Over",
        "Restart the game.",
        "splashPage"));
		
		_storyPage.push(new PageBasic("end",animationList,optionList));
		
		
		
	


        ////////////////////////////////////////////////////////////  *************
        //////////
        
        
        //////////
        //////////


        //////////
        //////////
        
        
        //////////
        //////////


        //////////
        //////////


        animationList = [];
        animationList.push(new MyTitle("The End", 0, 50, 80));

        optionList = [];
        //Option(displayName, displayText, nextPageName)
        optionList.push(new PageOption("restart story",
        "end of story",
        "pageOne"));

        optionList.push(new PageOption("restart story",
        "end of story",
        "pageOne"));



        _storyPage.push(new PageSimpleEnd("pageEnd",animationList,optionList));
        
        //alert("emd getStoryPagesTestZero()");

        return _storyPage;

    }
    
    ////////////////////////////////
    ////////////////////////////////

    function getStoryPagesTestZero()   //private function
    {
    
    	//alert("start getStoryPagesTestZero()");

        _storyPage = [];
        
        
        var animationList = [];
        animationList.push(new MyTitle("Page Not Found", 0, 30, 80));
        animationList.push(new MyTitle(name, 0, 30, 180));
        
        var theText = "The requested page was not found in the MyStory.js file. Check the name of your page reference.";
        animationList.push(new MyScrollingText(theText, 150, 250, 270));

		//animationList.push(new MyMovingTitle("tester", 0, 30, 180));

        var optionList = [];
        optionList.push(new PageOption("Sorry.",
        "Your story was not found.",
        "notFound"));

        optionList.push(new PageOption("Sorry.",
        "Your story was not found.",
        "notFound"));

        //alert("optionList[0].value   "+optionList[0].value);

        _storyPage.push(new PageBasic("notFound",animationList,optionList));
        //////////
        //////////

        animationList = [];
        //animationList.push(new MyMovingTitle("Hello There", 0, 150, 80));
        animationList.push(new MyMovingTitle("Page One", 20, -250, 80));
        //animationList.push(new MyMovingTitle("Page One", -200, -450, 180));


        optionList = [];
        optionList.push(new PageOption("go pageFour",
        "You decide to try pageFour.",
        "pageFour"));

        optionList.push(new PageOption("go pageFive",
        "You decide to try pageFive.",
        "pageFive"));

        //alert("optionList[0].value   "+optionList[0].value);

        _storyPage.push(new PageBasic("pageOne",animationList,optionList));
        //////////
        //////////


        animationList = [];
        animationList.push(new MyTitle("pageFive", 0, 150, 80));

        optionList = [];
        optionList.push(new PageOption("end story",
        "You decide to end the story.",
        "pageEnd"));

        optionList.push(new PageOption("restart story",
        "You decide to restart the story.",
        "pageOne"));

        _storyPage.push(new PageBasic("pageFive",animationList,optionList));
        //////////
        //////////


        animationList = [];
        animationList.push(new MyTitle("pageFour", 0, 150, 80));
        animationList.push(new MyMovingTitle("       hello ----", 0, -450, 180));

        optionList = [];
        //Option(displayName, displayText, nextPageName)
        optionList.push(new PageOption("try again",
        "You decide to restart this page.",
        "pageFour"));

        optionList.push(new PageOption("restart story",
        "You decide to restart the story.",
        "pageOne"));



        _storyPage.push(new PageBasic("pageFour",animationList,optionList));


        //////////
        //////////


        animationList = [];
        animationList.push(new MyTitle("The End", 0, 50, 80));

        optionList = [];
        //Option(displayName, displayText, nextPageName)
        optionList.push(new PageOption("restart story",
        "end of story",
        "pageOne"));

        optionList.push(new PageOption("restart story",
        "end of story",
        "pageOne"));



        _storyPage.push(new PageSimpleEnd("pageEnd",animationList,optionList));
        
        //alert("emd getStoryPagesTestZero()");

        return _storyPage;

    }
    
    ////////////////////////////////
    ////////////////////////////////
    function getStoryPagesTestOne()   //private function
    {

        _storyPage = [];
        
        
        var animationList = [];
        animationList.push(new MyTitle("Page Not Found", 0, 30, 80));
        animationList.push(new MyTitle(name, 0, 30, 180));
        
        var theText = "The requested page was not found in the MyStory.js file. Check the name of your page reference.";
        animationList.push(new MyScrollingText(theText, 150, 250, 270));

		//animationList.push(new MyMovingTitle("tester", 0, 30, 180));

        var optionList = [];
        optionList.push(new PageOption("Sorry.",
        "Your story was not found.",
        "notFound"));

        optionList.push(new PageOption("Sorry.",
        "Your story was not found.",
        "notFound"));

        //alert("optionList[0].value   "+optionList[0].value);

        _storyPage.push(new PageBasic("notFound",animationList,optionList));
        //////////
        //////////

        animationList = [];
        animationList.push(new MyMovingTitle("1 1", 0, -250, 80));
        animationList.push(new MyMovingTitle("one  one", 0, -250, 180));


        optionList = [];
        optionList.push(new PageOption("go pageFour",
        "You decide to do pageFour.",
        "pageFour"));

        optionList.push(new PageOption("go pageFive",
        "You decide to do pageFive.",
        "pageFive"));

        //alert("optionList[0].value   "+optionList[0].value);

        _storyPage.push(new PageBasic("one",animationList,optionList));
        //////////
        //////////

        animationList = [];
        animationList.push(new MyMovingTitle("22222", 0, -250, 80));
        animationList.push(new MyMovingTitle("two 22 two", 0, -250, 180));


        optionList = [];
        optionList.push(new PageOption("go pageFour",
        "You decide to do pageFour.",
        "pageFour"));

        optionList.push(new PageOption("go pageFive",
        "You decide to do pageFive.",
        "pageFive"));
        _storyPage.push(new PageBasic("two",animationList,optionList));
        //////////
        //////////


        animationList = [];
        animationList.push(new MyMovingTitle("22222", 0, -250, 80));
        animationList.push(new Ball("Ball1", 0, 50, 180));
        animationList.push(new Ball("Ball2", 0, 250, 280));


        optionList = [];
        optionList.push(new PageOption("one",
        "'one' looks exciting.",
        "one"));

        optionList.push(new PageOption("two",
        "Your favorite number is 'two'.",
        "two"));


        _storyPage.push(new PageBasic("three",animationList,optionList));
        //////////
        //////////


        animationList = [];
        animationList.push(new MyMovingTitle("pageFive", 0, -250, 80));
        animationList.push(new MyMovingTitle("---- pageFive ----", 0, -250, 180));

        optionList = [];
        optionList.push(new PageOption("tres",
        "You decide to do three.",
        "three"));

        optionList.push(new PageOption("cuatro",
        "You decide to do pageFour.",
        "pageFour"));

        _storyPage.push(new PageBasic("pageFive",animationList,optionList));
        //////////
        //////////


        animationList = [];
        animationList.push(new MyMovingTitle("FOUR  FOUR", 0, -250, 80));
        animationList.push(new MyMovingTitle("---- page FOUR ----", 0, -250, 180));

        optionList = [];
        //Option(displayName, displayText, nextPageName)
        optionList.push(new PageOption("go one",
        "You decide to do one.",
        "one"));

        optionList.push(new PageOption("go two",
        "You decide to do two.",
        "two"));



        _storyPage.push(new PageBasic("pageFour",animationList,optionList));

        return _storyPage;

    }
    
    ////////////////////////////////
    ////////////////////////////////
    function getStoryOranges()   //private function
    {

		//alert("found getStoryOranges() !!!");
		
        _storyPage = [];
        
        var animationList = [];
        animationList.push(new MyTitle("Page Not Found", 0, 30, 80));
        animationList.push(new MyTitle(name, 0, 30, 180));
        
        var theText = "The requested page was not found in the MyStory.js file. Check the name of your page reference.";
        animationList.push(new MyScrollingText(theText, 150, 250, 270));

		//animationList.push(new MyMovingTitle("tester", 0, 30, 180));

        var optionList = [];
        optionList.push(new PageOption("Sorry.",
        "Your page was not found.",
        "notFound"));

        optionList.push(new PageOption("Sorry.",
        "Your page was not found.",
        "notFound"));

        //alert("optionList[0].value   "+optionList[0].value);

        _storyPage.push(new PageBasic("notFound",animationList,optionList));
        //////////
        //////////
        //alert("getStoryOranges() 1");
        
        animationList = [];
        animationList.push(new MyMovingOrangeTitle("Oranges", 0, -250, 80));
        //animationList.push(new MyMovingTitle("(with the Orange Game)", 0, -250, 180));


        optionList = [];
        optionList.push(new PageOption("head for the orange grove",
        "You decide to walk down the path towards the orange grove.",
        "pageHeadForOranges"));

        optionList.push(new PageOption("take a little nap",
        "You are feeling sleepy, so a short nap seems ideal to you. There is a very comfortable rocking chair nearby.",
        "pageNapTime"));

        //alert("optionList[0].value   "+optionList[0].value);

        _storyPage.push(new PageBasic("start",animationList,optionList));
        //////////
        //////////
        //alert("getStoryOranges() 2");
       
        animationList = [];
        //animationList.push(new MyMovingTitle("Oranges", 0, -250, 80));
        animationList.push(new Goal_1("goal one", 0, 50, 80));
        
        animationList.push(new MyParagraph( 0, 50, 180,
        	"You are walking down a pleasant road",
        	"lined with beautiful flowers.",
        	"And you arrive at a fork in the road.",
        	"Should you go left or right?"));


        optionList = [];
        optionList.push(new PageOption("take the left path",
        "The left path looks fun and exciting.",
        "start"));

        optionList.push(new PageOption("take the right path",
        "The right path smells like oranges.",
        "pageOrangeTree"));

        //alert("optionList[0].value   "+optionList[0].value);

        _storyPage.push(new PageBasic("pageHeadForOranges",animationList,optionList));
        //////////
        //////////
        //alert("getStoryOranges() 3");
         
        animationList = [];
        animationList.push(new MyTitle("Orange Tree", 0, 50, 80));
        
        animationList.push(new MyParagraph( 0, 50, 180,
        	"Move the oranges just for fun.",
        	"Then move on to the next",
        	"orange tree.",
        	"  "));
        	
        animationList.push(new Ball( "Ball1",0, 350, 180));
        animationList.push(new Ball( "Ball2",0, 370, 250));
        animationList.push(new Ball( "Ball3",0, 450, 230));





        optionList = [];
        optionList.push(new PageOption("try the next tree",
        "There is another tree nearby that looks very interesting.",
        "pageOrangeTree2"));

        optionList.push(new PageOption("take the right path",
        "The right path looks a little dangerous.",
        "start"));

        //alert("optionList[0].value   "+optionList[0].value);

        _storyPage.push(new PageBasic("pageOrangeTree",animationList,optionList));
        //_storyPage.push(new PageDropObjectInBasket("pageOrangeTree",animationList,optionList));
        
        
        //////////
        //////////
        //alert("getStoryOranges() 4");
         
        animationList = [];
        animationList.push(new MyTitle("Orange Tree 2", 0, 50, 80));
        
        
        animationList.push(new MyParagraph( 0, 50, 180,
        	"Move the oranges to the Basket.",
        	"Then move on to the next",
        	"orange tree.",
        	"  "));
        	
    	animationList.push(new Ball( "Ball1",0, 35, 270));
        animationList.push(new Ball( "Ball2",0, 135, 270));
        animationList.push(new Ball( "Ball3",0, 235, 270));

		animationList.push(new Basket( "Basket",0, 400, 280));
        

		//alert("animationList.length  "+animationList.length);

        optionList = [];
        optionList.push(new PageOption("try the next tree",
        "There is another tree nearby that looks very interesting.",
        "pageOrangeTree3"));

        optionList.push(new PageOption("take the right path",
        "The right path looks a little dangerous.",
        "start"));

        //alert("optionList[0].value   "+optionList[0].value);

        _storyPage.push(new PageDropObjectInBasket("pageOrangeTree2",animationList,optionList));
        //_storyPage.push(new PageDropObjectInBasket("pageOrangeTree2",animationList,optionList));
        
        
        //////////
        //////////
        //alert("getStoryOranges() 5"); 
         
        animationList = [];
        animationList.push(new MyTitle("Orange Tree 3", 0, 50, 80));
        
        
        animationList.push(new MyParagraph( 0, 50, 180,
        	"This is the last page.",
        	"You can start over by",
        	"clicking one of the 'start'",
        	"buttons."));
        	
        	
        animationList.push(new Ball( "Ball1",0, 70, 60));
        

        optionList = [];
        optionList.push(new PageOption("start",
        "You've had fun and would like to start again.",
        "start"));

        optionList.push(new PageOption("start",
        "You enjoy being in and endless loop, and would really like to start again.",
        "start"));

        //alert("optionList[0].value   "+optionList[0].value);

        _storyPage.push(new PageBasic("pageOrangeTree3",animationList,optionList));
        
        
        //////////
        //////////
        
        //alert("end of getStoryOranges() !!!");
       
        return _storyPage;
        
        
    }
    ////////////////////////////////
    ////////////////////////////////
    
    function getStoryZapper()   //private function
    {

        _storyPage = [];
        
        
        var animationList = [];
        animationList.push(new MyBackground("MyBackground", 0, 0, 0));
        
        animationList.push(new MyTitle("Page Not Found", 0, 30, 80));
        animationList.push(new MyTitle(name, 0, 30, 180));
        
        var theText = "The requested page was not found in the MyStory.js file. Check the name of your page reference.";
        animationList.push(new MyScrollingText(theText, 150, 250, 270));

		//animationList.push(new MyMovingTitle("tester", 0, 30, 180));

        var optionList = [];
        optionList.push(new PageOption("Sorry.",
        "Your story was not found.",
        "notFound"));

        optionList.push(new PageOption("Sorry.",
        "Your story was not found.",
        "notFound"));

        //alert("optionList[0].value   "+optionList[0].value);

        _storyPage.push(new PageBasic("notFound",animationList,optionList));
        //////////
        //////////

        animationList = [];
        animationList.push(new MyBackground("MyBackground", 0, 0, 0));
        
        //animationList.push(new MyMovingTitle("1 1", 0, -250, 80));
        animationList.push(new MyMovingOrangeTitle("Zapper Game Day", 0, -394, 140));


        optionList = [];
        optionList.push(new PageOption("sleep",
        _g_pathSideLabel+"You feel like sleeping a little longer.",
        "pageSleep"));

        optionList.push(new PageOption("begin the day",
        _g_pathMainLabel+"You are ready to begin your day.",
        "pageBeginDay"));

        //alert("optionList[0].value   "+optionList[0].value);

        _storyPage.push(new PageBasic("pageTitle",animationList,optionList));
       
       
        //////////
        //////////
         
         
        animationList = [];
        animationList.push(new MyBackground("MyBackground", 0, 0, 0));
        
        //animationList.push(new MyTitle("Orange Tree 3", 0, 50, 80));
        
        
        animationList.push(new MyParagraph( 0, 50, 180,
        	"After getting dressed you ask Mom if it's ok to",
        	"play your your favorite computer game, Zapper. ",
        	"She says that you have to do your ",
        	"homework and clean your room first."));
        	
        	
        //animationList.push(new Ball( "Ball1",0, 70, 60));
        

        optionList = [];
        optionList.push(new PageOption("do homework",
        _g_pathMainLabel+"You go to the living room to work on your homework.",
        "pageDoHomework"));

        optionList.push(new PageOption("sleep",
        _g_pathSideLabel+"You suddenly feel very sleepy.",
        "pageSleep"));

        //alert("optionList[0].value   "+optionList[0].value);

        _storyPage.push(new PageBasic("pageBeginDay",animationList,optionList));
        
        
		 //////////
        //////////
         
         
        animationList = [];
        animationList.push(new MyBackground("MyBackground", 0, 0, 0));
        
        //animationList.push(new MyTitle("Orange Tree 3", 0, 50, 80));
        
       
        	
        //animationList.push(new Ball( "Ball1",0, 70, 60));
        

        optionList = [];
        optionList.push(new PageOption("do homework",
        _g_pathMainLabel+"Now you start working on your math homework.",
        "pageDoMathHomework"));

        optionList.push(new PageOption("sleep",
        _g_pathSideLabel+"You suddenly feel very sleepy.",
        "pageSleep"));

        //alert("optionList[0].value   "+optionList[0].value);

        _storyPage.push(new PageQuiz1("pageDoHomework",animationList,optionList));
        
        //PageQuiz1
		
        //////////
        //////////
         
         
        animationList = [];
        animationList.push(new MyBackground("MyBackground", 0, 0, 0));
        
        
        animationList.push(new MyParagraph( 0, 50, 180,
        	"Solve three math problems.",
        	" ",
        	"Number correct so far:",
        	" "));
        	
        	
        //animationList.push(new Ball( "Ball1",0, 70, 60));
        

        optionList = [];
        optionList.push(new PageOption("do homework",
        "The homework was fun, so you decide to do some more.",
        "pageDoHomework"));

        optionList.push(new PageOption("clean your room",
        _g_pathMainLabel+"You are eager to clean your room, because then you can play Zapper.",
        "pageCleanRoom"));

        //alert("optionList[0].value   "+optionList[0].value);

        _storyPage.push(new PageMathProblems("pageDoMathHomework",animationList,optionList));
        
        //////////
        //////////
         
         
        animationList = [];
        animationList.push(new MyBackgroundForCleanRoom("MyBackgroundForCleanRoom", 0, 0, 0));
        
        //animationList.push(new MyTitle("Orange Tree 3", 0, 50, 80));
        
        
        animationList.push(new MyParagraph( 0, 50, 40,
        	"Clean your room by putting your ",
        	"clothes in the basket. ",
        	" ",
        	" "));
        	
        	
        	
        animationList.push(new MyImage( "shirt",0, 60+35, 127));
        animationList.push(new MyImage( "shoes",0, 60+135, 127));
        animationList.push(new MyImage( "pants",0, 60+235, 127));
        
        animationList.push(new Ball( "shirt",0, 35, 270));
        animationList.push(new Ball( "shoe",0, 135, 270));
        animationList.push(new Ball( "pants",0, 235, 270));

		animationList.push(new Basket( "Basket",0, 400, 280));
        	
        //animationList.push(new Ball( "Ball1",0, 70, 60));
        

        optionList = [];
        optionList.push(new PageOption("do homework",
        "The homework was so fun that you decide to do a little more.",
        "pageDoHomework"));

        optionList.push(new PageOption("read Zapper instructions",
        _g_pathMainLabel+"You decide to read the Zapper instructions before playing.",
        "pageReadZapperInstructions"));

        //alert("optionList[0].value   "+optionList[0].value);

        _storyPage.push(new PageCleanRoom("pageCleanRoom",animationList,optionList));
        
        //////////
        //////////
         
         
        animationList = [];
        animationList.push(new MyBackground("MyBackground", 0, 0, 0));
        
        animationList.push(new MyTitle("Zapper", 0, 140, 60));
        animationList.push(new MyTitle("Instructions", 0, 80, 140));
        
        
        animationList.push(new MyParagraph( 0, 50, 170,
        	"    ",
        	"You need to Zap the aliens.",
        	"(Use keys a, s, d, and w to move the ship.) ",
        	"(Use the space bar to shoot.) "));
        	
        	
        //animationList.push(new Ball( "Ball1",0, 70, 60));
        

        optionList = [];
        optionList.push(new PageOption("new day",
        "Start another day.",
        "pageSleep"));

        optionList.push(new PageOption("play Zapper",
        _g_pathMainLabel+"You decide to play Zapper now.",
        "pagePlayZapper"));

        //alert("optionList[0].value   "+optionList[0].value);

        _storyPage.push(new PageBasic("pageReadZapperInstructions",animationList,optionList));
        //////////
        //////////
         
         
        animationList = [];
        animationList.push(new MyBackground("MyBackground", 0, 0, 0));
        
        //animationList.push(new MyTitle("Orange Tree 3", 0, 50, 80));
        
       
        	
        //animationList.push(new Ball( "Ball1",0, 70, 60));
        

        optionList = [];
        optionList.push(new PageOption("new day",
        _g_pathMainLabel+"Start another day.",
        "pageBeginDay2"));

        optionList.push(new PageOption("play Zapper",
        "You decide to play Zapper again.",
        "pagePlayZapper"));

        //alert("optionList[0].value   "+optionList[0].value);

        _storyPage.push(new PagePlayZapper("pagePlayZapper",animationList,optionList));
        
        //////////
        //////////
         
         
        animationList = [];
        animationList.push(new MyBackground("MyBackground", 0, 0, 0));
        
        //animationList.push(new MyTitle("Orange Tree 3", 0, 50, 80));
        
        
        animationList.push(new MyParagraph( 0, 50, 180,
        	"Sleeping is wonderful.",
        	"  ",
        	" ",
        	" "));
        	
        	
        //animationList.push(new Ball( "Ball1",0, 70, 60));
        

        optionList = [];
        optionList.push(new PageOption("sleep",
        "You go into a deep sleep.",
        "pageSleep"));

        optionList.push(new PageOption("sleep",
        _g_pathSideLabel+"You start dreaming.",
        "pageDream1"));

        //alert("optionList[0].value   "+optionList[0].value);

        _storyPage.push(new PageBasic("pageSleep",animationList,optionList));
        
        //////////
        //////////
         
         
        animationList = [];
        animationList.push(new MyBackground("MyBackground", 0, 0, 0));
        
        //animationList.push(new MyTitle("Orange Tree 3", 0, 50, 80));
        
        
        animationList.push(new MyParagraph( 0, 50, 180,
        	"You dream of playing Zapper.",
        	"  ",
        	"  ",
        	" "));
        	
        	
        //animationList.push(new Ball( "Ball1",0, 70, 60));
        

        optionList = [];
        optionList.push(new PageOption("strange turn",
        _g_pathSideLabel+"Your dream takes a strange turn.",
        "pageDream2"));

        optionList.push(new PageOption("sleep",
        "The Zapper dream continues.",
        "pageDream1"));

        //alert("optionList[0].value   "+optionList[0].value);

        _storyPage.push(new PageBasic("pageDream1",animationList,optionList));
        
        //////////
        //////////
         
         
        animationList = [];
        animationList.push(new MyBackground("MyBackground", 0, 0, 0));
        
        //animationList.push(new MyTitle("Orange Tree 3", 0, 50, 80));
        
        
        animationList.push(new MyParagraph( 0, 50, 180,
        	"Strange little boxes start ",
        	"flying around your head. ",
        	"  ",
        	" "));
        	
        	
        //animationList.push(new Ball( "Ball1",0, 70, 60));
        

        optionList = [];
        optionList.push(new PageOption("sleep",
        "The dream fades and you drift back into a peaceful sleep.",
        "pageSleep"));

        optionList.push(new PageOption("begin a new day",
        _g_pathSideLabel+"You are ready to begin your day.",
        "pageBeginDay"));

        //alert("optionList[0].value   "+optionList[0].value);

        _storyPage.push(new PageBasic("pageDream2",animationList,optionList));
        
        //////////
        //////////
         
         
        animationList = [];
        animationList.push(new MyBackground("MyBackground", 0, 0, 0));
        
        //animationList.push(new MyTitle("Orange Tree 3", 0, 50, 80));
        
        
        animationList.push(new MyParagraph( 0, 50, 180,
        	"After getting dressed you ask Mom if it's ok to",
        	"play your your favorite computer game, Zapper. ",
        	"She says that you have to do your ",
        	"homework and clean your room first."));
        	
        	
        //animationList.push(new Ball( "Ball1",0, 70, 60));
        

        optionList = [];
        optionList.push(new PageOption("do homework",
        "*You go to the living room to work on your homework.",
        "pageDoHomework"));

        optionList.push(new PageOption("sleep",
        _g_pathSideLabel+"You suddenly feel very sleepy.",
        "pageSleep"));

        //alert("optionList[0].value   "+optionList[0].value);

        _storyPage.push(new PageBasic("dddd",animationList,optionList));
        
        //////////
        //////////
         
         
        animationList = [];
        animationList.push(new MyBackground("MyBackground", 0, 0, 0));
        
        //animationList.push(new MyTitle("Orange Tree 3", 0, 50, 80));
        
        
        animationList.push(new MyParagraph( 0, 50, 180,
        	"After getting dressed you ask Mom if it's ok to",
        	"play your your favorite computer game, Zapper. ",
        	"She says that you have to do your ",
        	"homework and clean your room first."));
        	
        	
        //animationList.push(new Ball( "Ball1",0, 70, 60));
        

        optionList = [];
        optionList.push(new PageOption("do homework",
        "*You go to the living room to work on your homework.",
        "pageDoHomework"));

        optionList.push(new PageOption("sleep",
        _g_pathSideLabel+"You suddenly feel very sleepy.",
        "pageSleep"));

        //alert("optionList[0].value   "+optionList[0].value);

        _storyPage.push(new PageBasic("fffff",animationList,optionList));
        
         //////////
        //////////
         
         
        animationList = [];
        animationList.push(new MyBackground("MyBackground", 0, 0, 0));
        
        //animationList.push(new MyTitle("Orange Tree 3", 0, 50, 80));
        
        
        animationList.push(new MyParagraph( 0, 50, 180,
        	"After a good night's sleep you ask Mom if it's ok to",
        	"play your your favorite computer game, Zapper. ",
        	"She says that you have to do your ",
        	"homework and clean your room first."));
        	
        	
        //animationList.push(new Ball( "Ball1",0, 70, 60));
        

        optionList = [];
        optionList.push(new PageOption("do homework",
        _g_pathMainLabel+"You go to the living room to work on your homework.",
        "pageDoHomework"));

        optionList.push(new PageOption("sleep",
        _g_pathSideLabel+"You suddenly feel very sleepy.",
        "pageSleep"));

        //alert("optionList[0].value   "+optionList[0].value);

        _storyPage.push(new PageBasic("pageBeginDay2",animationList,optionList));
        
        
        

		return _storyPage;
 	}

	
}//end class
/////////////////////////////////////////////////////////////////////
