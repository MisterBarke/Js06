function extractWords(){
    var mots = "Voici l'exemple de la chaines";
    var container = mots.split(" ");
    return container;
}
console.log(extractWords());
module.exports = extractWords;