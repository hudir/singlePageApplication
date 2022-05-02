import { apple, user, year} from "./one.js";
console.log(year);
localStorage.clear()
localStorage.setItem('age',36);
const x = localStorage.getItem('username')
// localStorage.removeItem('age')
console.log(x);


const dataToSend ={username: 'Ghassan', age: 32}
console.log(dataToSend);

const response = JSON.stringify(dataToSend)

console.log(response);

const stu = JSON.parse(response)
console.log(stu);


console.log(apple, user, year);