function calc() {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let add = num1 + num2;
    let sub = num1 - num2;
    let mul = num1 * num2;
    let div = num1 / num2;
    console.log(num1, " + ", num2, " = ", add);
    console.log(num1, " - ", num2, " = ", sub);
    console.log(num1, " x ", num2, " = ", mul);
    console.log(num1, " / ", num2, " = ", div);
}