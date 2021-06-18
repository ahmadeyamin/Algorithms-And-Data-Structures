function power(number,pw) {
    if(pw < 1) return 1
    return number * power(number,pw - 1)
}

console.log(power(5,3));