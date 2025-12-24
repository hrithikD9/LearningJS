const marvel_heroes = ["ironMan" , "thor" , "ca"]
const dc_heroes = ["superman" , "batman" , "flash"]

marvel_heroes.push(dc_heroes);
console.log(marvel_heroes); // [ 'ironMan', 'thor', 'ca', [ 'superman', 'batman', 'flash' ] ]

marvel_heroes.concat(dc_heroes);
console.log(marvel_heroes); // [ 'ironMan', 'thor', 'ca', [ 'superman', 'batman', 'flash' ] ]


const all_heroes = marvel_heroes.concat(dc_heroes);
console.log(all_heroes); // [ 'ironMan', 'thor', 'ca', 'superman', 'batman', 'flash' ]    


const again_heroes = [...marvel_heroes , ...dc_heroes];
console.log(again_heroes); // [ 'ironMan', 'thor', 'ca', 'superman', 'batman', 'flash' ]


const anotherArray = [1,2,3,["a","b","c",["a1","b2","c3"]]];
console.log(anotherArray.flat(Infinity)); // [  1,    2,    3, 'a',  'b',  'c','a1', 'b2', 'c3']

console.log(Array.isArray("Hrithik")); // false
console.log(Array.from("Hrithik")); // ['H', 'r', 'i','t', 'h', 'i','k']



let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3)); // [ 100, 200, 300 ]

