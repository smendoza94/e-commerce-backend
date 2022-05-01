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
  Tag.findOne({
    where: {id: req.params.id},
    attributes: [
      'id',
      'tag_name'
    ]
  })
  .then(dbTagData => {
    if (!dbTagData) {
      res.status(404).json({ message: 'No tag with this id found'});
      return;
    }
    res.json(dbTagData);
  })
});

// create a new tag
router.post('/', (req, res) => {
  Tag.create({
    tag_name: req.body.tag_name
  })
  .then(dbTagData => res.json(dbTagData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});

// update a tag's name by its `id` value
router.put('/:id', (req, res) => {
  Tag.update(
    { tag_name: req.body.tag_name },
    { where: { id: req.params.id }}
  )
  .then(dbTagData => {
    if (!dbTagData) {
      res.status(404).json({ message: 'No tag found with this id' })
      return;
    }
    res.json(dbTagData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// delete on tag by its `id` value
router.delete('/:id', (req, res) => {
});

module.exports = router;
