export class Carro {
  private readonly motor = new Motor();

  ligar():void{
    this.motor.ligar();
  }

  acelerar():void{
    this.motor.Acelerar();
  }

  parar():void{
    this.motor.parar();
  }

  desligar():void{
    this.motor.desligar();
  }


}


export class Motor{
  ligar():void{
    console.log('motor esta ligado');
  }

  Acelerar():void{
    console.log('motor esta Acelerando');
  }

  parar():void{
    console.log('motor esta parado');
  }

  desligar():void{
    console.log('motor esta desligando ');
  }
}

const tester = new Carro();

tester.ligar();
tester.acelerar();
tester.parar();
tester.desligar();
