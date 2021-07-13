function babelSort(arr){
    var noSwap;
    for (let i = 0; i < arr.length; i++) {
        
        noSwap = true;

        for (let j = 0; j < arr.length; j++) {

            if (arr[j] > arr[j + 1]) {
                var tmp = arr[j];

                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
                noSwap = false;
                // console.log('swap');
            }
        }   

        if (noSwap) {
            // console.log('Done');
            break;
        }
    }
    return arr;
}

console.log(babelSort([501,4,7,2,5,1,3,20,10,4,6,7,8,50,23]));