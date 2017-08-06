(function Calculator($) {
	var currentInput = "";
	var numbers = [];
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

	var init = function() {
		$(".number").on("click", numberHandler);
		$(".operator").on("click", operationsHandler);
		$(".equal").on("click", equalsHandler);
		$(".clear").on("click", clear);
	}

	var clear = function() {
		currentInput = "";
		numbers = [];
		chosenOperation = "";
		result = "";
		refreshDisplay(true);
	};

	var refreshDisplay = function(isClear) {
		$("#first-number").text(numbers[0]);
		$("#operator").text(operations(chosenOperation).sign);
		$("#second-number").text(numbers[1]);
		$("#result").text(result);
	};

	var numberHandler = function() {
		currentInput += $(this).val();
		console.log(input);
		refreshDisplay();
	};

	var operationsHandler = function() {
		numbers.push(currentInput);
		currentInput = "";
		chosenOperation = $(this).val();
		refreshDisplay();
	};

	var equalsHandler = function() {
		numbers.push(currentInput);
		result = operations[chosenOperation].operation(parseInt(numbers[0]), parseInt(numbers[1]));
		refreshDisplay();
	};

	init();

}(window.jQuery));
