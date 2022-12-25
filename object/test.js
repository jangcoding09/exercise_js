function isEmpty(obj) {
    for (let key in obj) {
      // if the loop has started, there is a property
      return false;
    }
    return true;
  }
let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
function sumSalaries(salaries) {
    if(salaries === {}){
        return 0
    }
    let sum = 0
    for (let key in salaries){
        
        sum += salaries[key]
            
    }
    return sum
}

console.log(sumSalaries(salaries))

function multiplyNumeric(arg){
    for(let key in arg){
        console.log(typeof arg[key])
        if(typeof arg[key] === "number"){
            arg[key] = 2*arg[key]
            console.log(2)
        }
    }
        
    }

// 함수 호출 전
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  
  multiplyNumeric(menu);
  console.log(menu)
  // 함수 호출 후
  menu = {
    width: 400,
    height: 600,
    title: "My menu"
  };