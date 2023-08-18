const express = require('express')
const router = express.Router();
const User = require('../models/User')
const { body, validationResult } = require("express-validator")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const fetchuser = require('../Middleware/fetchuser')

const JWT_Secret = "IamaStudent"

//Route1: Create a user using: Post "/api/auth/createuser" . Doesn't require Auth
router.post("/createuser", [
  body('name', 'Enter a valid name').isLength({ min: 3 }),
  body('email', 'Enter a valid email ').isEmail(),
  body('password', 'Password atleast have length 5').isLength({ min: 5 }),

], async (req, res) => {

  //If there is an error it creates a 400 bad request 
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  //checks wether this email already exists in the data base
  try {

    let user = await User.findOne({ email: req.body.email })
    if (user) {
      return res.status(400).json("sorry Email already exists")
    }

    //Creates a password with hashing algorithm
    const salt = await bcrypt.genSalt(10)
    const secPass = await bcrypt.hash(req.body.password, salt)

    //Creates a new user 
    user = await User.create({
      name: req.body.name,
      password: secPass,
      email: req.body.email,
    })

    //It is used to assign a token to the user
    const data = { user: { id: user.id } }
    const AuthToken = jwt.sign(data, JWT_Secret)
    res.json({ AuthToken })

    //catch the error from above
  } catch (error) {
    console.error(error.message)
    res.status(500).send("Internal Server Error")
  }
})

//Route2: Authenticating a User using: Post "/api/auth/login" .
router.post("/login", [
  body('email', 'Enter a valid email ').isEmail(),
  body('password', "Password can't be blank").exists()
], async (req, res) => {

  //If there is an error it creates a bad request 
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { email, password } = req.body
  try {

    //check if the email exists in out database 
    let user =await User.findOne({ email })
  
    if (!user) {
      res.status(400).json({ error: "Please try with Correct Info" })
    }

    //check if password matches with the database password
    const passwordcompare = await bcrypt.compare(password, user.password)
    if (!passwordcompare) {
      res.status(400).json({ error: "Please try with Correct Info at pass" })
    }

    //It is used to assign a token to the user
    const data = { user: { id: user.id } }
    const AuthToken = jwt.sign(data, JWT_Secret)
    res.json({ AuthToken })

    //

  } catch (error) {
    console.error(error.message)
    res.status(500).send("Internal Server Error")
  }
})

// Route3: Get user details  using: Post "/api/auth/getuser" ,login required 
router.post("/getuser",fetchuser, async (req, res) => {

try {
  
  const userid=req.user.id;
  const user=await User.findById(userid).select('-password')
  res.send(user)
} catch (error) {
  console.error(error.message)
  res.status(500).send("Internal Server Error")
}
})

module.exports = router
