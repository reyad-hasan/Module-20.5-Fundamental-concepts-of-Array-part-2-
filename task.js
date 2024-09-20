// TASK 1 COLORS NAMES REVERS
// const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
// const revColors = [];

// Regular for loop
// for (let i = 0; i < colors.length; i++) {
//     const rev = colors[i];
//     revColors.unshift(rev);
// }

// for of loop
// for(color of colors){
//     revColors.unshift(color);
// }

// Regular for loop revers
// for(let i = colors.length-1; i>=0;i--){
//     const rev = colors[i];
//     revColors.push(rev);
// }

// console.log(revColors);



// TASK 2 FIND EVEN NUMBER AND PUSH NEW ARRAY
// const numbers = [12, 98, 5, 41, 23, 78, 46];
// const evenNumbers = [];

// for of loop
// for (number of numbers) {
//     if (number % 2 === 0) {
//         evenNumbers.push(number);
//     }
// }
// console.log(evenNumbers)

// Regular for loop
// for (let i = 0; i < numbers.length; i++) {
//     const number = numbers[i];
//     if (number % 2 === 0) {
//         evenNumbers.push(number)
//     }
// }
// console.log(evenNumbers)

// const names = ['Tom', 'Tim', 'Tin', 'Tik'];
// let trim = [];
// for (pName of names) {
//     trim = trim + pName;
// }

// console.log(trim)



// TASK 4 HARD REVERS STRING WORD
// const statement = 'I am a hard working person';
// const state = statement.split(' ');
// let rev = [];

// for (sta of state) {
//     rev.unshift(sta)
//     rev.join(',');
// }
// console.log(rev)


const statement = 'I am a hard working person';
let sta = statement.split(' ');
let reversed = '';

for (let i = sta.length - 1; i >= 0; i--) {
    const s = sta[i];
    if (s == '') continue;
    if (reversed.length > 0) reversed += ' ';
    reversed += s;
}
console.log(reversed)
