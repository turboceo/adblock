alert('inject..')
let Oldone = '3000'
let Newone = '1000000000000';
let body = $response.body
.replace(Oldone, Newone);
$done({body});