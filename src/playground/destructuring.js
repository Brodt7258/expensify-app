//Object Destructuring

// const person = {
//   name: 'Andrew',
//   age: 26,
//   location: {
//     city: 'WeHa',
//     temp: 34
//   }
// };

// const { name: firstName = 'Anonymous', age } = person;
// console.log(`${firstName} is ${age}.`);

// const {city, temp: temperature } = person.location;
// if (city && temperature) {
//   console.log(`It is ${temperature} in ${city}`);
// }

// const book = {
//   title: 'White Luck',
//   author: 'Bakker',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;
// console.log(publisherName);

//Array Destructuring

// const address = ['214 Hillcrest Ave', 'New Britain', 'CT', '06053'];
// const [, city, state] = address;
// console.log(`You are in ${city}, ${state}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [product, , medPrice] = item;
console.log(`A medium ${product} costs ${medPrice}`);