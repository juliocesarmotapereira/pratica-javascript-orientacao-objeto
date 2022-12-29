import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

// objeto - instância do meu molde
const cliente1 = new Cliente("Ricardo", 11122233300, "mg-1234");
const cliente2 = new Cliente("Alice", 44455566600);

const contaCorrenteRicardo = new ContaCorrente(1001, cliente1);
contaCorrenteRicardo.depositar(500);
const conta2 = new ContaCorrente(1002, cliente2);
const conta3 = new ContaCorrente(1003, );

let valor = 200;
contaCorrenteRicardo.tranferir(valor, conta2);

console.log(ContaCorrente);