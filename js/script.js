var form = document.getElementById("formEmail");

function sendEmail() {
     var name = form.querySelector("#senderName").value;
     var title = form.querySelector("#titleMsg").value;
     var message = form.querySelector("#msg").value;

     var emailUrl =
          "mailto:spag.959@gmail.com" +
          "?subject=" +
          encodeURIComponent(title) +
          "&body=" +
          encodeURIComponent(
               "Hello Fajri,\n\n" +
                    "Name : " +
                    name +
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
