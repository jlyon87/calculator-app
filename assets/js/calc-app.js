(function Calculator($) {
	var currentInput = "";
	var firstNumber = "";
	var chosenOperation = "";
	var result;

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

	var clear = function() {
		currentInput = "";
		firstNumber = ""
		chosenOperation = "";
		result = "";

		$(".output").text("");
	};

	var numberHandler = function() {
		currentInput += $(this).val();

		if(chosenOperation === "") {
			$("#first-number").text(currentInput);
		} else {
			$("#second-number").text(currentInput);
		}
	};

	var operationsHandler = function() {
		$("#first-number").text(currentInput);
		firstNumber = currentInput;
		currentInput = "";

		chosenOperation = $(this).val();
		$("#operator").text(operations[chosenOperation].sign);
	};

	var equalsHandler = function() {
		result = operations[chosenOperation].operation(parseInt(firstNumber), parseInt(currentInput));
		$("#result").text(result);
	};

	var init = function() {
		$(".number").on("click", numberHandler);
		$(".operator").on("click", operationsHandler);
		$(".equal").on("click", equalsHandler);
		$(".clear").on("click", clear);
	}

	init();

}(window.jQuery));
