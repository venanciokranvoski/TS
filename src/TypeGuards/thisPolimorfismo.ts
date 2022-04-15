export class Calculadora{
  constructor(public numero: number) {}

    add(n: number):this {
       this.numero += n;
       return this
    }

    sub(n:number):this {
      this.numero -= n;
      return this;
    }

    div(n:number):this {
      this.numero /= n;
      return this;
    }

    mul(n:number):this {
      this.numero *= n;
      return this;
    }

}

const calc = new Calculadora(10);
calc.add(5).div(5).mul(9).sub(4);
console.log(calc);

/// builder... GoF
















