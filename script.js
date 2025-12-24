// Мобильное меню
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenu.innerHTML = navLinks.classList.contains('active') 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
});

// Закрытие меню при клике на ссылку
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileMenu.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// Обработка кнопок-ссылок (без фильтрации, только визуальный эффект)
const filterButtons = document.querySelectorAll('.filter-btn');

filterButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        // Если это не ссылка на внешний ресурс (начинается с #)
        if (button.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            
            // Убираем активный класс у всех кнопок
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Добавляем активный класс нажатой кнопке
            button.classList.add('active');
            
            // Обновляем текст в блоке работ
            const emptyWorks = document.querySelector('.empty-works');
            const buttonText = button.textContent.trim();
            
            if (buttonText === 'Все работы') {
                emptyWorks.querySelector('h3').textContent = 'Работы пока не добавлены на сайт';
                emptyWorks.querySelector('p').textContent = 'Мои работы распределены по курсам. Нажмите на кнопку соответствующего курса выше, чтобы перейти к просмотру работ.';
            } else if (buttonText.includes('курс')) {
                const courseNum = buttonText.charAt(0);
                emptyWorks.querySelector('h3').textContent = `Работы за ${courseNum} курс`;
                emptyWorks.querySelector('p').textContent = `Нажмите на кнопку "${buttonText}" выше еще раз, чтобы перейти на страницу с работами за ${courseNum} курс.`;
            }
            
            // Эффект при нажатии
            button.style.transform = 'translateY(0)';
            setTimeout(() => {
                button.style.transform = 'translateY(-3px)';
            }, 200);
        }
        // Если это внешняя ссылка, она откроется в новой вкладке (target="_blank")
        // и никаких дополнительных действий не требуется
    });
});

// Плавная прокрутка для якорных ссылок
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Добавляем тень к header при прокрутке
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.15)';
    } else {
        header.style.boxShadow = '0 2px 15px rgba(0,0,0,0.
