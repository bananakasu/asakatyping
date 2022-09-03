
var list = [];

//キー入力を受け付けるテスト
function keypressHandler(event) {

    list.push(event.key);
    document.getElementById("test").innerHTML = list.join("");

    return false;
}



let test = document.getElementById("test");

test.textContent = "Hello World!";

test.style.color = "red";

document.addEventListener("keypress", keypressHandler);
