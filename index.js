// In this code i mainly learn jwt token are produce and how they give us result


const jwt = require("jsonwebtoken");

const user=({
    Name:"srikant",
    account_number:12345678
});


const token = jwt.sign(user,"secret");
console.log(token);



const verify_token=jwt.verify(token,"secret");
console.log(verify_token);




// try and catch 
// this is used when you are not sure about the code that partially it can give you error we write this 
try {
    let a;
    console.log(a.length);
}catch(e){
    console.log("inside the catch");
}

console.log("hi ")