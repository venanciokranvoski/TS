export class Pessoa {
  static idadePadrao = 0;
  static cpfPadrao = '410513458452';

  constructor(
                public nome: string,
                public sobrenome: string,
                public idade:number,
                public _cpf: string
             ){}

    metodoP():void{
      console.log();

    }


  // atributos e metodos staticos
    static criaPessoa(nome: string, sobrenome: string): Pessoa{
      return new Pessoa(nome, sobrenome, Pessoa.idadePadrao,Pessoa.cpfPadrao)
    }
}

const pp = Pessoa.criaPessoa('juliana','Dumas');
console.log(Pessoa.cpfPadrao, Pessoa.idadePadrao);

