for (let i = 0; i <= 10; i++) {
  console.log(i);
}

for (let i = 10; i <= 20; i++) {
  console.log(i);
}

for (let i = -10; i <= 10; i++) {
  console.log(i);
}

for (let i = 10; i >= -10; i--) {
  console.log(i);
}

console.log(" / ********** EXERCISE 5. **********/");
const aString = "Hello";
for (let i = 0; i < aString.length; i++) {
  console.log(aString[i]);
}

const exercise6 = ["Cats", 23, "I want beer", "Actually, no!", 2021];
for (let i = 0; i < exercise6.length; i++) {
  console.log(exercise6[i]);
}

const exercise7 = ["Blub", 9, "Sekt", "reizen", "khoubz", "late"];
for (let i = 0; i < exercise7.length; i++) {
  if (i % 2 === 0) {
    console.log(exercise7[i + 1]);
  }
}

// //  8.
for (let i = 0; i < exercise7.length; i += 3) {
  console.log(exercise7[i + 2]);
}

// // 9.
const exercise9 = [
  "Cats",
  "Every",
  "I want beer",
  "Actually, no!",
  "Third",
  "Blub",
  9,
  "Item",
  "reizen",
];

for (let i = 0; i < exercise9.length; i++) {
  if (i % 3 === 0) {
    console.log(exercise9[i + 1]);
  }
}

// //  10.
const arrayObjects = [
  {
    object1: "Hello",
    counter: "Idk",
    age: 23,
  },
  { object2: 2, counter: 9 },
  { counter: "Number?" },
  { counter: 11 },
  {
    counter: "Only print me",
  },
  {
    object: 6,
    counter: "What is a counter",
  },
  {
    object: "Finally",
    counter: 7,
  },
];

for (let i = 0; i < arrayObjects.length; i++) {
  console.log(arrayObjects[i].counter);
}

//  11.
const randomNumber = 23;
for (let i = 0; i <= 100; i++) {
  if (i === randomNumber) {
    break;
  }
  console.log(i);
}
console.log("My number is", randomNumber, ", this is why it stopped");
