$(document).ready(function(){

	generateImage();

	$("input[type=text]").focusout(function(){
	   	generateImage();
	});
	
	$("input[type=radio]").click(function(){
	   	generateImage();
	});

});

function generateImage() {

	// ======================= //
	// PREPARE TO LOAD BG IMAGE
	// ======================= //

	var imageObj = new Image();

	// ======================= //
	// GET ALL THE VALUES
	// ======================= //
	
	// Get the text from the formMainText.value
	var mainTextRow1 = document.getElementById("formMainText1").value;
	var mainTextRow2 = document.getElementById("formMainText2").value;
	var mainTextRow3 = document.getElementById("formMainText3").value;
	var mainTextRow4 = document.getElementById("formMainText4").value;
	var mainTextRow5 = document.getElementById("formMainText5").value;
		
	if (mainTextRow1 == "") {
		var mainRows = 0;
	} else if (mainTextRow2 == "") {
		var mainRows = 1;
	} else if (mainTextRow3 == "") {
		var mainRows = 2;
	} else if (mainTextRow4 == "") {
		var mainRows = 3;
	} else if (mainTextRow5 == "") {
		var mainRows = 4;
	} else if (mainTextRow5 != "") {
		var mainRows = 5;
	}
	
	console.log(mainRows);
	
	// Get the options values
	var formSize = $('input[name=image-size]:checked').val();
	var imageStyle = $('input[name=image-style]:checked').val();
	var footerStyle = $('input[name=footer-style]:checked').val();
	var heightCorrection = document.getElementById("heightCorrection").value;
	var widthCorrection = document.getElementById("widthCorrection").value;

	// ============================================== //
	// SET THE VALUES YOU NEED TO DRAW THE IMAGE
	// ============================================== //

	if (formSize == "twitter") {
		
		var canvasWidth = 1024;
		var canvasHeight = 512;

		var canvasFontFace = "Helvetica, Arial";
		
		if (imageStyle == "squares") {
			
			imageObj.src = "assets/images/app/twitter/squares.png";
			
			var mainTextColor = "#FFFFFF";
			var mainFontSize = 46;
			var mainFontWeight = 400;
			var mainTextAlign = "left";
			var mainTextBaseline = "middle";
			var mainTextStartX = 100;
			var mainTextWidth = 840;
			var mainLineHeight = 60;
						
			var footerRows = 1;
			var footerPadding = "on";
			var footerTextColor = "#FFFFFF";
			var footerFontSize = 30;
			var footerFontWeight = 600;
			var footerTextAlign = "left";
			var footerTextBaseline = "bottom";
			var footerTextStartX = 100;
			var footerTextStartY = (canvasHeight - 80);
			var footerTextWidth = 500;
			var footerLineHeight = 30;
			
		} else if (imageStyle == "circles") {
			
			imageObj.src = "assets/images/app/twitter/circles.png";
			
			var mainTextColor = "#FFFFFF";
			var mainFontSize = 50;
			var mainFontWeight = 600;
			var mainTextAlign = "center";
			var mainTextBaseline = "middle";
			var mainTextStartX = (canvasWidth / 2);
			var mainTextWidth = 600;
			var mainLineHeight = 60;
						
			var footerRows = 2;
			var footerPadding = "off";
			var footerTextColor = "#000000";
			var footerFontSize = 30;
			var footerFontWeight = 600;
			var footerTextAlign = "left";
			var footerTextBaseline = "bottom";
			var footerTextStartX = 20;
			var footerTextStartY = (canvasHeight - 15);
			var footerTextWidth = 500;
			var footerLineHeight = 30;
			
		} else if (imageStyle == "bubbles") {

			imageObj.src = "assets/images/app/twitter/bubbles.png";
			
			var mainTextColor = "#000000";
			var mainFontSize = 50;
			var mainFontWeight = 400;
			var mainTextAlign = "left";
			var mainTextBaseline = "middle";
			var mainTextStartX = 350;
			var mainTextWidth = 900;
			var mainLineHeight = 60;
						
			var footerRows = 2;
			var footerPadding = "off";
			var footerTextColor = "#000000";
			var footerFontSize = 25;
			var footerFontWeight = 600;
			var footerTextAlign = "left";
			var footerTextBaseline = "top";
			var footerTextStartX = 20;
			var footerTextStartY = 50;
			var footerTextWidth = 500;
			var footerLineHeight = 30;

		} else if (imageStyle == "squiggles") {

			imageObj.src = "assets/images/app/twitter/curves.png";
			
			var mainTextColor = "#000000";
			var mainFontSize = 50;
			var mainFontWeight = 400;
			var mainTextAlign = "left";
			var mainTextBaseline = "bottom";
			var mainTextStartX = 90;
			var mainTextStartY = 75;
			var mainTextWidth = 900;
			var mainLineHeight = 60;
			
			var footerRows = 2;
			var footerPadding = "off";
			var footerTextColor = "#FFFFFF";
			var footerFontSize = 25;
			var footerFontWeight = 600;
			var footerTextAlign = "left";
			var footerTextBaseline = "bottom";
			var footerTextStartX = 15;
			var footerTextStartY = (canvasHeight - 15);
			var footerTextWidth = 500;
			var footerLineHeight = 25;

		}

	} else if (formSize == "facebook") {
		
		var canvasWidth = 1200;
		var canvasHeight = 630;

		var canvasFontFace = "Helvetica, Arial";
	
		if (imageStyle == "squares") {
			
			imageObj.src = "assets/images/app/facebook/squares.png";
			
			var mainTextColor = "#FFFFFF";
			var mainFontSize = 58;
			var mainFontWeight = 400;
			var mainTextAlign = "left";
			var mainTextBaseline = "middle";
			var mainTextStartX = 120;
			var mainTextStartY = 90;
			var mainTextWidth = 1000;
			var mainLineHeight = 68;
			
			var footerRows = 1;
			var footerPadding = "on";
			var footerTextColor = "#FFFFFF";
			var footerFontSize = 35;
			var footerFontWeight = 600;
			var footerTextAlign = "left";
			var footerTextBaseline = "bottom";
			var footerTextStartX = 120;
			var footerTextStartY = (canvasHeight - 90);
			var footerTextWidth = 500;
			var footerLineHeight = 35;
			
		} else if (imageStyle == "circles") {
			
			imageObj.src = "assets/images/app/facebook/circles.png";
			
			var mainTextColor = "#FFFFFF";
			var mainFontSize = 60;
			var mainFontWeight = 600;
			var mainTextAlign = "center";
			var mainTextBaseline = "middle";
			var mainTextStartX = 610;
			var mainTextWidth = 600;
			var mainLineHeight = 70;
			
			var footerRows = 2;
			var footerPadding = "off";
			var footerTextColor = "#000000";
			var footerFontSize = 30;
			var footerFontWeight = 600;
			var footerTextAlign = "left";
			var footerTextBaseline = "bottom";
			var footerTextStartX = 25;
			var footerTextStartY = (canvasHeight - 15);
			var footerTextWidth = 500;
			var footerLineHeight = 30;
			
		} else if (imageStyle == "bubbles") {
			
			imageObj.src = "assets/images/app/facebook/bubbles.png";
			
			var mainTextColor = "#000000";
			var mainFontSize = 50;
			var mainFontWeight = 400;
			var mainTextAlign = "left";
			var mainTextBaseline = "top";
			var mainTextStartX = 400;
			var mainTextWidth = 900;
			var mainLineHeight = 60;
			
			var footerRows = 2;
			var footerPadding = "off";
			var footerTextColor = "#000000";
			var footerFontSize = 35;
			var footerFontWeight = 600;
			var footerTextAlign = "left";
			var footerTextBaseline = "top";
			var footerTextStartX = 25;
			var footerTextStartY = 70;
			var footerTextWidth = 500;
			var footerLineHeight = 40;
			
		} else if (imageStyle == "squiggles") {
			
			imageObj.src = "assets/images/app/facebook/curves.png";
			
			var mainTextColor = "#000000";
			var mainFontSize = 50;
			var mainFontWeight = 400;
			var mainTextAlign = "left";
			var mainTextBaseline = "bottom";
			var mainTextStartX = 90;
			var mainTextStartY = 75;
			var mainTextWidth = 900;
			var mainLineHeight = 60;
			
			var footerRows = 2;
			var footerPadding = "off";
			var footerTextColor = "#FFFFFF";
			var footerFontSize = 35;
			var footerFontWeight = 600;
			var footerTextAlign = "left";
			var footerTextBaseline = "bottom";
			var footerTextStartX = 25;
			var footerTextStartY = (canvasHeight - 20);
			var footerTextWidth = 500;
			var footerLineHeight = 40;
			
		}

	} else if (formSize == "instagram-grid") {

		var canvasWidth = 1080;
		var canvasHeight = 1080;
		
		var canvasFontFace = "Helvetica, Arial";

		if (imageStyle == "squares") {
			
			imageObj.src = "assets/images/app/instagram/grid/squares.png";
			
			var mainTextColor = "#FFFFFF";
			var mainFontSize = 100;
			var mainFontWeight = 400;
			var mainTextAlign = "left";
			var mainTextBaseline = "middle";
			var mainTextStartX = 130;
			var mainTextWidth = 850;
			var mainLineHeight = 115;
						
			var footerRows = 1;
			var footerPadding = "on";
			var footerTextColor = "#FFFFFF";
			var footerFontSize = 40;
			var footerFontWeight = 600;
			var footerTextAlign = "left";
			var footerTextBaseline = "bottom";
			var footerTextStartX = 130;
			var footerTextStartY = (canvasHeight - 120);
			var footerTextWidth = 500;
			var footerLineHeight = 50;
			
		} else if (imageStyle == "circles") {
			
			imageObj.src = "assets/images/app/instagram/grid/circles.png";
			
			
			var mainTextColor = "#FFFFFF";
			var mainFontSize = 120;
			var mainFontWeight = 600;
			var mainTextAlign = "center";
			var mainTextBaseline = "middle";
			var mainTextStartX = 560;
			var mainTextWidth = 1000;
			var mainLineHeight = 120;
			
			var footerRows = 2;
			var footerTextColor = "#000000";
			var footerFontSize = 30;
			var footerFontWeight = 600;
			var footerTextAlign = "left";
			var footerTextBaseline = "bottom";
			var footerTextStartX = 15;
			var footerTextStartY = (canvasHeight - 15);
			var footerTextWidth = 500;
			var footerLineHeight = 30;
			
		} else if (imageStyle == "bubbles") {
			
			imageObj.src = "assets/images/app/instagram/grid/bubbles.png";
			
			var mainTextColor = "#000000";
			var mainFontSize = 80;
			var mainFontWeight = 400;
			var mainTextAlign = "left";
			var mainTextBaseline = "top";
			var mainTextStartX = 25;
			var mainTextWidth = 900;
			var mainLineHeight = 95;
			
			var footerRows = 2;
			var footerPadding = "off";
			var footerTextColor = "#000000";
			var footerFontSize = 45;
			var footerFontWeight = 600;
			var footerTextAlign = "left";
			var footerTextBaseline = "top";
			var footerTextStartX = 25;
			var footerTextStartY = 90;
			var footerTextWidth = 500;
			var footerLineHeight = 60;
		
		} else if (imageStyle == "squiggles") {
						
			imageObj.src = "assets/images/app/instagram/grid/curves.png";
			
			var mainTextColor = "#000000";
			var mainFontSize = 80;
			var mainFontWeight = 400;
			var mainTextAlign = "left";
			var mainTextBaseline = "bottom";
			var mainTextStartX = 90;
			var mainTextStartY = 75;
			var mainTextWidth = 900;
			var mainLineHeight = 95;
			
			var footerRows = 1;
			var footerTextColor = "#FFFFFF";
			var footerFontSize = 35;
			var footerFontWeight = 600;
			var footerTextAlign = "left";
			var footerTextBaseline = "bottom";
			var footerTextStartX = 20;
			var footerTextStartY = (canvasHeight - 20);
			var footerTextWidth = 500;
			var footerLineHeight = 40;
			
		}

	} else if (formSize == "instagram-stories") {

		var canvasWidth = 1080;
		var canvasHeight = 1920;
		
		var canvasFontFace = "Helvetica, Arial";

		if (imageStyle == "squares") {
			
			imageObj.src = "assets/images/app/instagram/stories/squares.png";
			
			var mainTextColor = "#FFFFFF";
			var mainFontSize = 100;
			var mainFontWeight = 400;
			var mainTextAlign = "left";
			var mainTextBaseline = "middle";
			var mainTextStartX = 130;
			var mainTextWidth = 850;
			var mainLineHeight = 115;
						
			var footerRows = 1;
			var footerPadding = "on";
			var footerTextColor = "#FFFFFF";
			var footerFontSize = 40;
			var footerFontWeight = 600;
			var footerTextAlign = "left";
			var footerTextBaseline = "bottom";
			var footerTextStartX = 130;
			var footerTextStartY = (canvasHeight - 120);
			var footerTextWidth = 500;
			var footerLineHeight = 50;
			
		} else if (imageStyle == "circles") {
			
			imageObj.src = "assets/images/app/instagram/stories/circles.png";
			
			
			var mainTextColor = "#FFFFFF";
			var mainFontSize = 120;
			var mainFontWeight = 600;
			var mainTextAlign = "center";
			var mainTextBaseline = "middle";
			var mainTextStartX = 560;
			var mainTextWidth = 1000;
			var mainLineHeight = 120;
			
			var footerRows = 2;
			var footerTextColor = "#000000";
			var footerFontSize = 30;
			var footerFontWeight = 600;
			var footerTextAlign = "left";
			var footerTextBaseline = "bottom";
			var footerTextStartX = 15;
			var footerTextStartY = (canvasHeight - 15);
			var footerTextWidth = 500;
			var footerLineHeight = 30;
			
		} else if (imageStyle == "bubbles") {
			
			imageObj.src = "assets/images/app/instagram/stories/bubbles.png";
			
			var mainTextColor = "#000000";
			var mainFontSize = 80;
			var mainFontWeight = 400;
			var mainTextAlign = "left";
			var mainTextBaseline = "top";
			var mainTextStartX = 25;
			var mainTextWidth = 900;
			var mainLineHeight = 95;
			
			var footerRows = 2;
			var footerPadding = "off";
			var footerTextColor = "#000000";
			var footerFontSize = 45;
			var footerFontWeight = 600;
			var footerTextAlign = "left";
			var footerTextBaseline = "top";
			var footerTextStartX = 25;
			var footerTextStartY = 90;
			var footerTextWidth = 500;
			var footerLineHeight = 60;
		
		} else if (imageStyle == "squiggles") {
						
			imageObj.src = "assets/images/app/instagram/stories/curves.png";
			
			var mainTextColor = "#000000";
			var mainFontSize = 80;
			var mainFontWeight = 400;
			var mainTextAlign = "left";
			var mainTextBaseline = "bottom";
			var mainTextStartX = 90;
			var mainTextStartY = 75;
			var mainTextWidth = 900;
			var mainLineHeight = 95;
			
			var footerRows = 1;
			var footerTextColor = "#FFFFFF";
			var footerFontSize = 35;
			var footerFontWeight = 600;
			var footerTextAlign = "left";
			var footerTextBaseline = "bottom";
			var footerTextStartX = 20;
			var footerTextStartY = (canvasHeight - 20);
			var footerTextWidth = 500;
			var footerLineHeight = 40;
			
		}

	}
			
	if (mainRows == 1) {
		if (footerStyle == "on" && footerPadding == "on") {
			var mainRow1TextStartY = ((canvasHeight * 0.5) - footerLineHeight);
		} else {
			var mainRow1TextStartY = (canvasHeight * 0.5);
		}
	} else if (mainRows == 2) {
		if (footerStyle == "on" && footerPadding == "on") {
			var mainRow1TextStartY = ((canvasHeight * 0.5) - (mainLineHeight * 0.5) - footerLineHeight);
			var mainRow2TextStartY = ((canvasHeight * 0.5) + (mainLineHeight * 0.5) - footerLineHeight);
		} else {
			var mainRow1TextStartY = ((canvasHeight * 0.5) - (mainLineHeight * 0.5));
			var mainRow2TextStartY = ((canvasHeight * 0.5) + (mainLineHeight * 0.5));
		}
	} else if (mainRows == 3) {
		if (footerStyle == "on" && footerPadding == "on") {
			var mainRow1TextStartY = ((canvasHeight * 0.5) - mainLineHeight - footerLineHeight);
			var mainRow2TextStartY = ((canvasHeight * 0.5) - footerLineHeight);
			var mainRow3TextStartY = ((canvasHeight * 0.5) + mainLineHeight - footerLineHeight);
		} else {
			var mainRow1TextStartY = ((canvasHeight * 0.5) - mainLineHeight);
			var mainRow2TextStartY = (canvasHeight * 0.5);
			var mainRow3TextStartY = ((canvasHeight * 0.5) + mainLineHeight);
		}
	} else if (mainRows == 4) {
		if (footerStyle == "on" && footerPadding == "on") {
			var mainRow1TextStartY = ((canvasHeight * 0.5) - (mainLineHeight * 1.5) - footerLineHeight);
			var mainRow2TextStartY = ((canvasHeight * 0.5) - (mainLineHeight * 0.5) - footerLineHeight);
			var mainRow3TextStartY = ((canvasHeight * 0.5) + (mainLineHeight * 0.5) - footerLineHeight);
			var mainRow4TextStartY = ((canvasHeight * 0.5) + (mainLineHeight * 1.5) - footerLineHeight);
		} else {
			var mainRow1TextStartY = ((canvasHeight * 0.5) - (mainLineHeight * 1.5));
			var mainRow2TextStartY = ((canvasHeight * 0.5) - (mainLineHeight * 0.5));
			var mainRow3TextStartY = ((canvasHeight * 0.5) + (mainLineHeight * 0.5));
			var mainRow4TextStartY = ((canvasHeight * 0.5) + (mainLineHeight * 1.5));
		}
	} else if (mainRows == 5) {
		if (footerStyle == "on" && footerPadding == "on") {
			var mainRow1TextStartY = ((canvasHeight * 0.5) - (mainLineHeight * 2) - footerLineHeight);
			var mainRow2TextStartY = ((canvasHeight * 0.5) - (mainLineHeight * 1) - footerLineHeight);
			var mainRow3TextStartY = ((canvasHeight * 0.5) - footerLineHeight);
			var mainRow4TextStartY = ((canvasHeight * 0.5) + (mainLineHeight * 1) - footerLineHeight);
			var mainRow5TextStartY = ((canvasHeight * 0.5) + (mainLineHeight * 2) - footerLineHeight);
		} else {
			var mainRow1TextStartY = ((canvasHeight * 0.5) - (mainLineHeight * 2));
			var mainRow2TextStartY = ((canvasHeight * 0.5) - (mainLineHeight * 1));
			var mainRow3TextStartY = (canvasHeight * 0.5);
			var mainRow4TextStartY = ((canvasHeight * 0.5) + (mainLineHeight * 1));
			var mainRow5TextStartY = ((canvasHeight * 0.5) + (mainLineHeight * 2));
		}
	}

	var canvas = document.getElementById('canvas');

	canvas.width = (canvasWidth * 2);
	canvas.height = (canvasHeight * 2);
	canvas.style.width = canvasWidth + "px";
	canvas.style.height = canvasHeight + "px";

	var context = canvas.getContext('2d');
	context.scale(2,2);
	
	imageObj.onload = function() {
		context.drawImage(imageObj, 0, 0, canvasWidth, canvasHeight);
		
		// Form main text, set text baseline
		context.textBaseline=mainTextBaseline;
		context.textAlign=mainTextAlign;
		context.font = mainFontWeight +" " + mainFontSize +  "px " + canvasFontFace;
		context.fillStyle = mainTextColor;
	
		if (mainRows == 1) {
			context.fillText(mainTextRow1, (mainTextStartX - widthCorrection), (mainRow1TextStartY - heightCorrection));
		} else if (mainRows == 2) {
			context.fillText(mainTextRow1, (mainTextStartX - widthCorrection), (mainRow1TextStartY - heightCorrection));
			context.fillText(mainTextRow2, (mainTextStartX - widthCorrection), (mainRow2TextStartY - heightCorrection));
		} else if (mainRows == 3) {
			context.fillText(mainTextRow1, (mainTextStartX - widthCorrection), (mainRow1TextStartY - heightCorrection));
			context.fillText(mainTextRow2, (mainTextStartX - widthCorrection), (mainRow2TextStartY - heightCorrection));
			context.fillText(mainTextRow3, (mainTextStartX - widthCorrection), (mainRow3TextStartY - heightCorrection));
		} else if (mainRows == 4) {
			context.fillText(mainTextRow1, (mainTextStartX - widthCorrection), (mainRow1TextStartY - heightCorrection));
			context.fillText(mainTextRow2, (mainTextStartX - widthCorrection), (mainRow2TextStartY - heightCorrection));
			context.fillText(mainTextRow3, (mainTextStartX - widthCorrection), (mainRow3TextStartY - heightCorrection));
			context.fillText(mainTextRow4, (mainTextStartX - widthCorrection), (mainRow4TextStartY - heightCorrection));
		} else if (mainRows == 5) {
			context.fillText(mainTextRow1, (mainTextStartX - widthCorrection), (mainRow1TextStartY - heightCorrection));
			context.fillText(mainTextRow2, (mainTextStartX - widthCorrection), (mainRow2TextStartY - heightCorrection));
			context.fillText(mainTextRow3, (mainTextStartX - widthCorrection), (mainRow3TextStartY - heightCorrection));
			context.fillText(mainTextRow4, (mainTextStartX - widthCorrection), (mainRow4TextStartY - heightCorrection));
			context.fillText(mainTextRow5, (mainTextStartX - widthCorrection), (mainRow5TextStartY - heightCorrection));
		}
		
		if (footerStyle == "on") {
			// Form footer text, set text baseline
			context.fillStyle = footerTextColor;
			context.textBaseline=footerTextBaseline;
			context.textAlign=footerTextAlign;
			context.font = "bold " + footerFontSize +  "px " + canvasFontFace;
		
			if (footerRows == 1) {
				context.fillText("Civil Service LGBT+ Network", footerTextStartX, footerTextStartY);
			} else if (footerRows == 2) {
				context.fillText("Civil Service", footerTextStartX, (footerTextStartY - footerLineHeight));
				context.fillText("LGBT+ Network", footerTextStartX, footerTextStartY);
			}
		}
	
		// save canvas image as data url (png format by default)
		var dataURL = canvas.toDataURL();
	
		// set canvasImg image src to dataURL
		// so it can be saved as an image
		document.getElementById('canvas-img').src = dataURL;
		
	}
	

	

}