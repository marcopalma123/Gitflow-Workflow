;console.log("Init Server");

const express = require('express');
const lodash = require('lodash');
const bodyParser = require('body-parser');

const app = express();

// support parsing of application/json type post data
app.use(bodyParser.json());

const port = 3069;

// app.get("/", (req, res) => {

//     console.log("get in / route");

//     res.send("OK");
// });


// app.listen(port, () => {

//     try {

//         console.log(`Listen on port ${port}!`);

//     } catch (ex) {
//         console.log(`${ex}`);
//     }

// });

function sum(a, b) {
    return a + b;
  }


app.use(sum);

module.exports = sum;

//module.exports = app;