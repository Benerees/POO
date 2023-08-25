import { Bicicleta } from "./bicicleta";
import { Cliente } from "./cliente";

export class Aluguel{
    constructor(
        public cliente: Cliente,
        public bicicleta: Bicicleta,
        public total: number,
        public dataInicio: Date,
        public dataFinal: Date,
        public diasAlugado: number
    ){}
}