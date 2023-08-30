//Custom error object
/*
throw {
    name: "CustomErrorName",
    message: "CustomMessage"
};
*/
let x = 10;

try {
    if (x > 9) {
        throw {
            name: "ToHigh",
            message: "The input is too high"
        };
    }
} catch (error) {
    console.log(error.message);
}

