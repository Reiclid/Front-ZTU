const paragraphs = document.querySelectorAll('#paragraphs p');
        const lengths = [];

        paragraphs.forEach(paragraph => {
            lengths.push(paragraph.innerText.length);
        });

        console.log(lengths);

//Task2
let arr = [20, 17, 4, -4, 10, -9, 13, 4, 12, 22, 13, 19, 1, 3];
console.log('Початковий масив:', arr);

// Найменше та найбільше значення
let min = Math.min(...arr);
let max = Math.max(...arr);
console.log('Найменше значення:', min);
console.log('Найбільше значення:', max);

// Кількість парних та непарних чисел
let evenCount = arr.filter(num => num % 2 === 0).length;
let oddCount = arr.filter(num => num % 2 !== 0).length;
console.log('Кількість парних чисел:', evenCount);
console.log('Кількість непарних чисел:', oddCount);

// Кількість чисел, що містять дві цифри
let twoDigitCount = arr.filter(num => Math.abs(num) >= 10 && Math.abs(num) < 100).length;
console.log('Кількість чисел з двома цифрами:', twoDigitCount);

// Кількість додатних та від’ємних чисел
let positiveCount = arr.filter(num => num > 0).length;
let negativeCount = arr.filter(num => num < 0).length;
console.log('Кількість додатних чисел:', positiveCount);
console.log('Кількість від’ємних чисел:', negativeCount);

// Сортування масиву у порядку зростання
let sortedArr = [...arr].sort((a, b) => a - b);
console.log('Відсортований масив:', sortedArr);

// Масив з оберненим порядком елементів
let reversedArr = [...arr].reverse();
console.log('Масив у зворотному порядку:', reversedArr);