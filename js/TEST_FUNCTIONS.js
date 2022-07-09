// 'use strict';

// //TEST_6------------------------------------------------------------------------

// // Место для первой задачи
// function sayHello(name) {
//     return `Hello ${name}`;
// }

// // Место для второй задачи
// function returnNeighboringNumbers(num) {
//     return [num - 1, num, num + 1];
// }
// returnNeighboringNumbers(5);

// // Место для третьей задачи
// function getMathResult(number, progression) {
//     if (typeof progression !== 'number' || progression <= 0) {
//         return number;
//     }
    
//     let result = '';

//     for (let i = 1; i <= progression; i++) {
//             if (i === progression) {
//                 result += `${number * i}`;
//             } else {
//                 result += `${number * i}---`;
//             }
//         }
//     return result;
//     }
// console.log(getMathResult(3, 3));

// // TEST_7------------------------------------------------------------------------
 
// // Место для первой задачи
// function calculateVolumeAndArea(oneside) {
//     if (typeof oneside !== 'number' || oneside < 0 || !Number.isInteger(oneside)) {
//         return 'При вычислении произошла ошибка';
//     }
    
//     const volume = oneside * oneside * oneside;
//     const area = 6 * (oneside * oneside);

//     return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
// }
// console.log(calculateVolumeAndArea(5));

// // Место для второй задачи
// function getCoupeNumber(sit) {
//     if (typeof sit !== 'number' || sit < 0 || !Number.isInteger(sit)) {
//         console.log('Ошибка. Проверьте правильность введенного номера места');
//     } else if (sit === 0 || sit > 36) {
//         console.log('Таких мест в вагоне не существует');
//     }

//     const coupeSits = {
//         1: [1, 2, 3, 4],
//         2: [5, 6, 7, 8],
//         3: [9, 10, 11, 12],
//         4: [13, 14, 15, 16],
//         5: [17, 18, 19, 20],
//         6: [21, 22, 23, 24],
//         7: [25, 26, 27, 28],
//         8: [29, 30, 31, 32],
//         9: [33, 34, 35, 36]
//     };
    
//     return checkSit(coupeSits, sit);
// }
// getCoupeNumber(22);

// function checkSit(obj, sit) {
//     for (let i = 1; i < 10; i++) {
//         for (let j = 0; j < 4; j++) {
//             if (obj[i][j] === sit) {
//                 console.log(i);
//             }
//         }
//     }
// }

// for (let i = 4; i <= 36; i = i + 4) {
//     if (seatNumber <= i) {
//         return Math.ceil(i / 4);
//     }
// }

// // TEST_8------------------------------------------------------------------------

// Место для первой задачи
// function getTimeFromMinutes(min) {
//     if (typeof min !== 'number' || min < 0 || !Number.isInteger(min)) {
//         return 'Ошибка, проверьте данные';
//     }

//     let i = 1;
//     let j = 60;

//     while (j <= 600) {
//         if (min === 0) {
//             return `Это 0 часов и 0 минут`
//         } else if (min - j < 0 && i === 1) {
//             return `Это 0 часов и ${j - min} минут`
//         } else if (min - j === 0 && i === 1) {
//             return `Это ${i} час и 0 минут`;
//         } else if (min - j === 0 && i > 1 && i <= 4) {
//             return `Это ${i} часа и 0 минут`;
//         } else if (min - j === 0 && i > 4) {
//             return `Это ${i} часов и 0 минут`;
//         } else if (min - j < 0 && i > 1 && i <= 4) {
//             return `Это ${i - 1} часа и ${j - min} минут`;
//         } else if (min - j < 0 && i > 4) {
//             return `Это ${i - 1} часов и ${j - min} минут`;
//         }
//         i++;
//         j += 60;
//     }
// }
// console.log(getTimeFromMinutes(270));
// Место для второй задачи
// function findMaxNumber(fir, sec, thi, fou) {
//     if (typeof fir !== 'number' || typeof sec !== 'number' || typeof thi !== 'number' || typeof fou !== 'number' || 
//     fir == null || sec == null || thi == null || fou == null) {
//         return 0;
//     }

//     let arr = [fir, sec, thi, fou];
//     return arr.sort((a, b) => a - b)[3];
// }


// // TEST_9------------------------------------------------------------------------

// function fib(length) {
//     let a = [0, 1];
//     for (let i = 1; i <= length; i++) {
//     a.push(a[a.length - 2] + a[a.length - 1]);
//     }
//     return a;
// }
// console.log(fib(13));

// //

// function fib(num) {
//     if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
//         return "";
//     }

//     let result = '';
//     let first = 0;
//     let second = 1;

//     for (let i = 0; i < num; i++) {
//         if (i + 1 === num) {
//             result += `${first}`;
//             // Без пробела в конце
//         } else {
//             result += `${first} `;
//         }

//         let third = first + second;
//         first = second;
//         second = third;
//     }

//     return result;
// }

// fib(5);