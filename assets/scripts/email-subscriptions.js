
document.getElementById("button-subscribe").disabled = true;
document.getElementById("button-subscribe").classList.add("button--disabled");

function checkMandatoryFields() {
	var inputFirstName = document.getElementById("register--email-address").value;
	var inputLastName = document.getElementById("register--first-name").value;
	var inputEmail = document.getElementById("register--last-name").value;
	var agreeAlerts = document.getElementById("permission-to-contact--agree").checked;
	var agreeTerms = document.getElementById("privacy-policy--agree").checked;
	var subscribeButton = document.getElementById("button-subscribe");
	var subscribeWarningText = document.getElementById("warning-text");
	var errorEmailAddress = document.getElementById("error--email-address");
	var errorFirstName = document.getElementById("error--first-name");
	var errorLastName = document.getElementById("error--last-name");
	var errorEmailPermissions = document.getElementById("error--email-permissions");
	var errorPrivacyPolicy = document.getElementById("error--privacy-policy");

	if (agreeAlerts == false || agreeTerms == false || inputFirstName == "" || inputLastName == "" || inputEmail == "" ) {
		subscribeButton.disabled = true;
		subscribeButton.classList.add("button--disabled");
		subscribeWarningText.hidden = false;
		console.groupCollapsed("The following errors were detected");
			if (inputFirstName == "") {
				console.warn("First name not provided");
			}
			if (inputLastName == "") {
				console.warn("Last name not provided");
			}
			if (inputEmail == "") {
				console.warn("Email address not provided");
			}
			if (agreeAlerts != true) {
				console.warn("Permission not given to send email alerts");
			}
			if (agreeTerms != true) {
				console.warn("Privacy policy terms not agreed");
			}
		console.groupEnd();
	}

	if (inputFirstName == "") {
		errorEmailAddress.hidden = false;
	} else {
		errorEmailAddress.hidden = true;
	}
	if (inputLastName == "") {
		errorFirstName.hidden = false;
	} else {
		errorFirstName.hidden = true;
	}
	if (inputEmail == "") {
		errorLastName.hidden = false;
	} else {
		errorLastName.hidden = true;
	}
	if (agreeAlerts != true) {
		errorEmailPermissions.hidden = false;
	} else {
		errorEmailPermissions.hidden = true;
	}
	if (agreeTerms != true) {
		errorPrivacyPolicy.hidden = false;
	} else {
		errorPrivacyPolicy.hidden = true;
	}

	if (agreeAlerts == true && agreeTerms == true && inputFirstName != "" && inputLastName != "" && inputEmail != "" ) {
		console.info("All mandatory fields completed")
		subscribeButton.disabled = false;
		subscribeButton.classList.remove("button--disabled");
		subscribeWarningText.hidden = true;
	}
}

let url = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSe_x2T2kG1vEhlca2dvYlv7c_EnmaC8EmWiFX43mzgh7ZA28Q/formResponse"; //action url
let form = document.querySelector("#register-for-email-updates"); //form element

form.addEventListener("submit", (e)=>{
    e.preventDefault();//prevent default behaviour

    fetch(url,{
        method: "POST",
        mode: "no-cors",
        header:{
            'Content-Type': 'application/json'
            },
        body: getInputData()
    })
    .then(data=>{
			window.location.href = "https://www.civilservice.lgbt/membership/success";
    })
    .catch(
	err=>{
		console.error(err)
		window.location.href = "https://www.civilservice.lgbt/membership/error";
	}); //promise based
});

//populating input data
function getInputData(){
    let dataToPost = new FormData(); //formdata API

    //fill name attributes to corresponding values
    dataToPost.append("entry.631754769", document.querySelector("#register--email-address").value);
    dataToPost.append("entry.1537856661", document.querySelector("#register--first-name").value);
    dataToPost.append("entry.1933497432", document.querySelector("#register--last-name").value);
    dataToPost.append("entry.2068507182", getRadios("entry.2068507182"));
    dataToPost.append("entry.2036359820", getRadios("entry.2036359820"));

		var regionCheckboxes = document.getElementsByName("entry.1342613772");
		for (var i = 0, length = regionCheckboxes.length; i < length; i++) {
			if (regionCheckboxes[i].checked) {
			  // do whatever you want with the checked radio
			  dataToPost.append("entry.1342613772", regionCheckboxes[i].value);
			}
		}
		var topicCheckboxes = document.getElementsByName("entry.1870224098");
		for (var i = 0, length = topicCheckboxes.length; i < length; i++) {
			if (topicCheckboxes[i].checked) {
			  // do whatever you want with the checked radio
			  dataToPost.append("entry.1870224098", topicCheckboxes[i].value);
			}
		}

    return dataToPost;
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
