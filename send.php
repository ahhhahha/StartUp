<?php
// Подключаем файлы PHPMailer
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';
require 'PHPMailer/src/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Создаем экземпляр PHPMailer
    $mail = new PHPMailer(true);

    try {
        // Настройки сервера
        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com';  // Укажите SMTP сервер
        $mail->SMTPAuth   = true;
        $mail->Username   = 'samsungkh0901@gmail.com'; // Ваш SMTP логин
        $mail->Password   = 'fgyl hpoc xijr unvv';          // Ваш SMTP пароль
        $mail->SMTPSecure = 'ssl';
        $mail->Port       = 465;

        // От кого письмо
        $mail->setFrom($email, $name);

        // Кому письмо
        $mail->addAddress('samsungkh0901@gmail.com', 'JOpa'); // Ваш email и имя

        // Тема письма
        $mail->Subject = 'Новое сообщение с формы';

        // Тело письма
        $mail->Body    = 'Вы получили новое сообщение от ' . $name . ' (' . $email . '). Сообщение: ' . $message;

        // Отправляем письмо
        $mail->send();
        echo 'Сообщение отправлено';
    } catch (Exception $e) {
        echo "Сообщение не может быть отправлено. Ошибка: {$mail->ErrorInfo}";
    }
}
?>

