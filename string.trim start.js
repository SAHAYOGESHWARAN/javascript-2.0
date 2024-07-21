let str = " i have a bike";


let trimmedStr = str.trimStart().trimEnd();


let totalPaddingLength = str.length - trimmedStr.length;


let paddedStr = trimmedStr.padStart(trimmedStr.length + totalPaddingLength, '-').padEnd(str.length, '-');

console.log(paddedStr);
