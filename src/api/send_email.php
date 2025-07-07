<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../includes/PHPMailer/src/Exception.php';
require '../includes/PHPMailer/src/PHPMailer.php';
require '../includes/PHPMailer/src/SMTP.php';

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    
  $input = json_decode(file_get_contents('php://input'), true);

  $destinatario = filter_var($input['email'] ?? '', FILTER_VALIDATE_EMAIL);
  $telefone = htmlspecialchars($input['telefone'] ?? '');
  $mensagem = nl2br(htmlspecialchars($input['mensagem'] ?? ''));

  if ($destinatario && $mensagem) {
    $mail = new PHPMailer(true);

    try {
        $mail->isSMTP();
        $mail->Host       = 'smtp.hostinger.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = ''; // Seu e-mail
        $mail->Password   = ''; // Sua senha
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
        $mail->Port       = 465;
        $mail->CharSet    = 'UTF-8';

        $mail->addReplyTo('', '');
        $mail->setFrom('', 'Novo Contato');
        $mail->addAddress($destinatario);

        $mail->isHTML(true);
        $mail->Subject = 'Você recebeu uma nova mensagem!';

        $mail->Body = "
            <div style='font-family: sans-serif; background-color: #063f6c; padding: 40px; color: white;'>
                <h1 style='font-size: 28px; margin-top: 0;'>Contato</h1>
                <p style='font-size: 16px;'>Você recebeu uma nova mensagem através do formulário de contato. Aqui estão os detalhes:</p>
                <div style='background: #fff; padding: 20px; border-radius: 10px; box-shadow: 0 0 5px rgba(0,0,0,0.1);'>
                    <p><strong style='color: #049de8;'>Email:</strong> $destinatario</p>
                    <p><strong style='color: #049de8;'>Telefone:</strong> $telefone</p>
                    <p><strong style='color: #049de8;'>Mensagem:</strong><br> $mensagem</p>
                </div>
                <div style='margin-top: 30px;'>
                    <a href='mailto:$destinatario' style='display: inline-block; background-color: #049de8; color: #fff; padding: 14px 28px; border-radius: 25px; text-decoration: none; font-size: 16px;'>Responder</a>
                </div>
            </div>
        ";

        $mail->AltBody = "Nome: $nome\nEmail: $destinatario\nTelefone: $telefone\nMensagem: $mensagem";

        $mail->send();
        echo json_encode(['status' => 'success', 'message' => 'E-mail enviado com sucesso!']);
    } catch (Exception $e) {
        echo json_encode(['status' => 'error', 'message' => "Erro ao enviar e-mail: {$mail->ErrorInfo}"]);
    }
  } else {
      echo json_encode(['status' => 'error', 'message' => 'Dados incompletos.']);
  }
} else {
    echo json_encode(['status' => 'error', 'message' => 'Método não permitido.']);
}
