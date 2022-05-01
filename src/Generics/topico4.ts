export class Pessoa<T, U> {
  constructor(public nome: T, idade: U) {}
}
 // Stacks
export class Pilha<T>{
   private contador = 0;
   private elemento: {[k:number]:T} = {}

      push(elemento: T): void {
        this.elemento[this.contador] = elemento;
        this.contador++;
      }

      pop(): T {
        if(this.estaVazia()) return undefined;
        //------------------------------------------------------------
        this.contador --;
        const elemento = this.elemento[this.contador];
        delete this.elemento[this.contador];
        return elemento;
      }


      estaVazia(): boolean {
        return this.contador === 0;
      }

      tamanho(): number{
        return this.contador;
      }
}

const P = new Pilha();
//-----------------------------------|
//-------------Pilha-----------------|
//+++++++++++++++++++++++++++++++++++|
P.push(1);
P.push(2);
P.push(3);
P.push(4);
P.push(5);
P.push(6);
P.push(7);

while(!P.estaVazia){
  console.log(P.pop);

}



