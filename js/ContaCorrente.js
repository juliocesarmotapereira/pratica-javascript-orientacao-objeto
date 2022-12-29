import { Cliente } from "./Cliente.js";

export class ContaCorrente {
  // atributos privados e públicos
  agencia;
  _cliente;
  static numeroDeContas = 0;

  // #saldo = 0; https://github.com/tc39/proposal-class-fields#private-fields
  _saldo = 0;

  set cliente(novoValor) {
    if (novoValor instanceof Cliente) {
      this._cliente = novoValor;
    }
  }


  // métodos acessores
  get cliente() {
    return this._cliente;
  }

  get saldo() {
    return this._saldo;
  }


  constructor(agencia, cliente) {
    this.agencia = agencia;
    this.cliente = cliente;
    ContaCorrente.numeroDeContas += 1;
  }


  // métodos
  // nova estrutura: as funções (ou métodos, nome comum em orientação a objetos)
  sacar(valor) {
    if (this._saldo >= valor) {
      this._saldo -= valor;
      return valor;
    }
  }

  // entre (são parâmentros que ele recebe)
  depositar(valor) {
    if (valor <= 0) {
      return;
    }
    this._saldo += valor;
  }

  tranferir(valor, conta) {
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);
  }
}