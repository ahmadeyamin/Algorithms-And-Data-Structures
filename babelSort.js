function babelSort(arr){
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {

            if (arr[j] > arr[j + 1]) {
                var tmp = arr[j];

                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;

            }
        }   
    }
    return arr;
}

console.log(babelSort([1,4,7,2,5,1,3,20,10]));