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

// Фильтрация работ по курсам
const filterButtons = document.querySelectorAll('.filter-btn');
const worksGrid = document.querySelector('.works-grid');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Убираем активный класс у всех кнопок
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Добавляем активный класс нажатой кнопке
        button.classList.add('active');
        
        const filterValue = button.getAttribute('data-filter');
        
        // Обновляем текст в зависимости от выбранного курса
        const emptyWorks = worksGrid.querySelector('.empty-works');
        if (filterValue === 'all') {
            emptyWorks.querySelector('h3').textContent = 'Работы пока не добавлены';
            emptyWorks.querySelector('p').textContent = 'В этом разделе будут отображаться ваши проекты после их добавления.';
        } else {
            emptyWorks.querySelector('h3').textContent = `Работы за ${filterValue} курс`;
            emptyWorks.querySelector('p').textContent = `Здесь будут отображаться ваши проекты, выполненные в течение ${filterValue} курса.`;
        }
        
        // Можно добавить анимацию или другие эффекты при переключении
        emptyWorks.style.opacity = '0.7';
        setTimeout(() => {
            emptyWorks.style.opacity = '1';
        }, 200);
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
        header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
    } else {
        header.style.boxShadow = '0 2px 15px rgba(0,0,0,0.1)';
    }
});
