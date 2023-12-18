 'use strict';

window.onload = function () {
	google.charts.load('current', {'packages':['timeline', 'corechart', 'line']});
	addEventListeners();
};


function addEventListeners () {

	var $parseButton = document.getElementById('parseData');
	$parseButton.addEventListener('click', initialize);

	var $clearButton = document.getElementById('clearData');
	$clearButton.addEventListener('click', clearTextInput);

	var $loadJSSPButton = document.getElementById('loadjsspproblem');
	$loadJSSPButton.addEventListener('click', loadProblem);

}

function clearTextInput () {
	document.getElementById('textinput').value = '';
}

function outputToPage(newText) {
	var consoleOutput = document.getElementById('console');

	var oldHtml = consoleOutput.innerHTML;

	var newHtml = oldHtml + '<br />' + newText;

	consoleOutput.innerHTML = newHtml;

	// Keep the div scrolled to the bottom to show current output.
    consoleOutput.scrollTop = consoleOutput.scrollHeight - consoleOutput.clientHeight;
}

function clearConsole() {
	var consoleOutput = document.getElementById('console');
	consoleOutput.innerHTML = "";
}

function loadProblem() {
	if(document.getElementById('inputGroupSelect04').value  == "abz5") {
		document.getElementById('textinput').value = `Adams, Balas, and Zawack 10x10 instance (Table 1, instance 5)
		10 10
		4 88 8 68 6 94 5 99 1 67 2 89 9 77 7 99 0 86 3 92
		5 72 3 50 6 69 4 75 2 94 8 66 0 92 1 82 7 94 9 63
		9 83 8 61 0 83 1 65 6 64 5 85 7 78 4 85 2 55 3 77
		7 94 2 68 1 61 4 99 3 54 6 75 5 66 0 76 9 63 8 67
		3 69 4 88 9 82 8 95 0 99 2 67 6 95 5 68 7 67 1 86
		1 99 4 81 5 64 6 66 8 80 2 80 7 69 9 62 3 79 0 88
		7 50 1 86 4 97 3 96 0 95 8 97 2 66 5 99 6 52 9 71
		4 98 6 73 3 82 2 51 1 71 5 94 7 85 0 62 8 95 9 79
		0 94 6 71 3 81 7 85 1 66 2 90 4 76 5 58 8 93 9 97
		3 50 0 59 1 82 8 67 7 56 9 96 6 58 4 81 5 59 2 96`;
	}
	if(document.getElementById('inputGroupSelect04').value  == "abz6") {
		document.getElementById('textinput').value = ` Adams, and Zawack 10x10 instance (Table 1, instance 6)
		10 10
		7 62 8 24 5 25 3 84 4 47 6 38 2 82 0 93 9 24 1 66
		5 47 2 97 8 92 9 22 1 93 4 29 7 56 3 80 0 78 6 67
		1 45 7 46 6 22 2 26 9 38 0 69 4 40 3 33 8 75 5 96
		4 85 8 76 5 68 9 88 3 36 6 75 2 56 1 35 0 77 7 85
		8 60 9 20 7 25 3 63 4 81 0 52 1 30 5 98 6 54 2 86
		3 87 9 73 5 51 2 95 4 65 1 86 6 22 8 58 0 80 7 65
		5 81 2 53 7 57 6 71 9 81 0 43 4 26 8 54 3 58 1 69
		4 20 6 86 5 21 8 79 9 62 2 34 0 27 1 81 7 30 3 46
		9 68 6 66 5 98 8 86 7 66 0 56 3 82 1 95 4 47 2 78
		0 30 3 50 7 34 2 58 1 77 5 34 8 84 4 40 9 46 6 44`;
	}		
	if(document.getElementById('inputGroupSelect04').value  == "abz7") {
		document.getElementById('textinput').value = ` Adams, Balas, and Zawack 15 x 20 instance (Table 1, instance 7)
		20 15
		 2 24  3 12  9 17  4 27  0 21  6 25  8 27  7 26  1 30  5 31 11 18 14 16 13 39 10 19 12 26
		 6 30  3 15 12 20 11 19  1 24 13 15 10 28  2 36  5 26  7 15  0 11  8 23 14 20  9 26  4 28
		 6 35  0 22 13 23  7 32  2 20  3 12 12 19 10 23  9 17  1 14  5 16 11 29  8 16  4 22 14 22
		 9 20  6 29  1 19  7 14 12 33  4 30  0 32  5 21 11 29 10 24 14 25  2 29  3 13  8 20 13 18
		11 23 13 20  1 28  6 32  7 16  5 18  8 24  9 23  3 24 10 34  2 24  0 24 14 28 12 15  4 18
		 8 24 11 19 14 21  1 33  7 34  6 35  5 40 10 36  3 23  2 26  4 15  9 28 13 38 12 13  0 25
		13 27  3 30  6 21  8 19 12 12  4 27  2 39  9 13 14 12  5 36 10 21 11 17  1 29  0 17  7 33
		 5 27  4 19  6 29  9 20  3 21 10 40  8 14 14 39 13 39  2 27  1 36 12 12 11 37  7 22  0 13
		13 32 11 29  8 24  3 27  5 40  4 21  9 26  0 27 14 27  6 16  2 21 10 13  7 28 12 28  1 32
		12 35  1 11  5 39 14 18  7 23  0 34  3 24 13 11  8 30 11 31  4 15 10 15  2 28  9 26  6 33
		10 28  5 37 12 29  1 31  7 25  8 13 14 14  4 20  3 27  9 25 13 31 11 14  6 25  2 39  0 36
		 0 22 11 25  5 28 13 35  4 31  8 21  9 20 14 19  2 29  7 32 10 18  1 18  3 11 12 17  6 15
		12 39  5 32  2 36  8 14  3 28 13 37  0 38  6 20  7 19 11 12 14 22  1 36  4 15  9 32 10 16
		 8 28  1 29 14 40 12 23  4 34  5 33  6 27 10 17  0 20  7 28 11 21  2 21 13 20  9 33  3 27
		 9 21 14 34  3 30 12 38  0 11 11 16  2 14  5 14  1 34  8 33  4 23 13 40 10 12  6 23  7 27
		 9 13 14 40  7 36  4 17  0 13  5 33  8 25 13 24 10 23  3 36  2 29  1 18 11 13  6 33 12 13
		 3 25  5 15  2 28 12 40  7 39  1 31  8 35  6 31 11 36  4 12 10 33 14 19  9 16 13 27  0 21
		12 22 10 14  0 12  2 20  5 12  1 18 11 17  8 39 14 31  3 31  7 32  9 20 13 29  4 13  6 26
		 5 18 10 30  7 38 14 22 13 15 11 20  9 16  3 17  1 12  2 13 12 40  6 17  8 30  4 38  0 13
		 9 31  8 39 12 27  1 14  5 33  3 31 11 22 13 36  0 16  7 11 14 14  4 29  6 28  2 22 10 17`;
	}		
	if(document.getElementById('inputGroupSelect04').value  == "abz8") {
		document.getElementById('textinput').value = ` Adams, Balas, and Zawack 15 x 20 instance (Table 1, instance 8)
		20 15
		 0 19  9 33  2 32 13 18 10 39  8 34  6 25  4 36 11 40 12 33  1 31 14 30  3 34  5 26  7 13
		 9 11 10 22 14 19  5 12  4 25  6 38  0 29  7 39 13 19 11 22  1 23  3 20  2 40 12 19  8 26
		 3 25  8 17 11 24 13 40 10 32 14 16  5 39  9 19  0 24  1 39  4 17  2 35  7 38  6 20 12 31
		14 22  3 36  2 34 12 17  4 30 13 12  1 13  6 25  9 12  7 18 10 31  0 39  5 40  8 26 11 37
		12 32 14 15  1 35  7 13  8 32 11 23  6 22  4 21  0 38  2 38  3 40 10 31  5 11 13 37  9 16
		10 23 12 38  8 11 14 27  9 11  6 25  5 14  4 12  2 27 11 26  7 29  3 28 13 21  0 20  1 30
		 6 39  8 38  0 15 12 27 10 22  9 27  2 32  4 40  3 12 13 20 14 21 11 22  5 17  7 38  1 27
		11 11 13 24 10 38  8 15  9 19 14 13  5 30  0 26  2 29  6 33 12 21  1 15  3 21  4 28  7 33
		 8 20  6 17  5 26  3 34  9 23  0 16  2 18  4 35 12 24 10 16 11 26  7 12 14 13 13 27  1 19
		 1 18  7 37 14 27  9 40  5 40  6 17  8 22  3 17 10 30  0 38  4 21 12 32 11 24 13 24  2 30
		11 19  0 22 13 36  6 18  5 22  3 17 14 35 10 34  7 23  8 19  2 29  1 22 12 17  4 33  9 39
		 6 32  3 22 12 24  5 13  4 13  1 11  0 11 13 25  8 13  2 15 10 33 11 17 14 16  9 38  7 24
		14 16 13 16  1 37  8 25  2 26  3 11  9 34  4 14  0 20  6 36 12 12  5 29 10 25  7 32 11 12
		 8 20 10 24 11 27  9 38  5 34 12 39  7 33  4 37  2 31 13 15 14 34  3 33  6 26  1 36  0 14
		 8 31  0 17  9 13  1 21 10 17  7 19 13 14  3 40  5 32 11 25  2 34 14 23  6 13 12 40  4 26
		 8 38 12 17  3 14 13 17  4 12  1 35  6 35  0 19 10 36  7 19  9 29  2 31  5 26 11 35 14 37
		14 20  3 16  0 33 10 14  5 27  7 31  8 16  6 31 12 28  9 37  4 37  2 29 11 38  1 30 13 36
		11 18  3 37 14 16  6 15  8 14 12 11 13 32  5 12  1 11 10 29  7 19  4 12  9 18  2 26  0 39
		11 11  2 11 12 22  9 35 14 20  7 31  4 19  3 39  5 28  6 33 10 34  1 38  0 20 13 17  8 28
		 2 12 12 25  5 23  8 21  6 27  9 30 14 23 11 39  3 26 13 34  7 17  1 24  4 12  0 19 10 36`;
	}		
	if(document.getElementById('inputGroupSelect04').value  == "abz9") {
		document.getElementById('textinput').value = `Adams, Balas, and Zawack 15 x 20 instance (Table 1, instance 9)
		20 15
		 6 14  5 21  8 13  4 11  1 11 14 35 13 20 11 17 10 18 12 11  2 23  3 13  0 15  7 11  9 35
		 1 35  5 31  0 13  3 26  6 14  9 17  7 38 12 20 10 19 13 12  8 16  4 34 11 15 14 12  2 14
		 0 30  4 35  2 40 10 35  6 30 14 23  8 29 13 37  7 38  3 40  9 26 12 11  1 40 11 36  5 17
		 7 40  5 18  4 12  8 23  0 23  9 14 13 16 12 14 10 23  3 12  6 16 14 32  1 40 11 25  2 29
		 2 35  3 15 12 31 11 28  6 32  4 30 10 27  7 29  0 38 13 11  1 23 14 17  5 27  9 37  8 29
		 5 33  3 33  6 19 12 40 10 19  0 33 13 26  2 31 11 28  7 36  4 38  1 21 14 25  9 40  8 35
		13 25  0 32 11 33 12 18  4 32  6 28  5 15  3 35  9 14  2 34  7 23 10 32  1 17 14 26  8 19
		 2 16 12 33  9 34 11 30 13 40  8 12 14 26  5 26  6 15  3 21  1 40  4 32  0 14  7 30 10 35
		 2 17 10 16 14 20  6 24  8 26  3 36 12 22  0 14 13 11  9 20  7 23  1 29 11 23  4 15  5 40
		 4 27  9 37  3 40 11 14 13 25  7 30  0 34  2 11  5 15 12 32  1 36 10 12 14 28  8 31  6 23
		13 25  0 22  3 27  8 14  5 25  6 20 14 18  7 14  1 19  2 17  4 27  9 22 12 22 11 27 10 21
		14 34 10 15  0 22  3 29 13 34  6 40  7 17  2 32 12 20  5 39  4 31 11 16  1 37  8 33  9 13
		 6 12 12 27  4 17  2 24  8 11  5 19 14 11  3 17  9 25  1 11 11 31 13 33  7 31 10 12  0 22
		 5 22 14 15  0 16  8 32  7 20  4 22  9 11 13 19  1 30 12 33  6 29 11 18  3 34 10 32  2 18
		 5 27  3 26 10 28  6 37  4 18 12 12 11 11 13 26  7 27  9 40 14 19  1 24  2 18  0 12  8 34
		 8 15  5 28  9 25  6 32  1 13  7 38 11 11  2 34  4 25  0 20 10 32  3 23 12 14 14 16 13 20
		 1 15  4 13  8 37  3 14 10 22  5 24 12 26  7 22  9 34 14 22 11 19 13 32  0 29  2 13  6 35
		 7 36  5 33 13 28  9 20 10 30  4 33 14 29  0 34  3 22 11 12  6 30  8 12  1 35  2 13 12 35
		14 26 11 31  5 35  2 38 13 19 10 35  4 27  8 29  3 39  9 13  6 14  7 26  0 17  1 22 12 15
		 1 36  7 34 11 33  8 17 14 38  6 39  5 16  3 27 13 29  2 16  0 16  4 19  9 40 12 35 10 39`;
	}
	if(document.getElementById('inputGroupSelect04').value  == "la01") {
		document.getElementById('textinput').value = ` Lawrence 10x5 instance (Table 3, instance 1); also called (setf1) or (F1)
		10 5
		1 21 0 53 4 95 3 55 2 34
		0 21 3 52 4 16 2 26 1 71
		3 39 4 98 1 42 2 31 0 12
		1 77 0 55 4 79 2 66 3 77
		0 83 3 34 2 64 1 19 4 37
		1 54 2 43 4 79 0 92 3 62
		3 69 4 77 1 87 2 87 0 93
		2 38 0 60 1 41 3 24 4 83
		3 17 1 49 4 25 0 44 2 98
		4 77 3 79 2 43 1 75 0 96`;
	}	
	if(document.getElementById('inputGroupSelect04').value  == "la02") {
		document.getElementById('textinput').value = `Lawrence 10x5 instance (Table 3, instance 2); also called (setf2) or (F2)
		10 5
		0 20 3 87 1 31 4 76 2 17
		4 25 2 32 0 24 1 18 3 81
		1 72 2 23 4 28 0 58 3 99
		2 86 1 76 4 97 0 45 3 90
		4 27 0 42 3 48 2 17 1 46
		1 67 0 98 4 48 3 27 2 62
		4 28 1 12 3 19 0 80 2 50
		1 63 0 94 2 98 3 50 4 80
		4 14 0 75 2 50 1 41 3 55
		4 72 2 18 1 37 3 79 0 61`;
	}	
	if(document.getElementById('inputGroupSelect04').value  == "la03") {
		document.getElementById('textinput').value = `Lawrence 10x5 instance (Table 3, instance 3); also called (setf3) or (F3)
		10 5
		1 23 2 45 0 82 4 84 3 38
		2 21 1 29 0 18 4 41 3 50
		2 38 3 54 4 16 0 52 1 52
		4 37 0 54 2 74 1 62 3 57
		4 57 0 81 1 61 3 68 2 30
		4 81 0 79 1 89 2 89 3 11
		3 33 2 20 0 91 4 20 1 66
		4 24 1 84 0 32 2 55 3  8
		4 56 0  7 3 54 2 64 1 39
		4 40 1 83 0 19 2  8 3  7`;
	}	
	if(document.getElementById('inputGroupSelect04').value  == "la04") {
		document.getElementById('textinput').value = `Lawrence 10x5 instance (Table 3, instance 4); also called (setf4) or (F4)
		10 5
		0 12 2 94 3 92 4 91 1  7
		1 19 3 11 4 66 2 21 0 87
		1 14 0 75 3 13 4 16 2 20
		2 95 4 66 0  7 3  7 1 77
		1 45 3  6 4 89 0 15 2 34
		3 77 2 20 0 76 4 88 1 53
		2 74 1 88 0 52 3 27 4  9
		1 88 3 69 0 62 4 98 2 52
		2 61 4  9 0 62 1 52 3 90
		2 54 4  5 3 59 1 15 0 88`;
	}	
	if(document.getElementById('inputGroupSelect04').value  == "la05") {
		document.getElementById('textinput').value = `Lawrence 10x5 instance (Table 3, instance 5); also called (setf5) or (F5)
		10 5
		1 72 0 87 4 95 2 66 3 60
		4  5 3 35 0 48 2 39 1 54
		1 46 3 20 2 21 0 97 4 55
		0 59 3 19 4 46 1 34 2 37
		4 23 2 73 3 25 1 24 0 28
		3 28 0 45 4  5 1 78 2 83
		0 53 3 71 1 37 4 29 2 12
		4 12 2 87 3 33 1 55 0 38
		2 49 3 83 1 40 0 48 4  7
		2 65 3 17 0 90 4 27 1 23`;
	}	
	if(document.getElementById('inputGroupSelect04').value  == "la06") {
		document.getElementById('textinput').value = `Lawrence 15x5 instance (Table 4, instance 1); also called (setg1) or (G1)
		15 5
		1 21 2 34 4 95 0 53 3 55
		3 52 4 16 1 71 2 26 0 21
		2 31 0 12 1 42 3 39 4 98
		3 77 1 77 4 79 0 55 2 66
		4 37 3 34 2 64 1 19 0 83
		2 43 1 54 0 92 3 62 4 79
		0 93 3 69 1 87 4 77 2 87
		0 60 1 41 2 38 4 83 3 24
		2 98 3 17 4 25 0 44 1 49
		0 96 4 77 3 79 1 75 2 43
		4 28 2 35 0 95 3 76 1  7
		0 61 4 10 2 95 1  9 3 35
		4 59 3 16 1 91 2 59 0 46
		4 43 1 52 0 28 2 27 3 50
		0 87 1 45 2 39 4  9 3 41`;
	}	
	if(document.getElementById('inputGroupSelect04').value  == "la07") {
		document.getElementById('textinput').value = `Lawrence 15x5 instance (Table 4, instance 2); also called (setg2) or (G2)
		15 5
		0 47 4 57 1 71 3 96 2 14
		0 75 1 60 4 22 3 79 2 65
		3 32 0 33 2 69 1 31 4 58
		0 44 1 34 4 51 3 58 2 47
		3 29 1 44 0 62 2 17 4  8
		1 15 2 40 0 97 4 38 3 66
		2 58 1 39 0 57 4 20 3 50
		2 57 3 32 4 87 0 63 1 21
		4 56 0 84 2 90 1 85 3 61
		4 15 0 20 1 67 3 30 2 70
		4 84 0 82 1 23 2 45 3 38
		3 50 2 21 0 18 4 41 1 29
		4 16 1 52 0 52 2 38 3 54
		4 37 0 54 3 57 2 74 1 62
		4 57 1 61 0 81 2 30 3 68`;
	}	
	if(document.getElementById('inputGroupSelect04').value  == "la08") {
		document.getElementById('textinput').value = `Lawrence 15x5 instance (Table 4, instance 3); also called (setg3) or (G3)
		15 5
		3 92 2 94 0 12 4 91 1  7
		2 21 1 19 0 87 3 11 4 66
		1 14 3 13 0 75 4 16 2 20
		2 95 4 66 0  7 1 77 3  7
		2 34 4 89 3  6 1 45 0 15
		4 88 3 77 2 20 1 53 0 76
		4  9 3 27 0 52 1 88 2 74
		3 69 2 52 0 62 1 88 4 98
		3 90 0 62 4  9 2 61 1 52
		4  5 2 54 3 59 0 88 1 15
		0 41 1 50 4 78 3 53 2 23
		0 38 4 72 2 91 3 68 1 71
		0 45 3 95 4 52 2 25 1  6
		3 30 1 66 0 23 4 36 2 17
		2 95 0 71 3 76 1  8 4 88`;
	}	
	if(document.getElementById('inputGroupSelect04').value  == "la09") {
		document.getElementById('textinput').value = `Lawrence 15x5 instance (Table 4, instance 4); also called (setg4) or (G4)
		15 5
		1 66 3 85 2 84 0 62 4 19
		3 59 1 64 2 46 4 13 0 25
		4 88 3 80 1 73 2 53 0 41
		0 14 1 67 2 57 3 74 4 47
		0 84 4 64 2 41 3 84 1 78
		0 63 3 28 1 46 2 26 4 52
		3 10 2 17 4 73 1 11 0 64
		2 67 1 97 3 95 4 38 0 85
		2 95 4 46 0 59 1 65 3 93
		2 43 4 85 3 32 1 85 0 60
		4 49 3 41 2 61 0 66 1 90
		1 17 0 23 3 70 4 99 2 49
		4 40 3 73 0 73 1 98 2 68
		3 57 1  9 2  7 0 13 4 98
		0 37 1 85 2 17 4 79 3 41`;
	}	
	if(document.getElementById('inputGroupSelect04').value  == "la10") {
		document.getElementById('textinput').value = `Lawrence 15x5 instance (Table 4, instance 5); also called (setg5) or (G5)
		15 5
		1 58 2 44 3  5 0  9 4 58
		1 89 0 97 4 96 3 77 2 84
		0 77 1 87 2 81 4 39 3 85
		3 57 1 21 2 31 0 15 4 73
		2 48 0 40 1 49 3 70 4 71
		3 34 4 82 2 80 0 10 1 22
		1 91 4 75 0 55 2 17 3  7
		2 62 3 47 1 72 4 35 0 11
		0 64 3 75 4 50 1 90 2 94
		2 67 4 20 3 15 0 12 1 71
		0 52 4 93 3 68 2 29 1 57
		2 70 0 58 1 93 4  7 3 77
		3 27 2 82 1 63 4  6 0 95
		1 87 2 56 4 36 0 26 3 48
		3 76 2 36 0 36 4 15 1  8`;
	}	
	if(document.getElementById('inputGroupSelect04').value  == "orb01") {
		document.getElementById('textinput').value = `trivial 10x10 instance from Bill Cook (BIC2)
		10 10
		0 72 1 64 2 55 3 31 4 53 5 95 6 11 7 52 8  6 9 84
		0 61 3 27 4 88 2 78 1 49 5 83 8 91 6 74 7 29 9 87
		0 86 3 32 1 35 2 37 5 18 4 48 6 91 7 52 9 60 8 30
		0  8 1 82 4 27 3 99 6 74 5  9 2 33 9 20 7 59 8 98
		1 50 0 94 5 43 3 62 4 55 7 48 2  5 8 36 9 47 6 36
		0 53 6 30 2  7 3 12 1 68 8 87 4 28 9 70 7 45 5  7
		2 29 3 96 0 99 1 14 4 34 7 14 5  7 6 76 8 57 9 76
		2 90 0 19 3 87 4 51 1 84 5 45 9 84 6 58 7 81 8 96
		2 97 1 99 4 93 0 38 7 13 5 96 3 40 9 64 6 32 8 45
		2 44 0 60 8 29 3  5 6 74 1 85 4 34 7 95 9 51 5 47`;
	}		
	if(document.getElementById('inputGroupSelect04').value  == "orb2") {
		document.getElementById('textinput').value = `doomed 10x10 instance from Monika (MON2)
		10 10
		0 72 1 54 2 33 3 86 4 75 5 16 6 96 7  7 8 99 9 76
		0 16 3 88 4 48 8 52 9 60 6 29 7 18 5 89 2 80 1 76
		0 47 7 11 3 14 2 56 6 16 4 83 1 10 5 61 8 24 9 58
		0 49 1 31 3 17 8 50 5 63 2 35 4 65 7 23 6 50 9 29
		0 55 6  6 1 28 3 96 5 86 2 99 9 14 7 70 8 64 4 24
		4 46 0 23 6 70 8 19 2 54 3 22 9 85 7 87 5 79 1 93
		4 76 3 60 0 76 9 98 2 76 1 50 8 86 7 14 6 27 5 57
		4 93 6 27 9 57 3 87 8 86 2 54 7 24 5 49 0 20 1 47
		2 28 6 11 8 78 7 85 4 63 9 81 3 10 1  9 5 46 0 32
		2 22 9 76 5 89 8 13 6 88 3 10 7 75 4 98 1 78 0 17`;
	}	
	if(document.getElementById('inputGroupSelect04').value  == "swv01") {
		document.getElementById('textinput').value = `Storer, Wu, and Vaccari hard 20x10 instance (Table 2, instance 1)
		20 10
		 3  19  2  27  1  39  4  13  0  25  8  37  9  40  5  54  7  74  6  93
		 2  69  0  30  4   1  3   4  1  64  7  71  5   2  9  84  6  31  8   8
		 4  79  3  80  0  86  2  55  1  54  8  81  6  72  7  86  5  59  9  75
		 2  76  3  15  1  26  0  17  4  30  8  44  7  91  6  83  5  52  9  68
		 4  73  3  87  1  74  0  39  2  98  9 100  5  43  8  17  7   7  6  77
		 1  63  0  49  2  16  3  55  4   9  9  73  5  61  8  34  6  82  7  46
		 0  87  1  71  4  43  3  80  2  39  7  70  8  18  6  41  9  79  5  44
		 4  70  2  22  0  73  3  62  1  64  5  25  8  19  6  69  9  41  7  28
		 3  16  0  84  1  58  4   7  2   9  5   8  6  10  7  17  8  42  9  65
		 3   8  0  10  1   3  4  41  2   3  7  40  8  56  5  53  9  96  6  13
		 4  62  1  60  3  64  2  12  0  39  5   2  7  64  6  87  9  21  8  60
		 2  66  1  71  3  23  4  75  0  78  7  74  6  35  9  24  8  23  5  50
		 1   5  3  92  4   6  0  69  2  80  7  13  5  17  9  89  6  80  8  47
		 0  82  3  84  1  24  2  47  4  93  7  85  5  34  6  73  8  28  9  91
		 4  55  0  57  3  63  2  24  1  40  7  30  6  37  5  99  8  88  9  41
		 1  75  2  47  3  68  0   7  4  78  7  80  6   2  9  23  8  49  5  50
		 0  91  4  25  2  10  1  21  3  94  8   6  7  59  5  84  9  75  6  70
		 2  85  1  31  0  94  4  94  3  11  5  21  9   7  6  61  8  50  7  93
		 1  27  0  77  4  13  2  30  3   2  5  88  7   4  9  39  6  53  8  54
		 1  34  2  12  3  31  0  24  4  24  7  16  5   6  9  88  8  81  6  11`;
	}	
	if(document.getElementById('inputGroupSelect04').value  == "swv02") {
		document.getElementById('textinput').value = `Storer, Wu, and Vaccari hard 20x10 instance (Table 2, instance 2)
		20 10
		 2  16  1  58  0  22  4  24  3  53  8   9  9  57  7  63  5  92  6  43
		 3   6  1  48  4  14  0  66  2  24  7   2  9  85  6  73  8  19  5  99
		 4 100  2  90  0  63  1  14  3  31  5  27  9  15  8   1  6  51  7  33
		 2  98  3  84  4  52  0  12  1  96  9  60  6  74  8  93  5  45  7  49
		 4  39  0  54  2  28  3   8  1  30  8  57  6  75  5   9  7  41  9  19
		 3  94  0   8  2  89  1  13  4  37  8  36  6  63  9  24  5  71  7  97
		 3  90  2  69  1  25  4  15  0  65  7  52  6  56  9  91  8  83  5  86
		 3  59  1  99  4  41  0  68  2  14  7   4  9  55  6  48  8  13  5  15
		 4  36  2  17  1  51  0  16  3  54  8  45  5  50  7  98  6  68  9  82
		 1  75  0  11  4  55  2  93  3  51  6  61  9  40  7  19  8  24  5  55
		 4  56  0  73  3  59  2  38  1  51  6  99  8  29  9  53  5   7  7  72
		 3  68  4  50  1  88  2  88  0  33  5  47  8  52  6  26  9  74  7  68
		 2   3  3  42  0  45  1  57  4  28  5  14  8  22  9  31  6  44  7  38
		 3  89  0  73  4  12  1   9  2  49  5  11  8  15  7  41  9  37  6  10
		 3  76  2  97  4 100  1  92  0  25  5   8  9  92  7  51  6  58  8  65
		 4  50  0  54  3  85  1  47  2  45  6  99  9  39  5  32  8  87  7  56
		 0  70  2  58  3  33  1  85  4  25  8   5  7  65  9  20  6  52  5  44
		 1  22  3  45  4  60  0  66  2   5  7  61  6  73  9  60  5  14  8  44
		 4  64  0  97  2  31  1   4  3  43  9  47  7  93  6 100  5  10  8  51
		 3   9  4  87  2  34  0  62  1  56  5  66  8  95  7  56  9  42  6  86`;
	}	
	if(document.getElementById('inputGroupSelect04').value  == "yn01") {
		document.getElementById('textinput').value = `Yamada and Nakano 20x20 instance (Table 4, instance 1)
		20 20
		17 13  2 26 11 35  4 45 12 29 13 21  7 40  0 45  3 16 15 10 18 49 10 43 14 25  8 25  1 40  6 16 19 43  5 48  9 36 16 11  
		 8 21  6 22 14 15  5 28 10 10  2 46 11 19 19 13 13 18 18 14  3 11  4 21 16 30  1 29  0 16 15 41 17 40 12 38  7 28  9 39  
		 4 39  3 28  8 32 17 46  0 35 14 14  1 44 10 20 13 12  6 23 18 22  9 15 11 35  7 27 16 26  5 27 15 23  2 27 12 31 19 31  
		 4 31 10 24  3 34  6 44 18 43 12 32  2 35 15 34 19 21  7 46 13 15  5 10  9 24 14 37 17 38  1 41  8 34  0 32 16 11 11 36  
		19 45  1 23  5 34  9 23  7 41 16 10 11 40 12 46 14 27  8 13  4 20  2 40 15 28 13 44 17 34 18 21 10 27  0 12  6 37  3 30  
		13 48  2 34  3 22  7 14 12 22 14 10  8 45 19 38  6 32 16 38 11 16  4 20  0 12  5 40  9 33 17 35  1 32 10 15 15 31 18 49  
		 9 19  5 33 18 32 16 37 12 28  3 16  2 40 10 37  4 10 11 20  1 17 17 48  6 44 13 29 14 44 15 48  8 21  0 31  7 36 19 43  
		 9 20  6 43  1 13  5 22  2 33  7 28 16 39 12 16 13 34 17 20 10 47 18 43 19 44  8 29 15 22  4 14 11 28 14 44  0 33  3 28  
		 7 14 12 40  8 19  0 49 13 11 10 13  9 47 18 22  2 27 17 26  3 47  5 37  6 19 15 43 14 41  1 34 11 21  4 30 19 32 16 45  
		16 32  7 22 15 30  6 18 18 41 19 34  9 22 11 11 17 29 10 37  4 30  2 25  1 27  0 31 14 16 13 20  3 26 12 14  5 24  8 43  
		18 22 17 22 12 30 15 31 13 15  4 13 16 47 19 18  6 33  3 30  7 46  2 48 11 42  0 18  1 16  8 25 10 43  5 21  9 27 14 14  
		 5 48  1 39  2 21 18 18 13 20  0 28 15 20  8 36  6 24  9 35  7 22 19 36  3 39 14 34  4 49 17 36 11 38 10 46 12 44 16 13  
		14 26  1 32  2 11 15 10  9 41 13 10  6 26 19 26 12 13 11 35  5 22  0 11  7 24 17 33  8 11 10 34 16 11  3 22  4 12 18 17  
		16 39 10 24 17 43 14 28  3 49 15 34 18 46 13 29  6 31 11 40  7 24  1 47  9 15  2 26  8 40 12 46  5 18 19 16  4 14  0 21  
		11 41 19 26 16 14  3 47  0 49  5 16 17 31  9 43 15 20 10 25 14 10 13 49  8 32  6 36  7 19  4 23  2 20 18 15 12 34  1 33  
		11 37  5 48 10 31  7 42  2 24  1 13  9 30 15 24  0 19 13 34 19 35  8 42  3 10 14 40  4 39  6 42 12 38 16 12 18 27 17 40  
		14 19  1 27  8 39 12 41  5 45 11 40 10 46  6 48  7 37  3 30 17 31  4 16 18 29 15 44  0 41 16 35 13 47  9 21  2 10 19 48  
		18 38  0 27 13 32  9 30  7 17 14 21  1 14  4 37 17 15 16 31  5 27 10 25 15 41 11 48  3 48  6 36  2 30 12 45  8 26 19 17  
		 1 17 10 40  9 16  5 36  4 34 16 47 19 14  0 24 18 10  6 14 13 14  3 30 12 23  2 37 17 11 11 23  8 40 15 15 14 10  7 46  
		14 37 10 28 13 13  0 28  2 18  1 43 16 46  8 39  3 30 12 15 11 38 17 38 18 45 19 44  9 16 15 29  5 33  6 20  7 35  4 34  `;
	}	
	if(document.getElementById('inputGroupSelect04').value  == "yn02") {
		document.getElementById('textinput').value = `Yamada and Nakano 20x20 instance (Table 4, instance 2)
		20 20
		17 15  2 28 11 10  4 46 12 19 13 13  7 18  0 14  3 11 15 21 18 30 10 29 14 16  8 41  1 40  6 38 19 28  5 39  9 39 16 28  
		 8 32  6 46 14 35  5 14 10 44  2 20 11 12 19 23 13 22 18 15  3 35  4 27 16 26  1 27  0 23 15 27 17 31 12 31  7 31  9 24  
		 4 34  3 44  8 43 17 32  0 35 14 34  1 21 10 46 13 15  6 10 18 24  9 37 11 38  7 41 16 34  5 32 15 11  2 36 12 45 19 23  
		 4 34 10 23  3 41  6 10 18 40 12 46  2 27 15 13 19 20  7 40 13 28  5 44  9 34 14 21 17 27  1 12  8 37  0 30 16 48 11 34  
		19 22  1 14  5 22  9 10  7 45 16 38 11 32 12 38 14 16  8 20  4 12  2 40 15 33 13 35 17 32 18 15 10 31  0 49  6 19  3 33  
		13 32  2 37  3 28  7 16 12 40 14 37  8 10 19 20  6 17 16 48 11 44  4 29  0 44  5 48  9 21 17 31  1 36 10 43 15 20 18 43  
		 9 13  5 22 18 33 16 28 12 39  3 16  2 34 10 20  4 47 11 43  1 44 17 29  6 22 13 14 14 28 15 44  8 33  0 28  7 14 19 40  
		 9 19  6 49  1 11  5 13  2 47  7 22 16 27 12 26 13 47 17 37 10 19 18 43 19 41  8 34 15 21  4 30 11 32 14 45  0 32  3 22  
		 7 30 12 18  8 41  0 34 13 22 10 11  9 29 18 37  2 30 17 25  3 27  5 31  6 16 15 20 14 26  1 14 11 24  4 43 19 22 16 22  
		16 30  7 31 15 15  6 13 18 47 19 18  9 33 11 30 17 46  4 48 10 42  2 18  1 16  0 25 14 43 13 21  3 27 12 14  5 48  8 39  
		18 21 17 18 12 20 15 28 13 20  4 36 16 24 19 35  7 22  3 36  6 39 10 34 11 49  0 36  1 38  8 46  9 44  5 13  2 26 14 32  
		 9 11  1 10  2 41 11 10 13 26  0 26 12 13 10 35  6 22  5 11  7 24 19 33  3 11 14 34 17 11  4 22 18 12  8 17 15 39 16 24  
		 1 43 15 28  2 49 14 34  4 46 12 29 18 31 19 40 13 24 11 47  5 15  0 26  7 40 17 46  8 18 10 16 16 14  3 21  9 41  6 26  
		16 14  6 47 17 49 10 16  3 31 12 43  4 20  8 25 14 10 18 49  7 32  0 36  9 19  2 23 15 20  5 15 13 34 19 33 11 37  1 48  
		 4 31 11 42  7 24  6 13  0 30 14 24 17 19 19 34 16 35 10 42 15 10 13 40  2 39  8 42  5 38  9 12  1 27 18 40 12 19  3 27  
		 6 39  5 41 13 45 15 40  2 46  9 48  7 37  0 30  1 31 12 16 19 29 14 44  3 41  8 35 10 47 11 21  4 10 16 48 18 38 17 27  
		16 32  1 30  8 17 18 21  0 14 17 37 10 15 12 31  7 27  3 25  5 41  4 48 13 48  6 36  2 30 15 45 11 26  9 17 14 17 19 40  
		18 16 17 36  4 34  2 47 10 14 15 24  1 10  3 14  7 14 12 30  5 23  9 37  8 11 14 23 11 40  6 15 16 10  0 46 13 37 19 28  
		17 13 13 28 11 18 16 43  7 46  8 39  3 30  5 15  4 38  2 38 14 45  0 44 10 16  6 29 12 33  1 20 19 35 15 34  9 16 18 40  
		17 14  2 30  0 27 15 47 18 43  3 17 14 13  6 43  7 45 12 32 13 13 16 48  1 10  4 14 10 42  9 38  5 43 19 22 11 43  8 23  `;
	}							
}