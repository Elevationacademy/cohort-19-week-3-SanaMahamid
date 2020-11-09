
///ex 1 
const pushPull = f => f()

const push = function () {
    console.log("pushing it!")
  }
  
  const pull = function () {
    console.log("pulling it!")
  }
  
  pushPull(push) //should print "pushing it!"
  pushPull(pull)

  //ex2
  const getTime = function(fun){
      const time = new Date()
      fun(time)
  }

  const returnTime = function (time) {
    alert('The current time is: ' + time)
  }
  
  getTime(returnTime)

//ex3

const displayData = function (alertDataFunc, logDataFunc, data) {
    alertDataFunc(data);
    logDataFunc(data);
  }

  const logData = function(data){
      console.log(data)
  }
  
  displayData(alert, logData, "I like to party")

  //ex4
  const sum = (n1,n2,n3) => n1+n2+n3
  console.log(sum(1,2,3))

//ex5
const capitalize = str => str[0].toUpperCase() + str.slice(1).toLowerCase()
console.log(capitalize("bOb")) // returns Bob
console.log(capitalize("TAYLOR")) // returns Taylor
console.log(capitalize("feliSHIA")) // returns Felishia

//ex6
const determineWeather = temp => {
    if(temp > 25){
      return "hot"
    }
    return "cold"
  }

const commentOnWeather = temp => "It's " + determineWeather(temp)
console.log(commentOnWeather(30)) //returns "It's hot"
console.log(commentOnWeather(22)) //returns "It's cold"

//ex7
const explode = (lightFunc, soundFunc, sound) => {
    lightFunc()
    soundFunc(sound)
  }
      
  const shineLight = () => document.getElementById("box").style.backgroundColor = "yellow"
      
  const makeSound = sound => alert(sound)
      
  explode(shineLight, makeSound, "BOOM")






















