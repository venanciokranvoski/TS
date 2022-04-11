/* eslint-disable */

// tipos basicos
let nome: string = 'veve'; // qualquer tipo de string
let idade: number = 630; // positivos e negativos numeros hexadecimal
let adulto: boolean = true; // true e false
let simbolo: symbol = Symbol('wiwdihdwdhw-symbol')


// Array de numeros
// colocar o tipo do array (dentro da tag) dentro das chaves
let arrayNumbers: Array<number> = [1,2,5,4,6,8,2];
let arrayNumbers2: number[] = [1,2,5,4,6,8,2]; // outra forma
let arrayString: Array<string> = ['1','2','5','4']


// objeto
// se coloca o ? quando nao quer obrtigar valor no objeto

let pessoa: {nome: string, idade: number, adulto?:boolean} = {
   idade: 30,
   nome: 'veve'
}


/// funcoes
function soma(x: number, y:number) {
  return x+y
}

const resul = soma(3,3);
// tudo aquilo que for escrito depois dos dois pontos ´´e
//type anotation
