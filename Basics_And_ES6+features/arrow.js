const user = {
    userName : "Hrithik",
    class : 11,

    welcomeMessage : function(){
        console.log(`${this.userName} , Welcome to code`);
        console.log(this);
        
    }
}

user.welcomeMessage();
user.userName = "yoo";
user.welcomeMessage();

console.log(this); // {}

function pani(){
    let userName = "hhh"
    console.log(this.userName); // undefined , because this cant be use in function except object
}

pani()

const cha = () => {
    let userName = "Hhh"
    console.log(this.userName);
    console.log(this);
}

// Arrow function :::
const addTwo = (n1 , n2) => n1 + n2   //( n1 + n2 ) also can be written  // implicit function

console.log(addTwo(3,4));

// for object
const add = (n1 , n2) => ({username : "Hrithik"}) // returning an object
console.log(add(2,4));