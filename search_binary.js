function binary(arr,ele){
    let start = 0
    let end = arr.length - 1
    let mid = Math.floor((start + end) / 2)

    while (arr[mid] !== ele && start <= end) {
        
        if (ele < arr[mid]) {
            end = mid - 1
        }else{
            start = mid + 1
        }
        
        mid = Math.floor((start + end) / 2)
    }

    return arr[mid] == ele ? mid : -1
}

console.log(binary([1,3,5,7,9,20,40,41,45,50,200,300],300));