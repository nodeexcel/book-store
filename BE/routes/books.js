var express = require('express');
var router = express.Router();
var books = require('../models/db').books
/* GET book listing. */
router.get('/', function (req, res, next) {
  books.find({}).then((response) => {
    res.send({
      data: response
    })
  }).catch(err => {
    res.status(500).send(err)
  })
});

/* add books */
router.post('/addBook', (req, res) => {
  let data = req.body;
  books.create(data).then((response) => {
    res.send({
      data: response
    })
  }).catch(err => {
    res.status(500).send(err)
  })
})

/* update books */
router.put('/updateBook/:id', (req, res) => {
  let data = req.body;
  books.update({
    _id: req.params.id
  }, data).then((response) => {
    res.send({
      data: response
    })
  }).catch(err => {
    res.status(500).send(err)
  })
})

/** delete book */
router.delete('/deleteBook/:id', (req, res) => {
  books.deleteOne({
    _id: req.params.id
  }).then((response) => {
    res.send({
      data: response
    })
  }).catch(err => {
    res.status(500).send(err)
  })
})

router.get('/getBookById/:id', (req, res) => {
  books.findById(req.params.id).then((response) => {
    res.send(response)
  }).catch(err => {
    res.status(500).send(err)
  })
})
module.exports = router;