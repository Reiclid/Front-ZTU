const matrix = [
    [1, 2, 3, 0, 5],
    [6, 7, 8, 0, 9],
    [-10, 11, 12, 12, 14],
    [15, 16, 0, 17, 18],
    [19, -20, 21, -22, 12],
];

console.log('Матриця:', matrix);

// 1)
console.log('\n1)');
let positiveCount = 0;
matrix.forEach(row => {
    row.forEach(elem => {
        if (elem > 0) positiveCount++;
    });
});
console.log('Кількість додатних елементів:', positiveCount);

// 2)
console.log('\n2)');
let nonZeroRowsCount = matrix.filter(row => !row.includes(0)).length;
console.log('Кількість рядків без жодного нуля:', nonZeroRowsCount);

// 3)
console.log('\n3)');
let zeroColumnsCount = 0;
for (let col = 0; col < matrix[0].length; col++) {
    let hasZero = false;
    for (let row = 0; row < matrix.length; row++) {
        if (matrix[row][col] === 0) {
            hasZero = true;
            break;
        }
    }
    if (hasZero) zeroColumnsCount++;
}
console.log('Кількість стовпців, які містять хоча б один нульовий елемент:', zeroColumnsCount);

// 4)
console.log('\n4)');
let longestSeriesRow = -1;
let longestSeriesLength = 0;

matrix.forEach((row, rowIndex) => {
    let currentSeriesLength = 1;
    let maxSeriesInRow = 1;
    for (let i = 1; i < row.length; i++) {
        if (row[i] === row[i - 1]) {
            currentSeriesLength++;
        } else {
            currentSeriesLength = 1;
        }
        maxSeriesInRow = Math.max(maxSeriesInRow, currentSeriesLength);
    }
    if (maxSeriesInRow > longestSeriesLength) {
        longestSeriesLength = maxSeriesInRow;
        longestSeriesRow = rowIndex;
    }
});

console.log('Номер рядка з найдовшою серією однакових елементів:', longestSeriesRow);

// 5)
console.log('\n5)');
matrix.forEach((row, rowIndex) => {
    if (row.every(elem => elem >= 0)) { // Якщо рядок не містить від'ємних елементів
        const product = row.reduce((prod, elem) => prod * (elem === 0 ? 1 : elem), 1); // Обчислюємо добуток елементів, ігноруючи нулі
        console.log(`Добуток елементів у рядку ${rowIndex + 1}: ${product}`);
    }
});

// 6)
console.log('\n6)');
for (let col = 0; col < matrix[0].length; col++) {
    let hasNegative = false;
    let columnSum = 0;

    for (let row = 0; row < matrix.length; row++) {
        if (matrix[row][col] < 0) {
            hasNegative = true;  // Якщо є від'ємний елемент, не враховуємо цей стовпець
            break;
        }
        columnSum += matrix[row][col];
    }

    if (!hasNegative) {
        console.log(`Сума елементів у стовпці ${col + 1}: ${columnSum}`);
    }
}

// 7)
console.log('\n7)');
for (let col = 0; col < matrix[0].length; col++) {
    let hasNegative = false;
    let columnSum = 0;

    for (let row = 0; row < matrix.length; row++) {
        if (matrix[row][col] < 0) {
            hasNegative = true;  // Якщо є від'ємний елемент, позначаємо цей стовпець
        }
        columnSum += matrix[row][col];  // Додаємо всі елементи стовпця до суми
    }

    if (hasNegative) {
        console.log(`Сума елементів у стовпці ${col + 1}: ${columnSum}`);
    }
}

// 8)
console.log('\n8)');
let transposedMatrix = [];
for (let col = 0; col < matrix[0].length; col++) {
    let newRow = [];
    for (let row = 0; row < matrix.length; row++) {
        newRow.push(matrix[row][col]);
    }
    transposedMatrix.push(newRow);
}
console.log('Транспонована матриця:');
console.table(transposedMatrix);



// ADVANCED TASKS)
console.log('\nADVANCED TASKS)');
function maxSumOfDiagonals(matrix) {
    const n = matrix.length;
    const diagonalSums = {};

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            const key = i - j;
            if (!diagonalSums[key]) {
                diagonalSums[key] = 0;
            }
            diagonalSums[key] += matrix[i][j];
        }
    }

    const sums = Object.values(diagonalSums);
    return Math.max(...sums);
}

console.log('Максимум серед сум елементів діагоналей, паралельних головній діагоналі:', maxSumOfDiagonals(matrix));

function minSumOfDiagonals(matrix) {
    const n = matrix.length;
    const diagonalSums = {};

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            const key = i + j;
            if (!diagonalSums[key]) {
                diagonalSums[key] = 0;
            }
            diagonalSums[key] += Math.abs(matrix[i][j]);
        }
    }

    const sums = Object.values(diagonalSums);
    return Math.min(...sums);
}

console.log('Мінімум серед сум модулів елементів діагоналей, паралельних побічній діагоналі:', minSumOfDiagonals(matrix));
