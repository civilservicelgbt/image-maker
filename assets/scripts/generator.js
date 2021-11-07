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

		var lines = [],
        words = text.replace(/\n\n/g,' ` ').replace(/(\n\s|\s\n)/g,'\r').replace(/\s\s/g,' ').replace('`',' ').replace(/(\r|\n)/g,' '+' ').split(' '),
        space = ctx.measureText(' ').width,
        width = 0,
        line = '',
        word = '',
        len = words.length,
        w = 0,
        i;
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