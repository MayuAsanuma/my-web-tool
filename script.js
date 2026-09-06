 function countText() {
    const text = document.getElementById("word").value;
    document.getElementById("result").textContent =
    "文字数：" + text.length;
}

function clearText(){
    document.getElementById("word").value="";
    document.getElementById("result").textContent="";
}