

// for(var angka=1; angka<=5; angka++){
//   for (var at=1;at<=10;at++)
//     console.log(`${angka} x ${at} = ${angka*at}`)
// }
let angka = 5;
let angka2 = 10;

function kali(i,x){
   for(var a=1 ; a<=i ; a++){
    for(var b=1 ; b<=x ; b++){
      console.log(`${a} x ${b} = ${a*b}`)
    }
  }
  return "";
}

console.log(kali(angka,angka2))
