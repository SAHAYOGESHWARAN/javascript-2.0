// Define an object
const obj = { name: "abi", age: 21 };

// Store the object in localStorage after converting it to a JSON string
localStorage.setItem('profile', JSON.stringify(obj));

// Retrieve and parse the object from localStorage
const storedProfile = JSON.parse(localStorage.getItem('profile'));
console.log(storedProfile); // Outputs: { name: "abi", age: 21 }

// Iterate over all items in localStorage
for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    console.log(key, value); // Logs key and value of each item in localStorage
}
