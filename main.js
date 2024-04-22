function incrementString (strng) {
    if (isNaN(strng[strng.length - 1]))
      {
        strng = strng.split('')
        strng.push(1)
        strng = strng.join('')
      }
    else{
      let length = strng.length
      for (let i = -1; -i < strng.length; i--){
        if (isNaN(Number(strng.slice(strng.length + i, strng.length))))
          {
            length += i + 1
            break
          }
        else if (Number(strng[strng.length + i]) != 9)
          {
            length += i
            break
          }
      }
      if (strng.length == 1) length = 0
      console.log(length)
      let adder = Number(strng.slice(length)) + 1
      strng = strng.slice(0, length) + adder
      console.log(adder)
    }
  
    return strng
}