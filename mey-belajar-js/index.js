//buat sum of first N number
sum = 0;
for (let number = 1; number <= 10; number++) {
  sum = sum + number;
}
console.log(sum);

//buat bilangan genap dari 1-10 dengan if dan loop
for (let number = 1; number <= 10; number++) {
  if (number % 2 === 0) {
    console.log(number);
  }
}

//buat bilangan genap dari 10-1
for (let number = 10; (number <= 10) & (number >= 1); number--) {
  console.log(number);
}

//buat loop ketika ada spasi dalam kata
word = "Fadil Risdian Ansori";

for (let i = 0; i < word.length; i++) {
  if (word[i] === " ") {
    console.log(word[i]);
    word[i] = "";
  }
}

// buat arry isinya 5 peralan dapur
name = "Meilia Alvi Rahmi";
nameSplit = name.split(" ");
// console.log(nameSplit)

for (let i = 0; i < nameSplit.length; i++) {
  // consolzse.log(nameSplit[i])
}

for (let i = 10; i >= 1; i--) {
  console.log(i);
}

alatDapur = ["pisau", "kompor", "wajan", "sodet", "panci"];

for (let i = 0; i < alatDapur.length; i++) {
  console.log(alatDapur[i]);
}

//buat function luas trapesium
function luasTrapesium(a, b, t) {
  luas = 0.5 * (a + b) * t;
  return luas;
}
hasil = luasTrapesium(2, 4, 6);
console.log(hasil);

function luasSegitiga(a, t) {
  luas = 0.5 * a * t;
  return luas;
}
hasil = luasSegitiga(2, 3);
console.log(hasil);
