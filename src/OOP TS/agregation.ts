export class CarrinhodeCompra{
     private readonly produto:Produto[] = [];


    inserirProdutos(...produtos: Produto[]):void{
       for(const produto of produtos){
        this.produto.push(produto);
       }
    }

    quantidadeProdutos():number {
      return this.produto.length;
    }

    valorTotal():number{
      return this.produto.reduce((soma, produto)=> soma + produto.preco, 0 )
    }


}

export class Produto {
  constructor(public nome:string, public preco: number){}
}

const P1 = new Produto('Camiseta ', 59.90);
const P2 = new Produto('Sapatp   ', 59.90);
const P3 = new Produto('Meia     ', 59.90);
const P4 = new Produto('Shorts   ', 59.90);
const P5 = new Produto('Bone     ', 59.90);


const car = new CarrinhodeCompra();
car.inserirProdutos(P1,P2,P3,P4,P5) // array
console.log(car.valorTotal());
console.log(car.quantidadeProdutos());




