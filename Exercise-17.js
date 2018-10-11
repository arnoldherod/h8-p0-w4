function totalDigitRekursif(angka) {
    // you can only write your code here!

    var str = String(angka)
    var res = Number(str[0]) //KALAU DIGANTI 0, INFINITE LOOP
    var i = 1 // KALAU DIGANTI 0, INFINITE LOOP

    if(i >= str.length){
        return res
    }
    else{
        res += Number(str[i])
        i++
       return res + totalDigitRekursif(Number(str[i])) //Kenapa loop-nya cuman 1x? && IF diganti jadi angka malah jadi infinite loop?!?!?!?
    }
}


// TEST CASES
console.log(totalDigitRekursif(512)); // 8
//   console.log(totalDigitRekursif(1542)); // 12
//   console.log(totalDigitRekursif(5)); // 5
//   console.log(totalDigitRekursif(21)); // 3
//   console.log(totalDigitRekursif(11111)); // 5


//     var str = String(angka)
//     var digit = Number(str.slice(0,1));
//     angka = Number(str.slice(1));

//     if (! angka) {
//         return digit;
//     }else{
//         console.log(angka)
//         return digit + Number(totalDigitRekursif(angka));
//     }
// }