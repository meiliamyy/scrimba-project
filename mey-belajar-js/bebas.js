function luasSegitiga(a, t) {
  luas = 0.5 * a * t;
  return luas;
}

hasil = luasSegitiga(2, 3);
console.log(hasil);

for (let i = 0; i < 5; i++) {
  temp = "";
  for (let j = 1; j <= 5; j++) {
    temp += i + j + "\t";
  }
}

function power(base, exponent = 2) {
  hasil = 1;
  for (let i = 1; i <= exponent; i++) {
    hasil = hasil * base;
  }
  return hasil;
}

console.log(power(3, 4));

let person = {
  name: "mei",
  age: 22,
  hobby: "dance",
};

let { name, ...rest } = person;

console.log(name);
console.log(rest);
