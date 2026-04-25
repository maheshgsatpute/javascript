
// strings in js

let a = "mahesh"
console.log(a)
console.log(typeof(a))


a= []
console.log(a)
console.log(typeof(a))

a= ""
console.log(a)
console.log(typeof(a))


// string interpolation 

fname ="mahesh"
lname="satpute"
console.log(`My name is ${fname} and my surname is ${lname}`)

console.log("i am "+ fname + " and my surname is " + lname + "...")


//JS ===>object
//properties ==>length, indexing
//methods ==>  slice 
//methods ==> action 
//action ==>return 


let city = "ahilyanagar"

//0     1     2    3     4     5    6      7     8     9      10
//a     h    i     l     y     a     n     a     g     a      r

console.log(city[5])

console.log(city.length)

// last element
console.log(city.length-1)
console.log(city[city.length-1])


//concatinate   +

// num + num ===> num
// num + String ===>String
//strinh + num ===>string
//string + string ===>string

a = 10
let b = 20
let c = "mahe"
let d = "sat"

console.log(a+b)
console.log(a+c)
console.log(c+b)
console.log(c+d)

// loops
for (let i =0; i<city.length; i++){
    console.log(city[i])
}


// toUpperCase(), toLowerCase(),includes(),indexOf(), startsWith()


let str = "Mahesh Satpute"
console.log(str.includes("M"))
console.log(str.includes("mahe"))                 // false
console.log(str.includes("Mah"))
console.log(str.includes("sh Sat"))
console.log(str.includes("shSat"))                // false  


// indexOf()

console.log(str.indexOf("s"))
console.log(str.indexOf("Sat"))
console.log(str.indexOf("g"))                   // -1

// startsWith()

console.log(str.startsWith("M"))
console.log(str.startsWith("Mahe"))
console.log(str.startsWith("p"))
console.log(str.startsWith("S"))

// repeat 

a= "aditya"
console.log(a.repeat(3))