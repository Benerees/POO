import { Bicicleta } from "./bicicleta";
import { Cliente } from "./cliente";

export class Alugel{
    constructor(
        public cliente: Cliente,
        public bicicleta: Bicicleta,
        public preco: number,
        public dataInicio: Date,
        public dataFinal: Date
    ){}
}