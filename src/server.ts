import express from "express";

const app = express();

app.get("/", (requeste, response) => response.json({ message: "Hello World" }));

app.listen(3333, () => console.log("server is running! 🚀"));
