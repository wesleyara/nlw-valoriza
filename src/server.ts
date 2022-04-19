import express from "express";

const app = express();

app.get("/test", (req, res) => {
  return res.send("Hello World");
});

app.post("/test-post", (req, res) => {
  return res.send("Hello method post");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
  console.log("http://localhost:3000/");
});
