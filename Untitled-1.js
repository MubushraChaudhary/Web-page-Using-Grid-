// -------------TASK-03------------------------------------------------------------------------------------------

// // var number=[10,9,8,7,6,5,4,3,2,1]
// // var factorial=number.reduce(function(accumulator,num)
// // {

// //     return accumulator*num

// // }, 1);
// // console.log(factorial)

// -------------TASK-04--------------------------------------------------------------------------------------------

// var number=[10,9,8,7,6,5,4,3,2,1]
// var even=number.filter(function(num)
// {

//     return  num % 2==0;

// });
// console.log(even)

// ----------------TASK-05--------------------------------------------------------------------------------------------
// const array = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

// array.forEach((num, index) => {
//   array[index] = num * 2;
// });

// console.log(array);

// -------------------------TASK-06-------------------------------------------------------------------------------------

// var numbers = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

// var indexThreeSquare = numbers.findIndex(function(num) {
//   return num ==3 ** 2;
// });

// var indexNineSquare = numbers.findIndex(function(num) {
//   return num == 9 ** 2;
// });

// console.log("Index of 3 ", indexThreeSquare);
// console.log("Index of 9 ", indexNineSquare);

// --------------TASK-07------------------------------------------------------------------------------------------------
// const numbers = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
// const allNumbersModZero = areAllNumbersModZero(numbers);
// function checkModZero(number) {
//   return number % 2 === 0;
// }

// function areAllNumbersModZero(numbers) {
//   return numbers.every(checkModZero);
// }

// console.log(allNumbersModZero)

// --------------TASK-08------------------------------------------------------------------------------------------------

// const number = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

// function isPrime(num) {
//   if (num < 2) {
//     return false;
//   }

//   for (const i = 2; i < num; i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }

//   return true;
// }

// const hasPrimeNumber = number.some(function(num) {
//   return isPrime(num);
// });

// console.log( hasPrimeNumber)

//--------------TASK-09------------------------------------------------------------------------------------------------

// const number = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

// const String = number.join(", ");

// console.log(String);

//--------------TASK-01------------------------------------------------------------------------------------------------


  let number = 10;
  const array = Array(10)
    .fill(0)
    .map(function () {
      return number--;
    });
  
  const factorial = array.reduce(function (accumulator, num) {
    return accumulator * num;
  }, 1);
  
  console.log(factorial)
  


// --------------TASK-08------------------------------------------------------------------------------------------------

// var numbers = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

// function isPrime(num) {
//   if (num < 2) {
//     return false;
//   }

//   for (var i = 2; i < num; i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }

//   return true;
// }

// var hasPrimeNumber = numbers.some(isPrime);

// console.log(hasPrimeNumber);
