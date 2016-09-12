// Object creation
var company = new Object();
company.name = "Facebook";
company.ceo = new Object();
company.ceo.firstName = "Mark";
company.ceo.favColor = "blue";

console.log(company.name);
console.log("Company CEO name is: " + company.ceo.firstName);

console.log(company["name"]);
var stockPropName = "stock of company";
company[stockPropName] = 110;

console.log("Stock price is: " + 
  company[stockPropName]);

// Better way: object literal
var facebook = {
  name: "Facebook",
  ceo: {
    firstName: "Mark",
    favColor: "blue"
  },
  $stock: 120
};
var persona = {
	name: "Juan",
	age: 25,
	car: {
		color: "blue",
		year: 2000,
		brand: "Toyota"
	}
};
console.log(facebook);
console.log(persona);









