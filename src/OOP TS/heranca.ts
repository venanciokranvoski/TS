export class Pessoa {
   constructor(  public    nome: string,
                 public    sobrenome: string,
                 private   idade:number,
                 protected cpf: string ){}

// metodos da classe
  getIdade():number {
    return this.idade;
  }

  getCpf():string {
    return this.cpf;
  }

  getSobrenome():string {
    return this.nome + ' ' + this.sobrenome;
  }

}

// heranca
 export class Aluno extends Pessoa {
     constructor(
       nome: string,
       sobrenome: string,
       idade: number,
       nomeCompleto : string,
       public salaDeAula: string,
     ){super(nome, sobrenome, idade, nomeCompleto)}
  }


 export class Cliente extends Pessoa {
  getSobrenome():string {
    return 'Isso vem ndo cliente' + this.nome + ' ' + this.sobrenome;
  }
 }

// isso e o famoso polimorfismo
// fazendo os methodos se replicarem entre si!
const pessoa = new Pessoa('venancio','alves', 25, '47067787866');
const aluno = new Aluno('venancio','alves', 25, '47067787866', '12A');
const cli   = new Cliente('venancio','alves', 25, '47067787866');
//console.log(aluno.getSobrenome());
//console.log(cli.getSobrenome());
//console.log(pessoa.getSobrenome());
