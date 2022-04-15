import { Console } from "console";



/*
A diferença entre protected e private
´´e que private so pode ser acessado da classe que foi criada
porem o protecte pode ser acessado por subclasses




*/



export class Empresa{

   readonly nome : string;
   protected readonly colaborador: Colaborador[] = [];
   protected readonly cnpj: string;

   constructor(nome: string, cnpj: string){
     this.nome = nome;
     this.cnpj = cnpj;
   }


   adicionaFuncionario(colaborador: Colaborador):void{
       this.colaborador.push(colaborador);
   }

   mostrarFuncionarios(){
     for(const colaborador of this.colaborador) {
       console.log(colaborador);
     }
   }


}

export class Udemy extends Empresa {
  constructor(){
    super('udemy', '11.111.111/0001-11');
  }

pop():Colaborador{// sempre verificar o valor
  const colaborador = this.colaborador.pop();
  //===== validando
  if(colaborador) return colaborador;
  return null;
}

}

export class Colaborador {
    constructor(public readonly nome: string,
                public readonly sobrenome: string,
                private readonly idade: Idade[]=[]){}
}



export class Idade{

}

// colaborador
const func  = new Colaborador('venancio', 'dumas');
const func1 = new Colaborador('juliana' , 'dumas');
const func2 = new Colaborador('vanice'  , 'dumas');
const func3 = new Colaborador('antonio' , 'ribas');
const func4 = new Colaborador('ana'     , 'nascimento');

// instancia da classe
const empresa1 = new Udemy();
empresa1.adicionaFuncionario(func);
empresa1.adicionaFuncionario(func1);
empresa1.adicionaFuncionario(func2);
empresa1.adicionaFuncionario(func3);
empresa1.adicionaFuncionario(func4);

empresa1.pop();
console.log('pegando ', empresa1);

//console.log(empresa1);
//empresa1.mostrarFuncionarios();

//console.log(empresa1);
//console.log(func);
// qaundo vou criar uma classe por atalho
// e importante expecidicar o tipo deste atributo se e public ou
// private
