//import the module into the file
var mathLib = require('./myMath');

function inti(){
    console.log("Intro");

    var res =  mathLib.sum(21,21)
    console.log("Result: " + res)

    var smaller = mathLib.smaller(14342342,234132413)
    console.log("Result: " + smaller)

    var greatest = mathLib.greater(4,6,8)
    console.log("Greatest: " + greatest)

    var mult = mathLib.multiply(38,3)
    console.log("Result: " + mult)

    var div = mathLib.divide(10,0)
    console.log("Result: " + div);

    var even = mathLib.isEven(98)
    console.log("Result: " + even)

    var odd = mathLib.isOdd(94)
    console.log("Result: " + odd)
}

inti();