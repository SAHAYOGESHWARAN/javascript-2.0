const items = { tomato: 2, potato: 1, eggs: 4 };
const doubledPricedItems = Object.fromEntries(
    Object.entries(items).map(([item, price]) => {
        return [item, price * 2];
    })
);

console.log(doubledPricedItems);
