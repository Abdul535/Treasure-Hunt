let array = [100, 600, 400, 200, 700, 900, 1001];

array.sort((a, b) => {
    return a - b;
})


array.sort((a, b) => {
    return b - a;
})

console.log(array);