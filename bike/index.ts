import { Aluguel } from "./src/class/aluguel";
import { Bicicleta } from "./src/class/bicicleta";
import { Cliente } from "./src/class/cliente";

function cadastrarCliente(nome: string, documento: string): Cliente{
    return new Cliente(nome, documento);
}

function cadastrarBiciceta(modelo: string, preco: number){
    return new Bicicleta(modelo, preco);
}

function Alugar(bicicleta: Bicicleta, cliente: Cliente, dataInicio: Date, dataFinal: Date): Aluguel | null {
    for (const x of aluguel) {
        if (x.bicicleta === bicicleta &&
        ((x.dataFinal >= dataFinal && x.dataInicio <= dataFinal) ||
        (x.dataFinal >= dataInicio && x.dataInicio <= dataInicio) ||
        (x.dataFinal <= dataFinal && x.dataInicio >= dataInicio))) {
            console.log("Não é possível alugar neste período.");
            return null;
        }
    }

    const diasAlugado = (dataFinal.getTime() - dataInicio.getTime()) / (1000 * 60 * 60 * 24);
    const total = diasAlugado * bicicleta.precoAluguel;

    return new Aluguel(cliente, bicicleta, total, dataInicio, dataFinal, diasAlugado);
}


const bicicletas: Bicicleta[] = []
const clientes: Cliente[] = []
const aluguel: Aluguel[] = []

bicicletas.push(cadastrarBiciceta("Caloi", 10.0));
clientes.push(cadastrarCliente("Benjamim", "50599813806"))
clientes.push(cadastrarCliente("Romani", "11122233344"))

const aluguel1 = Alugar(bicicletas[0], clientes[0], new Date("2023-08-10"), new Date('2023-09-11'))

if(aluguel1 != null){
    aluguel.push(aluguel1);
}else{

}

const aluguel2 = Alugar(bicicletas[0], clientes[0], new Date("2023-08-25"), new Date('2023-09-13'))

if(aluguel2 != null){
    aluguel.push(aluguel2);
}else{

}

console.log(aluguel)