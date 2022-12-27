export class ContaCorrente {
    agencia;
    cliente;

    // #saldo = 0; https://github.com/tc39/proposal-class-fields#private-fields
    _saldo = 0;
  
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