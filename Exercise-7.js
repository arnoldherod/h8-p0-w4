function digitPerkalianMinimum(angka) {
  // you can only write your code here!

  var resArr = []
  var res = "x"
  
  for(var num1 = 1 ; num1 <= angka ; num1++){
      var arr = []
      var combine = ""
    if(angka % num1 === 0 ){
          var num2 = angka / num1

          combine = combine + num1 + num2
          resArr.push(combine)
        }
    }

  for(var i = 0 ; i < resArr.length ; i++){
      if (res === "x" ){
          res = resArr[i].length
      }

      if (res > resArr[i].length){
          res = resArr[i].length
      }
  }
    return res
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2