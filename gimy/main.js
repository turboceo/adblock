alert('inject..')
let Oldone = '<div class="pc_rb_float" id="pc_rb_float">'
let Newone = '';
let body = $response.body
.replace(Oldone, Newone);
$done({body});