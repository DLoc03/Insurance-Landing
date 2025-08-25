<?php

header('Access-Control-Allow-Origin: http://localhost:5173');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

require_once './send_mail.php';

$raw = file_get_contents('php://input');
$data = json_decode($raw, true);

header('Content-Type: application/json');

if (!$data || !is_array($data)) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'Dữ liệu gửi lên không hợp lệ.',
        'error' => 'Không thể phân tích JSON hoặc dữ liệu không phải dạng mảng.',
    ]);
    exit;
}

$requiredFields = ['fullName', 'email', 'phone', 'service'];
$missingFields = array_filter($requiredFields, fn($field) => empty($data[$field]));

if (!empty($missingFields)) {
    http_response_code(422);
    echo json_encode([
        'success' => false,
        'message' => 'Thiếu thông tin bắt buộc.',
        'missing_fields' => $missingFields,
    ]);
    exit;
}

$result = sendContactMailWithPHPMail($data);

if ($result === true) {
    echo json_encode(['success' => true, 'message' => 'Gửi email thành công.']);
} else {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Gửi email thất bại.',
        'error' => $result,
    ]);
}