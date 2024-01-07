"use strict";
/*import express from "express";
import { Request, Response } from "express";
import bodyParser from "body-parser";
import serveStatic from "serve-static";
import mongoose from "mongoose";
import User from "./User";

import cors from "cors";

const app = express();

app.use(bodyParser.json());
app.use(serveStatic("public"));
app.use(cors());


const onst uri: string = 'mongodb://localhost:27017/biblio';

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as mongoose.ConnectOptions) // Cast options to mongoose.ConnectOptions
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
/*
app.get("/users", async (req: Request, resp: Response) => {
  try {
    // Use the User model to find all users in the database
    const users = await User.find();
    
    // Respond with the list of users
    resp.status(200).send(users);
  } catch (error) {
    console.error("Error retrieving users:", error);
    resp.status(500).send("Internal Server Error");
  }
});


app.get("/users/:id",  (req: Request, resp: Response) => {
  User.findById((req.params.id(err,user))=>{
    if (err:any) {  resp.status(500).send(err);}
    else {resp.send(user);}
})
})

app.post("/users", async (req: Request, resp: Response) => {
  try {
    const userData = req.body;
    const user = new User(userData);
    await user.save();
    resp.status(201).send(user); // Respond with the newly created user and set status to 201 (Created)
  } catch (error) {
    console.error("Error creating user:", error);
    resp.status(500).send("Internal Server Error");
  }
});

*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
  app.put("/users/:id", async (req: Request, resp: Response) => {
    try {
      const userId = req.params.id; // Get the user ID from the URL parameters
      const updatedUserData = req.body; // Assuming you are sending updated user data in the request body
  
      // Use findByIdAndUpdate to find the user by ID and update their data
      const updatedUser = await User.findByIdAndUpdate(
        userId,
        updatedUserData,
        { new: true } // This option returns the updated document
      );
  
      if (!updatedUser) {
        return resp.status(404).send("User not found");
      }
  
      resp.send(updatedUser); // Respond with the updated user
    } catch (err: any) {
      resp.status(500).send(err.message);
    }
  });
  
  app.delete("/users/:id", async (req: Request, resp: Response) => {
    try {
      const userId = req.params.id; // Get the user ID from the URL parameters
  
      // Use findByIdAndRemove to find and delete the user by ID
      const deletedUser = await User.findByIdAndRemove(userId);
  
      if (!deletedUser) {
        return resp.status(404).send("User not found");
      }
  
      resp.send(deletedUser); // Respond with the deleted user
    } catch (err: any) {
      resp.status(500).send(err.message);
    }
  });

  app.get("/users", async (req: Request, resp: Response) => {
    try {
      // Retrieve a list of users from your database (assuming you have a User model)
      const users = await User.find();
  
      // Respond with the list of users as JSON
      resp.send(users);
    } catch (err: any) {
      // Handle errors, such as database errors, and respond with an error status and message
      resp.status(500).send(err.message);
    }
  });

  app.get("/users/search", async (req: Request, resp: Response) => {
    try {
      const { name, email } = req.query; // Extract query parameters from the request
  
      // Build a query object based on the provided criteria
      const query: any = {};
  
      if (name) {
        query.name = name;
      }
  
      if (email) {
        query.email = email;
      }
  
      // Use the find() method with the query to search for users
      const users = await User.find(query);
  
      // Respond with the matching users as JSON
      resp.send(users);
    } catch (err: any) {
      // Handle errors, such as database errors, and respond with an error status and message
      resp.status(500).send(err.message);
    }
  });
  
  
 


  app.listen(8700,function () {
    console.log(" server started in port 8700");
})
  
 */
const server_1 = __importDefault(require("./server"));
const server = new server_1.default(7000);
server.start();
