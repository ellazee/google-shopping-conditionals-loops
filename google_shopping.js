var data = require("./products.json")

// Write your solutions below

// console.log(data["items"]); // this is the original code on the assignment

var items = data["items"];
var counter = 0;

for (var i = 0; i < items.length; i++) {
	if (items[i].kind == "shopping#product") {
		counter++
	}
}
console.log("#1: total items = " + counter);

//var product = items.["product"]; //['inventories'][i]['availability']
// var inventory = product["inventories"];
// var availability = inventory["availability"];


// for (var i =0; i < product.length; i++) {
// 	if(product[i].inventories == availability)
// }

// for (var product in items) {
// 	console.log(items.inventories) 
	
// }

// console.log(items[3]); //["inventories"]);
// console.log(products)
// for (var i = 0, items < items.length; items++)
var invcounter = 0;
for (var i = 0; i < items.length; i++) {
	if (items[i]["product"].inventories[1] === "backorder") {
		invcounter++
	}
}
console.log("#2: back ordered items = " + invcounter);

var multImages = 0;
for (var i = 0; i < items.length; i++) {
	if (items[i]["product"].images.length > 1) {
		multImages++
	}
}	console.log("#3: items with multiple images = " + multImages);

var Canon = 0;
for (var i = 0; i < items.length; i++) {
	if (items[i]["product"].brand == Canon) {
		Canon++
} }
console.log("#4: Number of Canons = " + Canon)

var ebayCanon = 0
for (var i = 0; i < items.length; i++) {
	if (items[i]["product"].author.name == "ebay" && items[i]["product"].brand == Canon) {
		ebayCanon++
} }
console.log("#5: Number of ebayers selling Canons = " + ebayCanon)


console.log(items[i]["product"].brand + items[i]["product"].inventories.price + items[i]["product"].images.link)

