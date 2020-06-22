const router = require("express").Router();
const store = require("./../db/store")
// const path = require('path')
// const fs = require('fs');

router.get("/notes", (req, res)=> {

    // console.log(store.getNotes())
    // // console.log('READ Notes');
    store.getNotes().then((notes) => {
        res.json(notes);
    })

    // fs.readFile(path.join(__dirname, '../db/db.json'), "utf8", (err, data)=> {

    //     res.json(JSON.parse(data));
    //     // console.log(data);
    // });

});

router.post("/notes", (req, res)=>{

    store
        .addNote( req.body )
        .then((note)=>{

            res.json(note);

        })
        .catch((err) => {});

})

router.delete("/notes/:id", (req,res) => {
    //TBD

    console.log('Create Notes');
})

module.exports = router;