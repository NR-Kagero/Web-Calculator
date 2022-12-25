var Run = "";
var F_num = 0;
var S_num = 0;
var result = 0;
var operation = "";
var count = 0;
var dot = false;
function getNum(num) {
    Run = Run + num;
    document.Form1.text.value = Run;
}
function Add() {
    F_num = Number(Run);
    Run = "";
    document.Form1.text.value = Run;
    operation = "+";
    dot = false;
}
function Sub() {
    if(Run==''){
        Run=Run+'-';
        document.Form1.text.value = Run;
    }
    else{
    F_num = Number(Run);
    Run = "";
    document.Form1.text.value = Run;
    operation = "-";
    dot = false;
    }
}
function Div() {
    
    F_num = Number(Run);
    Run = "";
    document.Form1.text.value = Run;
    operation = "/";
    dot = false;
}
function Mul() {
    F_num = Number(Run);
    Run = "";
    document.Form1.text.value = Run;
    operation = "*";
    dot = false;
}

function Equal() {
    S_num = Number(document.Form1.text.value);
    if (operation == "+") {
        if (count > 0) {
            result = result + S_num;
        } else {
            result = F_num + S_num;
            count += 1;
        }
    } else if (operation == "-") {
        if (count > 0) {
            result = result - S_num;
        } else {
            result = F_num - S_num;
            count += 1;
        }
    } else if (operation == "*") {
        if (count > 0) {
            result = result * S_num;
        } else {
            result = F_num * S_num;
            count += 1;
        }
    } else if (operation == "/") {
        if (count > 0) {
            result = result / S_num;
        } else {
            result = F_num / S_num;
            count += 1;
        }
    }
    document.Form1.text.value = result;
}
function all_C() {
    Run = "";
    F_num = 0;
    S_num = 0;
    result = 0;
    operation = "";
    counter = 0;
    dot = false;
    document.Form1.text.value = Run;
}
function Delete() {
    Run = Run.substring(0, Run.length - 1);
    document.Form1.text.value = Run;
}
function Frac() {
    if (dot == false) {
        Run = Run + ".";
        dot = true;
    }
    document.Form1.text.value = Run;
}