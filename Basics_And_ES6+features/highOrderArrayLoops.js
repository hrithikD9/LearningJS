// for of
const arr = [1,2,3,4,5]

for (const i of arr) {
    console.log(i);
}

const greetings = "Namaskar"
for (const i of greetings) {
    console.log(`each character of greetings : ${i}`);
}

// Maps
// stores unique values
const map = new Map()
map.set('Ban','Bangladesh')
map.set('USA','United States of America')
map.set('Sp','Spain')

console.log(map);

for (const [key , value] of map) {     // [key , value] array de - structuring - we can store both values at a same tine
    console.log(key , ":- " , value);
}

// array can be work with map but object cant be accessable using map

/// ----------------------------------Object loops------------------------------------------------------------------------------------------

const myObject = {
    js : 'javascript',
    cpp : 'c++',
    rb : 'ruby',
    swift : "swift by apple"
}

for (const key in myObject) {
    console.log(`${key} shortcut is for =>  ${myObject[key]}`);
}

const pl = ["js", "cpp","java","py"]

for (const key in pl) {
    console.log(`${key} is for =>  ${pl[key]}`);
}


// objects - forin loop
// array - forof

// ========================================forEachLoop=================================

const pro = ["js", "cpp","java","py"]

pro.forEach( function (item) {
    console.log(item);
    
})

pro.forEach( (item) => {
    console.log(item);
    
})

function printMe(item){
    console.log(item);
}

pro.forEach(printMe) // passiing reference not executing printMe()

pro.forEach( (item , index , arr) => {
    console.log((item , index , arr));
})

const myCoding = [
    {
        languageName : "js",
        languageFileName : "jjss"
    },
    {
        languageName : "java",
        languageFileName : "jaavaa"
    },
    {
        languageName : "python",
        languageFileName : "py"
    },
]

myCoding.forEach( (i) => {
    console.log(i.languageName);
    
})