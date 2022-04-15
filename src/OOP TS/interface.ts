interface TipoNome {
  nome: string;
}

interface TipoSobreNome  {
  sobrenome: string;
}

interface TipoNomeCompleto {
  nomeCompleto: () => string;
}

type TipoUser = TipoNome & TipoSobreNome & TipoNomeCompleto;


// Definido minha estrutura atraves de tipos
export class Pessoa implements TipoUser {
  constructor(public nome:string, public sobrenome:string){}
  nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}


const pessoaObj: TipoUser = {
  nomeCompleto() {
    return this.nome + ' ' + this.sobrenome;
  },
  nome: 'augusto',
  sobrenome:' Agora ta Ok! '
}


const pessoa = new Pessoa('veve', 'dumas')
console.log(pessoa.nomeCompleto());
console.log(pessoaObj.nomeCompleto());


