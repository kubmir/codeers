<?
    require __DIR__ . '/cors.php';

    cors();

    $post = json_decode(file_get_contents('php://input'), true);

    if (!empty($post)) {
        $sender = "postmaster@codeers.cz";

        $name = $post["name"];
        $email = $post["email"];
        $project = $post["project"];
        $number = $post["number"];
        $company = $post["company"];

        $to = "info@codeers.cz";
        $subject = "Codeers - nový dotaz od zákazníka";

        if(empty($name) || empty($email)) {
            exit("Error while sending email.");
        }

        $message = "<html><body>";
        $message .= "<h1 style=\"color:#e8c81d;font-size:24px;margin:16px;text-align:center;\">Nový dotaz na projekt od zákazníka pro Codeers</h1>";
        $message .= "<p style=\"color:#000000;font-size:18px;\"><i>Zákazník:</i> {$name}</p>";
        $message .= "<p style=\"color:#000000;font-size:18px;\"><i>E-mail:</i> {$email}</p>";

        if (!empty($number)) {
            $message .= "<p style=\"color:#000000;font-size:18px;\"><i>Telefon:</i> {$number}</p>";
        }

        if (!empty($company)) {
            $message .= "<p style=\"color:#000000;font-size:18px;\"><i>Společnost:</i> {$company}</p>";
        }

        $message .= "<p style=\"color:#000000;font-size:18px;\"><i>Popis projekt:</i> <br /> {$project}</p>";
        $message .= "</body></html>";

        $headers = ["From" => $sender, "Reply-To" => $sender, "Content-type" => "text/html; charset=iso-8859-1"];

        if( mail($to, $subject, $message, $headers) ) {
            echo "Email sent successfully.";
        } else {
            echo "Error while sending email.";
        }
    } else {
        exit("You sent empty body.");
    }
?>