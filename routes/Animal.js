const router = require('express').Router()
const {
    getAllAnimals, getAnimalById, createAnimal
} = require('../controllers/Animal')

//get all animals
router.get('/all', getAllAnimals)

//get animnal by id
router.get('/:id', getAnimalById)

//create animal
router.post('/', createAnimal)

module.exports = router