// ========================== //
// SOCIAL MEDIA IMAGE MAKER
// ========================== //

// -------------------------------------------- //
// GLOBAL VALUES

var canvasFontFace = "Helvetica, Arial";

function setUp() {

	// -------------------------------------------- //
	// SET UP
	// This runs on page load, and populates the default values for the
	// image maker. These styles are overriden when UI elements are
	// interacted with

	var formFields = getFormFields();
	var imageSize = setImageSizes(formFields.imageSize);
	var imageStyles = setimageStyles(formFields.imageSize, formFields.imageDesign, formFields.mainText);

	setXYCoordinates(imageStyles.mainXY[0], imageStyles.mainXY[1]);

	generateImage(formFields, imageSize, imageStyles);

}

function updateImage() {

	// -------------------------------------------- //
	// UPDATE IMAGE
	// This function updates the canvas using whatever the
	// latest variables are

	var formFields = getFormFields();
	console.log( "Image format: " + formFields.imageSize + ". Style: " + formFields.imageDesign + ". Footer (on/off): " + formFields.footerStyle + ". Text (x,y): " + formFields.mainXY[0] + "px, " + formFields.mainXY[1] + "px" );

	var imageSize = setImageSizes(formFields.imageSize);
	console.log( "Image size: " + imageSize.width + "px, " + imageSize.height + "px");

	var imageStyles = setimageStyles(formFields.imageSize, formFields.imageDesign, formFields.mainText);
	console.log( "Main font size: " + imageStyles.mainFontSize + "px. Footer font size: " + imageStyles.footerFontSize + "px. Main text colour: " + imageStyles.mainColor + ". Footer text colour: " + imageStyles.footerColor + ". Main (x,y): " + imageStyles.mainXY[0] + "px, " + imageStyles.mainXY[1] + "px. Footer (x,y): " + imageStyles.footerXY[0] + "px, " + imageStyles.footerXY[1] + "px. Footer rows: " + imageStyles.footerRows);

	setXYCoordinates(imageStyles.mainXY[0], imageStyles.mainXY[1]);

	generateImage(formFields, imageSize, imageStyles);

}

function setXYCoordinates(x, y) {

	// -------------------------------------------- //
	// SET XY COORDINATES
	// This sets the XY coordinates of the main body text.
	// On set up, it takes the default values from setImageSizes().
	// Any interaction with the UI triggers this to update.

	document.getElementById("mainTextXPosition").placeholder = x;
	document.getElementById("mainTextYPosition").placeholder = y;

}

function setFontSize(formImageSize, twitterMain = 48, twitterFooter = 32, facebookMain = 48, facebookFooter = 32, instagramGridMain = 48, instagramGridFooter = 32, instagramStoriesMain = 48, instagramStoriesFooter = 32) {

	// -------------------------------------------- //
	// SET FONT SIZES
	// This function is to set font sizes for each
	// image format

	var fontSize = {}
	if (formImageSize == "twitter") {
		fontSize.main = twitterMain;
		fontSize.footer = twitterFooter;
	} else if (formImageSize == "facebook") {
		fontSize.main = facebookMain;
		fontSize.footer = facebookFooter;
	} else if (formImageSize == "instagram-grid") {
		fontSize.main = instagramGridMain;
		fontSize.footer = instagramGridFooter;
	} else if (formImageSize == "instagram-stories") {
		fontSize.main = instagramStoriesMain;
		fontSize.footer = instagramStoriesFooter;
	}

	return fontSize;
}

function setFooterRows(formImageSize, twitter = 1, facebook = 1, instagramGrid = 1, instagramStories = 1) {

	// -------------------------------------------- //
	// SET FOOTER ROWS
	// This function is to set number of rows
	// across which to display the wordmark (1 or 2)

	var footerRows = {}
	if (formImageSize == "twitter") {
		footerRows.count = twitter;
	} else if (formImageSize == "facebook") {
		footerRows.count = facebook;
	} else if (formImageSize == "instagram-grid") {
		footerRows.count = instagramGrid;
	} else if (formImageSize == "instagram-stories") {
		footerRows.count = instagramStories;
	}

	return footerRows;
}

function setMainXYCoordinatesAllFormats(formImageSize, twitterX = 0, twitterY = 0, facebookX = 0, facebookY = 0, instagramGridX = 0, instagramGridY = 0, instagramStoriesX = 0, instagramStoriesY = 0) {

	// -------------------------------------------- //
	// SET DEFAULT XY COORDINATES
	// This function can be used to set XY coordinates
	// for all image formats at the same time

	var coordinates = {}
	if (formImageSize == "twitter") {
		coordinates.XY = [twitterX, twitterY];
	} else if (formImageSize == "facebook") {
		coordinates.XY = [facebookX, facebookY];
	} else if (formImageSize == "instagram-grid") {
		coordinates.XY = [instagramGridX, instagramGridY];
	} else if (formImageSize == "instagram-stories") {
		coordinates.XY = [instagramStoriesX, instagramStoriesY];
	}

	var uiXY = [document.getElementById("mainTextXPosition").value, document.getElementById("mainTextYPosition").value];

	if (uiXY[0] !== "" || uiXY[1] !== "") {
		coordinates.XY = [Number(uiXY[0]), Number(uiXY[1])];
	}

	return coordinates;
}

function setFooterXYCoordinatesAllFormats(formImageSize, twitterX = 0, twitterY = 0, facebookX = 0, facebookY = 0, instagramGridX = 0, instagramGridY = 0, instagramStoriesX = 0, instagramStoriesY = 0) {

	// -------------------------------------------- //
	// SET DEFAULT XY COORDINATES
	// This function can be used to set XY coordinates
	// for all image formats at the same time

	var coordinates = {}
	if (formImageSize == "twitter") {
		coordinates.XY = [twitterX, twitterY];
	} else if (formImageSize == "facebook") {
		coordinates.XY = [facebookX, facebookY];
	} else if (formImageSize == "instagram-grid") {
		coordinates.XY = [instagramGridX, instagramGridY];
	} else if (formImageSize == "instagram-stories") {
		coordinates.XY = [instagramStoriesX, instagramStoriesY];
	}

	return coordinates;
}

function getFormFields(imageSize = true, imageStyles = true, footerStyle = true, mainText = true, mainXY = true) {

	// -------------------------------------------- //
	// GET FORM FIELDS
	// This function gets the current value of any form field

	var formFields = {}
	if (imageSize == true) {
		radios = document.getElementsByName('image-size');
		for (var i = 0, length = radios.length; i < length; i++) {
			if (radios[i].checked) {
				// do whatever you want with the checked radio
				formFields.imageSize = radios[i].value;
				// only one radio can be logically checked, don't check the rest
				break;
			}
		}
	}
	if (imageStyles == true) {
		radios = document.getElementsByName('image-design');
		for (var i = 0, length = radios.length; i < length; i++) {
			if (radios[i].checked) {
				// do whatever you want with the checked radio
				formFields.imageDesign = radios[i].value;
				// only one radio can be logically checked, don't check the rest
				break;
			}
		}
	}
	if (footerStyle == true) {
		radios = document.getElementsByName('footer-style');
		for (var i = 0, length = radios.length; i < length; i++) {
			if (radios[i].checked) {
				// do whatever you want with the checked radio
				formFields.footerStyle = radios[i].value;
				// only one radio can be logically checked, don't check the rest
				break;
			}
		}
	}
	if (mainText == true) {
		formFields.mainText = document.getElementById("mainText").value;
		if (formFields.mainText == "") {
			formFields.mainText = "Enter your own text.***Use three *s to create a line break.";
		} else {
			formFields.mainText = document.getElementById("mainText").value;
		}
	}
	if (mainXY == true) {
		formFields.mainXY = [document.getElementById("mainTextXPosition").value, document.getElementById("mainTextYPosition").value];
	}
	return formFields;

}

function setImageSizes(formImageSize) {

	// -------------------------------------------- //
	// SET IMAGE SIZES
	// This function contains default image sizes
	// for all image formats the image maker can
	// produce.

	var imageSize = {}
	if (formImageSize == "twitter") {
		imageSize.width = 1200;
		imageSize.height = 675;
	} else if (formImageSize == "facebook") {
		imageSize.width = 1200;
		imageSize.height = 630;
	} else if (formImageSize == "instagram-grid") {
		imageSize.width = 1080;
		imageSize.height = 1080;
	} else if (formImageSize == "instagram-stories") {
		imageSize.width = 1080;
		imageSize.height = 1920;
	}

	return imageSize;

}

function setimageStyles(formImageSize = "twitter", formImageStyles = "squares", formMainText) {

	// -------------------------------------------- //
	// SET IMAGE STYLES
	// This function sets the variables needed for each design.

	var imageStyles = {}
	if (formImageStyles == "top-left") {
		// Text font sizes
		var fontSize = setFontSize(formImageSize, 48, 32, 44, 28, 56, 42, 56, 48);
		imageStyles.mainFontSize = fontSize.main;
		imageStyles.footerFontSize = fontSize.footer;
		// Text colours
		imageStyles.mainColor = "#FFFFFF";
		imageStyles.footerColor = "#FFFFFF";
		// Text align
		imageStyles.mainBaseline = "top";
		imageStyles.mainAlign = "left";
		imageStyles.footerBaseline = "bottom";
		imageStyles.footerAlign = "left";
		// Text (x,y) positions
		var mainXY = setMainXYCoordinatesAllFormats(formImageSize, 500, 45, 500, 45, 60, 400, 70, 700);
		imageStyles.mainXY = [Number(mainXY.XY[0]), Number(mainXY.XY[1])]
		var footerXY = setFooterXYCoordinatesAllFormats(formImageSize, 45, 630, 45, 595, 60, 1020, 70, 1850);
		imageStyles.footerXY = [Number(footerXY.XY[0]), Number(footerXY.XY[1])];
		// How many rows for the footer text?
		var footerRows = setFooterRows(formImageSize, 1, 1, 1, 2);
		imageStyles.footerRows = footerRows.count;
	} else if (formImageStyles == "top-center") {
		// Text font sizes
		var fontSize = setFontSize(formImageSize, 48, 32, 44, 28, 56, 42, 56, 48);
		imageStyles.mainFontSize = fontSize.main;
		imageStyles.footerFontSize = fontSize.footer;
		// Text colours
		imageStyles.mainColor = "#FFFFFF";
		imageStyles.footerColor = "#FFFFFF";
		// Text align
		imageStyles.mainBaseline = "top";
		imageStyles.mainAlign = "left";
		imageStyles.footerBaseline = "bottom";
		imageStyles.footerAlign = "left";
		// Text (x,y) positions
		var mainXY = setMainXYCoordinatesAllFormats(formImageSize, 45, 250, 45, 250, 60, 400, 70, 700);
		imageStyles.mainXY = [Number(mainXY.XY[0]), Number(mainXY.XY[1])]
		var footerXY = setFooterXYCoordinatesAllFormats(formImageSize, 45, 630, 45, 595, 60, 1020, 70, 1850);
		imageStyles.footerXY = [Number(footerXY.XY[0]), Number(footerXY.XY[1])];
		// How many rows for the footer text?
		var footerRows = setFooterRows(formImageSize, 1, 1, 1, 2);
		imageStyles.footerRows = footerRows.count;
	} else if (formImageStyles == "bottom-right") {
		// Text font sizes
		var fontSize = setFontSize(formImageSize, 48, 32, 42, 28, 56, 42, 56, 48);
		imageStyles.mainFontSize = fontSize.main;
		imageStyles.footerFontSize = fontSize.footer;
		// Text colours
		imageStyles.mainColor = "#FFFFFF";
		imageStyles.footerColor = "#FFFFFF";
		// Text align
		imageStyles.mainBaseline = "top";
		imageStyles.mainAlign = "left";
		imageStyles.footerBaseline = "bottom";
		imageStyles.footerAlign = "left";
		// Text (x,y) positions
		var mainXY = setMainXYCoordinatesAllFormats(formImageSize, 45, 250, 45, 250, 60, 400, 70, 700);
		imageStyles.mainXY = [Number(mainXY.XY[0]), Number(mainXY.XY[1])]
		var footerXY = setFooterXYCoordinatesAllFormats(formImageSize, 45, 640, 45, 600, 60, 200, 70, 200);
		imageStyles.footerXY = [Number(footerXY.XY[0]), Number(footerXY.XY[1])];
		// How many rows for the footer text?
		var footerRows = setFooterRows(formImageSize, 2, 2, 2, 2);
		imageStyles.footerRows = footerRows.count;
	}

	return imageStyles;

}

function drawRestOfImage(ctx, formFields, imageStyles) {

	// Form main text, set text baseline
	ctx.textBaseline=imageStyles.mainBaseline;
	ctx.textAlign=imageStyles.mainAlign;
	ctx.font = "normal " + imageStyles.mainFontSize +  "px " + canvasFontFace;
	ctx.fillStyle = imageStyles.mainColor;

	console.log("Successfully set text styles...");

	var mainTextMultiline = formFields.mainText.split("***");
	var startTextX = imageStyles.mainXY[0];
	var startTextY = imageStyles.mainXY[1];
	for (var i = 0; i < mainTextMultiline.length; i++) {
		ctx.fillText(mainTextMultiline[i], startTextX, startTextY);
		startTextY += (imageStyles.mainFontSize * 1.2);
	}

	console.log("Successfully printed text...");

	if (formFields.footerStyle == "on") {
		// Form footer text, set text baseline
		ctx.fillStyle = imageStyles.footerColor;
		ctx.textBaseline=imageStyles.footerBaseline;
		ctx.textAlign=imageStyles.footerAlign;
		ctx.font = "bold " + imageStyles.footerFontSize +  "px " + canvasFontFace;

		if (imageStyles.footerRows == 1) {
			ctx.fillText("Civil Service LGBT+ Network", imageStyles.footerXY[0], imageStyles.footerXY[1]);
		} else if (imageStyles.footerRows == 2) {
			if (imageStyles.footerBaseline = "bottom") {
			ctx.fillText("Civil Service", imageStyles.footerXY[0], imageStyles.footerXY[1] - (imageStyles.footerFontSize * 1.2));
			ctx.fillText("LGBT+ Network", imageStyles.footerXY[0], imageStyles.footerXY[1]);
			} else if (imageStyles.footerBaseline = "top") {
				ctx.fillText("Civil Service", imageStyles.footerXY[0], imageStyles.footerXY[1]);
				ctx.fillText("LGBT+ Network", imageStyles.footerXY[0], imageStyles.footerXY[1] + (imageStyles.footerFontSize * 1.2));
			}
		}
		console.log("Successfully printed the footer...");
	}

}

function generateImage(formFields, imageSize, imageStyles) {

	// -------------------------------------------- //
	// GENERATE IMAGE
	// This function creates the canvas. It should be
	// called LAST in the sequence.

	var canvas = document.getElementById('canvas');

	canvas.width = imageSize.width;
	canvas.height = imageSize.height;
	canvas.style.width = imageSize.width + "px";
	canvas.style.height = imageSize.height + "px";

	var ctx = canvas.getContext('2d');

	ctx.clearRect(0, 0, canvas.width, canvas.height)
	ctx.fillStyle = '#ffffff';
	ctx.rect(0, 0, canvas.width, canvas.height);

	var imageObj = new Image();
	imageObj.src = "/image-maker/assets/images/podcast/" + formFields.imageSize + "--" + formFields.imageDesign + ".png";

	imageObj.onload = function() {

		// -------------------------------------------- //
		// DRAW BACKGROUND
		ctx.drawImage(imageObj, 0, 0, canvas.width, canvas.height);

		// -------------------------------------------- //
		// DRAW FOREGROUND
		drawRestOfImage(ctx, formFields, imageStyles);

		// save canvas image as data url (png format by default)
		var dataURL = canvas.toDataURL('image/jpeg', 1.0);

		// set canvasImg image src to dataURL
		// so it can be saved as an image
		previewImage = document.getElementById('canvas-img');
		previewImage.src = dataURL;

		console.log("Done!");

	}

}

var outputDownload = document.getElementById('output-download');
outputDownload.addEventListener('click', function (e) {
	var today = new Date();
	var now = today.getTime();
	var dataURL = canvas.toDataURL('image/jpeg', 1.0);
	outputDownload.download = now + " prideon-podcast.jpeg"
    outputDownload.href = dataURL;
});



