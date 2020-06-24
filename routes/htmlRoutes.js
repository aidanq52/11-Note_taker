const router = require('express').Router();
const path = require('path')

router.get("/", (req,res) =>{
    res.sendFile( path.join(__dirname, "../views/index.html"))
});

router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../views/notes.html"))
})

router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../views/index.html"))
})

module.exports = router