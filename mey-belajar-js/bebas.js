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

//promise untuk simulasi login user
function loginUser(username, password) {
  return new Promise((resolve, reject) => {
    let users = { admin: "admin123", user: "password" };
    setTimeout(() => {
      if (users[username] && users[username] === password) {
        resolve(`login sukses, selamat datang ${username}`);
      } else {
        reject("login failed");
      }
    }, 1000);
  });
}

loginUser("admin", "1234")
  .then((result) => console.log(result))
  .catch((error) => console.log("error", error));

const numbers = [3, 6, 9, 12, 15, 18];

// const result = numbers.map((number) => number + 3).filter((number) => number % 4 === 0);

console.log(result);

const scores = [{ score: 10 }, { score: 20 }, { score: 30 }];

const result = scores.reduce((total, item) => total + item.score, 0);
// console.log(result);

const celsiusTemps = [0, 10, 20, 30];

const celciusToFahrenheit = celsiusTemps.map((celcius) => (celcius * 9) / 5 + 32);

console.log(celciusToFahrenheit);

const mixedData = [12, "hello", null, 34, undefined, "world", 0];
const dataNumber = mixedData.filter((item) => typeof item === "number");

console.log(dataNumber);

const employees = [
  { name: "Alice", department: "Engineering", salary: 70000 },
  { name: "Bob", department: "HR", salary: 50000 },
  { name: "Charlie", department: "Engineering", salary: 80000 },
  { name: "David", department: "Marketing", salary: 60000 },
  { name: "Eve", department: "Engineering", salary: 75000 },
];

// const result = employees.filter(employee => employee.department === "Engineering" )
// .map(employee => employee.salary)
// .reduce((acc, cur) => acc + cur,0)
// console.log(result)
