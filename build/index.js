"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const beer_1 = __importDefault(require("./routes/beer"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const port = 3000;
app.use('/api/beers', beer_1.default);
app.listen(port, () => {
    console.log("Servidor activo en el puerto " + port);
});
