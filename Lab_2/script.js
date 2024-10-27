//Task_1
document.body.style.fontFamily = 'Arial';

const para1 = document.getElementById('para1');
para1.style.width = '100%';
para1.style.color = '#ffae00';
para1.style.backgroundColor = '#fffb00';
para1.style.fontSize = '16px';
para1.style.padding = '5px';
para1.style.textAlign = 'center';

const para2 = document.getElementById('para2');
para2.style.width = '100%';
para2.style.color = '#0077ff';
para2.style.backgroundColor = '#a2ceff';
para2.style.fontSize = '14px';
para2.style.padding = '5px';
para2.style.textAlign = 'right';

const para3 = document.getElementById('para3');
para3.style.width = '100%';
para3.style.color = '#ff2c2c';
para3.style.backgroundColor = '#ff9f9f';
para3.style.fontSize = '12px';
para3.style.padding = '5px';
para3.style.textAlign = 'left';


//Task_2
const table = document.getElementById("myTable");
const cells = table.getElementsByTagName("td");

for (let i = 0; i < cells.length; i++) {
    if (i % 2 === 0) { // Приклад: виділення кожної другої клітинки
        cells[i].classList.add("selected");
    }
}


//Task_3
let text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt ea earum incidunt minima nihil. Blanditiis consectetur cumque debitis delectus dolor dolorem dolorum, eos laboriosam, modi nemo, quasi quos sint voluptatibus!';

//1)
console.log('\n1)');
let selectedChars = text[12] + text[6] + text[18] + text[25];
console.log(selectedChars);

//2)
console.log('\n2)');
let lowerCaseText = text.toLowerCase();
console.log(lowerCaseText);

//3)
console.log('\n3)');
let positions = [];
let searchTerm = "in";
let pos = text.indexOf(searchTerm);

while (pos !== -1) {
    positions.push(pos);
    pos = text.indexOf(searchTerm, pos + 1);
}

console.log(positions);

//4)
console.log('\n4)');
let textArray = text.split(" ");
console.log(textArray);

//5)
console.log('\n5)');
let reversedText = text.split("").reverse().join("");
console.log(reversedText);

//6)
console.log('\n6)');
function ucFirst(txt) {
    if (!txt) return txt;
    let newTxt = txt[0].toUpperCase() + txt.slice(1);
    return newTxt;
}

console.log(ucFirst('some text'));