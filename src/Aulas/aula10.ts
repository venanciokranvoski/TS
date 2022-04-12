// === Sobre o  tipo unknow
// este tipo unknow  me da a liberdade para declarar qualquer valor
// toda vz que eu quiser receber algo e eu nao saber op que ´´e esse enum
// eu irei usar o unknow

let x : unknown;

 x = 100;
 x= 'veve';
 x= 800;
 x= 20;
 const y = 1000;
// -----
// sempre checar o tipo antes de efetuar qualquer operacao com unknown
// ------
 if(typeof x === 'number') console.log(x + y);


