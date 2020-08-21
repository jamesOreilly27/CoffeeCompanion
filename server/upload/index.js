const express = require('express')
const fs = require('fs')
const multer = require('multer')
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
      cb(null, './public/images');
   },
  filename: function (req, file, cb) {
      cb(null , file.originalname);
  }
});
const upload = multer({ storage: storage })
const router = express.Router()

router.post('/header-image', upload.single('header'), (req, res, next) => {
  res.send(req.file)
})

router.post('/header-image/delete', (req, res, next) => {
  fs.unlink(req.body.path, (err => { 
    if(err) {
      console.log(err)
    }
    else { 
      console.log(`\nDeleted file: ${req.body.path}`)
    } 
  }))
  next()
})

module.exports = router
