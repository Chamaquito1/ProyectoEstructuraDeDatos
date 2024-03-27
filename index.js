const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const { 
  stackPush, 
  stackPop, 
  stackPeek,
  queueEnqueue, 
  queueDequeue, 
  queuePeek,
  arrayInsert, 
  arrayRemove, 
  arrayGet,
  arrayGetAtIndex 
} = require("./querys/querys");

app.use(bodyParser.json());

// Stack routes
app.post('/stack', (req, res) => stackPush('stack')(req, res));
app.delete('/stack', (req, res) => stackPop('stack')(req, res));
app.get('/stack', (req, res) => stackPeek('stack')(req, res)); 

// Queue routes
app.post('/queue', (req, res) => queueEnqueue('queue')(req, res));
app.delete('/queue', (req, res) => queueDequeue('queue')(req, res));
app.get('/queue', (req, res) => queuePeek('queue')(req, res)); 

// Array routes
app.post('/array', (req, res) => arrayInsert('array')(req, res));
app.delete('/array/:id', (req, res) => arrayRemove('array')(req, res));
app.get('/array', (req, res) => arrayGet('array')(req, res));
app.get('/array/:index', (req, res) => arrayGetAtIndex('array')(req, res));

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`)
});