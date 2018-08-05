// Adds <option></option> elements inside <select></select> elements.
function addOptions(elem, numOptions){
	elem = "<select>";
	for(var j = 0; j < numOptions; j++){
		elem += "<option value=''></option>";
	}
	elem += "</select>";
	return elem;
}

// Parses array of html form element placeholders and outputs string containing the html for a form
exports.gen = (array) => {
	if (Array.isArray(array)){
		var elementsString = "<form>";
		var element;

		for(var i = 0; i < array.length; i++) { // Refactored conditional if statements to ternary operators
			element = (typeof array[i] === "object" && array[i].element ? (array[i].element == "input" ? (array[i].type == "text" ? "<input type='text' />" : (array[i].type == "email") ? 
				"<input type='email' />" : (array[i].type == "password") ? "<input type='password' />" : (array[i].type == "submit") ? "<input type='submit' />" : "<input type='' />") : (array[i].element == "textarea") ? 
				"<textarea></textarea>" : (array[i].element == "button") ? "<button></button>" : (array[i].element == "select") ? addOptions(element, array[i].optVals) : "") : 
				"");

			elementsString += element;
		}
		elementsString += "</form>";
	}
	return elementsString;
};