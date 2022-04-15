export class Pessoa {
  constructor(
                private  nome: string,
                private  sobrenome: string,
                private  idade:number,
                private  _cpf: string
             ){this.Cpf = _cpf}

   //modelo antigo
   set Cpf(valor:string){
     console.log('chamndo setter');

     this._cpf = valor;
   }

  //modelo antigo
   // metodo get
   get Cpf():string{
     console.log('chamando gett');

     return this._cpf.replace(/\D/g,'');
   }
}
//const pessoa = new Pessoa('venancio','alves', 25, '470.677.8786-6');
//pessoa.Cpf = '47067787861265'
//console.log(pessoa.Cpf);
