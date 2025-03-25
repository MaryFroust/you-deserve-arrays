/******************
 * YOUR CODE HERE *
 ******************/

 function getFirstItemFrom(arr){
  //const firstItem = arr[0]
  return  arr[0] 
 }
 function getLastItemFrom(arr){
  return arr [arr.length - 1]
}
 function getIndex3(arr){[22, 45, 'old', 77 ['seeds', 'trees', 'flowers']]
    return arr [3]
    //console.log(getIndex3[2])
    return arr [arr.length - 1]
 }
  
  function isLongList(arr){
    return arr !== 10
   
    //return typeof num === 10
  }
  function firstItemIsNumber(num){
    return num === 'number' 
  }
  function secondCharOfThirdString(arr){['socks', 'shoes', 'pants']
    return arr[2][1]
  }

//typeof num === 'number'

 /********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/



if (typeof getFirstItemFrom === 'undefined') {
  getFirstItemFrom = undefined;
}


if (typeof getLastItemFrom === 'undefined') {
  getLastItemFrom = undefined;
}



if (typeof getIndex3 === 'undefined') {
  getIndex3 = undefined;
}


if (typeof firstItemIsNumber === 'undefined') {
  firstItemIsNumber = undefined;
}


if (typeof isLongList === 'undefined') {
  isLongList = undefined;
}


if (typeof secondCharOfThirdString === 'undefined') {
  secondCharOfThirdString = undefined;
}




module.exports = {
  getLastItemFrom,
  getFirstItemFrom,
  getIndex3,
  firstItemIsNumber,
  isLongList,
  secondCharOfThirdString,
}
