// Example array with objects that represent form elements
var formElementsArr = [
	{element: "input", type: "text"},
	{element: "input", type: "email"},
	{element: "input", type: "password"},
	{element: "input", type: "submit"},
	{element: "select", optVals: 3},
	{element: "textarea"},
	{element: "button"}
];

// Iterates through an array of objects representing form elements and outputs the form elements to the console.
function generateForm (formElements) {
	if (Array.isArray(formElements)){
		var elementsString = "<form>";
		var element;

		for(var i = 0; i < formElements.length; i++){
			if (typeof formElements[1] === 'object' && formElements[i].element){
				if(formElements[i].element == "input") {
					if(formElements[i].type == "text"){
						element = "<input type='text' />";
					}else if(formElements[i].type == "email"){
						element = "<input type='email' />";
					}else if(formElements[i].type == "password"){
						element = "<input type='password' />";
					}else if(formElements[i].type == "submit"){
						element = "<input type='submit' />";
					} else {
						element = "<input type='' />"
					}
				} else if (formElements[i].element == "textarea"){
					element = "<textarea></textarea>"
				} else if (formElements[i].element == "button"){
					element = "<button></button>"
				} else if (formElements[i].element == "select"){
					element = "<select>";
					for(var j = 0; j < formElements[i].optVals; j++){
						element += "<option value=''></option>";
					}
					element += "</select>";
				}
				elementsString += element;
			} else {
				console.log("Element at position " + i + " must be an object");
			}
		}
		elementsString += "</form>";
		console.log(elementsString);
	} else {
		console.log("Must be an array.");
	}
}

generateForm(formElementsArr);