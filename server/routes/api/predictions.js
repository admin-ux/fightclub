const express = require('express');
const uuid = require('uuid');
const router = express.Router();
const mongodb = require('mongodb');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const key = require('../../config/keys').secret;
const Prediction = require('../../model/Prediction');
const jwtDecode = require("jwt-decode");

router.post('/createprediction', passport.authenticate('jwt', {
    session: false
}), (req,res) => {
    
   
    const newPrediction= new Prediction({
        UFid: uuid.v4(),
        winner: req.body.winner,
        round: req.body.round,
        score: req.body.score,
        username: jwtDecode(req.headers.authorization).username
        //The above username code is will always be correct since a prerequisite to this route is an authenticated user
    });
    // ! Refer to tests folder to change this code 
    if (!newPrediction.landlordname || !newPrediction.street|| !newPrediction.city || !newPrediction.province || !newInitialPost.country || !newRating.review || !newRating.rating) {
        return res.status(400).json({ msg: 'Please include all required fields' });
      }
      //res.send('hello');
    
    newPrediction.save();
    res.send("Username",newPrediction.id,"UFid",newPrediction.UFid);
    
});
