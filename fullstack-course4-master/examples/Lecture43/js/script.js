// ***** String concatination
/*var string = "Hello";
string += " World";
string = string + " World";
console.log(string + "!");*/



// ***** Equality 
var x = 4, y = 4;
if (x == y) {
  console.log("x=4 is equal to y=4");
}
var p = "4";
if (p == y) {
  console.log("p='4' is equal to y=4");
}





// ***** Strict equality
/*if (x === y) {
  console.log("Strict: x='4' is equal to y=4");
}
else {
  console
  .log("Strict: x='4' is NOT equal to y=4");
}*/




//***** Best practice for {} style
// Curly brace on the same or next line...
// Is it just a style?
function a() 
{
  return{ 
    name: "Yaakov 11"
  };
}

function b() {
  return { 
      name: ["Yaakov" "Javiules"]
  };
}

console.log(a());
console.log(b());


// For loop
/*var sum = 0;
for (var i = 0; i < 10; i++) {
  console.log(i);
  sum = sum + i;
}
console.log("sum of 0 through 9 is: " + sum);

*/

