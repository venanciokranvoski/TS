// tipo void
function  semRetorno(...args: string[]):void{
  console.log(args.join(' '));
}

const pessoa = {
  nome: 'veve',
  sobrenome: 'augusto',

  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

semRetorno('veve', 'juju', '15');
pessoa.exibirNome();

export {pessoa};
