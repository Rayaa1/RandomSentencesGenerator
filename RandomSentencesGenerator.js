function randomSentencesGenerator(){
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });
    let names = ["Raya","Alex","Maria","John","Aya","Martin","Teo","Preslav"];
    let places = ["Svilengrad","Sofia","Porto","Barcelona","Varna","Madrid","Haskovo","Rome"];
    let verbs = ["catches","sees","eats","holds","brings","plays with","keeps","leaves"];
    let nouns = ["phone","toy","notebooks","tomato","banana","stone","cup","dog"];
    let adverbs = ["quickly","slowly","sadly","happily","warmly","diligently","carefully","rapidly"];
    let details = ["in school","outside","at home","near the river","in the park","in the restaurant","in the cinema","at the bus station"];

    function getRandomWord (array){
        let word = array[Math.floor(Math.random() * array.length)];
        return word
    }
    let randomName = getRandomWord(names);
    let randomPlace = getRandomWord(places);
    let randomVerb = getRandomWord(verbs);
    let randomNoun = getRandomWord(nouns);
    let randomAdverb = getRandomWord(adverbs);
    let randomDetail = getRandomWord(details);
    let sentence = `${randomName} from ${randomPlace} ${randomAdverb} ${randomVerb} ${randomNoun} ${randomDetail}`
    console.log(`Hello, this is your first random generator sentence:\n${sentence}`)

    let recursiveAsyncReadLine = function () {
        readline.question('Click [Enter] to generate a new one',string => {})
    }
}
randomSentencesGenerator()