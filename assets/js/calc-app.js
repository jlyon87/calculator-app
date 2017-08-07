/*
	calc-app.js
	This is an Immediately Invoked Function Expression (IIFE) module. This is a
	design pattern in Javascript. The contents of this file are not exposed to the
	global scope.

	The `$` parameter renames the dependency that was provided at the end of the
	IIFE declaration. In this case, `$` represents `window.jQuery`.
 */
(function Calculator($) {

	// Declare and Initilize variables.
	var currentInput = "";
	var firstNumber = "";
	var chosenOperation = "";
	var result = "";

	/*
		Each operand is stored in the operations object.
		For each operand value, we have the `sign` and the `operation`.
		Use `sign` to display. Use `operation` to calculate.
	*/
	var operations = {
		plus: {
			sign: "+",
			operation: function(a, b) {
				return a + b;
			},
		},
		minus: {
			sign: "-",
			operation: function(a, b) {
				return a - b;
			},
		},
		times: {
			sign: "x",
			operation: function(a, b) {
				return a * b;
			},
		},
		divide: {
			sign: "/",
			operation: function(a, b) {
				return a / b;
			},
		},
		power: {
			sign: "^",
			operation: function(a, b) {
				return Math.pow(a, b);
			},
		},
	};

	/*
	Each of the functions below are handlers. They are the functions called when
	buttons are pressed.
	*/
	var clearHandler = function() {
		// Reset all variables.
		currentInput = "";
		firstNumber = ""
		chosenOperation = "";
		result = "";

		// Reset the display.
		$(".panel-body").empty();
	};

	var numberHandler = function() {
		/*
			Append button click to currentInput String.
			Because this is called from a button click, `this` references the button
			that caused this handler to execute.
		*/
		currentInput += $(this).val();

		if(chosenOperation === "") {
			// If we haven't chosen an operation, update first number output.
			$("#first-number").text(currentInput);
		} else {
			// Otherwise, update the second number output.
			$("#second-number").text(currentInput);
		}
	};

	var operationsHandler = function() {
		// Store currentInput in firstNumber for later.
		firstNumber = currentInput;
		// Wipe out currentInput, preparing for second number.
		currentInput = "";

		// Store the selected operand by name. -> plus | minus... etc
		chosenOperation = $(this).val();

		// Display selected operand
		$("#operator").text(operations[chosenOperation].sign);
	};

	var equalsHandler = function() {
		/*
			calculate the result from firstNumber and current input.
			See `operations` object for stored functions.
			firstNumber and currentInput are Strings.
			Use parseInt() to convert them to numbers.
		*/
		result = operations[chosenOperation].operation(parseInt(firstNumber), parseInt(currentInput));

		// Send the result to the display.
		$("#result").text(result);
	};

	var init = function() {
		// Connect the handler functions to the button click events.
		$(".number").on("click", numberHandler); // All number buttons.
		$(".operator").on("click", operationsHandler); // All operand buttons.
		$(".equal").on("click", equalsHandler); // Just the equal sign button.
		$(".clear").on("click", clearHandler); // Just the Clear button.
	}

	// On load, call init.
	init();

	/*
		This module is not aware of anything outside it. So we need to pass it
		anything that it depends on from the global scope. This module depends on
		jQuery, so below we are giving jQuery to this IIFE module.

		The dependencies passed in here, are then renamed at the top of the IIFE.
		This IIFE module renames window.jQuery to `$`. Meaning that any jQuery stuff
		will use the `$` instead of `jQuery`.
	*/
}(window.jQuery));
