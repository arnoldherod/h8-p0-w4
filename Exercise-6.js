function hitungHuruf(kata) {
    // you can only write your code here!
    var obj = {}
    var words = kata.toLowerCase().split(" ")


    // INISIALISASI KEY DI OBJ
    for (var iWord = 0 ; iWord < words.length ; iWord++){
        if(obj[words[iWord]] === undefined){
            obj[words[iWord]] = 0
        }  
    }
    
    for (var key in obj) {
        var wordScore = 0
        var keyArray = key.split('')
        
        for (var i = 0; i < keyArray.length; i++) {
            var tempScore = 0
            for (var side = i+1; side < keyArray.length; side++) {
                if (keyArray[i] === keyArray[side] && keyArray[i] !== 'DONE') {
                    if (tempScore === 0) {
                        tempScore +=2
                    } else {
                        tempScore += 1
                    }
                    keyArray[side] = 'DONE'
                }
            }
            wordScore += tempScore
        }
        obj[key] = wordScore
    }

    var highestFreq = 0

    for (var key in obj){
        if (obj[key] > highestFreq) {
            highestFreq = obj[key];
            highest = key
        } 
    }
    return highest
}

// TEST CASES
console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
  console.log(hitungHuruf('I am a passionate developer')); // passionate
  console.log(hitungHuruf('aku adalah anak gembala')); // adalah
  console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
  console.log(hitungHuruf('mengayuh perahu di danau')); // danau