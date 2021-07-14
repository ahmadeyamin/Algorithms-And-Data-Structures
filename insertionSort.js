function insertionSort(arr){
    for (let i = 1; i < arr.length; i++) {
        var element = arr[i];
        for (var j = i-1; j >= 0 && element < arr[j]; j--) {
                arr[j+1] = arr[j];
        }
        arr[j+1] = element;
    }
    return arr;
}

console.log(insertionSort([213,12,3,12,3,200,324,23,4,234,23,4,23,43,24,3]));