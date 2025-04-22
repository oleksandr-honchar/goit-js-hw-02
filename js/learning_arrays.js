// const planets = ["Earth", "Mars", "Venus"];
// console.log(planets[0]); // 'Earth'
// console.log(planets[1]); // 'Mars'
// console.log(planets[2]); // 'Venus'

// planets[0] = "Mercury";
// console.log(planets[0]); // 'Mercury'
// console.log(planets); // ['Mercury', 'Mars', 'Venus']

// planets[3] = "Jupiter";
// console.log(planets); // ['Mercury', 'Mars', 'Venus', 'Jupiter']

// console.log(planets.length); // 4

// const planets = ["Earth", "Mars", "Venus"];
// const firstElement = planets[0];
// console.log(firstElement); // 'Earth'

// const lastElement = planets[planets.length - 1];
// console.log(lastElement); // 'Venus'

// planets[planets.length] = "Jupiter";
// console.log(planets); // ['Earth', 'Mars', 'Venus', 'Jupiter']

// planets[planets.length] = "Saturn";
// console.log(planets);
// // ['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn']

// const planets = ["Earth", "Mars", "Venus"];
// console.log(planets[3]); // undefined
// console.log(planets[999]); // undefined

// const planets = ["Earth", "Mars", "Venus"];

// if (planets.length >= 3) {
//   console.log("3 or more elements");
// } else {
//   console.log("3 or less elements");
// }
// // 3 or more elements

// const order = ["apple", "peach", "pear", "banana"];

// function getOrderQuantity(order) {
//   return order.length;
// }

// console.log(getOrderQuantity(order)); // 👉 **4**

// const planets = ["Earth", "Mars", "Venus"];
// console.log(planets[planets.length - 1]); // "Venus"

// const array = ["apple", "peach", "pear", "banana"];

// function getLastElementMeta(array) {
//   return [array.length - 1, array[array.length - 1]];
// }

// console.log(getLastElementMeta(array)); // [3, 'banana']

// const a = ["Mango", "Poly"];
// const b = a;
// console.log(a); // ["Mango", "Poly"]
// console.log(b); // ["Mango", "Poly"]

// a[1] = "Jacob";
// console.log(a); // ["Mango", "Jacob"]
// console.log(b); // ["Mango", "Jacob"]

// b[0] = "Ajax";
// console.log(a); // ["Ajax", "Jacob"]
// console.log(b); // ["Ajax", "Jacob"]

// const arr1 = [1, 2, 3];
// const arr2 = [1, 2, 3];

// console.log(arr1 === arr2); // false
// console.log([] === []); // false

// const array = [1, true, "Poly"];
// console.log(String(array)); // "1,true,Poly"
// console.log(array + "5"); // "1,true,Poly5"

// const emptyArray = [];
// const nonEmptyArray = [1, 2, 3];

// console.log(Boolean(emptyArray)); // true
// console.log(Boolean(nonEmptyArray)); // true

// if (emptyArray) {
//   console.log("if is in progress");
// } else {
//   console.log("else is not performed");
// }

// if (nonEmptyArray) {
//   console.log("if is in progress");
// } else {
//   console.log("else is not performed");
// }

// const array = [false];
// const result = array ? "A" : "B";
// console.log(result); // "A"

// const words = ["JavaScript", "is", "amazing"];
// console.log(words.join("")); // 'JavaScriptisamazing'
// console.log(words.join(" ")); // 'JavaScript is amazing'
// console.log(words.join("-")); // 'JavaScript-is-amazing'

// function transformString(string) {
//   const words = string.split("_");
//   return words.join("-");
// }

// console.log(transformString("user_age")); // "user-age"
// console.log(transformString("price_per_droid")); // "price-per-droid"

// function getLength(array) {
//   const string = array.join("");
//   return string.length;
// }
// console.log(getLength(["Mango", "Poly"]));
// console.log(getLength(["Mango", "Poly", "Ajax"]));
// console.log(getLength([]));

// const pricePerWord = 10;
// const message = "JavaScript is amazing";

// function calculateEngravingPrice(message, pricePerWord) {
//   const words = message.split(" ");
//   return words.length * pricePerWord;
// }

// console.log(calculateEngravingPrice(message, pricePerWord)); //

// const fruits = ["apple", "plum", "pear", "orange", "banana"];

// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, fruits.length - 1);
// const lastThreeEls = fruits.slice(-3);

// console.log(firstTwoEls); // ["apple", "plum"]
// console.log(nonExtremeEls); // ["plum", "pear", "orange", "banana"]
// console.log(lastThreeEls); // ["pear", "orange", "banana"]

// function getSlice(array, value) {
//   return array.slice(0, array.indexOf(value) + 1);
// }

// console.log(getSlice(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"], "Poly"));

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   for (let i = min; i <= max; i++) {
//     numbers.push(i);
//   }
//   return numbers;
// }

// console.log(createArrayOfNumbers(1, 3)); // [1, 2, 3]

// function calculateTotalPrice(order) {
//   let total = 0;
//   for (let i = 0; i < order.length; i++) {
//     total += order[i];
//   }
//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4])); // 138

// function getEvenNumbers(start, end) {
//   const evens = [];
//   for (let i = start; i <= end; i++) {
//     if (i % 2 === 0) {
//       evens.push(i);
//     }
//   }
//   return evens;
// }

// console.log(getEvenNumbers(2, 5)); // [2, 4]

// const storage = ["apple", "plum", "pear"];
// const item = "plum";

// function checkStorage(storage, item) {
//   if (storage.includes(item.toLowerCase())) {
//     return `${item} is available to order!`;
//   } else {
//     return `Sorry! We are out of stock!`;
//   }
// }

// console.log(checkStorage(["apple", "plum", "pear"], "plum")); //

// function getCommonElements(array1, array2) {
//   const commonElements = [];
//   for (let i = 0; i < array1.length; i++) {
//     if (array2.includes(array1[i])) {
//       commonElements.push(array1[i]);
//     }
//   }
//   return commonElements;
// }

// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19])); // [1, 2]

// const planets = ["Earth", "Mars", "Venus"];

// for (const planet of planets) {
//   console.log(planet);
// }

// function calculateTotalPrice(order) {
//   let totalPrice = 0;
//   for (const item of order) {
//     totalPrice += item;
//   }
//   return totalPrice;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4])); // 138

// function sum(a, b) {
//   console.log(arguments);
//   return a + b;
// }

// sum(2, 5);

// function multiply() {
//   let total = 1;

//   for (const arg of arguments) {
//     total *= arg;
//   }

//   return total;
// }

// console.log(multiply(1, 2, 3)); //  6
// console.log(multiply(1, 2, 3, 4)); //  24
// console.log(multiply(1, 2, 3, 4, 5)); //  120

// function foo() {
//   // У змінній args буде повноцінний масив з усіх аргументів
//   const args = Array.from(arguments);
//   return args.join("-");
// }

// console.log(foo(1, 2, 3)); // Поверне "1-2-3"

// function createReversedArray() {
//   const args = Array.from(arguments);
//   return args.toReversed();
// }

// console.log(createReversedArray(1, 2, 3)); // [3, 2, 1]
// console.log(createReversedArray(1, 2, 3, 4, 5)); // [5, 4, 3, 2, 1]
// console.log(createReversedArray(1, 2, 3, 4, 5, 6)); // [6, 5, 4, 3, 2, 1]

// function greet(username = "Guest") {
//   console.log(`Hello, ${username}!`);
// }

// greet("Jacob"); // "Hello, Jacob!"
// greet(); // "Hello, Guest!"

// function count(from, to, step = 1) {
//   console.log(`from: ${from}, to: ${to}, step: ${step}`);

//   for (let i = from; i <= to; i += step) {
//     // ...
//   }
// }

// count(1, 15, 4); // "from: 1, to: 15, step: 4"
// count(1, 15); // "from: 1, to: 15, step: 1"

// function calculateTax(amount, taxRate = 0.2) {
//   return amount * taxRate;
// }

// console.log(calculateTax(100)); //
// console.log(calculateTax(100, 0.3)); //
// console.log(calculateTax(100, 0.35)); //
// console.log(calculateTax(100, 0.4)); //
// console.log(calculateTax(100, 0.45)); //
// console.log(calculateTax(100, 0.5)); //
// console.log(calculateTax(100, 0.55)); //
// console.log(calculateTax(100, 0.6)); //
// console.log(calculateTax(100, 0.65)); //
// console.log(calculateTax(100, 0.7)); //
// console.log(calculateTax(100, 0.75)); //
// console.log(calculateTax(100, 0.8)); //
// console.log(calculateTax(100, 0.85)); //
// console.log(calculateTax(100, 0.9)); //

// function multiply(x, y, z) {
//   console.log(x * y * z);
// }

// multiply(1, 2, 3, 4); //
// multiply(1, 2); //

// //

// const multiply = function (x, y, z) {
//   console.log(x * y * z);
// };

// multiply(1, 2, 3, 4); //
// multiply(1, 2); //

// //

// const globalValue = 10;

// console.log(globalValue); // 10

// function foo() {
//   console.log(globalValue); // 10
// }

// for (let i = 0; i < 5; i += 1) {
//   console.log(globalValue); // 10

//   if (i === 2) {
//     console.log(globalValue); // 10
//   }
// // }
// function foo() {
//   const a = 20;
//   console.log(a); // 20

//   for (let i = 0; i < 5; i += 1) {
//     console.log(a); // 20

//     if (i === 2) {
//       console.log(a); // 20
//     }
//   }
// }

// // ❌ Помилка! Змінна a не доступна в цій області видимості
// console.log(a);

// for (let i = 0; i < 3; i += 1) {
//   // ❌ Помилка! Змінна a не доступна в цій області видимості
//   console.log(a);
// }

// for (let i = 0; i < 5; i += 1) {
//   const a = 20;
//   console.log(a); // 20

//   if (i === 2) {
//     const b = 30;
//     console.log(a); // 20
//     console.log(b); // 30
//   }

//   if (i === 3) {
//     console.log(a); // 20

//     // ❌ Помилка! Змінна b не доступна в цій області видимості
//     console.log(b);
//   }
// }

// function fnA() {
//   console.log("Log inside fnA function before calling fnB");
//   fnB();
//   console.log("Log inside fnA function after fnB call");
// }

// function fnB() {
//   console.log("Log inside fnB function");
// }

// console.log("Log before calling fnA");
// fnA();
// console.log("Log after calling fnA");

// // "Log before calling fnA"
// // "Log inside fnA function before calling fnB"
// // "Log inside fnB function"
// // "Log inside fnA function after fnB call"
// // "Log after calling fnA"

// function bar() {
//   console.log("bar");
// }

// function baz() {
//   console.log("baz");
// }

// function foo() {
//   console.log("foo");
//   bar();
//   baz();
// }

// foo();

// function fillArray(min, max) {
//   let arr = [];
//   for (let i = min; i <= max; i += 2) {
//     return arr.push(i);
//   }
// }

// console.log(fillArray(2, 10));
// const apartment = {
//   ingUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   raring: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// console.log(apartment);

// //

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// const bookTitle = book.title;
// console.log(bookTitle); // "The Last Kingdom"

// const bookGenres = book.genres;
// console.log(bookGenres); // ["historical prose", "adventure"]

// const bookPrice = book.price;
// console.log(bookPrice); // undefined

// const bookRating = book.rating;
// console.log(bookRating); // 8.38

// const bookIsPublic = book.isPublic;
// console.log(bookIsPublic); // true

// const bookAuthor = book.author;
// console.log(bookAuthor); // "Bernard Cornwell"

// // const user = {
// //   name: "Jacques Gluke",
// //   tag: "jgluke",
// //   location: {
// //     country: "Jamaica",
// //     city: "Ocho Rios",
// //   },
// //   hobbies: ["swimming", "music", "sci-fi"],
// // };

// // const loc = user.location;
// // console.log(loc); // {country: "Jamaica", city: "Ocho Rios"}

// // const country = user.location.country;
// // console.log(country); // "Jamaica"

// // const city = user.location.city;
// // console.log(city); // "Ocho Rios"

// // const hobbies = user.hobbies;
// // console.log(hobbies); // ["swimming", "music", "sci-fi"]

// // const firstHobby = user.hobbies[0];
// // console.log(firstHobby); // "swimming"

// // const secondHobby = user.hobbies[1];
// // console.log(secondHobby); // "music"

// // // const lastHobby = user.hobbies[user.hobbies.length - 1];
// // // console.log(lastHobby); //

// // const book = {
// //   title: "The Last Kingdom",
// //   author: "Bernard Cornwell",
// //   genres: ["historical prose", "adventure"],
// //   isPublic: true,
// //   rating: 8.38,
// // };

// // console.log(book.title); // "The Last Kingdom"
// // console.log(book["title"]); // "The Last Kingdom"

// // console.log(book.genres); // ["historical prose", "adventure"]
// // console.log(book["genres"]); // ["historical prose", "adventure"]

// // const propKey = "author";
// // console.log(book.propKey); // undefined
// // console.log(book[propKey]); // "Bernard Cornwell"

// // console.log(book.rating); // 8.38
// // console.log(book["rating"]); // 8.38

// // console.log(book.isPublic); // true
// // console.log(book["isPublic"]); // true

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// book.rating = 9;
// book.isPublic = false;
// book.genres.push("drama");

// console.log(book.rating); // 9
// console.log(book.isPublic); // false
// console.log(book.genres); // ["historical prose", "adventure", "drama"]

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];

// for (const key in apartment) {
//   keys.push(key);
//   values.push(apartment[key]);
// }

// console.log(keys);
// console.log(values);

// //

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// // };

// // book.pageCount = 836;
// // book.originalLanguage = "en";
// // book.translations = ["ua", "pl"];
// // book.price = {
// //   hardcover: 39,
// //   softcover: 29,
// // };

// // console.log(book.pageCount); // 836
// // console.log(book.originalLanguage); // "en"
// // console.log(book.translations); // ["ua", "pl"]
// // console.log(book.price); // {hardcover: 39, softcover: 29}
// // console.log(book.price.softcover); // 29

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {
//   country: "Jamaica",
//   city: "Kingston",
// };

// console.log(apartment.area); // 60
// console.log(apartment.rooms); // 3
// console.log(apartment.location); // {country: "Jamaica", city: "Kingston"}
// console.log(apartment.owner); //
// console.log(apartment.owner.name); // "Henry Sibola"
// console.log(apartment.owner.phone); // "982-126-1588"
// console.log(apartment.owner.email); // "henry.carter@aptmail.com"

// //

// const name = "Henry Sibola";
// const age = 25;

// const user = {
//   name,
//   age,
// };

// console.log(user.name); // "Henry Sibola"
// console.log(user.age); // 25

// // //

// const propName = "name";
// const user = {
//   age: 25,
//   // ключ цієї властивості буде взято зі значення змінної propName
//   [propName]: "Henry Sibola",
// };

// console.log(user.name); // "Henry Sibola"
// console.log(user.age); // 25

// //

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
//   console.log(key); // Ключ
//   console.log(book[key]); // Значення властивості з таким ключем
// }

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };

// const keys = [];
// const values = [];

// for (const key in apartment) {
//   keys.push(key);
//   values.push(apartment[key]);
// }

// console.log(keys);
// // console.log(values);

// const book = {
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// const keys = Object.keys(book);

// for (const key of keys) {
//   console.log(key); // Ключ
//   console.log(book[key]); // Значення властивості
// }

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = Object.values(apartment);
// const keys = Object.keys(apartment);

// console.log(keys);
// console.log(values);

// function countProps(object) {
//   let propCount = 0;
//   const keys = Object.keys(object);

//   for (const key of keys) {
//     propCount += 1;
//   }

//   return propCount;
// }

// console.log(countProps({})); // 0
// console.log(countProps({ name: "Mango", age: 2 })); // 2

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   const keys = Object.keys(salaries);

//   for (const key of keys) {
//     totalSalary += salaries[key];
//   }

//   return totalSalary;
// }

// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 })); //
// console.log(countTotalSalary({ kiwi: 200, poly: 150, ajax: 130 })); //
// console.log(countTotalSalary({})); //

// //

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
// ];

// for (const book of books) {
//   console.log(book); // Об'єкт книги
//   console.log(book.title); // Назва
//   console.log(book.author); // Автор
//   console.log(book.rating); // Рейтинг
// }

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];

// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }

// console.log(hexColors); //
// console.log(rgbColors); //

// function getProductPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

//   const propKey = productName;

//   for (const product of products) {
//     if (product.name === propKey) {
//       return product.price;
//     }
//   }
//   return null;
// }

// console.log(getProductPrice("Radar")); //
// console.log(getProductPrice("Scanner")); //
// console.log(getProductPrice("Droid")); //
// console.log(getProductPrice("Grip")); //
// console.log(getProductPrice("TV")); //

// function getAllPropValues(propName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

//   const values = [];

//   for (const product of products) {
//     if (propName in product) {
//       values.push(product[propName]);
//     }
//   }

//   return values;
// }

// console.log(getAllPropValues("name")); // ["Radar", "Scanner", "Droid", "Grip"];
// console.log(getAllPropValues("quantity")); // [4, 3, 7, 9];
// console.log(getAllPropValues("price"));
// console.log(getAllPropValues("category")); //

// function calculateTotalPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

//   let totalValue = 0;

//   for (const product of products) {
//     if (product.name === productName) {
//       totalValue = product.price * product.quantity;
//       return totalValue;
//     }
//   }
//   return `Product ${productName} not found!`;
// }

// console.log(calculateTotalPrice("Radar")); //
// console.log(calculateTotalPrice("Scanner")); //
// console.log(calculateTotalPrice("Droid")); //
// console.log(calculateTotalPrice("Grip")); //
// console.log(calculateTotalPrice("TV")); //
// console.log(calculateTotalPrice("Grip")); //

// const obj = {
//   method(value) {
//     console.log(`I'm a method with ${value}!`);
//   },
// };

// obj.method(5); // "I'm a method with 5!"
// obj.method(10); // "I'm a method with 10!"

// ✅ Логічно й синтаксично згруповані сутності
// const atTheOldToad = {
//   potions: [],
//   // Це метод об'єкта
//   getPotions() {
//     return "List of all available potions";
//   },
//   // Це метод об'єкта
//   addPotion(potionName) {
//     return `Adding ${potionName}`;
//   },
// };

// const bookShelf = {
//   books: ["The Last Kingdom", "The Mist"],
//   getBooks() {
//     console.log(this);
//   },
// };

// bookShelf.getBooks(); // {books: ["The Last Kingdom", "The Mist"], getBooks: f}

// const bookShelf = {
//   books: ["The Last Kingdom", "The Mist"],
//   getBooks() {
//     return this.books;
//   },
// };

// console.log(bookShelf.getBooks()); // ["The Last Kingdom", "The Mist"]

// const atTheOldToad = {
//   potions: ["Speed potion", "Stone skin"],
//   getPotions() {
//     return this.potions;
//   },
// };

// console.log(atTheOldToad.getPotions()); // ["Speed potion", "Stone skin"]

// const bookShelf = {
//   books: ["The Last Kingdom"],
//   getBooks() {
//     return this.books;
//   },
//   addBook(bookName) {
//     this.books.push(bookName);
//   },
// };

// console.log(bookShelf.getBooks()); // ["The Last Kingdom"]
// bookShelf.addBook("The Mist");
// bookShelf.addBook("Dream Guardian");
// console.log(bookShelf.getBooks()); // ["The Last Kingdom", "The Mist", "Dream Guardian"]

// const atTheOldToad = {
//   potions: ["Speed potion", "Stone skin"],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(potionName) {
//     this.potions.push(potionName);
//   },
// };

// const bookShelf = {
//   books: [
//     { title: "The Last Kingdom", rating: 8 },
//     { title: "The Mist", rating: 6 },
//   ],
//   getBooks() {
//     return this.books;
//   },
//   addBook(newBook) {
//     this.books.push(newBook);
//   },
// };

// bookShelf.addBook({ title: "Dream Guardian", rating: 9 });
// console.log(bookShelf.getBooks()); //

// const bookShelf = {
//   books: [
//     { title: "The Last Kingdom", rating: 8 },
//     { title: "The Mist", rating: 6 },
//   ],
//   getAvarageRating() {
//     let totalRating = 0;

//     for (const book of this.books) {
//       totalRating += book.rating;
//     }

//     return totalRating / this.books.length;
//   },
// };

// bookShelf.getAvarageRating(); // 7

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     for (let i = 0; i < this.potions.length; i += 1) {
//       if (this.potions[i] === potionName) {
//         this.potions.splice(i, 1);
//       }
//     }
//   },
//   updatePotionName(oldName, newName) {
//     for (let i = 0; i < this.potions.length; i += 1) {
//       if (this.potions[i] === oldName) {
//         this.potions[i] = newName;
//       }
//     }
//   },
// };

// atTheOldToad.addPotion("Speed potion");
// atTheOldToad.addPotion("Dragon breath");
// atTheOldToad.addPotion("Stone skin");
// atTheOldToad.addPotion("Speed potion");

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Stone skin", price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     this.potions.push(newPotion);
//   },
//   getTotalPrice() {
//     let totalValue = 0;
//     for (const potion of this.potions) {
//       totalValue += potion.price;
//     }
//     return totalValue;
//   },
// };

// atTheOldToad.addPotion({ name: "Dragon breath", price: 780 });
// atTheOldToad.addPotion({ name: "Stone skin", price: 520 });
// console.log(atTheOldToad.getTotalPrice()); //

// const bookShelf = {
//   books: [
//     { title: "The Last Kingdom", rating: 8 },
//     { title: "The Mist", rating: 6 },
//   ],
//   changeRating(bookName, newRating) {
//     for (const book of this.books) {
//       if (book.title === bookName) {
//         book.rating = newRating;
//       }
//     }
//   },
// };

// bookShelf.changeRating("The Mist", 9);
// bookShelf.changeRating("The Last Kingdom", 4);
// console.log(bookShelf.books);

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Stone skin", price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   updatePotionName(oldName, newName) {
//     for (const potion of this.potions) {
//       if (potion.name === oldName) {
//         potion.name = newName;
//       }
//     }
//   },
// };

// atTheOldToad.updatePotionName("Speed potion", "Invulnerability potion");
// atTheOldToad.updatePotionName("Dragon breath", "Polymorth");
// console.log(atTheOldToad.getPotions());

// //

// function multiply() {
//   console.log(arguments);
// }

// multiply(1, 2); // псевдомасив [1, 2]
// multiply(1, 2, 3); // псевдомасив [1, 2, 3]
// multiply(1, 2, 3, 4); // псевдомасив [1, 2, 3, 4]

// function multiply(...args) {
//   console.log(args);
// }

// multiply(1, 2); // [1, 2]
// multiply(1, 2, 3); // [1, 2, 3]
// multiply(1, 2, 3, 4); // [1, 2, 3, 4]

// function add(...args) {
//   let total = 0;
//   for (const arg of args) {
//     total += arg;
//   }
//   return total;
// }

// console.log(add(15, 27)); //

// function addOverNum(value, ...args) {
//   totalSum = 0;
//   for (const arg of args) {
//     if (arg > value) {
//       totalSum += arg;
//     }
//   }
//   return totalSum;
// }

// console.log(addOverNum(50, 15, 27)); //
// console.log(addOverNum(10, 12, 4, 11, 48, 10)); //

// //

// const temps = [14, -4, 25, 8, 11];

// // console.log(...temps); // 14 -4 25 8 11  набір окремих чисел

// // ✅ Передамо колекцію елементів у якості окремих аргументів
// console.log(Math.max(...temps)); // 25

// function getExtremeScores(scores) {
//   const best = Math.max(...scores);
//   const worst = Math.min(...scores);

//   return {
//     best,
//     worst,
//   };
// }

// console.log(getExtremeScores([14, -4, 25, 8, 11])); //
// console.log(getExtremeScores([19, 7, 4, 17, 81, 24]));
// //

// // const temps = [14, -4, 25, 8, 11];

// // // Це точна, але незалежна копія масиву temps
// // const copyOfTemps = [...temps];
// // console.log(copyOfTemps); // [14, -4, 25, 8, 11]

// function foo(storage, item) {
//   if (storage.includes(item.toLowerCase())) {
//     return `${item} is available to order!`;
//   } else {
//     return `Sorry! We are out of stock!`;
//   }
// }

// console.log(foo(["apple", "plum", "pear"], "PLUm"));

const password = "true";
const myKey = password;

const obj = {
  [myKey]: false,
};

console.log(obj);
