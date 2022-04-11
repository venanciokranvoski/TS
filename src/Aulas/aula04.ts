//Objetos
const obj: {
 readonly  a: string;
  b: string;

 // [key: string]:unknown;
} = {
 a: 'valorA',
 b: 'ValorB',
};
// quando utilizamos o readonly ele nao deixa sobrescrever a
// varival isto e como a const a diferenca ´´e que um ´´e para as propriedades e o outro para as variaveis
//obj.a = "outro valor"
obj.b = "mais um valor"

console.log(obj);


