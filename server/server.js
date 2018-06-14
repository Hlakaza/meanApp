var express = require('express');
var cors    = require('cors');
var app = express();

var posts = [
   {message: 'The worl is a great place to be in'},
   {message: 'Love to be  loved and hate to be hated'}
]

app.use(cors());

app.get('/posts', (req, res) => {
    res.send(posts);
});

app.listen(3000);


