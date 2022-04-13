export function t1(this:Date, nome:string, age:number):void{
  console.log(this);
  console.log(nome,age);
}
// chamando a funcao
t1.call(new Date(), 'veve', 20);
// chamando a function com apply
// a diferenca e que  chamar com apply precisa colocar dentro de um array
t1.apply(new Date(),['alves', 60]);

