'use strict';

var express = require("express");
var router = express.Router();

// GET /questions
// Route for questions collection
router.get("/", function(req, res){
	res.json({response: "You sent me a GET request"});
});

// POST /questions
// Route for creating questions
router.post("/", function(req, res){
	res.json({
		response: "You sent me a POST request",
		body: req.body
	});
});

// GET /questions/:id
// Route for specific questions
router.get("/:ID", function(req, res){
	res.json({
		response: "You sent me a GET request for ID " + req.params.ID
	});
});

//THE TASK
//Post request that accepts two inputs, validates them and returns addition of values
router.post("/addNumbers", (req, res) => {
	let {firstNumber, secondNumber} = req.body

	//missing parameter(s)
	if (firstNumber == null || secondNumber == null) {
		res.json({
			success: false,
			status: 400,
			errorMsg: "Bad Request. One or all of the values required are missing."
		})
	}

	//invalid input
	if (
			(typeof firstNumber !== "number" && typeof firstNumber !== "string") || 
			(typeof secondNumber !== "number" && typeof secondNumber !== "string")
	) {
		res.json({
			success: false,
			status: 422,
			errorMsg: "Unprocessable Entity. Data passed in is not as expected."
		})
	}
	
	//convert both inputs to numbers explicitly to prevent incorrect string concatenation
	if (typeof firstNumber == "string" || typeof secondNumber == "string") {		
		firstNumber = Number(firstNumber)
		secondNumber = Number(secondNumber)

		//if either number is invalid, return error
		if (Number.isNaN(firstNumber) || Number.isNaN(secondNumber)) {
			res.json({
				success: false,
				status: 422,
				errorMsg: "Unprocessable Entity. Data passed in is not as expected."
			})
		}
	}
	
	//send correct response with result
	res.json({
		success:true,
		firstNumber,
		secondNumber,
		result: firstNumber + secondNumber
	})
})



module.exports = router;
















