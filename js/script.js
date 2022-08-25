const initGame =() => {
    let randomObj = words[Math.floor(Math.random() * words.length)]; //getting random object form words
    let wordArray = randomObj.word.split(""); //splitting each letter of random word
    for (let i = wordArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); //getting random number
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[j]]
    }
    console.log(wordArray);
}
initGame();
