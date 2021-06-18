function odd(arr) {
    let newArr = []
    if(arr.length == 0) return newArr


    if(arr[0] % 2 !== 0){
        newArr.push(arr[0])
    }
    

    return newArr.concat(odd(arr.slice(1)))
}

console.log(odd([2,3,4,5,6,9,10,11,13,14,15]));