const JwtStartegy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../model/User');
const passport = require('passport');
const key = require('./keys').secret;

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: key,
    algorithms: ['RS256']
};

const theJWTStrategy = new JwtStartegy(opts,(payload,done)=>{
    User.findById({_id: payload.sub}).then(user => {
        if (user) {
            return done(null, user);
        }else{
            return done(null, false);
        }
    }).catch(err => console.log(err));
})

module.exports = passport => {
    passport.use(theJWTStrategy);
}
