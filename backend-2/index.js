
var express = require('express');
var passport = require('passport');
var Strategy = require('passport-local').Strategy;
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
const router = express.Router();

app.use(passport.initialize());
app.use(passport.session());
passport.use(new Strategy(function(username, password, done) {
        User.findOne({ username: username }, function (err, user) {
          if (err) { return done(err); }
          if (!user) {
            return done(null, false, { message: 'Incorrect username.' });
          }
          if (password !== user.password) {
            return done(null, false, { message: 'Incorrect password.' });
          }
          return done(null, user, {message: 'you are awesome'});
        });
      }
    ))
passport.serializeUser(function(user, cb) {
  cb(null, user.user_id);
});
passport.deserializeUser(function(id, done) {
  User.findOne({user_id: id}, function(err, user) {
    console.log(user);
    console.log(id);
    done(err, user);
  });
});



// // const errorHandler = require('./scripts/errorHandler');
// // const logger = require('./logger');


// app.use(require('express-session')({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));


// const authorization = require('./scripts/authorization');
app.use('/', router);
app.set('views', './views');
app.set('view engine', 'pug');
const User = require('./models/User');
const mongoose = require('mongoose');
mongoose.connect('mongodb://shparkivozhyk:shparkivozhyk@ds227858.mlab.com:27858/blogusers');
app.get('/blogs', function(req, res) {
    res.send('yeeeeeah');
})

app.get('/login',

  function(req, res){

    res.render('user');

  });

  

app.post('/login', 

  passport.authenticate('local', { failureRedirect: '/login' }),

  function(req, res) {
    console.log(req);
    res.send('yeear');
    // res.redirect('/blogs');

  });



// const Blog = require('./models/Blog');
// const mongoose = require('mongoose');
// mongoose.connect('mongodb://shparkivozhyk:blogsdatabase@ds123258.mlab.com:23258/blogs');

    // .get(function(req, res) {
    //     // User.create({
    //     //     username: "first",
    //     //     password: "one",
    //     //     user_id: 1
    //     // }, function(err, blogusers) {
    //     //     if (err) {
    //     //         res.send(err);
    //     //     }
    //     //     res.send(blogusers);
    //     // });
    //     User.find({}, function(err, users) {
    //         if (err) res.send(err);
    //         console.log(users);
    //         res.send(users);
    //     })
    // })
// const passport = require('passport');
// const LocalStrategy = require('passport-local').Strategy;

// app.use(passport.initialize());
// app.use(passport.session());
// passport.use(new LocalStrategy(function(username, password, done) {
//     console.log('dddaaaa');
//     User.findOne({ username: username }, function (err, user) {
//       console.log('ssfffffffff');
//       if (err) { return done(err); }
//       if (!user) {
//         return done(null, false, { message: 'Incorrect username.' });
//       }
//       if (password !== user.password) {
//         return done(null, false, { message: 'Incorrect password.' });
//       }
//       return done(null, user);
//     });
//   }
// ))

// router.route('/login')
//     .get(function(req, res) {
//         res.render('user', {User: 'login'});
//     })
//     .post(function(req, res) {
//         console.log('ssssdddd');
//         passport.authenticate('local', {failureRedirect: '/blogs/0'}, function(req, res) {
//             res.redirect('/blogs');
//         });
//         console.log('ddrrrrdsaa');
//     })


// router.route('/blogs')
//     .get(function(req, res) {
//         Blog.find(function(err, blogs) {
//             if (err) {
//                 res.send(err.message);
//             }
//             res.render('blogs', {blogs: blogs})
//         });
//     })
//     .post(function(req, res) {
//         Blog.create({
//             title: req.body.title,
//             author: req.body.author,
//             body: req.body.body,
//             date: Date.now(),
//             blog_id: req.body.blog_id
//         }, function(err, blogs) {
//             if (err) {
//                 res.send(err);
//             }
//         });
//     })

// router.route('/blogs/:blog_id')
//     .get(function(req, res) {
//         Blog.find({blog_id: req.params.blog_id}, function(err, blog) {
//             if (err) {
//                 res.send(err.message);
//             }
//             else if (!blog.length) {
//                 res.render('index', {title: 'Blog doesn\'t exist', message: req.url});
//             }
//             else {
//                 res.render('blog', {blog: blog[0]});
//             }
//         });
//     })  
//     .put(function(req, res) {
//         var query = {blog_id: req.params.blog_id};
//         Blog.findOneAndUpdate(query, { $set: { body: req.body.body }}, function(err, blog) {
//             if (err) res.send(err.message);
//         })
//     })
//     .delete(function(req, res) {
//         Blog.findOneAndRemove({blog_id: req.params.blog_id}, function(err, blogs) {
//             if (err) res.send(err);
//         })
//     })

// app.use(function(err, req, res, next) {
//     errorHandler(err, req, res, next);
// });
// app.get('*', function(req, res) {
//     res.render('index', {title: 'Unknown page', message: req.url});
// });
app.listen(3000);
