//=================================
//============ types alias =========
// type alias  // eslint-disable-line
type idade = number;

type Pessoa = {
  nome: string;
  idade: idade;
  salario: number;
  corPreferida?: string; // ? === opcional
};

type CorRGB = 'vermelho' | 'verda' | 'blue';
type CorCmyK = 'ciano' | 'magenta' | 'amarelo' | 'preto'
type corPreferida = CorCmyK | CorRGB;
//=================================
//============ types alias =========



const pessoa: Pessoa = {
  idade: 60,
  nome: 'venancio',
  salario: 2000_000,
};

export function setCorPreferida(pessoa: Pessoa, cor: corPreferida): Pessoa {
return {...pessoa, corPreferida: cor };
}

console.log(setCorPreferida(pessoa, 'ciano'));
console.log(pessoa);


