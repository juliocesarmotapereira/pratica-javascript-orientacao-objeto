export class Cliente {
    // atributos - class e meu molde
    nome;
    _cpf;
    rg;


    get cpf() {
      return this._cpf;
    }

    constructor(nome, cpf, rg) {
      this.nome = nome;
      this._cpf = cpf;
      this.rg = rg; 
    }

  }
