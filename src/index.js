var inputKeyList = [];

var num = 0;

var jsonData = require("./data.json");

const data = JSON.parse(jsonData);

console.log(data);

function getJsonFile(){
    let request = new XMLHttpRequest();
    request.open("GET", "./data.json", false);
    request.send();
    return request
}

//キー入力を受け付けるテスト
function keypressHandler(event) {

    let inputKey = event.key

    
    let answer = getAnswer();



    if(isKeyCorrectAnswer(inputKey,num)){
        inputKeyList.push(inputKey);
        num++;
    }

    //全問正解したとき
    if(answer.length == num){
        console.log("正解");
    }


    document.getElementById("answer").textContent = inputKeyList.join("");

    return false;
}


//HTMLに問題をセット
function setQuestion(question) {
    document.getElementById("question").textContent = question;
}

//HTMLにルビをセット
function setRuby(ruby){
    document.getElementById("ruby").textContent = ruby;
}


function isKeyCorrectAnswer(inputKey,number) {

    if (inputKey == getAnswer()[number]) {
        return true;
    }
    else {
        return false;
    }

}

function getAnswer() {
    let answer = "asakasosuizinzya";

    let split_answer = answer.split("")

    return split_answer;
}


setQuestion("安積疏水神社");
setRuby("あさかそすいじんじゃ");



let split_answer = getAnswer();
console.log(split_answer);


document.addEventListener("keypress", keypressHandler)

