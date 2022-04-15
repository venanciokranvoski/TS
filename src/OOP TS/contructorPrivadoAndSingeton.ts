// Singleton - Default
/*
    Criar omente uma instancia na classe
*/
export class Database {
   // atributo statico privado
   private static database:Database;
    private constructor
    (
        private host:string,
        private user: string,
        private password : string
    ){}

    connect():void{
        console.log(`Connect: ${this.host}, ${this.user},
        ${this.password}`);
    }
     // factor method
      static getConnection(host:string, user:string, pass:string):Database{
      if(Database.database) return Database.database;
      Database.database = new Database(host, user, pass);
      return Database.database;
    }


}
const DB =  Database.getConnection ('localhost', 'root', '123456')
DB.connect();

const DB1 =  Database.getConnection('localhost', 'root', '123456')
DB1.connect();

console.log(DB === DB1);

