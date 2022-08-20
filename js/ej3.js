var btnEj2 = document.getElementById("btnEj2");
function sum(x, y, z) {
  return x + y + z;
}
const nums = [1, 2, 3];
btnEj2.addEventListener('click',suma => {
    var suma1 = sum(...nums) , suma2 = sum.apply(null, nums);
    console.log(suma1);
    alert("sum(...nums) es igual a "+suma1);
// Resultado: 6

console.log(suma2);
     alert("sum.apply(null, nums) es igual a "+suma2);
// Resultado: 6
});
