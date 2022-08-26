// import {words} from "./word"

// console.log(words)
const wordText = document.querySelector(".word"),
hintText = document.querySelector(".hint span"),
timeText = document.querySelector(".time b"),
inputfield = document.querySelector("input"),
refreshBtn = document.querySelector(".refresh-word"),
checkBtn = document.querySelector(".check-word");

let correctWord, timer;

const iniTimer = maxTime => {
    clearInterval(timer);
    timer = setInterval(() =>{
        if(maxTime > 0) {
            maxTime--; // decrement maxTime by -1
            return timeText.innerText = maxTime;
        }
        clearInterval(timer);
        alert(`Time off! ${correctWord.toLocaleUpperCase()} was the correct word`);
        initGame(); // calling initGame function, so the game result
    }, 1000);
}
const initGame= () => {
    iniTimer(30); // calling iniTimer function with passing as maxataime value
    let randomObj = words[Math.floor(Math.random() * words.length)]; //getting random object from words
    let wordArray = randomObj.word.split(""); //splitting each letter of random number
    for (let i = wordArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i * 1)); //getting random number
        //shuffling and swipping wordArray letter randomly
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
    }
    wordText.innerText = wordArray.join(""); //passing shuffle word as word text
    hintText.innerText = randomObj.hint; // passing random object hint as hint text
    correctWord = randomObj.word.toLocaleLowerCase();
    inputfield.value = "";
    inputfield.setAttribute("maxlength", correctWord.length) //
    console.log(randomObj);

}
initGame();

const checkword = () => {
    let userWord = inputfield.value.toLocaleLowerCase(); // getting user value
    if(!userWord) return alert("Please enter a word check"); // if user didn't enter anything

    //if user word doesn't match with the correct word
    if(userWord !== correctWord) return alert(`Oops! ${userWord} is not a correct word`);

    //if above two if conditions are failed then show congrats aler beacause user is correct
    alert(`congrats! ${userWord.toLocaleUpperCase()} is a correct word`);
}

refreshBtn.addEventListener("click", initGame);
checkBtn.addEventListener("click", checkword);
