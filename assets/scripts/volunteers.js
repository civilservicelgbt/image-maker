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

	// get form fields

	// set image size
	var imageSize = getImageSize();
	// set image styles
	var imageStyles = getImageStyles();

	// generate image
	var canvas = document.getElementById('canvas');

	canvas.width = imageSize.width;
	canvas.height = imageSize.height;
	canvas.padding = 40;
	canvas.maxwidth = canvas.width - (3 * canvas.padding);
	canvas.fontsize = 48;
	canvas.text = document.getElementById("mainText").value;
	canvas.startTextX = canvas.padding;
	canvas.startTextY = canvas.padding;
	canvas.lineheight = canvas.fontsize * 1.2;
	canvas.style.width = canvas.width + "px";
	canvas.style.height = canvas.height + "px";

	var ctx = canvas.getContext('2d');

	ctx.clearRect(0, 0, canvas.width, canvas.height)
	ctx.fillStyle = '#ffffff';
	ctx.rect(0, 0, canvas.width, canvas.height);

	var imageObj = new Image();
	imageObj.src = "/image-maker/assets/images/" + imageSize.format + "--" + imageStyles.background + ".png";
	// imageObj.src = "/image-maker/assets/images/default/" + formFields.imageSize + "--" + formFields.imageDesign + ".png";

	imageObj.onload = function() {

		// -------------------------------------------- //
		// DRAW BACKGROUND
		ctx.drawImage(imageObj, 0, 0, canvas.width, canvas.height);

		// -------------------------------------------- //
		// DRAW FOREGROUND
		// Form main text, set text baseline
		ctx.textBaseline="top";
		ctx.textAlign="left";
		ctx.font = "normal 48px Helvetica, Arial";
		ctx.fillStyle = "#FFFFFF";

		console.log("Successfully set text styles...");

		var lines = getLines(ctx, canvas.text, canvas.maxwidth);

		for (var i = 0; i < lines.length; i++) {
			line = lines[i]
			ctx.fillText(line, canvas.startTextX, canvas.startTextY);
			canvas.startTextY += canvas.lineheight;
		}

		console.log("Successfully printed text...");

		ctx.fillStyle = "#FFFFFF";
		ctx.textBaseline = "top";
		ctx.textAlign = "left";
		ctx.font = "bold 48px Helvetica, Arial";

		var startFooterTextY = canvas.height - canvas.padding - canvas.fontsize;

		ctx.fillText("Civil Service", canvas.padding, startFooterTextY - canvas.lineheight);
		ctx.fillText("LGBT+ Network.", canvas.padding, startFooterTextY);

		console.log("Successfully printed the footer...");

		// save canvas image as data url (png format by default)
		var dataURL = canvas.toDataURL('image/jpeg', 1.0);

		// set canvasImg image src to dataURL
		// so it can be saved as an image
		previewImage = document.getElementById('canvas-img');
		previewImage.src = dataURL;

		console.log("Done!");

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
      if (w > maxWidth) {
          return [];
      } else if (w && width < maxWidth) {
          line += word + ' ';
      } else {
          !i || lines.push(line !== '' ? line.trim() : ' ');
          line = word + ' ';
          width = w;
      }
    }
    if (len !== i || line !== '') {
        lines.push(line);
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

	if (imageSize.format == "twitter") {
		imageSize.width = 1200;
		imageSize.height = 675;
	} else if (imageSize.format == "facebook") {
		imageSize.width = 1200;
		imageSize.height = 630;
	} else if (imageSize.format == "instagram-grid") {
		imageSize.width = 1080;
		imageSize.height = 1080;
	} else if (imageSize.format == "instagram-stories") {
		imageSize.width = 1080;
		imageSize.height = 1920;
	} else {
		imageSize.width = 1080;
		imageSize.height = 1080;
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
});