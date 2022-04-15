

// inversao de dependencia para que a classe, Pai nao venha
// ficar apontando direto para as classe concreta que pode ser alterado
// em qua/quer momento.



export class  Escritor{
  private _ferramenta: Ferramenta | null = null;
  constructor(private _nome:string) {}

  set ferramenta(ferramenta:Ferramenta | null ){
    this._ferramenta = ferramenta;
  }


  get ferramenta(): Ferramenta | null{
    return this._ferramenta;
  }


  escrever(): void {
    if(this.ferramenta === null){
        console.log('Nao posso trabalhar sem ferramenta!!!');
        return;
    }
    this.ferramenta.escrever();
  }


}
////////////////////////////////////////////
export abstract class Ferramenta{
  constructor(private _nome:string){}
  abstract escrever():void;

  get nome(): string{
    return this._nome;
  }
}

////////////////////////////////////////
export class Caneta extends Ferramenta{
  escrever(): void {
    console.log(` ${this.nome} esta escrevendo...... `);

  }
}

export class Maquina extends Ferramenta{
  escrever(): void {
    console.log(` ${this.nome} esta Digitando...... `);

  }
}

const escritor = new Escritor('veve');
const canetinha = new Caneta('Farbic Castel');
const maquinaDeEscrever = new Maquina('belga');



maquinaDeEscrever.escrever();

escritor.ferramenta = maquinaDeEscrever;
escritor.escrever();
