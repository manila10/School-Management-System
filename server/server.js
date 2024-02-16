const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const SchoolModel = require('./models/school')
const MarklistModel = require('./models/marklist')
const AdminModel =require('./models/admin')
const bodyparser= require('body-parser');
const app = express();
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(bodyparser.json());
mongoose.connect("mongodb://127.0.0.1:27017/school");
    {
    useNewUrlParser:true;
    useUnifiedTopology:true;
    }

app.post('/user', (req, res) => {
SchoolModel.create(req.body)
.then(students => res.json(students))
.catch(err => res.json(err))
})

app.post('/admin', (req, res) => {
    AdminModel.create(req.body)
    .then(teachers => res.json(teachers))
    .catch(err => res.json(err))
    })

app.post('/login', (req, res) => {
    const {email, password} = req.body;
    SchoolModel.findOne({email:email})
    .then(student => {
        if(student) {
            if(student.password === password){
                res.json("Success")
            }else{
                res.json("the password is incorrect")
            }

        }else{
            res.json("No records existed")
        }
    })
})

app.post('/admlogin', (req, res) => {
    const {id, password} = req.body;
    AdminModel.findOne({id:id})
    .then(teacher => {
        if(teacher) {
            if(teacher.password === password){
                res.json("Success")
            }else{
                res.json("the password is incorrect")
            }

        }else{
            res.json("No records existed")
        }
    })
})


app.post('/markentry', async(req, res) => {
    try{
        const marks = await MarklistModel.create(req.body)
        res.json(marks);
    }catch(err){
        console.error(err);
        res.status(500).json({error:'Internal server '})
    }
    });

app.get('/searchmarks',async(req, res) => {
    const {regno} = req.query;
    try{
        const searchResults = await MarklistModel.find({ regno }) ;
        res.json(searchResults );
    }catch(error){
        console.error("error")
    }
})


app.listen(4000, () => {
    console.log("server is running on port 4000")
})