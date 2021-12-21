let express = require('express');
let app = express();

app.use(express.urlencoded({extended:true}));

let router = require('./routes');

app.use(express.static('public'));

app.use('/', router);

app.listen(3000, function(){
    console.log('server is running on port 3000')
});

