const express = require('express')
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
  console.log('FILE', req.file)
  res.send(req.file)
})

module.exports = router
