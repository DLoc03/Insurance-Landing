<?php
function sendContactMailWithPHPMail(array $data):bool|string {

    $to="vynhatduy111@gmail.com";
    $subject =$data['subject']??"Thông tin đăng ký khóa học AI";

    $message = <<<EOD
Họ tên: {$data['fullName']}
Email: {$data['email']}
Số điện thoại: {$data['phone']}
Dịch vụ đăng ký: {$data['service']}
Lời nhắn kèm theo: {$data['text']}
EOD;


    $headers = "From: SuriShop Contact <no-reply@surishops.com>\r\n";
    $headers .= "Reply-To: {$data['email']}\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    $parameters = "-f no-reply@surishops.com";
    
    if (mail($to, $subject, $message, $headers, $parameters)) {
        return true;
    } else {
        return "Không gửi được email. Hãy kiểm tra cấu hình máy chủ.";
    }
}