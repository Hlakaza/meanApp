let express    = require('express');
    cors       = require('cors');
    bodyParser = require('body-parser');
    mongoose   = require('mongoose');
    User       = require('./models/user');
    
    app        = express();

let posts = [
   {message: 'The world is a great place to be in'},
   {message: 'Love to be  loved and hate to be hated'}
]

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27000/mean_store',  err => {
    if(err){
        console.log(err);
    } else {
        console.log('Connected to mongo')
    }
});

app.get('/posts', (req, res) => {
    res.send(posts);
});

app.post('/register', (req, res) => {
   let userData = req.body;
   const user = new User(userData);
   user.save((res, err) => {
       if(err){
           console.log(err);
       }
       res.sendStatus(200)
   })
});

app.listen(3000);


