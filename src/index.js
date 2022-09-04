var inputKeyList = [];

var num = 0;

//キー入力を受け付けるテスト
function keypressHandler(event) {

    let inputKey = event.key

    
    inputKeyList.push(inputKey);

    console.log(num);
    console.log(isKeyCorrectAnswer(inputKey,num));


    if(isKeyCorrectAnswer(inputKey,num)){
        num++;
    }


    document.getElementById("anser").textContent = inputKeyList.join("");

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
    let answer = "asakazinja";

    let split_answer = answer.split("")

    return split_answer;
}


setQuestion("安積疏水");
setRuby("あさかそすいじんじゃ");



let split_answer = getAnswer();
console.log(split_answer);


document.addEventListener("keypress", keypressHandler)

