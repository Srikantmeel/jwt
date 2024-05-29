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