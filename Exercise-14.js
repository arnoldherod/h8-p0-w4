function sorting(arrNumber) {
    // code di sini

    var done = true;
    while (done) {
      done = false;
      for (var i = 1; i < arrNumber.length; i++) {
        if (arrNumber[i - 1] < arrNumber[i]) {
          done = true;
          var tmp = arrNumber[i - 1];
          arrNumber[i - 1] = arrNumber[i];
          arrNumber[i] = tmp;
        }
      }
    } return arrNumber
}

  function getTotal(arrNumber) {
    // code di sini
    var counter = 0

    if(arrNumber.length === 0){
        return ""
    }
    else{
        for(var j = 0 ; j < arrNumber.length ; j++){
            if (arrNumber[j] === arrNumber[0]){
                counter++
            }
            else{
                break;
            }
        } return 'angka paling besar adalah ' + arrNumber[0] +' dan jumlah kemunculan sebanyak ' + counter + ' kali'
    }
  }

  function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
  }
  
  console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
  //'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'
  
  console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
  //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'
  
  console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
  //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'
  
  console.log(mostFrequentLargestNumbers([]));
  //''