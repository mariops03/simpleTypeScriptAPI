export type TipoCerveza =
| 'Lager'
| 'Pilsner'
| 'Pale Lager'
| 'Wheat Beer'
| 'Amber Lager'
| 'Stout'
| 'Weissbier'
| 'Craft Lager'
| 'OtroTipo';

export enum TipoCervezaEnum {
    Lager = 'Lager',
    Pilsner = 'Pilsner',
    PaleLager = 'Pale Lager',
    WheatBeer = 'Wheat Beer',
    AmberLager = 'Amber Lager',
    Stout = 'Stout',
    Weissbier = 'Weissbier',
    CraftLager = 'Craft Lager',
    OtroTipo = 'OtroTipo'
}

export interface BeerEntry {
    id: number;
    nombre: string;
    origen: string;
    tipo: TipoCerveza;
    alcohol: number;
    descripcion: string;
}

export type NewBeerEntry = Omit<BeerEntry, 'id'>;
