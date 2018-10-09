function tukarBesarKecil(kalimat) {
    // you can only write your code here!
    var res = ""
    var array = kalimat.split("")

    for(var i = 0; i < array.length ; i++){
        // console.log(array[i])
        var lowerCase = array[i].toLowerCase()
        var upperCase = array[i].toUpperCase()

        if(array[i] === lowerCase ){
            array[i] = array[i].toUpperCase()
        }
        else if(array[i] === upperCase){
            array[i] = array[i].toLowerCase()
        }
    } return array.join("")
  }
  
  // TEST CASES
  console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
  console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
  console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
  console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
  console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-