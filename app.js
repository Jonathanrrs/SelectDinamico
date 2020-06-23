const express = require('express');
const app = express();
const bodyparser = require('body-parser');
var User = require('./user').User;
const port = 3000;

app.set('view engine', 'ejs');
var urlencodedParser = bodyparser.urlencoded({ extended: false });

app.get('/', (req, res) => {
    res.render('index');
});
app.get('/select', (req, res) => {
    User.find({}, (err,data) => {
        if(err) {
            console.log('mala query');
            
        }
        else{
            res.render('select', {data})
        }
    })
   
})

app.post('/agregar', urlencodedParser, (req, res) => {
    console.log(req.body.username);
    User.findOne({ username: req.body.username }, (err, data) => {
        if (err) {
            console.log('algo salio mal');
        }
        else {
            if (data) {
                res.send('ya existe')
            }
            else {
                let user = new User({
                    username: req.body.username
                });
                user.save((err, data) => {
                    if (err) {
                        console.log('algo salio mal');

                    }
                    else {
                        res.redirect('/select')
                    }
                })
            }
        }
    });

});

app.listen(port, () => {
    console.log('Running on port 3000');

})