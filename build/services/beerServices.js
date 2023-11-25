"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addBeer = exports.findByNombre = exports.getAllBeers = void 0;
const beers_json_1 = __importDefault(require("./beers.json"));
const beers = beers_json_1.default;
const getAllBeers = () => beers;
exports.getAllBeers = getAllBeers;
const findByNombre = (nombre) => {
    const entry = beers.find(beer => beer.nombre === nombre);
    return entry;
};
exports.findByNombre = findByNombre;
exports.addBeer = ((newBeer) => {
    const newEntry = Object.assign({ id: Math.max(...beers.map(b => b.id)) + 1 }, newBeer);
    beers.push(newEntry);
    return newEntry;
});
