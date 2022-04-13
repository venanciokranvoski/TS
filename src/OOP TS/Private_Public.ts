import { Console } from "console";

export class Empresa{

   readonly nome : string;
   private readonly colaborador: Colaborador[] = [];
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
const empresa1 = new Empresa('Udemy', '11.111.111/0001-15');
empresa1.adicionaFuncionario(func);
empresa1.adicionaFuncionario(func1);
empresa1.adicionaFuncionario(func2);
empresa1.adicionaFuncionario(func3);
empresa1.adicionaFuncionario(func4);


//console.log(empresa1);
empresa1.mostrarFuncionarios();

//console.log(empresa1);
//console.log(func);
// qaundo vou criar uma classe por atalho
// e importante expecidicar o tipo deste atributo se e public ou
// private
