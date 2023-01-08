alert('inject..')
let Oldone = '</head>'
let Newone = '<head><link rel=\"stylesheet\" href=\"https://raw.githubusercontent.com/turboceo/adblock/main/gimy.tv.ad.css\" type=\"text/css\">';
let body = $response.body
.replace(Oldone, Newone);
$done({body});