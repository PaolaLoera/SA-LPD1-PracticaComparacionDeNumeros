let num1 = parseFloat(prompt("Ingrese el primer número:"));
let num2 = parseFloat(prompt("Ingrese el segundo número:"));
let num3 = parseFloat(prompt("Ingrese el tercer número:"));

console.log(`Sus numeros originales son: ${num1}, ${num2} y ${num3}.`);

let mayor, centro, menor;

if (num1 >= num2 && num2 >= num3) {
    mayor = num1;
    centro = num2
    menor = num3
} else if(num2 >= num1 && num1 >= num3) {
    mayor = num2
    centro = num1;
    menor = num3;
} else if (num3 >= num2 && num2 >= num1) {
    mayor = num3
    centro = num2;
    menor = num1;
}

console.log(`Este es el orden de mayor a menor: ${mayor}, ${centro}, ${menor}`);
console.log(`Este es el orden de menor a mayor: ${menor}, ${centro}, ${mayor}`);

if (num1 === num2 && num2 === num3) {
    console.log("Los números ingresados son iguales.");
} else {
    console.log("Los números ingresados no son iguales");
}