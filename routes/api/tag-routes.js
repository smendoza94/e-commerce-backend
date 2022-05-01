const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// find all tags associated & Product data
router.get('/', (req, res) => {
  Tag.findAll({})
  .then(dbTagData => res.json(dbTagData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});

// find a single tag by its `id` & associated Product data
router.get('/:id', (req, res) => {
});

// create a new tag
router.post('/', (req, res) => {
});

// update a tag's name by its `id` value
router.put('/:id', (req, res) => {
});

// delete on tag by its `id` value
router.delete('/:id', (req, res) => {
});

module.exports = router;
