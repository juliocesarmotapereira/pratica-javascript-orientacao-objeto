import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

// objeto - instância do meu molde
const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233300;
cliente1.rg = "mg-123";

// const cliente2 = new Cliente();
// cliente2.nome = "Alice";
// cliente2.cpf = 44455566600;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.cliente = cliente1;
contaCorrenteRicardo.depositar(500);

const conta2 = new ContaCorrente();
conta2.cliente = new Cliente;
conta2.cliente.nome = "Alice";
conta2.cliente.cpf =  44455566600;
conta2.agencia = 1002;

let valor = 200;
contaCorrenteRicardo.tranferir(valor, conta2);

console.log("valor: ", valor)
console.log(conta2);
console.log(contaCorrenteRicardo);
