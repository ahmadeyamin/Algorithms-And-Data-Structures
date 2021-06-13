function checkAnagram(first,second) {
    if (first.length !== second.length) {
        return false;
    }
    
    let words = {}

    //O(n)
    for (let i = 0; i < first.length; i++) {
        let letter = first[i];
        words[letter] ? words[letter]++ : words[letter] = 1
    }

    console.log(words);
    

    //O(n)
    for (let j = 0; j < second.length; j++) {
        const letter = second[j];

        if (words[letter]) {
            words[letter]--
        }else{
            return false
        }
        
    }
    console.log(words);

    
    //Total  O(2n) = O(n) Time Complexity

    return true
}

console.log(checkAnagram('dowedo','wedodo'));
