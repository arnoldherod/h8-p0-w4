function countProfit(shoppers) {
    let listBarang = [['Sepatu Stacattu', 1500000, 10],
    ['Baju Zoro', 500000, 2],
    ['Sweater Uniklooh', 175000, 1]
    ];
    // you can only write your code here!

    // loop to compare "product" from "shoppers" with "objRes.product"
        // if SAME = objRes.shopper.push(shoppers[i]["name"])
            // objRes.leftOver -= shoppers[i]["amount"]
            // objRes.totalProfit = SUM of shoppers["amount"] * listBarang[i][1]
        // result.push(objRes)
    // END OF LOOP
// return result

    var result = []

    if(!shoppers){
        return result
    }
    else{
            for (var i = 0; i < listBarang.length; i++) {
            var objRes = {}
            objRes.product = listBarang[i][0]
            objRes.shoppers = []
            objRes.leftOver = listBarang[i][2]
            objRes.totalProfit = 0

            for (var iShoppers = 0 ; iShoppers < shoppers.length ; iShoppers++){
                if(objRes.product === shoppers[iShoppers]["product"] && objRes.leftOver >= shoppers[iShoppers]["amount"]){
                    objRes.shoppers.push(shoppers[iShoppers]["name"])
                    objRes.leftOver -= shoppers[iShoppers]["amount"]
                    objRes.totalProfit = listBarang[i][1] * (listBarang[i][2] - objRes.leftOver)// SUM OF shoppers["amount"]
                }
            }
            result.push(objRes)
        }
    }
    return result
}

// TEST CASES
console.log(countProfit(
    [{ name: 'Windi', product: 'Sepatu Stacattu', amount: 2 },
    { name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3 },
    { name: 'Rani', product: 'Sweater Uniklooh', amount: 2 }]));
  //[ { product: 'Sepatu Stacattu',
  //   shoppers: [ 'Windi', 'Vanessa' ],
  //   leftOver: 5,
  //   totalProfit: 7500000 },
  // { product: 'Baju Zoro',
  //   shoppers: [],
  //   leftOver: 2,
  //   totalProfit: 0 },
  // { product: 'Sweater Uniklooh',
  //   shoppers: [],
  //   leftOver: 1,
  //   totalProfit: 0 } ]

//   console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
  // [ { product: 'Sepatu Stacattu',
  //     shoppers: [ 'Windi' ],
  //     leftOver: 2,
  //     totalProfit: 12000000 },
  //   { product: 'Baju Zoro',
  //     shoppers: [ 'Devi', 'Lisa' ],
  //     leftOver: 0,
  //     totalProfit: 1000000 },
  //   { product: 'Sweater Uniklooh',
  //     shoppers: [ 'Rani' ],
  //     leftOver: 0,
  //     totalProfit: 175000 } ]

//   console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
  // [ { product: 'Sepatu Stacattu',
  //     shoppers: [],
  //     leftOver: 10,
  //     totalProfit: 0 },
  //   { product: 'Baju Zoro',
  //     shoppers: [],
  //     leftOver: 2,
  //     totalProfit: 0 },
  //   { product: 'Sweater Uniklooh',
  //     shoppers: [],
  //     leftOver: 1,
  //     totalProfit: 0 } ]

//   console.log(countProfit([])); //[]


