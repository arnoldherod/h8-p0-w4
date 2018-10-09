function fpb(angka1, angka2) {
    // you can only write your code here!
    var max = 0
    var res = 0

    if(angka1 > angka2){
        max = angka1
    }
    else if (angka1 < angka2){
        max = angka2
    }

    for(var counter = 1 ; counter <= max ; counter++){
        if(angka1 % counter === 0 && angka2 % counter === 0){
            res = counter
        }
    } return res
  }
  
  // TEST CASES
  console.log(fpb(12, 16)); // 4
  console.log(fpb(50, 40)); // 10
  console.log(fpb(22, 99)); // 11
  console.log(fpb(24, 36)); // 12
  console.log(fpb(17, 23)); // 1