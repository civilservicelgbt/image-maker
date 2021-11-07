var base = "https://github.com/civilservicelgbt/images/upload/main/store"

// FIND FILES - NAV

	function getRadiosValue(radios) {
		var radioItems = document.getElementsByName(radios);

		for (var i = 0; i < radioItems.length; i++) {   
			if (radioItems[i].checked) {       
				var value = radioItems[i].value;
			}
		}

		return value;  

	}

	// Step by step toggles
	function openFolder(hide, show) {

		var radios = getRadiosValue(show);
		var hideThis = document.getElementById(hide);
		var showThis = document.getElementById(radios);

		if (radios == null) {
			alert("Select a folder");
		} else {
			hideThis.hidden = true;
			showThis.hidden = false;
		}

	}

	function backFolder(hide, show) {

		var hideThis = document.getElementById(hide);
		var showThis = document.getElementById(show);

		hideThis.hidden = true;
		showThis.hidden = false;
	}

	function openImageDetails(hide, show, radioItems) {

		var radios = getRadiosValue(radioItems);
		var hideThis = document.getElementById(hide);
		var showThis = document.getElementById(show);

		var filename = document.getElementById("details--filename");
		var filetype = document.getElementById("details--filetype");
		var filemodified = document.getElementById("details--filemodified");
		var foldername = document.getElementById("details--foldername");
		var imagepath = document.getElementById("details--path");
		var imagepreview = document.getElementById("details--image-preview");

		if (radios == null) {
			alert("Select an image");
		} else {
			console.info("Show image: " + radios)

			var imageData = document.getElementsByName(radioItems);

			for (var i = 0; i < imageData.length; i++) {   
				if (imageData[i].checked) {       
					filename.innerHTML = imageData[i].dataset.filename;
					filetype.innerHTML = imageData[i].dataset.filetype;
					filemodified.innerHTML = imageData[i].dataset.filemodified;
					foldername.innerHTML = imageData[i].dataset.foldername;
					imagepath.innerHTML = imageData[i].dataset.path;
					imagepreview.src = "https://www.civilservice.lgbt/images" + imageData[i].dataset.path;
				}
			}

			hideThis.hidden = true;
			showThis.hidden = false;
		}
	}

	function revealTextInputOnChange(valueToToggle, fieldToToggle, radioItems) {
		var radios = getRadiosValue(radioItems);
		var field = document.getElementById(fieldToToggle);

		if (radios == valueToToggle) {
			field.hidden = false;
		} else {
			field.hidden = true;
		}
	}

	function cleanFolderName(id, replace = "all") {
		var field = document.getElementById(id)
		var fieldvalue = field.value;
		var clean = fieldvalue.replace(/([^a-z0-9]+)/gi, '-');
		var clean = clean.toLowerCase();
		console.log("#" + id + " input cleaned to “" + clean + "”" )
		field.value = "/" + clean + "/";
	}

	function cleanFieldInput(id, replace = "all") {
		var field = document.getElementById(id)
		var fieldvalue = field.value;

		if (replace == "spaces") {
			var clean = fieldvalue.replace(/\s/gi, '-');
		} else if (replace == "spaces-dots") {
			var clean = fieldvalue.replace(/[\.\s]/gi, '-');
		} else if (replace == "not-slash") {
			var clean = fieldvalue.replace(/[^a-z0-9\/]/gi, '-');
		} else if (replace == "not-dots") {
			var clean = fieldvalue.replace(/[^a-z0-9\.]/gi, '-');
		} else {
			var clean = fieldvalue.replace(/([^a-z0-9]+)/gi, '-');
		}

		var clean = clean.toLowerCase();
		console.log("#" + id + " input cleaned to “" + clean + "”" )
		field.value = clean;
	}

	function getFolderName(radioItems) {
		var folderRadios = getRadiosValue(radioItems);
		var newfoldername = document.getElementById("image--new-folder-name");
		var foldername = document.getElementById("image--folder-name");

		if (folderRadios == "new-folder") {
			console.log("radios new-folder")
			foldername.value = newfoldername.value;
		} else {
			console.log("radios not new-folder")
			foldername.value = "" + folderRadios;
		}
	}

	function updateFilenamePreview() {
		var filename = document.getElementById("image--filename");
		var filenamepreview = document.getElementById("filename-code");

		filenamepreview.innerHTML = filename.value;
	}

// FILE MANIPULATION

	// Open image in new window
	function openImageInWindow() {
		var imagepreview = document.getElementById("details--image-preview");
		var imageURL = imagepreview.src;
		var imageWindow = window.imageWindow = window.open(imageURL, "Open image in new window");
	}

	// Copy image URL to clipboard
	function copyImageURL() {
		var imagepreview = document.getElementById("details--image-preview");
		var imageURL = imagepreview.src;
		navigator.clipboard.writeText(imageURL);
	}

// ADD TO GITHUB

	// Open the GitHub window
	function openGitHub() {
	  var foldername = document.getElementById("image--folder-name");
	  var uploadURL = base + foldername.value;
	  console.log("Upload target is: " + uploadURL)
	  var GitHubImageWindow = window.GitHubImageWindow = window.open(uploadURL, "Add a file to GitHub");
	}

	// Step by step toggles
	function switchStep(hide, show) {
		var hideThis = document.getElementById(hide);
		var showThis = document.getElementById(show);

		hideThis.hidden = true;
		showThis.hidden = false;
	}