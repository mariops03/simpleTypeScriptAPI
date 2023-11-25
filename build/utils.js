"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types");
const isString = (string) => {
    return typeof string === 'string';
};
const parseString = (string) => {
    if (!isString(string)) {
        throw new Error('Incorrect or missing comment: ' + string);
    }
    return string;
};
const isNumber = (number) => {
    return typeof number === 'number';
};
const parseNumber = (number) => {
    if (!isNumber(number)) {
        throw new Error('Incorrect or missing comment: ' + number);
    }
    return number;
};
const parseCervezaTipo = (tipo) => {
    if (!isCervezaTipo || !isString(tipo)) {
        throw new Error('Incorrect or missing tipo: ' + tipo);
    }
    return tipo;
};
const isCervezaTipo = (param) => {
    return Object.values(types_1.TipoCervezaEnum).includes(param);
};
const toNewBeerEntry = (object) => {
    const newEntry = {
        nombre: parseString(object.nombre),
        origen: parseString(object.origen),
        tipo: parseCervezaTipo(object.tipo),
        alcohol: parseNumber(object.alcohol),
        descripcion: parseString(object.descripcion)
    };
    return newEntry;
};
exports.default = toNewBeerEntry;
