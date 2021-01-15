// object holding all the data form the frontend
let projectData  = [];
// requireing express framework
const express = require('express');
// make new instans from express
const app = express();

// requireing depindens
const cors = require('cors');
const bodyParser = require('body-parser');
// body-parser setting 
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
// setting maddileware
app.use(cors());

// connting endpoint to project files
app.use(express.static('website'));

// starting server 
const port = 3030;

const server = app.listen(port, () => {
    console.log('server is running');
    console.log(`running on localhost ${port}`);
})

// routes
app.get('/allData', (req, res)=>{
    res.send(projectData)
    console.log(projectData);
})

app.post('/comingData',(req, res)=>{
    projectData = req.body
    console.log(req.body)
    console.log(projectData);
})