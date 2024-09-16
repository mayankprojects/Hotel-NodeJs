const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const Person = require("./models/person");

// done(error, user, info)
passport.use(
    new LocalStrategy(async (username, password, done) => {
      try {
        const user = await Person.findOne({ username: username });
        if (!user) {
          return done(null, false, { message: "Incorret Message" });
        }
  
        const passMatch = await user.comparePassword(password);
        if (passMatch) {
          return done(null, user);
        } else {
          return done(null, false, { message: "Incorrect Password" });
        }
      } catch (err) {
        return done(err);
      }
    })
  );

module.exports = passport;