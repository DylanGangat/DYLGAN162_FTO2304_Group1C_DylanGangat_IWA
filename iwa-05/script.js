const FREE_WARNING = "Free shipping only applies to single customer orders";
const BANNED_WARNIN = "Unfortunately we do not ship to your country of residence";
const NONE_SELECTED = 0;

const country = "RSA";
let customers = 1;
let currency = null;
let shipping = null;

let shoes = 300 * 1;
let toys = 100 * 5;
let shirts = 150 * NONE_SELECTED;
let batteries = 35 * 2;
let pens = 5 * NONE_SELECTED;
let shippingItems = shoes + batteries + pens + shirts + toys;

if (country === "RSA") {
  currency = "R";
  shipping = 400;
} else if (country === "NAM") {
  currency = "$";
  shipping = 600;
} else {
  currency = "$";
  shipping = 800;
}

if ((country === "RSA" && shippingItems >= 1000) || (country === "NAM" && shippingItems >= 60)) {
  if (customers === 1) {
    shipping = 0;
  } else {
    console.log(FREE_WARNING);
  }
}

country === "NK" ? console.log(BANNED_WARNIN) : console.log("price", currency, shippingItems + shipping);
