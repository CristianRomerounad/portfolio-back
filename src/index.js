
import "dotenv/config.js";
import express from "express";
var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 5000;

app.get("/", (req, res) => res.send("Hello World!"));
app.get("/login", (req, res) => {

  res.send("Hello World!");
});

app.post('/login', function (req, res) {
  res.send('welcome, ' + req.body.username)
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`));
