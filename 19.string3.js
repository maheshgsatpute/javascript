// method chaining
let str1 = "MaHesh SatPute vishwa gaurav ViShal VRUshali"

// "mahesh"

let q1 = str1.toUpperCase().toLowerCase().split(" ").some(function(el){
    return el == "mahesh"
})
console.log(q1)

console.log (str1.toUpperCase().toLowerCase().split(" ")) 

// print reverse string

let str2 = "mahesh"

console.log(str2.split("").reverse().join(""))

// using for loop

function revString(str){
    let rstr = ""
    for (let i=0; i<str.length;i++){
        rstr = str[i] + rstr
    }
    return rstr
}
console.log(revString("mahesh"))

// given string is plandrome or not 

let name="nitin"
rname =revString(name)
console.log(rname)
if(name==rname){
    console.log("palandrome")
}
else{
    console.log("not palandrome")
}

// vowel count "aeiouAEIOU"

let str = "mahESh saTpUtE" 
let count = 0
for(let i=0;i<str.length;i++){
    if(str[i]=="a" || str[i]=="e" || str[i]=="i" || str[i]=="o" || str[i]=="u" || str[i]=="A" || str[i]=="E" || str[i]=="I" || str[i]=="O" || str[i]=="U"){
        count++
    }
}
console.log(count)

count=0
vowels= ["a","e","i","o","u"]
for(let i=0;i<str.length;i++){
    if(vowels.includes(str[i].toLowerCase())){
        count++
    }
}
console.log(count)