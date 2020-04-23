/* FIND A PHOTOGRAPHER */
function openEvent(evt, eventName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(eventName).style.display = "block";
    evt.currentTarget.className += " active";
}

/* FIND A PHOTOGRAPHER */

/* BE LISTED */
function capitalize_inputs(str) { //function to capitalize inputs
  return str.replace(/\w\S*/g, function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}
$(document).ready(function() { 
  $("#listForm").submit(function(event) {
      event.preventDefault(); //prevent form from submitting
      getListed(); //carry out function
  });
});

function getListed(){
    var photogName = capitalize_inputs(document.getElementById("listName").value);
    localStorage.setItem("Name", JSON.stringify(photogName));
    var birthdays = document.getElementById("birthdayRadio").checked;
    localStorage.setItem("Event2", JSON.stringify(birthdays));
    var babyshowers = document.getElementById("babyshowerRadio").checked;
    localStorage.setItem("Event1", JSON.stringify(babyshowers));
    var graduations = document.getElementById("graduationRadio").checked;
    localStorage.setItem("Event3", JSON.stringify(graduations));
    var weddings = document.getElementById("weddingRadio").checked;
    localStorage.setItem("Event4", JSON.stringify(weddings));
    var photogCost = document.getElementById("listCost").value;
    localStorage.setItem("Cost", JSON.stringify(photogCost));
    var photogAbout = document.getElementById("listAbout").value;
    localStorage.setItem("About", JSON.stringify(photogAbout));
    var photogEmail = document.getElementById("listEmail").value;
    localStorage.setItem("Email", JSON.stringify(photogEmail));
    var photogPortfolio = document.getElementById("listPortfolio").value;
    localStorage.setItem("Portfolio", JSON.stringify(photogPortfolio));
    // Get a reference to the image element
    var listImage = document.getElementById("listImage");
    // Take action when the image has loaded
    listImage.addEventListener("load", function () {
        var imgCanvas = document.createElement("canvas"),
            imgContext = imgCanvas.getContext("2d");

        // Make sure canvas is as big as the picture
        imgCanvas.width = listImage.width;
        imgCanvas.height = listImage.height;

        // Draw image into canvas element
        imgContext.drawImage(listImage, 0, 0, listImage.width, listImage.height);

        // Get canvas contents as a data URL
        var imgAsDataURL = imgCanvas.toDataURL("image/png");

        // Save image into localStorage
        try {
            localStorage.setItem("listImage", imgAsDataURL);
        }
        catch (e) {
            console.log("Storage failed: " + e);
        }
    }, false); 
    if ((photogName != "") || (photogPortfolio != "") || (photogEmail != "")|| (photogAbout != "")){ //ensure all fields have inputs
    $("#photogProfile").show();
    //post data to card from localstorage
    document.getElementById("photogName").innerHTML = JSON.parse(localStorage.getItem("Name"));
    document.getElementById("photogCost").innerHTML = JSON.parse(localStorage.getItem("Cost"));
    //var profileImage = JSON.parse(localStorage.getItem("listImage"));
    //document.getElementById("photogImage").src= profileImage;
    document.getElementById("photogAbout").innerHTML = JSON.parse(localStorage.getItem("About"));
    document.getElementById("photogPortfolio").innerHTML = JSON.parse(localStorage.getItem("Portfolio"));
    document.getElementById("photogEmail").innerHTML = JSON.parse(localStorage.getItem("Email"));
    } else { //display error message if any field is empty
      document.getElementById("error").innerHTML = "Please fill in all fields!";
      document.getElementById("error").style.color = "red"
    }
    document.getElementById("listForm").reset(); //reset form
}
/* BE LISTED */

