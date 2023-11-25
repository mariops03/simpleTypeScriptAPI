import beerData from './beers.json'
import { BeerEntry, NewBeerEntry } from '../types.js'

const beers: Array<BeerEntry> = beerData as Array<BeerEntry>

export const getAllBeers = () => beers

export const findByNombre = (nombre: string): BeerEntry | undefined => {
    const entry = beers.find(beer => beer.nombre === nombre)
    return entry
}

export const addBeer = ((newBeer: NewBeerEntry): BeerEntry => {
    const newEntry = { id: Math.max(... beers.map(b => b.id)) +1, ... newBeer }
    beers.push(newEntry)
    return newEntry
})