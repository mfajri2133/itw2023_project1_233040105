var form = document.getElementById("formEmail");

function sendEmail() {
     var name = form.querySelector("#senderName").value;
     var email = form.querySelector("#senderEmail").value;
     var title = form.querySelector("#titleMsg").value;
     var message = form.querySelector("#msg").value;

     var emailUrl =
          "mailto:spag.959@gmail.com" +
          "?subject=" +
          encodeURIComponent("Inquiry: " + title) +
          "&body=" +
          encodeURIComponent(
               "Hello,\n\n" +
                    "My name is " +
                    name +
                    " and my email is " +
                    email +
                    ".\n\n" +
                    "I am writing to inquire about: " +
                    title +
                    "\n\n" +
                    "Message:\n" +
                    message
          );

     window.location.href = emailUrl;
}

form.addEventListener("submit", function (event) {
     event.preventDefault();
     sendEmail();
});
