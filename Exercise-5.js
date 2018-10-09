function ubahHuruf(kata) {
    // you can only write your code here!
    var abc = "abcdefghijklmnopqrstuvwxyz"
    var res = ""

    for(var iKata = 0 ; iKata < kata.length ; iKata++){
        for (var iAbc = 0 ; iAbc < abc.length ; iAbc++){
            if (kata[iKata] === abc[iAbc]){
                res += abc[iAbc+1]
            }
        }
    } return res
}
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu