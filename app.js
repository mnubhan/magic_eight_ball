let userName = 'Nubhan'
userName ? console.log(`Hello, ${userName}!`): console.log(`Hello!`)
let userQuestion = 'Can I score this interview?'
console.log(`${userName} Question: \n ${userQuestion}`)
let randomNumber = Math.floor(Math.random()*8)
console.log(Math.random())
let eightBall = randomNumber
switch(eightBall){
  case 8:
  console.log('It is certain')
  console.log(eightBall)

  break;
  case 7:
  console.log('It is decidedly so')
  console.log(eightBall)
  break;
  case 6:
  console.log('Reply hazy try again')
  console.log(eightBall)
  break;
  case 5:
  console.log('Cannot predict now')
  console.log(eightBall)
  break;
  case 4:
  console.log('Do not count on it')
  console.log(eightBall)
  break;
  case 3:
  console.log('My sources say no')
  console.log(eightBall)
  break;
  case 2:
  console.log('Outlook not so good')
  console.log(eightBall)
  break;
  default:
  console.log('Signs point to yes')
  console.log(eightBall)
  break;
}