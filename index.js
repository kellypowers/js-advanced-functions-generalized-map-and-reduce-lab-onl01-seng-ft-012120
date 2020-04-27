// Add your functions here
function map(arr, fn) {
    let newArr = []
  
    for (let i = 0; i < arr.length; i++) {
      let theElement = arr[i]
      newArr.push(fn(theElement))
    }
  
    return newArr;
  }
  
  function reduce(arr, fn, starting){
    let newArr = (!!starting) ? starting : arr[0]
    let i = (!!starting) ? 0 : 1
  
    for (; i < arr.length; i++) {
      newArr = fn(arr[i], newArr)
    }
  
    return newArr;
  }