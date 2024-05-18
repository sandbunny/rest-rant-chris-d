const router = require('express').Router()

router.get('/', (req, res) => {
    let places = [{
        id: 1,
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/restaurant.jpg'
      }, {
        id:2,
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/restaurant1.jpg'
      }]      
    res.render('places/index', {places })
})

router.get('/new', (req, res) => {
  res.render('places/new')
})


module.exports = router
