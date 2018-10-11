function changeVocals (str) {
    //code di sini
    var res = ""

    for(var iStr = 0 ; iStr < str.length ; iStr++){
            switch(str[iStr]){
                case "A": {res += "B" ; break;}
                case "E": {res += "F" ; break;}
                case "I": {res += "J" ; break;}
                case "O": {res += "P" ; break;}
                case "U": {res += "V" ; break;}

                case "a": {res += "b" ; break;}
                case "e": {res += "f" ; break;}
                case "i": {res += "j" ; break;}
                case "o": {res += "p" ; break;}
                case "u": {res += "v" ; break;}
                default: {res += str[iStr]}
            }
        } return res
    }
  
  function reverseWord (str) {
    //code di sini
    str = str.split("")
    return str.reverse()
  }
  
  function setLowerUpperCase (str) {
    //code di sini
    var res = ''
    for(var k = 0 ; k < str.length ; k++){
        if(str[k] === str[k].toLowerCase()){
            res += str[k].toUpperCase()
        }
        else if (str[k] === str[k].toUpperCase()){
            res += str[k].toLowerCase()
        }
        else{
            res += str[k]
        }
    } return res
    }
  
  function removeSpaces (str) {
    //code di sini
    var arrRes = str.split(" ")
    return arrRes.join("")
  }
  
  function passwordGenerator (name) {
    //code di sini

    var change = changeVocals(name)
    var reverse = reverseWord(change)
    var switchCase = setLowerUpperCase(reverse)
    var noSpace = removeSpaces(switchCase)
    if(name.length < 5){
        return "Minimal karakter yang diinputkan adalah 5 karakter"
    } 
    else{
        return noSpace
    }  
}
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'