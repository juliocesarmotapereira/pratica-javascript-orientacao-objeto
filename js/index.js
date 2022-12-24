class Cliente {
    // atributos - class e meu molde
    nome;
    cpf;
    rg;
   
}

class ContaCorrente {
    agencia;
    // #saldo = 0; https://github.com/tc39/proposal-class-fields#private-fields
    _saldo = 0;

    // nova estrutura: as funções (ou métodos, nome comum em orientação a objetos)
    sacar(valor) {
        if(this._saldo >= valor) {
            this._saldo -= valor;
        }
    }

    // entre (são parâmentros que ele recebe)
    depositar(valor) {
        if(valor > 0) {
            this._saldo += valor;
        }
    }
}

// objeto - instância do meu molde
const cliente1 = new Cliente(); 
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233300;
cliente1.rg = "mg-123";


const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 44455566600;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.saldo = 0;
contaCorrenteRicardo.agencia = 1001;

contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.sacar(50);

console.log(contaCorrenteRicardo);