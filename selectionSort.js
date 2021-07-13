function selectionSort(arr){

    for (let i = 0; i < arr.length; i++) {
        // const element = arr[i];
        var lower = i;
        for (let j = i+1; j < arr.length; j++) {
            if (arr[j] < arr[lower]) {
                lower = j
            }
        }

        if (i != lower) {
            var tmp = arr[i]
            arr[i] = arr[lower]
            arr[lower] = tmp
        }
    }

    return arr
}

console.log(selectionSort([30,10,1,4,2,7,5,9,5]));