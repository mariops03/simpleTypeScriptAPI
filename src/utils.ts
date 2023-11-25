import { NewBeerEntry, TipoCerveza, TipoCervezaEnum } from "./types";

const isString = (string: string): boolean => {
    return typeof string === 'string'
}

const parseString = (string: any): string => {
    if (!isString(string)) {
        throw new Error('Incorrect or missing comment: ' + string)
    }
    return string
}

const isNumber = (number: number): boolean => {
    return typeof number === 'number'
}

const parseNumber = (number: any): number => {
    if (!isNumber(number)) {
        throw new Error('Incorrect or missing comment: ' + number)
    }
    return number
}

const parseCervezaTipo = (tipo: any): TipoCerveza => {
    if (!isCervezaTipo || !isString(tipo)) {
        throw new Error('Incorrect or missing tipo: ' + tipo)
    }
    return tipo
}

const isCervezaTipo = (param: any): boolean => {
    return Object.values(TipoCervezaEnum).includes(param)
}

const toNewBeerEntry = (object: any): NewBeerEntry => {
    const newEntry: NewBeerEntry = {
        nombre: parseString(object.nombre),
        origen: parseString(object.origen),
        tipo: parseCervezaTipo(object.tipo),
        alcohol: parseNumber(object.alcohol),
        descripcion: parseString(object.descripcion)
    }
    return newEntry
}

export default toNewBeerEntry