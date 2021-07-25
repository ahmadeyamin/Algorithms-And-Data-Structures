function margeSort(arr1,arr2){
    var i = 0;
    var j = 0;

    var arr = [];


    while (arr1.length > i && arr2.length > j) {
        
        if (arr1[i] < arr2[j] ) {
            arr.push(arr1[i]);
            i++
        } else {
            arr.push(arr2[j]);
            j++
            
        }
    }

    while (arr1.length > i) {
        arr.push(arr1[i]);
        i++
    }


    while (arr2.length > j) {
        arr.push(arr2[j]);
        j++
    }

    return arr
}

console.log(margeSort([1,3,5,7,9,19],[0,1,2,4,5,7,8,10,20,22]));