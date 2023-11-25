import express from 'express'

import beerRouter from './routes/beer'

const app = express()
app.use(express.json())

const port = 3000

app.use('/api/beers', beerRouter)

app.listen(port, () => {
  console.log("Servidor activo en el puerto " + port)
})