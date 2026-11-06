function pressNumber(num) {
    document.getElementById("display").value += num;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function deleteLast() {
    let display = document.getElementById("display");

    display.value = display.value.slice(0, -1);
}

function chooseOperator(operator) {
    document.getElementById("display").value += operator;
}

function calculate() {
    let display = document.getElementById("display");

    display.value = eval(display.value);
}

function calculate(){
     let display=document.getElementById("display");
     let expression=display.value;
     let answer=eval(expression);
     document.getElementById("result").value=answer;
}
        