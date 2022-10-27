// Boolean 11

// function getOdd(a, b) {
//   if (a % 2 === 0 && b % 2 === 0) {
//     console.log(false);
//   } else {
//     console.log(true);
//   }
// }

// let number = getOdd(2, 20);

// Boolean 12

// function wholeNumber(a) {
//   if (a > 9 && a < 100) return true;
//   else return false;
// }

// let whole = wholeNumber(20);
// console.log(whole);

// Boolean 13

// function threeDigit(a) {
//   if (a > 99 && a < 1000) return true;
//   else return false;
// }

// let digitNumber = threeDigit(500);
// console.log(digitNumber);

// Boolean 14

// function getSame(a) {
//   if (a < 10 && a > 99) {
//     console.log(false);
//   } else if (a % 10 == (a - (a % 10)) / 10) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }

// getSame(99);

// IF 1

// function getMax(a, b, c) {
//   if (a < b && a < c) {
//     console.log(a);
//   } else if (b < a && b < c) {
//     console.log(b);
//   } else {
//     console.log(c);
//   }
// }

// getMax(100, 70, 90);

// IF 3

// function getEqual(a, b) {
//   if (a === b) {
//     console.log(0);
//   } else {
//     console.log(a + b);
//   }
// }

// getEqual(100, 110);

// IF 4

// function getNumber(a) {
//   if (a > 0 && a % 2 === 0) {
//     console.log("Musbat juft son");
//   } else if (a > 0 && a % 2 !== 0) {
//     console.log("Musbat toq son");
//   } else if (a < 0 && a % 2 === 0) {
//     console.log("Manfiy juft son");
//   } else if (a < 0 && a % 2 !== 0) {
//     console.log("Manfiy toq son");
//   } else {
//     console.log("Son 0 ga teng");
//   }
// }

// getNumber(0);

// IF 5

// function getDigit(a) {
//   if (1 < a && a < 1000) {
//     if (9 < a && a < 100) {
//       if (a % 2 === 0) {
//         console.log("ikki honali juft son");
//       } else if (a % 2 !== 0) {
//         console.log("ikki honali toq son");
//       }
//     } else {
//       if (a % 2 === 0) {
//         console.log("Uch honali juft son");
//       } else if (a % 2 !== 0) {
//         console.log("Uch honali toq son");
//       }
//     }
//   } else {
//     console.log(a);
//   }
// }

// getDigit(10);

// If 6

// function copyBook(a, b) {
//   if (a < 20 && b) {
//     console.log(false);
//   } else if (a >= 20 && b) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }

// copyBook(20, true || false);

// if 7

// function getDigit(n) {
//   if (n > 0 && n < 100000) {
//     if (0 < n && n < 10) {
//       console.log("bir honali son");
//     } else if (9 < n && n < 100) {
//       console.log("ikki honali son");
//     } else if (99 < n && n < 1000) {
//       console.log("uch honali son");
//     } else if (999 < n && 10000 > n) {
//       console.log("tort honali son");
//     } else if (9999 < n && 100000 > n) {
//       console.log("besh honali son");
//     }
//   } else {
//     console.log(n);
//   }
// }

// getDigit(100000);
