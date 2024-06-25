<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'set/src/Exception.php';
require 'set/src/PHPMailer.php';
require 'set/src/SMTP.php';

if(isset($_POST["send"])){
    $mail = new PHPMailer(true);

    $mail->isSMTP();
    $mail->Host = 'smpt.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = '@gmail.com';
    $mail->Password = '';
    $mail->SMTPSecure = 'ssl';
    $mail->Port =465;

    $mail->setFrom('');
    $mail->addAddress($_POST["email"]);
    $mail->isHTML(true);
    $mail->Subject = $_POST["subject"];
    $mail->Body = $_POST["message"];
    $mail->send();

    echo "<script>
    alert ('Sent Succesfully');
    document.location.href = 'index.php';
    </script.
    ";
}
?>
