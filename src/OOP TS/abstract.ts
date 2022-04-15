/*
Eu so posso extender classes concreta
se a classe e abstract eu nao posso instanciar
*/
export abstract  class Personagem{
  // colocando atributos staticos tbm
  protected abstract emogin: string;
    constructor
      (
        protected nome: string,
        protected ataque: number,
        protected vida: number,
      ){}

      // metodos de ataque
      atacar(personagem:Personagem): void {
        this.bordao();
        personagem.perderVida(this.ataque);
      }

      perderVida(forcaAtaque: number): void{
        this.vida -= forcaAtaque;
        console.log(`${this.emogin} ${this.nome} agora tem ${this.vida} de vida...`);


      }
      // -----------------
      // metodo que sera usado subjetivamente em casa classe
      // -----------------
      abstract bordao():void;
}

export class Guerreira extends Personagem {
  protected emogin = '\u{1F9DD}';


  bordao():void{
    console.log(this.emogin, ' RAIDUKAAAAAAAAAAAAA');
  }
}
export class Monstro extends Personagem {


  protected emogin = '\u{1F9DF}';
  bordao():void{
    console.log(this.emogin, ' Raitammmmmmmmm');
  }
}

const guerreira = new Guerreira('Guerreira',100,1000)
const  mm = new Monstro('Monstro',60, 1000)



guerreira.atacar(mm);
guerreira.atacar(mm);
guerreira.atacar(mm);
guerreira.atacar(mm);
guerreira.atacar(mm);

mm.atacar(guerreira);
mm.atacar(guerreira);
mm.atacar(guerreira);
mm.atacar(guerreira);
mm.atacar(guerreira);


