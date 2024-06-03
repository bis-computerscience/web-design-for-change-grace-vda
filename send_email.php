<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'path/to/PHPMailer/src/Exception.php';
require 'path/to/PHPMailer/src/PHPMailer.php';
require 'path/to/PHPMailer/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $mail = new PHPMailer();

    // SMTP Configuration
    $mail->isSMTP();
    $mail->Host = 'smtp.example.com'; // Your SMTP host
    $mail->SMTPAuth = true;
    $mail->Username = 'your@example.com'; // Your SMTP username
    $mail->Password = 'your_password'; // Your SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;

    // Email content
    $mail->setFrom('your@example.com', 'Your Name');
    $mail->addAddress('grace.violet.vda@gmail.com');
    $mail->Subject = 'New Contact Form Submission';
    $mail->Body = "Name: $name\nEmail: $email\nMessage: $message";

    if($mail->send()) {
        echo 'Thank you for contacting us. Your message has been sent.';
    } else {
        echo 'There was a problem sending your message. Please try again.';
    }
}
$mail->SMTPDebug = SMTP::DEBUG_SERVER;

?>