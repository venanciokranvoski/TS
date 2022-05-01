interface PessoaProtocolo<T = string, U = number> {
  nome: T;
  sobrenome: T;
  idade: U;
}

const aluno: PessoaProtocolo<string, number> = {
  nome:  'francisco',
  sobrenome: 'cury',
  idade: 26,
};

const aluna: PessoaProtocolo<string, number> = {
  nome: 'euzaltina',
  sobrenome: 'carliones',
  idade: 98
}

console.log(aluna, aluno);

