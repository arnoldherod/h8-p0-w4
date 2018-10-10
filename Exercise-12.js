function shoppingTime(memberId, money) {
    // you can only write your code here!

    var sale = {
        "Sepatu Stacattu" : 1500000,
        "Baju Zoro" : 500000,
        "Baju H&N" : 250000,
        "Sweater Uniklooh" : 175000,
        "Casing Handphone" : 50000
    }

    var res = {}

    res.memberId = memberId
    res.money = money
    res.listPurchased = []
    res.changeMoney = money
    

    // FINDING CHEAPEST PRODUCT
    var cheapest = 9999999999999999

    for(var key in sale){
        if(sale[key] < cheapest){
            cheapest = sale[key]
        }
    }
    
    if(money < cheapest){
        return "Mohon maaf, uang tidak cukup"
    }
    
    if(!memberId){
        return "Mohon maaf, toko X hanya berlaku untuk member saja"
    }


    for(key in sale){
        if(res.changeMoney >= sale[key]){
            res.changeMoney -= sale[key]
            res.listPurchased.push(key)
        }
    } return res
}
  
  // TEST CASES
  console.log(shoppingTime('1820RzKrnWn08', 2475000));
    //{ memberId: '1820RzKrnWn08',
    // money: 2475000,
    // listPurchased:
    //  [ 'Sepatu Stacattu',
    //    'Baju Zoro',
    //    'Baju H&N',
    //    'Sweater Uniklooh',
    //    'Casing Handphone' ],
    // changeMoney: 0 }

    console.log(shoppingTime('82Ku8Ma742', 170000));
  //{ memberId: '82Ku8Ma742',
  // money: 170000,
  // listPurchased:
  //  [ 'Casing Handphone' ],
  // changeMoney: 120000 }

  console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja

  console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup

  console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja