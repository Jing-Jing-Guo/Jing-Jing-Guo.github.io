<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);
    
    $to = "jacquelineakirak@gmail.com";  // Replace with your email
    $subject = "New Message from Your Portfolio";
    $headers = "From: $email" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               "Content-Type: text/html; charset=UTF-8";

    $body = "<h2>New Message from Portfolio</h2>
             <p><strong>Name:</strong> $name</p>
             <p><strong>Email:</strong> $email</p>
             <p><strong>Message:</strong></p>
             <p>$message</p>";

    if (mail($to, $subject, $body, $headers)) {
        echo "<script>alert('Message sent successfully!');</script>";
        echo "<script>window.location = 'index.html';</script>";
    } else {
        echo "<script>alert('Failed to send message.');</script>";
    }
} else {
    echo "Invalid request.";
}
?>