// 'use strict';

// // //TEST_10------------------------------------------------------------------------

// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month'
//     },
//     showAgeAndLangs: function(plan) {
//         const {age} = plan;
//         const {languages} = plan.skills;
//         let str = `Мне ${age} и я владею языками: `;

//         languages.forEach(lang => {str += `${lang.toUpperCase()} `;});
//         return str;
//     }
// };
// console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

// function showExperience(plan) {
//     const {exp} = plan.skills;
//     return exp;
// }
// console.log(showExperience(personalPlanPeter));


// function showProgrammingLangs(plan) {
//     let str = ``;
//     const {programmingLangs} = plan.skills;

//     for (let key in programmingLangs) {
//         str += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
//     }

//     return str;
// }

// //TEST_11------------------------------------------------------------------------

// const family = ['Peter', 'Ann', 'Alex', 'Linda'];
// const a;
// const b = [];


// function showFamily(arr) {
//     let familyMem = 'Семья состоит из: ';
//     if (arr.length === 0) {
//         return 'Семья пуста';
//     }

//     for (let value of arr) {
//     familyMem += `${value} `;
//     }
//     return familyMem;
// }
// console.log(showFamily(family));

// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

// function standardizeStrings(arr) {
//     arr.forEach(value => console.log(value.toLowerCase()));
// }
// standardizeStrings(favoriteCities);

// //TEST_13------------------------------------------------------------------------

// const someString = 'This is some strange string';

// function reverse(str) {
//     if (typeof str !== 'string') {
//         return 'Ошибка!';
//     }
    
//     let newString = str.split('').reverse().join('');
//     return newString;
// }

// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
// const allCurrencuies = [...baseCurrencies, ...additionalCurrencies];

// function availableCurr(arr, missingCurr) {
//     let availableCurrencies = `Доступные валюты:\n`;

//     if (arr.length === 0) {
//         return 'Нет доступных валют';
//     }

//     for (let key of arr) {
//         if (missingCurr === key) {
//             continue;
//         } else {
//             availableCurrencies += `${key}\n`;
//         }
    
//     }
//     return availableCurrencies;
// }
// console.log(availableCurr(allCurrencuies), 'RUB');

// //TEST_13------------------------------------------------------------------------

// const shoppingMallData = {
//     shops: [
//         {
//             width: 10,
//             length: 5
//         },
//         {
//             width: 15,
//             length: 7
//         },
//         {
//             width: 20,
//             length: 5
//         },
//         {
//             width: 8,
//             length: 10
//         }
//     ],
//     height: 5,
//     moneyPer1m3: 30,
//     budget: 50000
// };

// function isBudgetEnough(data) {
//     let summaryArea = 0;
    
//     // data.shops.forEach(shop => summaryArea += shop.width * shop.length);
//     for (let value of data.shops) {
//         summaryArea += value.width * value.length;
//     }
    
//     let summaryCapacity = summaryArea * data.height;
//     let canIPay = data.budget - (summaryCapacity * data.moneyPer1m3);

//     if (canIPay >= 0) {
//         return 'Бюджета достаточно';
//     } else {
//         return 'Бюджета недостаточно';
//     }
// }
// isBudgetEnough(shoppingMallData);


// //TEST_14------------------------------------------------------------------------

// const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

// function sortStudentsByGroups(arr) {    
//     arr.sort();
//     const a = [], b = [], c = [], rest = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (i < 3) {
//             a.push(arr[i]);
//         } else if (i < 6) {
//             b.push(arr[i]);
//         } else if (i < 9) {
//             c.push(arr[i]);
//         } else {
//             rest.push(arr[i]);
//         }
//     }
    
//     return [a, b, c, `Оставшиеся студенты: ${rest.length === 0 ? '-' : rest.join(', ')}`];
// }
// console.log(sortStudentsByGroups(students));

