const router = require('express').Router()

router.get('/', (req, res) => {
    let places = [{
        id: 1,
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: 'https://placebear.com/250/250'
      }, {
        id:2,
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: 'https://placebear.com/250/250'
      }]      
    res.render('places/index', {places })
})

module.exports = router
