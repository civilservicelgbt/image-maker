function showDialog(x) {
	// show the dialog
	var dialog = document.getElementById(x);
	dialog.showModal();
}

function closeDialog(x) {
	// show the dialog
	var dialog = document.getElementById(x);
	dialog.close();
}

function updateImage() {

	// set image size and dimensions
	var imageSize = getImageSize();
	// set image styles
	var imageStyles = getImageStyles();

	// generate image
	var canvas = document.getElementById('canvas');

	canvas.width = imageSize.width;
	canvas.height = imageSize.height;
	canvas.padding = imageSize.padding;
	canvas.maxWidth = canvas.width - (3 * canvas.padding);
	canvas.fontSize = imageSize.fontSize;
	canvas.footerFontsize = imageSize.footerFontSize;
	canvas.text = document.getElementById("mainText").value;
	canvas.startTextX = imageSize.startTextX;
	canvas.startTextY = imageSize.startTextY;
	canvas.lineHeight = canvas.fontSize * 1.2;
	canvas.style.width = canvas.width + "px";
	canvas.style.height = canvas.height + "px";

	var ctx = canvas.getContext('2d');

	ctx.clearRect(0, 0, canvas.width, canvas.height)
	ctx.rect(0, 0, canvas.width, canvas.height);

	var imageObj = new Image();
	imageObj.src = "/image-maker/assets/images/" + imageSize.format + "--" + imageStyles.background + ".png";

	imageObj.onload = function() {

		// -------------------------------------------- //
		// DRAW BACKGROUND
		ctx.drawImage(imageObj, 0, 0, canvas.width, canvas.height);

		// -------------------------------------------- //
		// DRAW FOREGROUND
		// Form main text, set text baseline
		ctx.textBaseline="top";
		ctx.textAlign="left";
		ctx.font = "normal " + imageSize.fontSize + "px Helvetica, Arial";
		ctx.fillStyle = imageStyles.textColor;

		var lines = getLines(ctx, canvas.text, canvas.maxWidth);

		for (var i = 0; i < lines.length; i++) {
			line = lines[i]
			ctx.fillText(line, canvas.startTextX, canvas.startTextY);
			canvas.startTextY += canvas.lineHeight;
			console.info("Line "+ i + ": " + line);
		}

		ctx.textBaseline = "top";
		ctx.textAlign = "left";
		ctx.font = "bold " + imageSize.footerFontSize + "px Helvetica, Arial";
		ctx.fillStyle = imageStyles.footerTextColor;

		var startFooterTextY = canvas.height - canvas.padding - imageSize.footerFontSize;

		ctx.fillText("Civil Service", canvas.padding, startFooterTextY - (imageSize.footerFontSize * 1.1));
		ctx.fillText("LGBT+ Network.", canvas.padding, startFooterTextY);

		// save canvas image as data url (png format by default)
		var dataURL = canvas.toDataURL('image/jpeg', 1.0);

		// set canvasImg image src to dataURL
		// so it can be saved as an image
		previewImage = document.getElementById('canvas-img');
		previewImage.src = dataURL;

	}

}

function getLines(ctx, text, maxWidth) {

		var lines = [];
    var words = text.replace(/\n/g,' ').split(' ');
    var space = ctx.measureText(' ').width;
    var width = 0;
    var line = '';
    var word = '';
    var len = words.length;
    var w = 0;
    var i;

    for (i = 0; i < len; i++) {
      word = words[i];
      w = word ? ctx.measureText(word).width : 0;
      if (w) {
          width = width + space + w;
      }
      if (w && width < maxWidth) {
          line += word + ' ';
      } else {
          !i || lines.push(line !== '' ? line.trim() : ' ');
          line = word + ' ';
          width = w;
      }
    }
    if (len !== i || line !== '') {
        lines.push(line.trim());
    }

		console.log(lines)
		return lines;

}

function getImageStyles() {

	var imageStyles = {}

	var radios = document.getElementsByName('image-design');
	for (var i = 0, length = radios.length; i < length; i++) {
		if (radios[i].checked) {
			// do whatever you want with the checked radio
			imageStyles.background = radios[i].value;
			// only one radio can be logically checked, don't check the rest
			break;
		}
	}

	switch (imageStyles.background) {
	  
	    case "magenta":
				imageStyles.textColor = "#FFFFFF";
				imageStyles.footerTextColor = "#FFFFFF";
				break;
		
	    case "cyan":
				imageStyles.textColor = "#FFFFFF";
				imageStyles.footerTextColor = "#FFFFFF";
				break;
		
	    case "yellow":
				imageStyles.textColor = "#0B0C0C";
				imageStyles.footerTextColor = "#0B0C0C";
				break;
		
	    case "prideon":
				imageStyles.textColor = "#FFFFFF";
				imageStyles.footerTextColor = "#FFFFFF";
				break;
		
	    case "podcast":
				imageStyles.textColor = "#FFFFFF";
				imageStyles.footerTextColor = "#FFFFFF";
				break;
		
		default:
			imageStyles.padding = 40;
			imageStyles.textColor = "#FFFFFF";
			imageStyles.footerTextColor = "#FFFFFF";

	}

	return imageStyles;

}

function getImageSize() {
	var imageSize = {}

	var radios = document.getElementsByName('image-size');
	for (var i = 0, length = radios.length; i < length; i++) {
		if (radios[i].checked) {
			// do whatever you want with the checked radio
			imageSize.format = radios[i].value;
			// only one radio can be logically checked, don't check the rest
			break;
		}
	}

	switch (imageSize.format) {
	  
	    case "twitter-timeline":
				imageSize.width = 1200;
				imageSize.height = 675;
				imageSize.padding = 40;
				imageSize.startTextX = 40;
				imageSize.startTextY = 80;
				imageSize.fontSize = 48;
				imageSize.footerFontSize = 48;
				break;
		
	    case "facebook-timeline":
				imageSize.width = 1200;
				imageSize.height = 630;
				imageSize.padding = 40;
				imageSize.startTextX = 40;
				imageSize.startTextY = 80;
				imageSize.fontSize = 48;
				imageSize.footerFontSize = 48;
				break;
		
	    case "instagram-grid":
				imageSize.width = 1080;
				imageSize.height = 1080;
				imageSize.padding = 40;
				imageSize.startTextX = 40;
				imageSize.startTextY = 120;
				imageSize.fontSize = 70;
				imageSize.footerFontSize = 55;
				break;
		
	    case "instagram-stories":
				imageSize.width = 1080;
				imageSize.height = 1920;
				imageSize.padding = 40;
				imageSize.startTextX = 40;
				imageSize.startTextY = 240;
				imageSize.fontSize = 90;
				imageSize.footerFontSize = 65;
				break;
		
		default:
			imageSize.width = 1080;
			imageSize.height = 1080;
			imageSize.startTextX = 40;
			imageSize.startTextY = 40;
			imageSize.fontSize = 48;
			imageSize.footerFontSize = 48;

	}

	return imageSize

}

var outputDownload = document.getElementById('output-download');
outputDownload.addEventListener('click', function (e) {
	var today = new Date();
	var now = today.getTime();
	var dataURL = canvas.toDataURL('image/jpeg', 1.0);
	outputDownload.download = now + " cslgbt.jpeg"
  outputDownload.href = dataURL;
	console.log("✅ Done")
});