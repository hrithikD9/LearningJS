// IIFE - used for global scope polution handling

(function cha(){
    console.log(`Connection Established`);    
}) ();
// semicolon  is important 

// Array function invoked
(() => {
    console.log(`Connection Lost`);
}) ();

// passing up values
((name) => {
    console.log(`cant connect to ${name}`);
}) ('Instagram');