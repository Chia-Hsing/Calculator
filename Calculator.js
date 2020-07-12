let visibleNum = '';
let operators = '';
let caculateNum = 0;
let realNum = 0;

function show (num) {
    document.querySelector('.result').innerText = num; // 將傳入的參數顯示於畫面上
}

function showTheNumOut (inputNum) {
    visibleNum += inputNum; // 傳入的數字不斷累積 visibleNum（字串）
    realNum = parseFloat(visibleNum, 10); // 將累積的 visibleNum（字串）轉為數字 realNum
    show(realNum); // 將數字 realNum 顯示於畫面上
    return;
}

function AC () {
    visibleNum = ''; // 清空存入的 visibleNum（字串）
    const visibleNum1 = 0; // 目的單純只是為了按下ac後在螢幕上顯示 0 
    operators = ''; // 清空存入的運算子
    show (visibleNum1); // 在螢幕上顯示 0 
}

function operation (num1, num2, operator) { // 運算函式
    switch (operator) { 
        case operator = '+':
        return num1 + num2;
        case operator = '-':
        return num1 - num2;
        case operator = '*':
        return num1 * num2;
        case operator = '/':
        return num1 / num2;
        default:
        return num2;
    }
}


function caculation (e) {
    if (e.target.classList.contains('num')) { // 按下數字鍵
        let targetNum = e.target.innerText; // 按下的目標數字（字串）
        showTheNumOut(targetNum);  // 將按下的目標數字（字串）顯示於畫面 （由 showTheNumOut 函式轉為數字）
    } else if (e.target.classList.contains('ac')) { // 按下ＡＣ
        AC();
    } else if (e.target.classList.contains('operator')) { // 按下運算元素鍵
        caculateNum = realNum; // 將當下畫面上顯示的數字存入 caculateNum
        operators = e.target.innerText; // 按下的目標運算子，存入 operators
        visibleNum = ''; // 初始化 visibleNum，否則畫面上的數字會持續累積
    } else if (e.target.classList.contains('equal')) {
        const realResult = operation(caculateNum, realNum, operators); // 按下等於鍵。將按下運算子鍵前的數字和運算子，以及按下等於鍵前的數字一併帶入函式
        visibleNum = ''; // 初始化 visibleNum，否則畫面上的數字會持續累積
        showTheNumOut (realResult); // 將計算結果顯示於畫面
    }
}

document.querySelector('.btn-pad').addEventListener('click', caculation); // 事件代理

