/////////////////////////////////////////////////////////////////////
//start PageOption class


function PageOption(theButtonLabel, theDisplayText, theNextPageName)
{

	this.buttonLabel = theButtonLabel; 
	this.displayText = theDisplayText;
	this.nextPageName = theNextPageName;
	
	//alert("this.displayName     "+this.displayName);
	
	this.toString = function toString()
		{
			return "( "+this.buttonLabel+" -- "
				+this.displayText+" -- "
				+this.nextPageName+" )";
		}
	
}//end PageOption class
/////////////////////////////////////////////////////////////////////
