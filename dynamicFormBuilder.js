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

// Creates option elements for select element
function addOptions(elem, numOptions){
	elem = "<select>";
	for(var j = 0; j < numOptions; j++){
		elem += "<option value=''></option>";
	}
	elem += "</select>";
	return elem;
}

// Iterates through an array of objects representing form elements and outputs the form elements to the console.
function generateForm (formElements) {
	if (Array.isArray(formElements)){
		var elementsString = "<form>";
		var element;

		for(var i = 0; i < formElements.length; i++) { // Refactored conditional if statements to ternary operators
			element = (typeof formElements[i] === 'object' && formElements[i].element ? (formElements[i].element == "input" ? (formElements[i].type == "text" ? "<input type='text' />" : (formElements[i].type == "email") ? 
			"<input type='email' />" : (formElements[i].type == "password") ? "<input type='password' />" : (formElements[i].type == "submit") ? "<input type='submit' />" : "<input type='' />") : (formElements[i].element == "textarea") ? 
			"<textarea></textarea>" : (formElements[i].element == "button") ? "<button></button>" : (formElements[i].element == "select") ? addOptions(element, formElements[i].optVals) : "") : 
			console.log("Element at position " + i + " must be an object"));

			elementsString += element;
		}
		elementsString += "</form>";
		console.log(elementsString);
	} else {
		console.log("Must be an array.");
	}
}
generateForm(formElementsArr);