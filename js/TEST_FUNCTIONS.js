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
 
// Место для первой задачи
// function calculateVolumeAndArea(oneside) {
//     const volume = oneside * oneside * oneside;
//     const area = 6 * (oneside * oneside);

//     if (typeof oneside == 'number' && oneside > 0) {
//         console.log(`Объем куба: ${volume}, прощадь всей поверхности: ${area}`);
//     } else {
//         console.log('При обчисленні сталася помилка');
//     }
// }
// Место для второй задачи
function getCoupeNumber(sit) {
    // if (typeof sit !== 'number' || sit < 0 || sit % 2 === 1) {
    //     console.log('Ошибка. Проверьте правильность введенного номера места');
    // } else if (sit === 0 || sit > 36) {
    //     console.log('Таких мест в вагоне не существует');
    // }

    const coupeSits = {
        1: [1, 2, 3, 4],
        2: [5, 6, 7, 8],
        3: [9, 10, 11, 12],
        4: [13, 14, 15, 16],
        5: [17, 18, 19, 20],
        6: [21, 22, 23, 24],
        7: [25, 26, 27, 28],
        8: [29, 30, 31, 32],
        9: [33, 34, 35, 36]
    };
    for (let i = 1; i < 10; i++) {
        for (let j = 0; j < 4; j++) {
            if (coupeSits[i][j] == sit) {
                console.log(i);
            } else if (typeof sit !== 'number' || sit < 0 || sit % 2 === 1) {
                console.log('Ошибка. Проверьте правильность введенного номера места');
            } else if (sit === 0 || sit > 36) {
                console.log('Таких мест в вагоне не существует');
            }
        }
    }
}
getCoupeNumber('12');
