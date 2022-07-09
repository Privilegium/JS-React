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

// // function showProgrammingLangs(plan) {
// //     const {languages, programmingLangs, exp} = personalPlanPeter.skills;
// //     const {js, php} = programmingLangs;
    
// //     if (js == null && php == null) {
// //         return '';
// //     }
// //     return `Язык js изучен на ${js}\nЯзык php изучен на ${php}`;
// // }

// function showProgrammingLangs(plan) {
//     let str = ``;
//     const {programmingLangs} = plan.skills;

//     for (let key in programmingLangs) {
//         str += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
//     }

//     return str;
// }

// //TEST_10------------------------------------------------------------------------

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

// //TEST_10------------------------------------------------------------------------

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