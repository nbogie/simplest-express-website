const express = require("express");
const app = express();

//configure the server

app.get("/", (req, res) => {
    res.send("Ok here is the root document response.  try /randomRoll");
});

app.get("/randomRoll", (req, res) => {
    console.log("hi i got /randomRoll req: ");
    const number = randomDieRoll();
    res.send(number + "");
});

//start the server listening

app.listen(3000, () => {
    console.log("your express app started running!");
});

function randomDieRoll() {
    const n = 1 + Math.floor(Math.random() * 6);
    return n;
}
