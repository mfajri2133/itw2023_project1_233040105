<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
     $name = $_POST["name"];
     $email = $_POST["email"];
     $title = $_POST["title"];
     $message = $_POST["message"];

     $to = "spag.959@gmail.com";
     $subject = "Portfolio Form Submission";
     $messageBody = "Name: $name\nEmail: $email\nTitle: $title\nMessage: $message";

     $headers = "From: webmaster@example.com";

     if (mail($to, $subject, $messageBody, $headers)) {
          echo "Email sent successfully";
     } else {
          echo "Error sending email";
     }
} else {

     header("Location: index.html");
     exit();
}
