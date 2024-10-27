document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', function() {
        const activeHeader = document.querySelector('.accordion-header.active');
        
        // Закриваємо попередній активний елемент, якщо він існує
        if (activeHeader && activeHeader !== this) {
            activeHeader.classList.remove('active');
            activeHeader.nextElementSibling.style.maxHeight = '0';
            activeHeader.querySelector('span').textContent = '+';
        }

        // Перемикаємо поточний елемент (розгорнути або згорнути)
        this.classList.toggle('active');
        const content = this.nextElementSibling;

        if (this.classList.contains('active')) {
            content.style.maxHeight = content.scrollHeight + 'px'; // Встановлюємо повну висоту
            this.querySelector('span').textContent = '-';
        } else {
            content.style.maxHeight = '0'; // Згортаємо контент
            this.querySelector('span').textContent = '+';
        }
    });
});