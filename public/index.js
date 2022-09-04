let data = getQuestions(); //問題をJSON形式で保存
let countQuestion = 0; //現在の問題数
let currentLength = 0; //現在の文字数
let inputKeyList = []; //正解していったキーの配列
let answer = getAnswer(countQuestion);
let missTypeNum = 0;
let correctAnswerTypeNumber = 0;


//問題のJSONを取得
function getQuestions(){
    const jsonText = document.getElementById("data").innerHTML;
    return JSON.parse(jsonText);
}


//キーが入力されるごとに呼び出される
function keypressHandler(event) {
    let inputKey = event.key//入力キー１文字


    //現在のアルファベットと入力されたキーが一致したとき
    if(isKeyCorrectAnswer(inputKey,currentLength)){
        inputKeyList.push(inputKey);
        currentLength++;
        correctAnswerTypeNumber++;
    }else{
        missTypeNum++;
    }

    //全文字の処理が終了したとき
    if(answer.length == currentLength){
        console.log("NEXT");
        countQuestion++;

        var prg = document.getElementById("progress");
        prg.style.width = `${countQuestion * 10}%`;

        var rem = document.getElementById("remain");
        rem.textContent = `残り　${10 - countQuestion}問`;
        //最終問題の時
        if(countQuestion == data.questions.length){
            console.log("FINISH");
            document.getElementById("question").textContent = "FINISH";
            document.getElementById("answer").textContent = "";
            document.getElementById("ruby").textContent = "";

            document.getElementById("result").textContent = "正解数：" + correctAnswerTypeNumber + "　ミスタイプ数：" + missTypeNum;
            return;
        }
        

        //次の問題をセット
        setHtmlQuestion(data.questions[countQuestion].name);
        setHtmlRuby(data.questions[countQuestion].rubi);
        document.getElementById("answer").textContent = "";
        inputKeyList = [];
        currentLength = 0;

        answer = getAnswer(countQuestion);

    }


    document.getElementById("answer").textContent = inputKeyList.join("");

    return false;
}

//HTMLに問題をセット
function setHtmlQuestion(question) {
    document.getElementById("question").textContent = question;
}


//HTMLにルビをセット
function setHtmlRuby(ruby){
    document.getElementById("ruby").textContent = ruby;
}


//入力されたキーが現在の文字の場所で正解どうかを判定
function isKeyCorrectAnswer(inputKey,currentLength) {
    if(inputKey == answer[currentLength]){
        return true;
    }else{
        return false;
    }
}


//N番目問題の答え（ローマ字）を配列に分けて返す
function getAnswer(countQuestion) {
    let answer = data.questions[countQuestion].answer;
    let split_answer = answer.split("");
    return split_answer;
}

//最初の問題をセット
setHtmlQuestion(data.questions[countQuestion].name);
setHtmlRuby(data.questions[countQuestion].rubi);

//キープレスイベント
document.addEventListener("keypress", keypressHandler);
