function inverseNumber(number){
    if (number === 0){
        return "0 n'a pas d'inverse";
    }else{
        return 1/number;
    }
}
console.log(inverseNumber(4));
console.log(inverseNumber(0));

module.exports = inverseNumber;