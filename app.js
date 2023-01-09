
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const express = require("express");
const { urlencoded } = require("body-parser");
const { response } = require("express");

const PORT = process.env.PORT || 3000;
const app = express();

const urlencodedParser = express.urlencoded({extended: false});

// Import the functions you need from the SDKs you need

var pages = require(__dirname + '/routes/router');
app.use('/', pages);

app.use(express.static('views'))
app.use(express.json());
app.use(express.urlencoded());



const firebase = require("firebase");
const firebaseConfig = {
  apiKey: "AIzaSyB1yp6_cwA_V9X-RxfYyO29ehZNirBzQEA",
  authDomain: "tic-tac-toe-60e3c.firebaseapp.com",
  projectId: "tic-tac-toe-60e3c",
  storageBucket: "tic-tac-toe-60e3c.appspot.com",
  messagingSenderId: "861986917533",
  appId: "1:861986917533:web:91b9a51215b21cb43c9874"
};
firebase.initializeApp(firebaseConfig);

app.post('/loginPost', async (req,res)=>{
    firebase.auth().signInWithEmailAndPassword(req.body.email, JSON.stringify(req.body.password)).then(userCredential => {
        console.log('Sign in Successful!');
      }).catch(error => {
        console.log(error.message);
      });
  console.log(req.body);
  //res.json(userResponce); 
})

app.post('/registerPost', (req,res)=>{
    if(JSON.stringify(req.body.password1) == JSON.stringify(req.body.password2)){
      firebase.auth().createUserWithEmailAndPassword(req.body.email, JSON.stringify(req.body.password1)).then(userCredential => {
        console.log('Sign in Successful!');
      }).catch(error => {
        console.log(error.message);
      });
       console.log(req.body);
    }else{
      console.log("Paroli ne sowpadayt");
    }
    
  //res.json(userResponce); 
})



// начинаем прослушивать подключения на 3000 порту
app.listen(3000);
