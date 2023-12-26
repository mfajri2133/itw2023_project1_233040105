var form = document.getElementById("formEmail");

function sendEmail() {
     var name = form.querySelector("#senderName").value;
     var email = form.querySelector("#senderEmail").value;
     var title = form.querySelector("#titleMsg").value;
     var message = form.querySelector("#msg").value;

     var emailUrl =
          "mailto:spag.959@gmail.com" +
          "?subject=" +
          encodeURIComponent(title) +
          "&body=" +
          encodeURIComponent(
               "Halo Muhamad Fajri,\n\n" +
                    "Nama saya " +
                    name +
                    "\n" +
                    "Email : " +
                    email +
                    ".\n\n" +
                    "Message:\n" +
                    message
          );

     window.location.href = emailUrl;
}

form.addEventListener("submit", function (event) {
     event.preventDefault();
     sendEmail();
});

document.getElementById("formEmail").addEventListener("input", function () {
     var form = document.getElementById("formEmail");
     var name = form.querySelector("#senderName").value;
     var email = form.querySelector("#senderEmail").value;
     var title = form.querySelector("#titleMsg").value;
     var message = form.querySelector("#msg").value;
     var submitButton = document.getElementById("submitButton");
     var completionMessage = document.getElementById("completionMessage");

     if (
          name.trim() !== "" &&
          message.trim() !== "" &&
          email.trim() !== "" &&
          title.trim() !== "" &&
          email.includes("@") &&
          email.includes(".") &&
          email.length > 5 &&
          email.indexOf("@") < email.indexOf(".")
     ) {
          submitButton.removeAttribute("disabled");
          completionMessage.style.display = "none";
     } else {
          submitButton.setAttribute("disabled", "disabled");
          completionMessage.style.display = "block";
     }
});
