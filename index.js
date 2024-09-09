// input			// output
// "hello"   			// { h: 1, e: 1, l: 2, o: 1 }
// "aabbbcc"			// { a: 2, b: 3, c: 2 }

var soal1 = "hello"
var soal2 = "aabbbcc"

function jawabsoal(soal) {
    var hasil = {};
    for (let i=0; i < soal.length; i++) {
    }
     return hasil;
 }
 
 console.log(soal1, jawabsoal(soal1));
 console.log(soal2, jawabsoal(soal2));