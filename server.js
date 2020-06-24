const express = require('express');
// const path = require("path");

const htmlRoutes = require("./routes/htmlRoutes");
const apiRoutes = require("./routes/apiRoutes")

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended:true}))

app.use(express.static("public"));

app.use("/api", apiRoutes);
app.use( htmlRoutes);

app.get("/", (req, res)=>{
    res.json(path.join(__dirname, "public/js/index.html"))
})



app.listen(PORT, ()=>{
    console.log('listening to port: ' + PORT)
})
