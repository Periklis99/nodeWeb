const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
const User = require('../models/user.js');
const user = require('../models/user.js');
const res = require('express/lib/response');


// get all
router.get('/', function (req, res) {
    User.find({}, function (err, users) {
        if (err) return res.status(500).send("Something is wrong about finding the userd.");
        res.status(200).send(users);
    });
});
// get user by id
router.get('/:id', function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) return res.status(500).send("Something is wrong about finding the user.");
        if (!user) return res.status(404).send("No user found.");
        res.status(200).send(user);
    });
});

// add user
router.post('/signup', async (req, res) => {
   try {
       const salt = await bcrypt.genSalt();
       const hashedPassaword = await bcrypt.hash(req.body.password,salt);

   
    const user = new User({
            name : req.body.name,
            email : req.body.email,
            password : hashedPassaword
    });
        const newUser = await user.save();
        res.status(201).json(newUser);

    } catch (err) {
       res.status(400).json({message: err.message})
    }
            
});

router.post("/login", async (req, res) => {
    try {
      const user = await User.findOne({ email: req.body.email });
      if (user) {
        const cmp = await bcrypt.compare(req.body.password, user.password);
        if (cmp) {
          //   ..... further code to maintain authentication like jwt or sessions
          res.send("Auth Successful");
        } else {
          res.send("Wrong username or password.");
        }
      } else {
        res.send("Wrong username or password.");
      }
    } catch (error) {
      console.log(error);
      res.status(500).send("Internal Server error Occured");
    }
  });

// update user by id
router.put('/:id', function (req, res) {
    
    User.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, user) {
        if (err) return res.status(500).send("Something is wrong about updating the user.");
        res.status(200).send(user);
    });
});

// delete user by id
router.delete('/:id', function (req, res) {
    User.findByIdAndRemove(req.params.id, function (err, user) {
        if (err) return res.status(500).send("Something is wrong about deleting the user.");
        res.status(200).send("User "+ user.name +" was deleted.");
    });
});

module.exports = router;