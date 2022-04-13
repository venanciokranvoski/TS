// create class church
export class Igreja{
  constructor(
    readonly nome: string,
    readonly cnpj: string,
    readonly endereco: string,
    private readonly dizimoMensal: number,
    readonly diasCulto: string,
    private readonly membros: Membros[]=[],
  ){}

  addPeople(membros : Membros): void{
      this.membros.push(membros)
  }

 bodyChurch(){
   for(const todos of this.membros ){
     console.log(todos);

   }
 }

}

export class Membros{
  constructor
    ( readonly nome: string,
      readonly obreiro: boolean
  ){}
}


const P  = new Membros('cicera'  ,false)
const P1 = new Membros('selma'   ,true )
const P2 = new Membros('juliana' ,true )
const P3 = new Membros('carlos'  ,false)
const P4 = new Membros('euzalina',false)
const P5 = new Membros('neide'   ,true )
const P6 = new Membros('mikael'  ,false)
const P7 = new Membros('roni'    ,false)

// instaciar classe igreja
const church = new
               Igreja(' Geraçao do Ultimo Avivamento',
                      ' 11.111.111/0001-15',
                      'Rua nolasco da cunha 98',
                      50000000000,'Terca, quinta, sabado, domingo');


console.log(church.addPeople);


                   church.addPeople(P);
church.addPeople(P1);
church.addPeople(P2);
church.addPeople(P3);
church.addPeople(P4);
church.addPeople(P5);

church.bodyChurch();

