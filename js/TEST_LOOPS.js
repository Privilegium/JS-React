// //TEST_3------------------------------------------------------------------------

// function firstTask() {
//     for (let i = 5; i <= 10; i++) {
//         console.log(i);
//     }
//     return;
// }
// console.log(firstTask());

// //-------------------------------------------------------------------------------

// function secondTask() {
//     for (let i = 20; i > 9; i--) {
//         if (i === 13) {
//             break;
//         } else {
//         console.log(i);
//         }
//     }
// }
// console.log(secondTask());

// //-------------------------------------------------------------------------------

// function thirdTask() {
//     for (let i = 2; i < 11; i++) {
//         if (i % 2 == 0) {
//             console.log(i);
//         } else {
//             continue;
//         }
//     }
// }
// console.log(thirdTask());

// function thirdTask() {
//     for (let i = 2; i < 11; i += 2) {
//         console.log(i);
//     }
// }
// console.log(thirdTask());

// //-------------------------------------------------------------------------------

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

// function fourthTask() {
//     let i = 2;
//     while (i <= 16) {
//         if (i % 2 === 1) {
//         console.log(i);
//         i++;
//         } else {
//             i++;
//             continue;
//         }
//     }
// }
// console.log(fourthTask());

// //-------------------------------------------------------------------------------

// function fifthTask() {
//     const arrayOfNumbers = [];

//     for (let i = 5; i < 11; i++) {
//         arrayOfNumbers.push(i);
//     }

//     return arrayOfNumbers;
// }
// console.log(fifthTask());

// //TEST_4----------------------------------------------------------------------------------------

// function firstTask() {
//     const arr = [3, 5, 8, 16, 20, 23, 50];
//     const result = [];

//     for (let i = 0; i < arr.length; i++) {
//         result[i] = arr[i];
//     }

//     return result;
// }
// firstTask();

// //-------------------------------------------------------------------------------

// function secondTask() {
//     const data = [5, 10, "Shopping", 20, "Homework"];

//     for (let i = 0; i < data.length; i++) {
//         if (typeof data[i] === 'number') {
//             data[i] = data[i] * 2;
//         } else if (typeof data[i] === 'string') {
//             data[i] = data[i] + ' - done';
//         }
//     }
//     return data;
// }
// secondTask();

// //-------------------------------------------------------------------------------

// function thirdTask() {
//     const data = [5, 10, 'Shopping', 20, 'Homework'];
//     const result = [];

//     for (let i = 0, j = data.length - 1; i < data.length; i++, j--) {
//             result[j] = data[i];
        
//     }
    
//         return result;
// }
// thirdTask();

// //TEST_5----------------------------------------------------------------------------------------

// const lines = 5;
// let result = '';
// // Проверяется именно переменная result, формируйте строку в ней
// for (let i = 0; i <= lines; i++) {
//     for (let j = 0; j < lines - i; j++) {
//         result += ' ';
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += '*';
//     }
//     result += '\n';
// }

// console.log(result);