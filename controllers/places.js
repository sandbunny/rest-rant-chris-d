const router = require('express').Router()
const places = require('../models/places.js')

router.get('/', (req, res) => { 
    res.render('places/index', {places })
})

router.get('/new', (req, res) => {
  res.render('places/new')
})

router.post('/', (req, res) => {
  if (!req.body.pic) {
    req.body.pic = 'https://placebear.com/600/600'
  }
  if (!req.body.city) {
    req.body.city = 'Anytown'
  }
  if (!req.body.state) {
    req.body.state = 'USA'
  }
  places.push(req.body)
  res.redirect('/places')
})



module.exports = router
