document.addEventListener('DOMContentLoaded', () => {
    // Переключение между показом и скрытием подвидов
    const toggleButtons = document.querySelectorAll('.toggle-subtypes');
    
    toggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            const subtypesList = button.nextElementSibling;
            const isOpen = subtypesList.classList.contains('open');

            // Переключаем класс для плавного открытия/закрытия списка
            if (isOpen) {
                subtypesList.classList.remove('open');
                button.textContent = 'Show Subtypes';
            } else {
                subtypesList.classList.add('open');
                button.textContent = 'Hide Subtypes';
            }
        });
    });
});
