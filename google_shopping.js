var data = require("./products.json")

// Write your solutions below

// console.log(data["items"]); // this is the original code on the assignment

// #1 Count the total items in the JSON file
var items = data["items"];
var totalItems = 0;

for (var i = 0; i < items.length; i++) {
	if (items[i].kind == "shopping#product") {
		totalItems++
	}
}
console.log("#1: total items = " + totalItems);


// #2 Number of items with backorder status
var invcounter = 0;
for (var i = 0; i < items.length; i++) 
// 	for (var a = 0, a < items[i]["product"]["inventories"].length; a++) {
// 		if((items[i]["product"]["inventories"][a]["availability"]) === "backorder")
// 	}
// }
	{
	if (items[i].product.inventories[0].availability === "backorder") {
		invcounter++
	}
}
console.log("#2: back ordered items = " + invcounter);

// #3 Number of items with multiple image links
var multImages = 0;
for (var i = 0; i < items.length; i++) {
	if (items[i]["product"].images.length > 1) {
		multImages++
	}
}	console.log("#3: items with multiple images = " + multImages);

// 4. Number of items of Canon brand
var Canon = 0;
for (var i = 0; i < items.length; i++) {
	if (items[i]["product"].brand.includes("Canon")) {
		Canon++
} }
console.log("#4: Number of Canons = " + Canon)

// 5. Number of Canon items from ebay seller
var ebayCanon = 0
for (var i = 0; i < items.length; i++) {
	if (items[i]["product"].author.name.includes("ebay") && items[i]["product"].brand.includes("Canon") {
		ebayCanon++
} }
console.log("#5: Number of ebayers selling Canons = " + ebayCanon)

// 6. List all products with brand and price
console.log(items[i]["product"].brand + items[i]["product"].inventories.price + items[i]["product"].images.link)




