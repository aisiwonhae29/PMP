// ESLint 규칙 위반 예시들
var unusedVariable = '이 변수는 사용되지 않음';

function badFunction() {
    console.log('single quotes 사용'); // quotes 규칙 위반 (double quotes를 원함)
    var a = 1 // 세미콜론 누락
        console.log('잘못된 들여쓰기'); // indent 규칙 위반
    
    // 후행 공백이 있는 줄   
    
    return a;
}

// 좋은 예시
function goodFunction() {
  console.log("double quotes 사용");
  const b = 2;
  return b;
}

goodFunction();
