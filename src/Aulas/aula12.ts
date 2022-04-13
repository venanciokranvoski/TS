// tipos literais = valores como tipos
let x = 10;  // eslint-disable-line
x = 0b1010;
const y = 10;
let a = 100 as const;

const teste = {
  first :   'caio' as const,// insercao
  last : 'ribeiro'
};

//teste.first = x qualquer valor fora do que foi setado
// nao sera aceito
function escolherCor(cor: 'red' | 'yellow' | 'blue'): string{
  return cor;
}

console.log(escolherCor('red'));





export default 1
