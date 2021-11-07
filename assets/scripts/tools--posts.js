// GET THE POST TYPE

	const generator = document.getElementById("post-generator");
	const postType = generator.dataset.posttype;

	const now = new Date();
	const nowDay = String(now.getDate()).padStart(2, '0');
	const nowMonth = String(now.getMonth() + 1).padStart(2, '0'); //January is 0!
	const nowYear = now.getFullYear();

// GET THE FIELDS

	// Post title and summary

		// Title
		var postTitle = document.getElementById("post-title");
		// Excerpt
		var postExcerpt = document.getElementById("post-excerpt");

	// Post author

		// Author
		var postAuthor = document.getElementById("post-author");

	// Post publication date

		// Day
		var postPublishDay = document.getElementById("post-day");
		// Month
		var postPublishMonth = document.getElementById("post-month");
		// Year
		var postPublishYear = document.getElementById("post-year");

	// Post topics

		// Topic
		var postTopic = document.getElementById("post-topic");

	// Team member details

		// Role
		var postTeamMemberRole = document.getElementById("post-team-member-role");
		// Project
		var postTeamMemberProject = document.getElementById("post-team-member-project");
		// Region
		var postTeamMemberRegion = document.getElementById("post-team-member-region");
		// Email
		var postTeamMemberEmail = document.getElementById("post-team-member-email");

	// Event start date

		// Day
		var postEventStartDay = document.getElementById("post-event-start-day");
		// Month
		var postEventStartMonth = document.getElementById("post-event-start-month");
		// Year
		var postEventStartYear = document.getElementById("post-event-start-year");
		// Hour
		var postEventStartHour = document.getElementById("post-event-start-hour");
		// Minute
		var postEventStartMinute = document.getElementById("post-event-start-minute");

	// Event end date

		// Day
		var postEventEndDay = document.getElementById("post-event-end-day");
		// Month
		var postEventEndMonth = document.getElementById("post-event-end-month");
		// Year
		var postEventEndYear = document.getElementById("post-event-end-year");
		// Hour
		var postEventEndHour = document.getElementById("post-event-end-hour");
		// Minute
		var postEventEndMinute = document.getElementById("post-event-end-minute");

	// Event registration closing date

		// Day
		var postEventRegistrationCloseDay = document.getElementById("post-event-registration-end-day");

		// Month
		var postEventRegistrationCloseMonth = document.getElementById("post-event-registration-end-month");

		// Year
		var postEventRegistrationCloseYear = document.getElementById("post-event-registration-end-year");

		// Hour
		var postEventRegistrationCloseHour = document.getElementById("post-event-registration-end-hour");

		// Minute
		var postEventRegistrationCloseMinute = document.getElementById("post-event-registration-end-minute");

	// Event registration info

		// Form URL
		var postEventFormURL = document.getElementById("post-registration-form");

		// Email
		var postEventEmail = document.getElementById("post-registration-email");

		// No register message
		var postEventNoRegMessage = document.getElementById("post-registration-message");

	// Event location

		// Location
		var postEventLocation = document.getElementById("post-registration-location");

	// Consultation end date

		// Day
		var postConsultationEndDay = document.getElementById("post-consultation-end-day");

		// Month
		var postConsultationEndMonth = document.getElementById("post-consultation-end-month");

		// Year
		var postConsultationEndYear = document.getElementById("post-consultation-end-year");

		// Hour
		var postConsultationEndHour = document.getElementById("post-consultation-end-hour");

		// Minute
		var postConsultationEndMinute = document.getElementById("post-consultation-end-minute");

	// Consultation details

		// Website
		var postConsultationWebsite = document.getElementById("post-consultation-link");

	// Images and videos

		// Image URL
		var postImage = document.getElementById("post-image");

		// Video URL
		var postVideo = document.getElementById("post-video");

	// Permalinks

		// Permalink
		var postPermalink = document.getElementById("post-permalink");

		// Redirect From
		var postRedirectFrom = document.getElementById("post-redirect-from");

		// Redirect To
		var postRedirectTo = document.getElementById("post-redirect-to");

	// Filename

		// Filename
		var postFilename = document.getElementById("post-filename");

	// Body content

		var postContent = document.getElementById("post-content");

	// GitHub URL

		var postGitHubURL = document.getElementById("post-github-url");

// GENERATE THE CONTENT

	function generateJekyllPostContent() {

		// Create a variable to hold the post output
		var jekyllPost = "";

		// Add in the relevant fields...

			jekyllPost += "---\n"; // Need the front matter to be surrounded by 3 dashes on a new line

			jekyllPost += "# Adding or removing a '#' in front of a line will toggle that information off and on from being processed. \n\n"

			jekyllPost += "layout: " + postType + "\n";

			jekyllPost += "title: \"" + postTitle.value + "\"\n";

		if (postType != "team") {
			jekyllPost += "excerpt: \"" + postExcerpt.value + "\"\n";
		}

		if (postType == "news") {

			if (postPublishYear.value == "") {
				jekyllPost += "# ";
			}
			jekyllPost += "date: " + postPublishYear.value + "-" + postPublishMonth.value + "-"  + postPublishDay.value + "\n";

			if (postAuthor.value == "") {
				jekyllPost += "# ";
			}
			jekyllPost += "author: \"" + postAuthor.value + "\"\n";

			if (postTopic.value == "") {
				jekyllPost += "# category: \n# - " + postTopic.value + "\n";
			} else {
				jekyllPost += "category: \n- " + postTopic.value + "\n";
			}


			if (postImage.value == "") {
				jekyllPost += "# ";
			}
			jekyllPost += "image: \"" + postImage.value + "\"\n";

			if (postVideo.value == "") {
				jekyllPost += "# ";
			}
			jekyllPost += "video: \"" + postVideo.value + "\"\n";
		}

		if (postType == "event") {
			if (postPublishYear.value == "") {
				jekyllPost += "# ";
			}
			jekyllPost += "date: " + postPublishYear.value + "-" + postPublishMonth.value + "-"  + postPublishDay.value + "\n";

			if (postAuthor.value == "") {
				jekyllPost += "# ";
			}
			jekyllPost += "author: \"" + postAuthor.value + "\"\n";

			if (postTopic.value == "") {
				jekyllPost += "# category: \n# - " + postTopic.value + "\n";
			} else {
				jekyllPost += "category: \n- " + postTopic.value + "\n";
			}

			if (postEventFormURL.value == "") {
				jekyllPost += "# ";
			}
			jekyllPost += "link: \"" + postEventFormURL.value + "\"\n";
			if (postEventEmail.value == "") {
				jekyllPost += "# ";
			}
			jekyllPost += "email: \"" + postEventEmail.value + "\"\n";
			if (postEventNoRegMessage.value == "") {
				jekyllPost += "# ";
			}
			jekyllPost += "no-register: \"" + postEventNoRegMessage.value + "\"\n";
			if (postEventLocation.value == "") {
				jekyllPost += "# ";
			}
			jekyllPost += "location: \"" + postEventLocation.value + "\"\n";

			if (postEventStartYear.value == "") {
				jekyllPost += "# ";
			}
			jekyllPost += "start-date: " + postEventStartYear.value + "-" + postEventStartMonth.value + "-"  + postEventStartDay.value + " " + postEventStartHour.value + ":" + postEventStartMinute.value + "\n";

			if (postEventEndYear.value == "") {
				jekyllPost += "# ";
			}
			jekyllPost += "end-date: " + postEventEndYear.value + "-" + postEventEndMonth.value + "-"  + postEventEndDay.value + " " + postEventEndHour.value + ":" + postEventEndMinute.value + "\n";

			if (postEventRegistrationCloseYear.value == "") {
				jekyllPost += "# "
			}
			jekyllPost += "registration-close-date: " + postEventRegistrationCloseYear.value + "-" + postEventRegistrationCloseMonth.value + "-"  + postEventRegistrationCloseDay.value + " " + postEventRegistrationCloseHour.value + ":" + postEventRegistrationCloseMinute.value + "\n";


			if (postImage.value == "") {
				jekyllPost += "# ";
			}
			jekyllPost += "image: \"" + postImage.value + "\"\n";

			if (postVideo.value == "") {
				jekyllPost += "# ";
			}
			jekyllPost += "video: \"" + postVideo.value + "\"\n";
		}

		if (postType == "publication") {
			if (postPublishYear.value == "") {
				jekyllPost += "# ";
			}
			jekyllPost += "date: " + postPublishYear.value + "-" + postPublishMonth.value + "-"  + postPublishDay.value + "\n";

			if (postAuthor.value == "") {
				jekyllPost += "# ";
			}
			jekyllPost += "author: \"" + postAuthor.value + "\"\n";

			if (postTopic.value == "") {
				jekyllPost += "# category: \n# - " + postTopic.value + "\n";
			} else {
				jekyllPost += "category: \n- " + postTopic.value + "\n";
			}

			if (postImage.value == "") {
				jekyllPost += "# ";
			}
			jekyllPost += "image: \"" + postImage.value + "\"\n";

			if (postPermalink.value == "") {
				jekyllPost += "# permalink: " + postPermalink.value + "\n";
			} else {
				jekyllPost += "permalink: " + postPermalink.value + "\n";
			}

		}

		if (postType == "consultation") {
			if (postPublishYear.value == "") {
				jekyllPost += "# ";
			}
			jekyllPost += "date: " + postPublishYear.value + "-" + postPublishMonth.value + "-"  + postPublishDay.value + "\n";
			if (postAuthor.value == "") {
				jekyllPost += "# ";
			}
			jekyllPost += "author: \"" + postAuthor.value + "\"\n";
			if (postTopic.value == "") {
				jekyllPost += "# category: \n# - " + postTopic.value + "\n";
			} else {
				jekyllPost += "category: \n- " + postTopic.value + "\n";
			}
			if (postConsultationWebsite.value == "") {
				jekyllPost += "# ";
			}
			jekyllPost += "link: \"" + postConsultationWebsite.value + "\"\n";
			if (postConsultationEndYear.value == "") {
				jekyllPost += "# ";
			}
			jekyllPost += "end-date: " + postConsultationEndYear.value + "-" + postConsultationEndMonth.value + "-"  + postConsultationEndDay.value + " " + postConsultationEndHour.value + ":" + postConsultationEndMinute.value + "\n";

			if (postImage.value == "") {
				jekyllPost += "# ";
			}
			jekyllPost += "image: \"" + postImage.value + "\"\n";

			if (postVideo.value == "") {
				jekyllPost += "# ";
			}
			jekyllPost += "video: \"" + postVideo.value + "\"\n";
		}

		if (postType == "topic") {
			if (postTopic.value == "") {
				jekyllPost += "# category: \n# - " + postTopic.value + "\n";
			} else {
				jekyllPost += "category: \n- " + postTopic.value + "\n";
			}

			if (postImage.value == "") {
				jekyllPost += "# ";
			}
			jekyllPost += "image: \"" + postImage.value + "\"\n";

		}

		if (postType == "team") {
			
			jekyllPost += "name: \"" + postTitle.value + "\"\n";
			
			if (postTeamMemberRole.value == "") {
				jekyllPost += "# ";
			}
			jekyllPost += "role: \"" + postTeamMemberRole.value + "\"\n";

			if (postTeamMemberProject.value == "") {
				jekyllPost += "# ";
			}
			jekyllPost += "project: \"" + postTeamMemberProject.value + "\"\n";

			if (postTeamMemberRegion.value == "") {
				jekyllPost += "# ";
			}
			jekyllPost += "region: \"" + postTeamMemberRegion.value + "\"\n";

			if (postTeamMemberEmail.value == "") {
				jekyllPost += "# ";
			}
			jekyllPost += "email: \"" + postTeamMemberEmail.value + "\"\n";

			if (postImage.value == "") {
				jekyllPost += "# ";
			}
			jekyllPost += "image: \"" + postImage.value + "\"\n";

		}


			if (postPermalink.value == "") {
				jekyllPost += "# permalink: " + postPermalink.value + "\n";
			} else {
				jekyllPost += "permalink: " + postPermalink.value + "\n";
			}

			if (postRedirectFrom.value == "") {
				jekyllPost += "# redirect_from: \n# - " + postRedirectFrom.value + "\n";
			} else {
				jekyllPost += "redirect_from: \n- " + postRedirectFrom.value + "\n";
			}
			if (postRedirectTo.value == "") {
				jekyllPost += "# redirect_to: \n# - " + postRedirectTo.value + "\n";
			} else {
				jekyllPost += "redirect_to: \n- " + postRedirectTo.value + "\n";
			}

			jekyllPost += "---\n\n"; // Need the front matter to be surrounded by 3 dashes on a new line


			if (postType == "publication") {
				jekyllPost += `
<!-- Include the following to generate a Table of Contents -->
* Table of contents will generate here
{:toc}
<!-- Don't touch the Table of Contents above -->
<!-- Include this line to process the Markdown and format the content properly -->
<div id="markdown-content" markdown="1">
<!-- Don't remove the line of code above -->
				`
			}

			jekyllPost += postContent.value;

			if (postType == "publication") {
				jekyllPost += `
<!-- Include this line to process the Markdown and format the content properly -->
</div>
<!-- Don't remove the line of code above -->
				`
			}

		// Output the content

		return jekyllPost;

	}

// GENERATE AN EMAIL

function postContentToEmail() {
	var output = generateJekyllPostContent(); // Post content
	var subject = "[" + postType + " for website] " + postTitle.value;

	// Generate the email
	document.location.href = "mailto:info@civilservice.lgbt?subject="
	+ encodeURIComponent(subject)
	+ "&body=" + encodeURIComponent(output);
}

// DOWNLOAD A FILE

	function postContentToFile() {
		var output = generateJekyllPostContent(); // Post content
		var filename = postFilename.value;
		// Create the file and download it
		var element = document.createElement('a');
		element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(output));
		element.setAttribute('download', filename);
		element.style.display = 'none';
		document.body.appendChild(element);
		element.click();
		document.body.removeChild(element);
		alert("Your file will now download to your computer. \n\nThe file will be called " + filename +" \n\n You can open the file using any plain text editor (like TextEdit or Notepad) if you need to edit it.")
	}

// COPY TO CLIPBOARD

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

// ADD TO GITHUB

	// Open the GitHub window
	function openGitHub() {
	  var postURL = postGitHubURL.value;
	  var GitHubWindow = window.GitHub = window.open(postURL, "Add a post to GitHub");
	}

	// Switch back to GitHub
	function focusGitHub() {
		var postURL = postGitHubURL.value;
		if (!window.GitHub || window.GitHub.closed) {
			window.GitHub = window.open(postURL, "Add a post to GitHub");
		}
		window.GitHub.focus();
	}

	// Step by step toggles
	function switchGitHubStep(hide, show) {
		var hideThis = document.getElementById(hide);
		var showThis = document.getElementById(show);

		hideThis.hidden = true;
		showThis.hidden = false;
	}

// HELPERS

	function cleanFieldInput(id, replace = "all") {
		var field = document.getElementById(id)
		var fieldvalue = field.value;

		if (replace == "spaces") {
			var clean = fieldvalue.replace(/\s/gi, '-');
		} else if (replace == "spaces-dots") {
			var clean = fieldvalue.replace(/[\.\s]/gi, '-');
		} else if (replace == "not-slash") {
			var clean = fieldvalue.replace(/[^a-z0-9\/]/gi, '-');
		} else {
			var clean = fieldvalue.replace(/([^a-z0-9]+)/gi, '-');
		}

		var clean = clean.toLowerCase();
		console.log("#" + id + " input cleaned to “" + clean + "”" )
		field.value = clean;
	}

	function cleanText(input) {
		// Takes inputs and removes spaces and special characters
		// so that text can be used as URL or filenames

		var cleaned = input.replace(/([^a-z0-9]+)/gi, '-');
		var cleaned = cleaned.toLowerCase();

		var title = cleaned;

		return title;
	}

	function setDefaultDate() {
		if (postType != "team" && (postPublishYear.value == "" || postPublishMonth.value == "" || postPublishDay.value == "")) {
			postPublishYear.value = nowYear;
			postPublishMonth.value = nowMonth;
			postPublishDay.value = nowDay;
		}

		if (postType == "event" && (postEventStartYear.value == "" || postEventStartMonth.value == "" || postEventStartDay.value == "")) {
				postEventStartYear.value = nowYear;
				postEventStartMonth.value = nowMonth;
				postEventStartDay.value = nowDay;
				postEventStartHour.value = "00";
				postEventStartMinute.value = "00";
		}

	}

	function setPermalinkDate() {

		var separator = "/";

		if (postType == "consultation" || postType == "publication" || postType == "topic" || postType == "team" || postType == "manual") {

			var date = null;

		} else if (postType == "event") {

			var year = postEventStartYear.value;
			var month = postEventStartMonth.value;
			var day = postEventStartDay.value;

			var date = year + separator + month + separator + day;

		} else {

			var year = postPublishYear.value;
			var month = postPublishMonth.value;
			var day = postPublishDay.value;

			var date = year + separator + month + separator + day;

		}

		return date;

	}

	function setFilenameDate() {

		var separator = "-";

		if (postType == "topic" || postType == "team" || postType == "event" || postType == "manual") {

			var date = null;

		}  else {

			var year = postPublishYear.value;
			var month = postPublishMonth.value;
			var day = postPublishDay.value;

			var date = year + separator + month + separator + day;

		}

		return date;

	}

	function setGitHubDate() {

		if (postType == "event") {

			var separator = "/";
			var year = postEventStartYear.value;
			var month = postEventStartMonth.value;
			var day = postEventStartDay.value;

			var date = year + separator + month + separator + day;

		} else {

			var date = null;

		}

		return date;

	}

	function updatePermalink() {
		var collection = postType;
		var date = setPermalinkDate();
		var title = postTitle.value;
		var cleanedTitle = cleanText(postTitle.value);

		if (date == null) {
			newPermalink = "/" + collection + "/" + cleanedTitle;
		} else {
			newPermalink = "/" + collection + "/" + date + "/" + cleanedTitle;
		}

		postPermalink.value = newPermalink;

		console.info("Post permalink updated. Permalink is: " + newPermalink);
	}

	function updateFilename() {
		var date = setFilenameDate();
		var title = postTitle.value;
		var cleanedTitle = cleanText(postTitle.value);

		if (date == null) {
			newFilename = cleanedTitle;
		} else {
			newFilename = date + "-" + cleanedTitle;
		}

		newFilename = newFilename + ".md";

		postFilename.value = newFilename;

		console.info("Post file name updated. File name is: " + newFilename);
	}

	function updateGitHubDirectory() {
		var base = "https://github.com/civilservicelgbt/civilservicelgbt.github.io/new/main"

		if (postType == "news" || postType == "team") {
			var collection = "_" + postType;
		} else {
			var collection = "_" + postType + "s";
		}
		var date = setGitHubDate();
		var title = postTitle.value;
		var cleanedTitle = cleanText(postTitle.value);

		if (date == null) {
			newGitHubURL = base + "/" + collection;
		} else {
			newGitHubURL = base + "/" + collection + "/" + date;
		}

		postGitHubURL.value = newGitHubURL;

		console.info("GitHub repository URL updated. URL is: " + newGitHubURL);
	}

	function updateFields() {
		setDefaultDate();
		updatePermalink();
		updateFilename();
		updateGitHubDirectory();
	}
