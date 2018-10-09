function cariModus(arr) {
    // you can only write your code here!
    var obj = {}

    for(var i = 0 ; i < arr.length ; i++){
        if(obj[arr[i]] === undefined){
            obj[arr[i]] = 1
        }  
        else{
            obj[arr[i]] += 1
        }
    } 

    var highestFreq = 0;
    var highest = ''    
    
    for(var key in obj) {
        if (obj[key] > highestFreq) {
            highestFreq = obj[key];
            highest = key
        } 
    }
    if (highestFreq === arr.length || Object.keys(obj).length === arr.length){
        return -1
    } else{
    return Number(highest)
    }
}

  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1