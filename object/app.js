//객체 생성하기(두가지 방법)

const websiteUser = new Object();
let comment = {}
//프로퍼티 키와 값을 동시에 추가 가능
websiteUser.name = "john"

comment = {
    date: new Date(),
    userName: websiteUser.name,
    isHidden: false,
    commentImg: {},
    emoji: "👍",
    position: undefined,
}
//comment display 키 추가 및 값 수정
comment.display = {
    width: 200,
    height: 100
}
comment.display.width = 100
//코멘트 프로퍼티 삭제 
delete comment.position


console.log(comment)

websiteUser["age"] = 25
//티어 등급 객체
tearValue = {
    0: "vip",
    1: "premium",
    2: "gold",
    3: "silver",
    4: "bronze",
}

const whatIsTear = () => {
    let tear = prompt("당신의 티어는? 0:vip, 1:premium, 2:gold, 3:silver, 4:beonze", 4)
    if(0<=Number(tear)<=4){
        return String(tear)
    }else{
        alert("0부터 4까지의 숫자를 입력하세요.")
        return
    }
}

//대괄호 표기법안에 함수표현식을 넣어서 원하는 프로퍼티 값을 유저나 개발자로부터 받아서 결과를 도출할 수도 있다.
// ||를 활용하여 undefined가 리턴되면 등급이 없게끔 표시하여 사용자의 엉뚱한 입력을 디버깅
websiteUser.userTear = tearValue[whatIsTear()] || "등급 없음"
console.log(websiteUser)

//단축 프로퍼티: 프로퍼티 키와 값이 일치할 경우 생략 가능
function makeObject(width, height){
    return {
        width,
        height,
    }
}
console.log(makeObject(100,200))
// in 연산자로 프로퍼티 키가 있는지 확인하기

console.log("name" in websiteUser)
console.log("weight" in websiteUser)

//for in을 활용하여 순회하기

//websiteUser의 키를 반환한다.
for(let key in websiteUser){
    console.log(key)
}
//websiteUser의 키에 대한 value를 반환한다.
for(let key in websiteUser){
    console.log(websiteUser[key]) 
}
//조건을 추가하여 순회할때 key가 userName과 동일할 경우에 콘솔에 키에 대한 값을 반환한다.
for(let key in comment){
    if(key === "userName"){
        console.log(comment[key]) //john
    }
}

//프로퍼티 키가 정수인 경우 객체 순회를 하여 key를 콘솔에 출력하면 오름차순으로 조회된다. 
//프로퍼티 키가 정수가 아닌 경우에는 그냥 객체레 넣은 순서대로 조회된다.
//프로퍼티 키가 정수일 경우 순회를 넣은 순서대로 하고싶으면 +를 앞에 붙이면 된다.
