function angkaPrima (num) {

    if (num === 1) {
      return false;
    } else if(num === 2) {
      return true;
    } else {
      for(var x = 2; x < num; x++) {
        if(num % x === 0) {
          return false;
        }
      }
      return true;  
    }
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false