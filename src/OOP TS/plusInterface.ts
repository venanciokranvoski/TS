// Declaration Marge.

interface Pessoa {
  nome: string;
}

interface Pessoa{
   readonly sobrenome: string;
}

interface Pessoa{
  readonly endereco: readonly string[];
}

interface Pessoa {
  idade?: number;
}

const pessoa: Pessoa = {
    nome: 'Augusto',
    sobrenome: 'Miranda',
    endereco: ['Rua Dias Lopes'],
    idade: 40,
};

console.log(pessoa);

