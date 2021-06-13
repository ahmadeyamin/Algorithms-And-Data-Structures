function countUnique(arr) {
    let num = {}

    for (let i = 0; i < arr.length; i++) {
        let number = arr[i];

        if (!num[number]) {
            num[number] = number
        }
        
    }

    return Object.keys(num).length

    // O(2n)
}
// Unsorted
console.log(countUnique([1,1,2,2,3,3,2,4,5,5,5,7,7,8,8,7,9,9,9,9,12]));


function countUniqueAlt(arr) {

    if (arr.length == 0) return 0

    // return 'ok'
    let first = 0

    for (let i = 1; i < arr.length; i++) {

        if (arr[first] < arr[i]) {
            // return 'Got'
            first++
            arr[first] = arr[i]
        }
        
    }

    // O(n)
    return first + 1
}
// Sorted            
console.log(countUniqueAlt([1,1,2,2,3,3,4,5,5,5,7,7,8,9,9,9,9,9,11,12]));