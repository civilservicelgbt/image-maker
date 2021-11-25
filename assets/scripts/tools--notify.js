// GET THE SELECTED CONTENT

	var notifyService = document.getElementById("service-identifier").value;
	var mailingListService = document.getElementById("mailing-identifier-service").value;
	var mailingListTab = document.getElementById("mailing-identifier-tab").value;

	function getCurrentDate() {

		const months = {
		  0: 'January',
		  1: 'February',
		  2: 'March',
		  3: 'April',
		  4: 'May',
		  5: 'June',
		  6: 'July',
		  7: 'August',
		  8: 'September',
		  9: 'October',
		  10: 'November',
		  11: 'December'
		}

		const now = new Date();
		const d = now.getDate();
		const m = now.getMonth();
		const month = months[m]; //January is 0!
		const y = now.getFullYear();
		const date = d + " " + month + " " + y;

		return date;
	}

function getRadios(el) {
	var radios = document.getElementsByName(el);
	for (var i = 0, length = radios.length; i < length; i++) {
		if (radios[i].checked) {
		  // do whatever you want with the checked radio
		  value = radios[i].value;
		  // only one radio can be logically checked, don't check the rest
		  break;
		}
	}
	return value;
}

// GENERATE THE NOTIFY CONTENT

	function updateContent(type) {

		var posts = document.getElementsByName("notify-posts");
		if (type == "regions") {
			var regionName = getRadios("region-select");
		}
		if (type == "topics") {
			var topicName = getRadios("topic-select");
		}
		var date = getCurrentDate();

		// Create variables to hold the outputs
		if (type == "events") {
			var emailTemplateName = "Events: " + date;
			var emailSubject = "Upcoming events: " + date;
		} else if (type == "regions") {
			var emailTemplateName = "Regional update (" + regionName + "): " + date;
			var emailSubject = "Regional update for " + regionName + ": " + date;
		} else if (type == "topics") {
			var emailTemplateName = "Topic update (" + topicName + "): " + date;
			var emailSubject = "Topic update for " + topicName + ": " + date;
		} else {
			var emailTemplateName = "Updates: " + date;
			var emailSubject = "Latest news and updates: " + date;
		}
		var emailMessageContent = "";

		var inputTemplateName = document.getElementById("notify--input--template");
		var inputSubject = document.getElementById("notify--input--subject");
		var textareaMessageContent = document.getElementById("notify--textarea--message-content");
		var codeTemplateName = document.getElementById("notify--code--template-name");

		if (type == "events") {
			emailMessageContent += "# Upcoming events\n\n";
			emailMessageContent += date + "\n\n";
			emailMessageContent += "Upcoming events and activities from the Civil Service LGBT+ Network.\n\n";
		} else if (type == "regions") {
			emailMessageContent += "# Region update: " + regionName + "\n\n";
			emailMessageContent += date + "\n\n";
			emailMessageContent += "Updates for " + regionName + " from the Civil Service LGBT+ Network.\n\n";
		} else if (type == "topics") {
			emailMessageContent += "# Topic update: " + topicName + "\n\n";
			emailMessageContent += date + "\n\n";
			emailMessageContent += "Updates relating to " + topicName + " from the Civil Service LGBT+ Network.\n\n";
		} else {
			emailMessageContent += "# Latest updates\n\n";
			emailMessageContent += date + "\n\n";
			emailMessageContent += "The latest news and updates from the Civil Service LGBT+ Network.\n\n";
		}

		console.group("Selected posts")
		for (i = 0; i < posts.length; i++) {
			var postTitle = posts[i].dataset.title;
			var postCategory = posts[i].dataset.category;
			if (postCategory == "") { var postCategory = "none" }
			var postCollection = posts[i].dataset.collection;
			var postExcerpt = posts[i].dataset.excerpt;
			var postDate = posts[i].dataset.date;
			var postURL = posts[i].dataset.url;

		  if (posts[i].checked) {
				if (type == "events") {
					console.groupCollapsed(postTitle);
						console.info("Collection: " + postCollection);
						console.info("Event excerpt: " + postExcerpt);
			    	console.info("Event date: " + postDate);
						console.info("Event URL: " + postURL);
						console.info("Category: " + postCategory);
					console.groupEnd();

					emailMessageContent += "---\n";
					emailMessageContent += "# " + postTitle + "\n";
					emailMessageContent += "Taking place on " + postDate + "\n\n";
					emailMessageContent += postExcerpt + "\n\n";
					emailMessageContent += "Find out more and register to attend at: \n" + postURL + "\n\n";
				} else if (type == "regions" || type == "topics") {

					if (postCollection == "events") {
						console.groupCollapsed(postTitle);
							console.info("Collection: " + postCollection);
							console.info("Event excerpt: " + postExcerpt);
				    	console.info("Event date: " + postDate);
							console.info("Event URL: " + postURL);
							console.info("Category: " + postCategory);
						console.groupEnd();

						emailMessageContent += "---\n";
						emailMessageContent += "# " + postTitle + "\n";
						emailMessageContent += "Taking place on " + postDate + "\n\n";
						emailMessageContent += postExcerpt + "\n\n";
						emailMessageContent += "Find out more and register to attend at: \n" + postURL + "\n\n";
					} else {
						console.groupCollapsed(postTitle);
							console.info("Collection: " + postCollection);
							console.info("Post excerpt: " + postExcerpt);
				    	console.info("Post date: " + postDate);
							console.info("Post URL: " + postURL);
							console.info("Category: " + postCategory);
						console.groupEnd();

						emailMessageContent += "---\n";
						emailMessageContent += "# " + postTitle + "\n";
						emailMessageContent += postExcerpt + "\n\n";
						emailMessageContent += "Read more at: \n" + postURL + "\n\n";
						emailMessageContent += "Published " + postDate + "\n\n";
					}

				} else {
					console.groupCollapsed(postTitle);
						console.info("Collection: " + postCollection);
						console.info("Post excerpt: " + postExcerpt);
			    	console.info("Post date: " + postDate);
						console.info("Post URL: " + postURL);
						console.info("Category: " + postCategory);
					console.groupEnd();

					emailMessageContent += "---\n";
					emailMessageContent += "# " + postTitle + "\n";
					emailMessageContent += postExcerpt + "\n\n";
					emailMessageContent += "Read more at: \n" + postURL + "\n\n";
					emailMessageContent += "Published " + postDate + "\n\n";
				}
		  }
		}
		console.groupEnd()

		emailMessageContent += "---\n"
		emailMessageContent += "If you no longer want to recieve our email alerts, please email us at updates@alerts.civilservice.lgbt or just reply to this email."

		inputTemplateName.value = emailTemplateName;
		inputSubject.value = emailSubject;
		textareaMessageContent.value = emailMessageContent;
		codeTemplateName.innerHTML = "<code>" + emailTemplateName + "</code>"
	}

// COPY TO CLIPBOARD

	function copyToClipboard(el){
		/* Get the text field */
		var output = document.getElementById(el).value;
		if (output == "") {
			alert("ERROR\n\nCannot copy.\n\nThe text field you are trying to copy is empty.");
		} else {
		/* Copy the text inside the text field */
			navigator.clipboard.writeText(output);
		}
	}

	function postContentToClipboard(){
		var output = generateJekyllPostContent();
		navigator.clipboard.writeText(output);
	}

	function fieldContentToClipboard(el){
		/* Get the text field */
		var output = document.getElementById(el).value;
		if (output == "") {
			alert("ERROR\n\nCannot copy.\n\nThe text field you are trying to copy is empty.");
		} else {
		/* Copy the text inside the text field */
			navigator.clipboard.writeText(output);
		}
	}

// WINDOWS

	// Open the Notify window
	function openNotify(destination) {
		var notifyURL = checkDestination(destination);
	  var browserWindow = window.Notify = window.open(notifyURL, "Send an email with GOV.UK Notify");
	}

	// Open the ML window
	function openMailingList() {
		var mailingListURL = checkDestination("ml")
	  var browserWindow = window.MailingList = window.open(mailingListURL, "Mailing list");
	}

	// Switch back to Notify
	function focusNotify(destination) {
		var notifyURL = checkDestination(destination);
		if (!window.Notify || window.Notify.closed) {
			window.Notify = window.open(notifyURL, "Send an email with GOV.UK Notify");
		}
		window.Notify.focus();
	}

	// Switch back to ML
	function focusMailingList() {
		var mailingListURL = checkDestination("ml")
		if (!window.MailingList || window.MailingList.closed) {
			window.MailingList = window.open(mailingListURL, "Mailing list");
		}
		window.MailingList.focus();
	}

	function checkDestination(destination) {
    if (destination == "login") {
			var url = "https://www.notifications.service.gov.uk/sign-in";
		} else if (destination == "new-template") {
			var url = "https://www.notifications.service.gov.uk/services/" + notifyService + "/templates/add-email";
		} else if (destination == "ml") {
			var url = "https://docs.google.com/spreadsheets/d/" + mailingListService + "/edit#gid=" + mailingListTab;
		} else {
			var url = "https://www.notifications.service.gov.uk/services/" + notifyService + "/templates";
		}
		return url
	}

	// Step by step toggles
	function switchStep(hide, show) {
		var hideThis = document.getElementById(hide);
		var showThis = document.getElementById(show);

		hideThis.hidden = true;
		showThis.hidden = false;
	}