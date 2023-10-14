const express = require("express");
const cors = require("cors");
const axios = require("axios");


const app=express();

//middle wares
app.use(express.json());
app.use(cors());

//all currencies
app.get("/getAllCurrencies",async(req,res)=>{
  const currencyURL = `https://openexchangerates.org/api/historical/${date}.json?app_id=${process.env.APP_ID}`;
  const namesURl = `https://restcountries.com/v3.1/all`;

  
     try {
        const nameResponce = await axios.get(namesURl);
        const nameData = nameResponce.data;
        return res.json(nameData);
     } catch (err) {
        console.error(err);
     }
})
//listen to a port
app.listen(5000,() =>{
    console.log("Server Start");
});