/*export abstract class TipoPessoa{
  protected abstract nome: string;
  protected abstract sobrenome: string;
  protected abstract nomeCompleto(): string;
}
*/
  type TipoPessoa =
    {
      nome: string;
      sobrenome: string;
    }

    type TipoSobrenome =
    {
      sobrenome: string;
    }

    type TipoNomeCompleto = {
      nomeCompleto:() => string;
    }

export class Pessoa implements TipoPessoa{
  constructor(public nome:string, public sobrenome:string){
  }

  nomeCompleto(): string {
    return this.nome + ' ' + this.nomeCompleto
  }
}

const T = new Pessoa('veve', 'dumas');
console.log(T.nomeCompleto());

