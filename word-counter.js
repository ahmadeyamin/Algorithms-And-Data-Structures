function wordCount(string){

    //Empty Object For Count
    let words = {}
    string = string.trim().replaceAll(' ','')


    for (let i = 0; i < string.length; i++) {

        let letter = string[i].toLowerCase()

        // If exists then increment or add 1
        words[letter] ? words[letter]++ : words[letter] = 1  
    }

    return words;
}

console.log(wordCount('Test Word Count'));