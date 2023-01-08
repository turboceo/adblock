alert('inject..')
let Oldone = '</body>'
let Newone = '<link rel=\"stylesheet\" href=\"https://raw.githubusercontent.com/turboceo/adblock/main/gimy/main.css\" type=\"text/css\"></body>';
let body = $response.body
.replace(Oldone, Newone);
$done({body});