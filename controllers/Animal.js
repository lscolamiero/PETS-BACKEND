const Animal = require('../models/Animal')

async function getAllAnimals(req, res) {
    try {
        const animals = await Animal.find()
        res.json(animals)
    } catch (error) {
        console.log('error fetching all animals', error)
        res.status(500).json({ message: 'error fetching all animals' })
    }
}

async function getAnimalById(req, res) {
    try {
        const { id } = req.params
        const animal = await Animal.findById(id)
        res.json(animal)
    } catch (error) {
        console.log('error fetching animal', error)
        res.status(500).json({ message: 'error fetching animal' })
    }
}

async function createAnimal(req, res) {
    try {
        if (!req.body.profilePicture) req.body.profilePicture = undefined
        const animal = await new Animal(req.body).save()
        res.status(201).json(animal)
    } catch (error) {
        console.log('error creating animal', error)
        res.status(500).json({ message: 'error creating animal' })
    }
}

module.exports = {
    getAllAnimals,
    getAnimalById,
    createAnimal
}