//객체는 참조에 의한 복사이기 때문에 객체를 복사할 때 참조값을 건네준다.
let a = {}
let b = a
console.log(a == b)
console.log(a === b)

//객체를 새로 생성하게 된다면 새로운 참조값을 할당하기 때문에 두 객체는 똑같은 빈 객체이지만 같지않음
let c = {}
let d = {}
console.log(c == d)
console.log(c === d)
//참조에 의한 복사로 인하여 a객체의 내용을 바꾸면 b객체의 내용도 바뀐다
a.name = 'hun'
console.log(b.name) // hun

//얕은복사
//객체의 프로퍼티가 원시 값은 경우에는 얕은복사로 모든 프로퍼티를 다른 객체로 복사가능
c.name = "lee"
c.age = 25
c.weight = 80

for (let key in c) {
    d[key] = c[key]

}
d.name = "jang"
console.log(d.name)
console.log(d)


//Object.assign(dest, [src1, src2, src3...])
const user = {
    name: 'jang',
    age: 25
}

const permission1 = { canView: true }
const permission2 = { canEdit: true }

Object.assign(user, permission1, permission2)
console.log(user)

let clone = Object.assign({}, user)
console.log(clone)
