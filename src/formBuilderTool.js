function addOptions(elem, numOptions){
	elem = "<select>";
	for(var j = 0; j < numOptions; j++){
		elem += "<option value=''></option>";
	}
	elem += "</select>";
	return elem;
}

exports.gen = (array) => {
    //const formattedString = array[0];
    if (Array.isArray(array)){
		var elementsString = "<form>";
		var element;

		for(var i = 0; i < array.length; i++) { // Refactored conditional if statements to ternary operators
			element = (typeof array[i] === 'object' && array[i].element ? (array[i].element == "input" ? (array[i].type == "text" ? "<input type='text' />" : (array[i].type == "email") ? 
			"<input type='email' />" : (array[i].type == "password") ? "<input type='password' />" : (array[i].type == "submit") ? "<input type='submit' />" : "<input type='' />") : (array[i].element == "textarea") ? 
			"<textarea></textarea>" : (array[i].element == "button") ? "<button></button>" : (array[i].element == "select") ? addOptions(element, array[i].optVals) : "") : 
			console.log("Element at position " + i + " must be an object"));

			elementsString += element;
		}
		elementsString += "</form>";
	} else {
		console.log("Must be an array.");
	}
    return elementsString;
}