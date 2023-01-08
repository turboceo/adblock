alert('inject..')
let Oldone = '</head>'
let Newone = '<style>#pc_rb_float{display:none!important}</style></head>';
let body = $response.body
.replace(Oldone, Newone);
$done({body});