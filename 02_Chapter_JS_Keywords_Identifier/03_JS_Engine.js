let a =50;
console.log(a);


//Hot Code
 
for (let a = 0; a < 1000; a++) {
    console.log(a);
    badCodeFn();
}

function badCodeFn() {
    console.log("Hello");
}