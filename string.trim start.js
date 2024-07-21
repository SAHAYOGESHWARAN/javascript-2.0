let str = " i have a bike";

console.log(str.trimStart().trimEnd().padStart(str.length -3,'-').padEnd(str.length,'-'));
