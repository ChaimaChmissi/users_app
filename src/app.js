const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors"); // Add this line

const app = express();
const PORT = process.env.PORT || 3002;

app.use(bodyParser.json());
app.use(cors()); 
mongoose.connect("mongodb://127.0.0.1/Project_db", {

      useNewUrlParser: true,
      useUnifiedTopology:true,
}).then(() => {
    console.log("connected to  Mongodb");
}).catch(err => {
    console.error("connection error to mongoDB" , err);
    process.exit(1);
});

// Define the user schema
let userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, 
  },
  image: {
    type: String, 
  },
  role: {
    type: String,
    enum: ["admin", "employee"],
    default: "employee",
  },
  password: {
    type: String,
    required: true,
  },
});

// Create a User model based on the schema
const User = mongoose.model("User", userSchema);

//get users
app.get("/users", async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

  //get users by id 
  app.get("/users/:userId", async (req, res) => {
    const userId = req.params.userId;
  
    try {
      const user = await User.findById(userId);
      
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ error: "User not found" });
      }
    } catch (err) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
  
  

  //add new user 
  app.post("/users", async (req, res) => {
    
      const{name, email, image ,  role,  password } =req.body;
  
      const newUser =  new User({  name , email, image ,  role,  password });
     try { 
      const savedUser= await newUser.save();
      res.status(201).json(savedUser);
    } catch (err) {
      res.status(400).json({ error: "Internal Server Error" });
    }
  });


  //update user
 app.put("/users/:userId", async (req, res) => {
  const userId = req.params.userId;
  const { name, email, image, role, password } = req.body;

  try {
    const user = await User.findByIdAndUpdate(userId, {
      name,
      email,
      image,
      role,
      password
    }, { new: true });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});


//delete User
app.delete("/users/:userId", async (req, res) => {
    const userId = req.params.userId;
  
    try {
      const user = await User.findByIdAndRemove(userId);
  
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
  
      res.status(204).end(); // Respond with a 204 status code (No Content) for a successful deletion.
    } catch (err) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
  
  
  // Authentication endpoint
  app.post("/authenticate", async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await User.findOne({ email, password });
  
      if (user) {
        res.status(200).json({
          message: "Authentication successful",
          role: user.role,
          userName: user.name,
          email: user.email,
          password: user.password,

          userId: user._id        });
      } else {
        res.status(401).json({ error: "Invalid credentials" });
      }
    } catch (err) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
  
  
// Update user profile
app.put("/users/:userId/profile", async (req, res) => {
  const userId = req.params.userId;
  const { email, password } = req.body;

  try {
    const user = await User.findByIdAndUpdate(userId, {
      email,
      password
    }, { new: true });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});



  app.listen(3002, () => {
    console.log(`Server is running on port 3002`);
  });


