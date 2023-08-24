import { Alugel } from "./src/class/aluguel";
import { Bicicleta } from "./src/class/bicicleta";
import { Cliente } from "./src/class/cliente";

function cadastrarCliente(nome: string, documento: string): Cliente{
    return new Cliente(nome, documento);
}

function cadastrarBiciceta(modelo: string, preco: number){
    return new Bicicleta(modelo, preco);
}

function Alugar(){
    
}

const bicicletas: Bicicleta[] = []
const clientes: Cliente[] = []
const aluguel: Alugel[] = []

bicicletas.push(cadastrarBiciceta("Caloi", 10.0));
clientes.push(cadastrarCliente("Benjamim", "50599813806"))
clientes.push(cadastrarCliente("Romani", "11122233344"))

console.log(clientes)