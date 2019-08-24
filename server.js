const express = require('express');
const port = process.env.PORT || 3000;
const app = express();
const bodyParser = require('body-parser')

app.use(function(req, res, next) {

    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Authorization,Access-Control-Allow-Origin,Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();

});

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json({type:'*/*'}))

app.listen(port, function () {
 console.log(`app listening on port !` + port);
});