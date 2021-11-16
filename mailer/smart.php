<?php

$content = trim(file_get_contents("php://input"));
$request = json_decode($content, true);

$phone = $request['user__phone'];
$name = $request['user__name'];
$email = $request['user__email'];
$message = $request['user__message'];

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.yandex.ru';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'FrontiersFrontiers@yandex.ru';                 // Наш логин
$mail->Password = 'tppyaiydnncgijry';                           // Наш пароль от ящика
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to
 
$mail->setFrom('FrontiersFrontiers@yandex.ru', 'Frontiers');   // От кого письмо 
$mail->addAddress('anatolykostarev@gmail.com');     // Add a recipient
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'С сайта frontiers.ru поступила заявка на звонок';
$mail->Body    = '
	Пользователь оставил свои данные <br> 
	Телефон: '.$phone.'<br>
    Имя: '.$name.'<br>
    Email: '.$email.'<br>
    Комментарий: '.$message;
$mail->AltBody = 'Это альтернативный текст';

if(!$mail->send()) {
    return false;
} else {
    return true;
}

?>