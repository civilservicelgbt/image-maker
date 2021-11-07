var base = "https://github.com/civilservicelgbt/documents/upload/main/store"

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

	function openDocumentDetails(hide, show, radioItems) {

		var radios = getRadiosValue(radioItems);
		var hideThis = document.getElementById(hide);
		var showThis = document.getElementById(show);

		var filename = document.getElementById("details--filename");
		var filetype = document.getElementById("details--filetype");
		var filemodified = document.getElementById("details--filemodified");
		var foldername = document.getElementById("details--foldername");
		var documentpath = document.getElementById("details--path");

		if (radios == null) {
			alert("Select an document");
		} else {
			console.info("Show document: " + radios)

			var documentData = document.getElementsByName(radioItems);

			for (var i = 0; i < documentData.length; i++) {   
				if (documentData[i].checked) {       
					filename.innerHTML = documentData[i].dataset.filename;
					filetype.innerHTML = documentData[i].dataset.filetype;
					filemodified.innerHTML = documentData[i].dataset.filemodified;
					foldername.innerHTML = documentData[i].dataset.foldername;
					documentpath.innerHTML = documentData[i].dataset.path;
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
		var newfoldername = document.getElementById("document--new-folder-name");
		var foldername = document.getElementById("document--folder-name");

		if (folderRadios == "new-folder") {
			foldername.value = newfoldername.value;
		} else {
			foldername.value = "" + folderRadios;
		}
	}

	function updateFilenamePreview() {
		var filename = document.getElementById("document--filename");
		var filenamepreview = document.getElementById("filename-code");

		filenamepreview.innerHTML = filename.value;
	}

// FILE MANIPULATION

	// Open document in new window
	function openDocumentInWindow() {
		var documentpath = document.getElementById("details--path");
		var documentURL = "https://www.civilservice.lgbt/documents" + documentpath.innerHTML;
		var documentWindow = window.documentWindow = window.open(documentURL, "Open document in new window");
	}

	// Copy document URL to clipboard
	function copyDocumentURL() {
		var documentpath = document.getElementById("details--path");
		var documentURL = "https://www.civilservice.lgbt/documents" + documentpath.innerHTML;
		navigator.clipboard.writeText(documentURL);
	}

// ADD TO GITHUB

	// Open the GitHub window
	function openGitHub() {
	  var foldername = document.getElementById("document--folder-name");
	  var uploadURL = base + foldername.value;
	  console.log("Upload target is: " + uploadURL)
	  var GitHubDocumentWindow = window.GitHubDocumentWindow = window.open(uploadURL, "Add a file to GitHub");
	}

	// Step by step toggles
	function switchStep(hide, show) {
		var hideThis = document.getElementById(hide);
		var showThis = document.getElementById(show);

		hideThis.hidden = true;
		showThis.hidden = false;
	}