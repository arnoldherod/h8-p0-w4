function changeMe(arr) {
    // you can only write your code here!

    var obj = {}
    var objFirstName = obj.firstName
    var objLastName = obj.lastName
    var objGender = obj.gender
    var objAge = obj.age

    
    if(arr.length === 0){
        console.log("")
    } else{
        for (var i = 0; i < arr.length ; i++){
            console.log((i+1) + "." , arr[i][0] , arr[i][1] + ":")
            if (objFirstName === undefined){
                obj.firstName = arr[i][0]; 
            }

            if (objLastName === undefined){
                obj.lastName = arr[i][1]
            }

            if (objGender === undefined){
                obj.gender = arr[i][2]
            }

            if (objAge === undefined){
                obj.age = 2018 - arr[i][3]
                if (arr[i][3] === undefined || obj.age > 2018){
                    obj.age = "Invalid Birth Year"
                } 
                console.log (obj)
            }
        }
    }
}


  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male',]]);
  // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 36 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe([]); // ""