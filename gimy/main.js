$notification.post("Debug", "Inject", "hello-cron!");
let Oldone = "</head>";
let Newone =
  '<link rel="stylesheet" href="https://raw.githubusercontent.com/turboceo/adblock/main/gimy/main.css" type="text/css"></head>';
let body = $response.body.replace(Oldone, Newone);
$done({ body });
