A project for Binary Calculator problem as part of HackerRanks' 10 Days of Code
https://www.hackerrank.com/challenges/js10-binary-calculator

Abstract: make a simple calculator that runs addition, subtraction, multiplication and floor division for binary numbers 

Requirements
	The calculator must appear like the "initialState.png"
	The fields and buttons must have innter html and ids

Inner HTML	ID		Behavior
N/A		res		contains the results of the button press
				(change HTML?)
N/A		btns		container that holds all calculator buttons
0		btn0		button for digit 0
1		btn1		button for digit 1
c		btnClr		clears contents of res
=		btnEql		evalulates contents of res
\+		btnSum		button for addition operation
\-		btnSub		button for subtraction operation
\*		btnMul		multiplication 
/		btnDiv		floor division (assumes unsigned)

Styling Requirements
*body has width of 33%
*res has a background-color of lightgray
*res has border that is solid
*res has a height of 48px 
*res has font-size of 20px
*btn0 and btn1 have a background-color of lightgreen and a color of brown
*btnClr and btnEql have a background-color of darkgreen and a color of white
*btnSum, btnSub, btnMul, and btnDiv have a background-color of black, a color of red	
*All the buttons in btns have a width of 25%, a height of 36px, a font-size of 18px, margin of 0px, and float value left

Suggested File Hiearchy:
	js/
		binaryCalculator.js
	css/
		binaryCalculator.css
	index.html
