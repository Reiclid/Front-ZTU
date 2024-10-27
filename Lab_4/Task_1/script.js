function generateTable(m, n) {
    let table = document.createElement('table');
    table.setAttribute('border', '1');
    table.style.borderCollapse = 'collapse'; 

    for (let i = 0; i < m; i++) {
        let row = document.createElement('tr');
        for (let j = 0; j < n; j++) {
            let cell = document.createElement('td');
            cell.textContent = `(${i + 1}, ${j + 1})`;
            row.appendChild(cell);
        }
        table.appendChild(row);
    }

    document.body.appendChild(table);
}

generateTable(3, 4);