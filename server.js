const express = require("express");
const app = express();

const mongoose = require("mongoose");
const passport = require("passport")
const session = require("express-session")
const MongoStore = require ("connect-mongo")
const User = require("./models/user")
require("dotenv").config()

app.use(express.json());

app.use(express.static(__dirname+"/client/public"))


mongoose.connect(process.env.DATABASE_URL, { useNewURLParser: true });
const db = mongoose.connection;
db.on("error", (error) => console.error(error))
db.once("open", () => console.log("Connected to DB"))


app.use(
    session({
        resave:true,
        saveUninitialized:true,
        secret:"Lets go",
        store: MongoStore.create({mongoUrl: process.env.DATABASE_URL})
    })
)


passport.use(User.createStrategy())
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())
app.use(passport.initialize())
app.use(passport.session())

const plantsRouter = require('./routes/plantRouter');
const userRouter = require('./routes/userRouter');
const authRouter = require('./routes/auth');
const mailRouter = require('./routes/mail')

app.use('/api/plants',plantsRouter);
app.use('/api/users',userRouter);
app.use('/api/auth',authRouter);
app.use('/mail',mailRouter);


app.listen(3636, () => {
    console.log("Server started on port 3636");
});
//app.listen(port, () => console.log('Express is running at port ' + port))