// ========================== //
// SOCIAL MEDIA IMAGE MAKER
// ========================== //

// -------------------------------------------- //
// GLOBAL VALUES

var canvasSansSerifFontFace = "Helvetica, Arial";
var canvasScriptFontFace = "'PrideOn', Helvetica";
function setUp() {

	// -------------------------------------------- //
	// SET UP
	// This runs on page load, and populates the default values for the
	// image maker. These styles are overriden when UI elements are
	// interacted with
	
	var formFields = getFormFields();
	var imageSize = setImageSizes(formFields.imageSize);
	var imageStyles = setimageStyles(formFields.imageSize, formFields.imageColours, formFields.identityText, imageSize);
	
	generateImage(formFields, imageSize, imageStyles);

}

function updateImage() {

	// -------------------------------------------- //
	// UPDATE IMAGE
	// This function updates the canvas using whatever the 
	// latest variables are
	
	var formFields = getFormFields();
	console.log( "Image format: " + formFields.imageSize + ". Style: " + formFields.imageColours + ". Footer (on/off): " + formFields.footerStyle + ". Text (x,y): " + formFields.mainXY[0] + "px, " + formFields.mainXY[1] + "px" );

	var imageSize = setImageSizes(formFields.imageSize);
	console.log( "Image size: " + imageSize.width + "px, " + imageSize.height + "px");

	var imageStyles = setimageStyles(formFields.imageSize, formFields.imageColours, formFields.identityText, imageSize);
	console.log( "Main font size: " + imageStyles.mainFontSize + "px. Footer font size: " + imageStyles.footerFontSize + "px. Main text colour: " + imageStyles.mainColor + ". Footer text colour: " + imageStyles.footerColor + ". Footer (x,y): " + imageStyles.footerXY[0] + "px, " + imageStyles.footerXY[1] + "px. Footer rows: " + imageStyles.footerRows);

	generateImage(formFields, imageSize, imageStyles);

}

function setFontSize(formImageSize, twitterTimelineMain = 48, twitterTimelineFooter = 32, twitterProfileHeaderMain = 48, twitterProfileHeaderFooter = 32, facebookTimelineMain = 48, facebookTimelineFooter = 32, facebookProfileCoverMain = 48, facebookProfileCoverFooter = 32, instagramGridMain = 48, instagramGridFooter = 32, instagramStoriesMain = 48, instagramStoriesFooter = 32, videoCallBackgroundMain = 48, videoCallBackgroundFooter = 32, profilePictureMain = 48, profilePictureFooter = 32 , posterMain = 48, posterFooter = 32) {

	// -------------------------------------------- //
	// SET FONT SIZES
	// This function is to set font sizes for each
	// image format

	var fontSize = {}
	if (formImageSize == "twitter-timeline") {
		fontSize.main = twitterTimelineMain;
		fontSize.footer = twitterTimelineFooter;
	} else if (formImageSize == "twitter-profile-header") {
		fontSize.main = twitterProfileHeaderMain;
		fontSize.footer = twitterProfileHeaderFooter;
	} else if (formImageSize == "facebook-timeline") {
		fontSize.main = facebookTimelineMain;
		fontSize.footer = facebookTimelineFooter;
	} else if (formImageSize == "facebook-profile-cover") {
		fontSize.main = facebookProfileCoverMain;
		fontSize.footer = facebookProfileCoverFooter;
	} else if (formImageSize == "instagram-grid") {
		fontSize.main = instagramGridMain;
		fontSize.footer = instagramGridFooter;
	} else if (formImageSize == "instagram-stories") {
		fontSize.main = instagramStoriesMain;
		fontSize.footer = instagramStoriesFooter;
	} else if (formImageSize == "video-call-background") {
		fontSize.main = videoCallBackgroundMain;
		fontSize.footer = videoCallBackgroundFooter;
	}  else if (formImageSize == "profile-picture") {
		fontSize.main = profilePictureMain;
		fontSize.footer = profilePictureFooter;
	} else if (formImageSize == "poster") {
		fontSize.main = posterMain;
		fontSize.footer = posterFooter;
	}

	return fontSize;
}

function setFooterRows(formImageSize, twitterTimeline = 1, twitterProfileHeader = 1, facebookTimeline = 1, facebookProfileCover = 1, instagramGrid = 1, instagramStories = 1, videoCallBackground = 1, profilePicture = 1, poster = 1) {

	// -------------------------------------------- //
	// SET FOOTER ROWS
	// This function is to set number of rows
	// across which to display the wordmark (1 or 2)

	var footerRows = {}

	if (formImageSize == "twitter-timeline") {
		footerRows.count = twitterTimeline;
	} else if (formImageSize == "twitter-profile-header") {
		footerRows.count = twitterProfileHeader;
	} else if (formImageSize == "facebook-timeline") {
		footerRows.count = facebookTimeline;
	} else if (formImageSize == "facebook-profile-cover") {
		footerRows.count = facebookProfileCover;
	} else if (formImageSize == "instagram-grid") {
		footerRows.count = instagramGrid;
	} else if (formImageSize == "instagram-stories") {
		footerRows.count = instagramStories;
	} else if (formImageSize == "video-call-background") {
		footerRows.count = videoCallBackground;
	}  else if (formImageSize == "profile-picture") {
		footerRows.count = profilePicture;
	} else if (formImageSize == "poster") {
		footerRows.count = poster;
	}

	return footerRows;
}

function setMainXYCoordinatesAllFormats(formImageSize, twitterTimelineX = 0, twitterTimelineY = 0, twitterProfileHeaderX = 0, twitterProfileHeaderY = 0, facebookTimelineX = 0, facebookTimelineY = 0, facebookProfileCoverX = 0, facebookProfileCoverY = 0, instagramGridX = 0, instagramGridY = 0, instagramStoriesX = 0, instagramStoriesY = 0, videoCallBackgroundX = 0, videoCallBackgroundY = 0, profilePictureX = 0, profilePictureY = 0, posterX = 0, posterY = 0) {

	// -------------------------------------------- //
	// SET DEFAULT XY COORDINATES
	// This function can be used to set XY coordinates 
	// for all image formats at the same time

	var coordinates = {}
	var uiXY = [document.getElementById("identityTextXPosition").value, document.getElementById("identityTextYPosition").value];

	if (formImageSize == "twitter-timeline") {
		coordinates.XY = [twitterTimelineX + Number(uiXY[0]), twitterTimelineY + Number(uiXY[1])];
	} else if (formImageSize == "twitter-profile-header") {
		coordinates.XY = [twitterProfileHeaderX + Number(uiXY[0]), twitterProfileHeaderY + Number(uiXY[1])];
	} else if (formImageSize == "facebook-timeline") {
		coordinates.XY = [facebookTimelineX + Number(uiXY[0]), facebookTimelineY + Number(uiXY[1])];
	} else if (formImageSize == "facebook-profile-cover") {
		coordinates.XY = [facebookProfileCoverX + Number(uiXY[0]), facebookProfileCoverY + Number(uiXY[1])];
	} else if (formImageSize == "instagram-grid") {
		coordinates.XY = [instagramGridX + Number(uiXY[0]), instagramGridY + Number(uiXY[1])];
	} else if (formImageSize == "instagram-stories") {
		coordinates.XY = [instagramStoriesX + Number(uiXY[0]), instagramStoriesY + Number(uiXY[1])];
	} else if (formImageSize == "video-call-background") {
		coordinates.XY = [videoCallBackgroundX + Number(uiXY[0]) + 500, videoCallBackgroundY + Number(uiXY[1])];
	}  else if (formImageSize == "profile-picture") {
		coordinates.XY = [profilePictureX + Number(uiXY[0]), profilePictureY + Number(uiXY[1])];
	} else if (formImageSize == "poster") {
		coordinates.XY = [posterX + Number(uiXY[0]), posterY + Number(uiXY[1])];
	}

	return coordinates;
}

function setFooterXYCoordinatesAllFormats(formImageSize, twitterTimelineX = 0, twitterTimelineY = 0, twitterProfileHeaderX = 0, twitterProfileHeaderY = 0, facebookTimelineX = 0, facebookTimelineY = 0, facebookProfileCoverX = 0, facebookProfileCoverY = 0, instagramGridX = 0, instagramGridY = 0, instagramStoriesX = 0, instagramStoriesY = 0, videoCallBackgroundX = 0, videoCallBackgroundY = 0, profilePictureX = 0, profilePictureY = 0, posterX = 0, posterY = 0) {

	// -------------------------------------------- //
	// SET DEFAULT XY COORDINATES
	// This function can be used to set XY coordinates 
	// for all image formats at the same time

	var coordinates = {}
	if (formImageSize == "twitter-timeline") {
		coordinates.XY = [twitterTimelineX, twitterTimelineY];
	} else if (formImageSize == "twitter-profile-header") {
		coordinates.XY = [twitterProfileHeaderX, twitterProfileHeaderY];
	} else if (formImageSize == "facebook-timeline") {
		coordinates.XY = [facebookTimelineX, facebookTimelineY];
	} else if (formImageSize == "facebook-profile-cover") {
		coordinates.XY = [facebookProfileCoverX, facebookProfileCoverY];
	} else if (formImageSize == "instagram-grid") {
		coordinates.XY = [instagramGridX, instagramGridY];
	} else if (formImageSize == "instagram-stories") {
		coordinates.XY = [instagramStoriesX, instagramStoriesY];
	} else if (formImageSize == "video-call-background") {
		coordinates.XY = [videoCallBackgroundX, videoCallBackgroundY];
	}  else if (formImageSize == "profile-picture") {
		coordinates.XY = [profilePictureX, profilePictureY];
	} else if (formImageSize == "poster") {
		coordinates.XY = [posterX, posterY];
	}

	return coordinates;
}

function getFormFields(imageSize = true, imageStyles = true, footerStyle = true, identityText = true, mainXY = true) {

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
		radios = document.getElementsByName('image-colours');
		for (var i = 0, length = radios.length; i < length; i++) {
			if (radios[i].checked) {
				// do whatever you want with the checked radio
				formFields.imageColours = radios[i].value;
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
	if (identityText == true) {
		formFields.identityText = document.getElementById("identityText").value;
		if (formFields.identityText == "") {
			// If the textbox is empty...
			formFields.identityText = "LGBT+";
		} else {
			// If it isn't...
			formFields.identityText = document.getElementById("identityText").value;
		}
	}
	if (mainXY == true) {
		formFields.mainXY = [document.getElementById("identityTextXPosition").value, document.getElementById("identityTextYPosition").value];
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
	if (formImageSize == "twitter-timeline") {
		imageSize.width = 1200;
		imageSize.height = 675;
	} else if (formImageSize == "twitter-profile-header") {
		imageSize.width = 1500;
		imageSize.height = 500;
	} else if (formImageSize == "facebook-timeline") {
		imageSize.width = 1200;
		imageSize.height = 630;
	} else if (formImageSize == "facebook-profile-cover") {
		imageSize.width = 820;
		imageSize.height = 640;
	} else if (formImageSize == "instagram-grid") {
		imageSize.width = 1080;
		imageSize.height = 1080;
	} else if (formImageSize == "instagram-stories") {
		imageSize.width = 1080;
		imageSize.height = 1920;
	} else if (formImageSize == "video-call-background") {
		imageSize.width = 1920;
		imageSize.height = 1080;
	}  else if (formImageSize == "profile-picture") {
		imageSize.width = 1080;
		imageSize.height = 1080;
	} else if (formImageSize == "poster") {
		imageSize.width = 3508;
		imageSize.height = 4960;
	}

	return imageSize;
	
}

function setimageStyles(formImageSize = "twitter-timeline", formImageStyles = "squares", formidentityText, imageSize) {

	// -------------------------------------------- //
	// SET IMAGE STYLES
	// This function sets the variables needed for each design.

	const	colours = {}
			colours.magenta = "#e6007e";
			colours.cyan = "#009fe3";
			colours.yellow = "#ffed00";
			colours.white = "#ffffff";
			colours.black = "#000000";

	var imageStyles = {}
	if (formImageStyles == "magenta") {
		// Background colours
		imageStyles.backgroundColor = colours.magenta;
		// Text colours
		imageStyles.colourLine1 = colours.white;
		imageStyles.colourLine2 = colours.white;
		imageStyles.colourLine3 = colours.yellow;
		imageStyles.footerColor = colours.white;
	} else if (formImageStyles == "cyan") {
		// Background colours
		imageStyles.backgroundColor = colours.cyan;
		// Text colours
		imageStyles.colourLine1 = colours.white;
		imageStyles.colourLine2 = colours.white;
		imageStyles.colourLine3 = colours.yellow;
		imageStyles.footerColor = colours.white;		
	} else if (formImageStyles == "yellow") {
		// Background colours
		imageStyles.backgroundColor = colours.yellow;
		// Text colours
		imageStyles.colourLine1 = colours.black;
		imageStyles.colourLine2 = colours.black;
		imageStyles.colourLine3 = colours.cyan;
		imageStyles.footerColor = colours.black;			
	}

	// Text align
	imageStyles.mainBaseline = "top";
	imageStyles.mainAlign = "center";
	imageStyles.footerBaseline = "bottom";
	imageStyles.footerAlign = "left";

	// Text font sizes
	var fontSize = 	setFontSize(
						formImageSize, 
						twitterTimelineMain = 42, 
						twitterTimelineFooter = 32, 
						twitterProfileHeaderMain = 34, 
						twitterProfileHeaderFooter = 28, 
						facebookTimelineMain = 38, 
						facebookTimelineFooter = 30, 
						facebookProfileCoverMain = 30, 
						facebookProfileCoverFooter = 30, 
						instagramGridMain = 56, 
						instagramGridFooter = 36, 
						instagramStoriesMain = 56, 
						instagramStoriesFooter = 42, 
						videoCallBackgroundMain = 48, 
						videoCallBackgroundFooter = 48, 
						profilePictureMain = 48, 
						profilePictureFooter = 0, 
						posterMain = 180, 
						posterFooter = 150
					);

	imageStyles.fontSizeLine1 = fontSize.main * 2.25;
	imageStyles.fontSizeLine2 = fontSize.main * 3.5;
	imageStyles.fontSizeLine3 = fontSize.main * 4;
	
	var textBlockHeight = imageStyles.fontSizeLine1 + imageStyles.fontSizeLine2 + imageStyles.fontSizeLine3;

	// Main text (x,y) positions
	var centreOfCanvas = [(imageSize.width / 2), (imageSize.height / 2) - (textBlockHeight / 2)]
	var textOffset = [centreOfCanvas[0], centreOfCanvas[1]];

	var textLine1XY = 	setMainXYCoordinatesAllFormats(
							formImageSize,  
							twitterTimelineX = textOffset[0], 
							twitterTimelineY = textOffset[1], 
							twitterProfileHeaderX = textOffset[0], 
							twitterProfileHeaderY = textOffset[1], 
							facebookTimelineX = textOffset[0], 
							facebookTimelineY = textOffset[1], 
							facebookProfileCoverX = textOffset[0], 
							facebookProfileCoverY = textOffset[1], 
							instagramGridX = textOffset[0], 
							instagramGridY = textOffset[1], 
							instagramStoriesX = textOffset[0], 
							instagramStoriesY = textOffset[1], 
							videoCallBackgroundX = textOffset[0], 
							videoCallBackgroundY = textOffset[1], 
							profilePictureX = textOffset[0], 
							profilePictureY = textOffset[1], 
							posterX = textOffset[0], 
							posterY = textOffset[1]
						);
	
	var textOffset = [centreOfCanvas[0], centreOfCanvas[1] + (imageStyles.fontSizeLine1 * 0.9)];
	var textLine2XY = 	setMainXYCoordinatesAllFormats(
							formImageSize,  
							twitterTimelineX = textOffset[0], 
							twitterTimelineY = textOffset[1], 
							twitterProfileHeaderX = textOffset[0], 
							twitterProfileHeaderY = textOffset[1], 
							facebookTimelineX = textOffset[0], 
							facebookTimelineY = textOffset[1], 
							facebookProfileCoverX = textOffset[0], 
							facebookProfileCoverY = textOffset[1], 
							instagramGridX = textOffset[0], 
							instagramGridY = textOffset[1], 
							instagramStoriesX = textOffset[0], 
							instagramStoriesY = textOffset[1], 
							videoCallBackgroundX = textOffset[0], 
							videoCallBackgroundY = textOffset[1], 
							profilePictureX = textOffset[0], 
							profilePictureY = textOffset[1], 
							posterX = textOffset[0], 
							posterY = textOffset[1]
						);

	var textOffset = [centreOfCanvas[0], centreOfCanvas[1]  + (imageStyles.fontSizeLine1 * 1.1) + imageStyles.fontSizeLine2 * 0.75];
	var textLine3XY = 	setMainXYCoordinatesAllFormats(
							formImageSize,  
							twitterTimelineX = textOffset[0], 
							twitterTimelineY = textOffset[1], 
							twitterProfileHeaderX = textOffset[0], 
							twitterProfileHeaderY = textOffset[1], 
							facebookTimelineX = textOffset[0], 
							facebookTimelineY = textOffset[1], 
							facebookProfileCoverX = textOffset[0], 
							facebookProfileCoverY = textOffset[1], 
							instagramGridX = textOffset[0], 
							instagramGridY = textOffset[1], 
							instagramStoriesX = textOffset[0], 
							instagramStoriesY = textOffset[1], 
							videoCallBackgroundX = textOffset[0], 
							videoCallBackgroundY = textOffset[1], 
							profilePictureX = textOffset[0], 
							profilePictureY = textOffset[1], 
							posterX = textOffset[0], 
							posterY = textOffset[1]
						);
	
	// Footer text (x,y) positions
	var footerXY = setFooterXYCoordinatesAllFormats(
						formImageSize, 
						twitterTimelineX = 45, 
						twitterTimelineY = imageSize.height - twitterTimelineX,
						twitterProfileHeaderX = 45, 
						twitterProfileHeaderY = twitterProfileHeaderX * 2, 
						facebookTimelineX = 45, 
						facebookTimelineY = imageSize.height - facebookTimelineX, 
						facebookProfileCoverX = 45, 
						facebookProfileCoverY = imageSize.height - facebookProfileCoverX, 
						instagramGridX = 60, 
						instagramGridY = imageSize.height - instagramGridX, 
						instagramStoriesX = 70, 
						instagramStoriesY = imageSize.height - instagramStoriesX, 
						videoCallBackgroundX = 100, 
						videoCallBackgroundY = imageSize.height - instagramStoriesX, 
						profilePictureX = -100, 
						profilePictureY = -100, 
						posterX = 100, 
						posterY = imageSize.height - posterX
					);

	// How many rows for the footer text?
	var footerRows = setFooterRows(formImageSize, twitterTimeline = 2, twitterProfileHeader = 2, facebookTimeline = 2, facebookProfileCover = 2, instagramGrid = 2, instagramStories = 2, videoCallBackground = 2, profilePicture = 2, poster = 2);
	imageStyles.footerFontSize = fontSize.footer;
	imageStyles.textLine1XY = [Number(textLine1XY.XY[0]), Number(textLine1XY.XY[1])];
	imageStyles.textLine2XY = [Number(textLine2XY.XY[0]), Number(textLine2XY.XY[1])];
	imageStyles.textLine3XY = [Number(textLine3XY.XY[0]), Number(textLine3XY.XY[1])];
	imageStyles.footerXY = [Number(footerXY.XY[0]), Number(footerXY.XY[1])];
	imageStyles.footerRows = footerRows.count;

	return imageStyles;
	
}

function drawRestOfImage(ctx, formFields, imageSize, imageStyles) {

	
	// Form main text, set text baseline
	ctx.textBaseline=imageStyles.mainBaseline;
	ctx.textAlign=imageStyles.mainAlign;
	ctx.font = "normal " + imageStyles.mainFontSize +  "px " + canvasScriptFontFace;

	var maxTextWidth = (Math.min(imageSize.width, imageSize.height) * 0.5);
	var maxTextHeight = (imageSize.height * 0.8);

	var text = {}
		text.custom = formFields.identityText + " &";
		text.line1 = "Civil servant,".toLowerCase();
		text.line2 = text.custom.toLowerCase();
		text.line3 = "proud";

	// Civil servant
	ctx.fillStyle = imageStyles.colourLine1;
	ctx.font = "normal " + imageStyles.fontSizeLine1 +  "px " + canvasScriptFontFace;
	ctx.fillText(text.line1, imageStyles.textLine1XY[0], imageStyles.textLine1XY[1])

	// YOUR IDENTITY &
	ctx.fillStyle = imageStyles.colourLine2;
	ctx.font = "normal " + imageStyles.fontSizeLine2 +  "px " + canvasScriptFontFace;
	ctx.fillText(text.line2, imageStyles.textLine2XY[0], imageStyles.textLine2XY[1])

	// Proud
	ctx.fillStyle = imageStyles.colourLine3;
	ctx.font = "normal " + imageStyles.fontSizeLine3 +  "px " + canvasScriptFontFace;
	ctx.fillText(text.line3, imageStyles.textLine3XY[0], imageStyles.textLine3XY[1])

	

	console.log("Successfully printed text...");

	if (formFields.footerStyle == "on") {
		// Form footer text, set text baseline
		ctx.fillStyle = imageStyles.footerColor;
		ctx.textBaseline=imageStyles.footerBaseline;
		ctx.textAlign=imageStyles.footerAlign;
		ctx.font = "bold " + imageStyles.footerFontSize +  "px " + canvasSansSerifFontFace;
	
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

	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.fillStyle = imageStyles.backgroundColor;
	ctx.fillRect(0, 0, canvas.width, canvas.height);


	// var imageObj = new Image();
	// imageObj.src = "/image-maker/assets/images/civil-servant-and-proud/" + formFields.imageSize + "--" + formFields.imageColours + ".png";

	// imageObj.onload = function() {
		
		// -------------------------------------------- //
		// DRAW BACKGROUND
		// ctx.drawImage(imageObj, 0, 0, canvas.width, canvas.height);

		// -------------------------------------------- //
		// DRAW FOREGROUND
		drawRestOfImage(ctx, formFields, imageSize, imageStyles);

		// save canvas image as data url (png format by default)
		var dataURL = canvas.toDataURL('image/jpeg', 1.0);
	
		// set canvasImg image src to dataURL
		// so it can be saved as an image
		previewImage = document.getElementById('canvas-img');
		previewImage.src = dataURL;
	
		console.log("Done!");
	
	// }

}

var outputDownload = document.getElementById('output-download');
outputDownload.addEventListener('click', function (e) {
	var today = new Date();
	var now = today.getTime();
	var dataURL = canvas.toDataURL('image/jpeg', 1.0);
	outputDownload.download = now + " civilservantandproud.jpeg"
    outputDownload.href = dataURL;
});



