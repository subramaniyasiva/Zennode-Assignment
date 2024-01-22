const product_A = 20;
const product_B = 40;
const product_C = 50;
const pro_array = ["product_A", "product_B", "product_C"];
var quantity_A = parseInt(prompt("Enter the quantity of product_A "));
var quantity_B = parseInt(prompt("Enter the quantity of product_B "));
var quantity_C = parseInt(prompt("Enter the quantity of product_C "));
const wrap_fee = 1;
const q_l = [quantity_A, quantity_B, quantity_C];
const final = [];
const total_quantity = quantity_A + quantity_B + quantity_C;
var total_price_A = product_A * quantity_A;
var total_price_B = product_B * quantity_B;
var total_price_C = product_C * quantity_C;

let total = 0;
price_lt = [total_price_A, total_price_B, total_price_C];
for (let i of price_lt) {
    total += i;
}
if (total_quantity > 20) {
    var total2 = total - (total) * 10 / 100;
    final.push([total2, "bulk_10_discount"]);
}
if (total > 200) {
    total1 = total - 10;
    final.push([total1, "flat_10_discount"]);
}
if (total_quantity > 30 && (quantity_A > 15 || quantity_B > 15 || quantity_C > 15)) {
    let largestQuantity = Math.max(quantity_A, quantity_B, quantity_C);
    let largestQuantityIndex = q_l.indexOf(largestQuantity);

    if (quantity_A > 15) {
        price_lt[0] -= price_lt[0] * 0.5;
    }
    if (quantity_B > 15) {
        price_lt[1] -= price_lt[1] * 0.5;
    }
    if (quantity_C > 15) {
        price_lt[2] -= price_lt[2] * 0.5;
    }

    let total3 = 0;
    for (let j of price_lt) {
        total3 += j;
    }

    final.push([total3, 'tiered_50_discount']);
}

    

const prices_A = [total_price_A, total_price_B, total_price_C];
const quantities = [quantity_A, quantity_B, quantity_C];

const bulk5 = prices_A.map((price, index) => quantities[index] > 10 ? price * 0.95 : price);

let total4 = 0;

for (let l of bulk5) {
    total4 += l;
}

final.push([total4, "bulk_5_discount"]);
final.sort();

const finDisPrice = final[0];
const finalPrice = finDisPrice[0];
let shippingFee = 0;
const shippingPack = total_quantity / 10;

if (shippingPack === parseInt(shippingPack)) {
    shippingFee = shippingPack * 5;
} else {
    shippingFee = (parseInt(shippingPack) + 1) * 5;
}

const resultLines = [];

for (let i = 0; i < pro_array.length; i++) {
    const product = pro_array[i];
    const quantity = q_l[i];
    const price = price_lt[i];
    resultLines.push(`${product}, ${quantity}, ${price}`);
}

const result = resultLines.join('\n');

var wrapFee = 1;
var totalWrapFee = 0;

for (let i = 0; i < pro_array.length; i++) {
  const product = pro_array[i];
  const quantity = q_l[i];
  const wrap = prompt(`Do you need to wrap ${product}? (yes/no):`).toLowerCase();

  if (wrap === "yes") {
    totalWrapFee += quantity * wrapFee;
  } else if (wrap === "no") {
    // Do nothing
  } else {
    totalWrapFee += quantity * wrapFee; // Use default wrap fee for missing input
 
  }
  
}

console.log(result);
console.log("sub total $", total);
console.log(`discount applied is ${finDisPrice[1]}, the discount amount is ${total - finDisPrice[0]}, discounted Amt of the Purchase ${finDisPrice[0]}`);
console.log(`the shipping fee for the product is $ ${shippingFee}`);
console.log(`the gift wrapping fee is $ ${totalWrapFee}`);
const totalBill = finalPrice + shippingFee + totalWrapFee;
console.log(`the total bill after discount is $ ${totalBill}`);
