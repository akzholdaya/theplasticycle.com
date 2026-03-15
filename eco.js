<script>
    const searchBtn = document.querySelector('.hero-card .btn-primary');
    const searchInput = document.querySelector('.hero-card input');
    const statusText = document.querySelector('.status-card h4');
    const progressBar = document.querySelector('.progress-bar .fill');
    const trackIdDisplay = document.querySelector('.status-header strong');

    searchBtn.addEventListener('click', () => {
        const code = searchInput.value.trim();
        
        if (code) {
            // Имитация загрузки
            searchBtn.innerText = 'Поиск...';
            searchBtn.disabled = true;

            setTimeout(() => {
                // Обновляем данные на лету
                trackIdDisplay.innerText = code;
                statusText.innerText = 'Пластик успешно доставлен на завод и ожидает измельчения!';
                progressBar.style.width = '45%'; // Меняем прогресс
                
                searchBtn.innerText = 'Отследить';
                searchBtn.disabled = false;
                
                // Подсвечиваем изменения
                document.querySelector('.status-card').style.borderColor = '#4CAF50';
            }, 1000);
        } else {
            alert('Пожалуйста, введите трек-код');
        }
    });

    // Эффект параллакса для карточек при движении мыши (необязательно, но круто)
    document.addEventListener('mousemove', (e) => {
        const x = (window.innerWidth / 2 - e.pageX) / 50;
        const y = (window.innerHeight / 2 - e.pageY) / 50;
        document.querySelector('.dashboard').style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
    });
</script>