var inputKeyList = [];

//キー入力を受け付けるテスト
function keypressHandler(event) {

    let inputKey = event.key
    inputKeyList.push(inputKey);

    document.getElementById("anser").textContent = inputKeyList.join("");

    return false;
}



function setQuestion(question) {

    document.getElementById("question").textContent = question;

}

function setRuby(ruby){
    document.getElementById("ruby").textContent = ruby;
}

function isKeyCorrectAnswer(inputKeyList) {
    anser = getAnswer();
    anser.split("");

    console.log(anser.split(""));

}

function getAnswer() {
    var answer = "test";
    return answer;
}


setQuestion("安積疏水");
setRuby("あさかそすいじんじゃ");


document.addEventListener("keypress", keypressHandler);