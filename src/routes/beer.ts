import express from 'express' //ES Modules
import * as beerServices from '../services/beerServices'
import toNewBeerEntry from '../utils'
const router = express.Router()

router.get('/', (_, res) => {
  res.send(beerServices.getAllBeers())
})

router.get('/:nombre', (req, res) => {
  const nombre = req.params.nombre
  const beer = beerServices.findByNombre(nombre)
  if (beer) {
    res.send(beer)
  } else {
    res.status(404).send({ error: 'beer not found' })
  }
})
router.post('/', (req, res) => {
  try {
    const newBeerEntry = toNewBeerEntry(req.body)

    const addedBeerEntry = beerServices.addBeer(newBeerEntry)

    res.json(addedBeerEntry)

  } catch(e: any) {
    res.status(400).send(e.message)
  }
})

export default router