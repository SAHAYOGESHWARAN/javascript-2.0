let obj = {};
try {
    console.log(obj.prop.prop);
} catch (error) {
    console.error('An error occurred:', error.message);
}

console.log('next statement');
