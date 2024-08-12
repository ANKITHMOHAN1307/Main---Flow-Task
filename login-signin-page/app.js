const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const collection = require("./mongo"); // Assuming mongo.js exports a MongoDB collection



const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
    res.send("Welcome to the API");
});

app.post("/signin", async (req, res) => {
    const { email, password } = req.body;
    
    try {
        const user = await collection.findOne({ email: email });
        
        if (user) {
            const isMatch = await bcrypt.compare(password, user.password);
            if (isMatch) {
                res.status(200).json({ message: "Sign-in successful" });
            } else {
                res.status(400).json({ message: "Incorrect password" });
            }
        } else {
            res.status(404).json({ message: "User not found" });
        }
    } catch (e) {
        res.status(500).json({ message: "Server error" });
    }
});

app.post("/signup", async (req, res) => {
    const { email, password } = req.body;

    try {
        const existingUser = await collection.findOne({ email: email });
        
        if (existingUser) {
            res.status(400).json({ message: "User already exists" });
        } else {
            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser = { email: email, password: hashedPassword };
            await collection.insertOne(newUser);
            res.status(201).json({ message: "User created successfully" });
        }
    } catch (e) {
        res.status(500).json({ message: "Server error" });
    }
});

app.listen(8000, () => {
    console.log("Server running on port 8000");
});
