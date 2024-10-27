const tables = document.querySelectorAll('.table');

tables.forEach(tableDiv => {
    const tdElements = tableDiv.querySelectorAll('td');
    tdElements.forEach((td, index) => {
        if ((index + 1) % 2 === 0) {
            td.classList.add('selected');
        }
    });
});