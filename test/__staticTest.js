const form = require('../src/formBuilderTool');

const data = form.gen([
    {element: "input", type: "text"},
	{element: "input", type: "email"},
	{element: "input", type: "password"},
	{element: "input", type: "submit"},
	{element: "select", optVals: 3},
	{element: "textarea"},
	{element: "button"}
]);

console.log(data);