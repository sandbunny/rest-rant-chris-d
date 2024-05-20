const express = require('express');
const router = express.Router();
const places = require('../models/places.js');

router.get('/new', (req, res) => {
  res.render('places/new');
});

router.post('/', (req, res) => {
  const newPlace = {
    pic: req.body.pic || 'https://placebear.com/600/600',
    city: req.body.city || 'Anytown',
    state: req.body.state || 'USA',
    // Add other properties as needed
  };
  places.push(newPlace);
  res.redirect('/places');
});

router.get('/', (req, res) => {
  res.render('places/index', { places });
});

router.get('/:id', (req, res) => {
  const id = Number(req.params.id);
  const place = places[id];
  if (!place) {
    res.render('error404');
  } else {
    res.render('places/show', { place, id });
  }
});

router.delete('/:id', (req, res) => {
  const id = Number(req.params.id);
  if (isNaN(id) || !places[id]) {
    res.render('error404');
  } else {
    places.splice(id, 1);
    res.redirect('/places');
  }
});

router.get('/:id/edit', (req, res) => {
  let id = Number(req.params.id);
  console.log(id);

  if (isNaN(id)) {
      res.render('error404');
  } else if (!places[id]) {
      res.render('error404');
  } else {
      res.render('places/edit', {
          place: places[req.params.id],
          index: req.params.id,
      });
  }
});

router.put('/:id', (req, res) => {
  let id = Number(req.params.id);
  if (isNaN(id)) {
      res.render('error404');
  } else if (!places[id]) {
      res.render('error404');
  } else {
      if (!req.body.pic) {
          req.body.pic = 'http://placekitten.com/400/400';
      }
      if (!req.body.city) {
          req.body.city = 'Anytown';
      }
      if (!req.body.state) {
          req.body.state = 'USA';
      }

      places[id] = req.body;
      res.redirect(`/places/${id}`);
  }
});


module.exports = router;

