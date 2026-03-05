// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    // Установка текущего года в футере (если элемент существует)
    const currentYearEl = document.getElementById('currentYear');
    if (currentYearEl && currentYearEl instanceof HTMLElement) {
        currentYearEl.textContent = new Date().getFullYear();
    }
    
    // Мобильное меню
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Анимация иконки бургер-меню
            const spans = navToggle.querySelectorAll('span');
            if (navMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
        
        // Закрытие меню при клике на ссылку
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            });
        });
    }
    
    // Плавная прокрутка для якорных ссылок
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href') === '#') return;
            
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.offsetTop - navbarHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Отправка формы обратной связи
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Сбор данных формы
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            
            // Валидация
            if (!name || !email || !message) {
                alert('Пожалуйста, заполните все поля формы.');
                return;
            }
            
            // В реальном проекте здесь будет отправка данных на сервер
            // Например, через fetch() или Formspree
            
            // Для демонстрации - имитация отправки
            showNotification('Сообщение отправлено! Я свяжусь с вами в ближайшее время.', 'success');
            
            // Очистка формы
            contactForm.reset();
        });
    }
    
    // Анимация при скролле
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.skill-category, .project-card, .education-card, .contact-method');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('animate');
            }
        });
    };
    
    // Добавление класса для анимации
    const style = document.createElement('style');
    style.textContent = `
        .skill-category, .project-card, .education-card, .contact-method {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .skill-category.animate, .project-card.animate, .education-card.animate, .contact-method.animate {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);
    
    // Инициализация анимации при загрузке
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);
    
    // Эффект параллакс для hero секции
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            heroSection.style.transform = `translate3d(0, ${rate}px, 0)`;
        });
    }
    
    // Утилитарная функция для показа уведомлений
    function showNotification(message, type = 'info') {
        // Создание элемента уведомления
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        
        // Стили для уведомления
        Object.assign(notification.style, {
            position: 'fixed',
            top: '20px',
            right: '20px',
            padding: '15px 20px',
            backgroundColor: type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6',
            color: 'white',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            zIndex: '9999',
            animation: 'slideIn 0.3s ease'
        });
        
        // Стили для анимации
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            
            @keyframes slideOut {
                from { transform: translateX(0); opacity: 1; }
                to { transform: translateX(100%); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
        
        // Добавление уведомления на страницу
        document.body.appendChild(notification);
        
        // Автоматическое удаление уведомления через 5 секунд
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 5000);
    }
    
    // Добавление интерактивности для карточек проектов
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
            this.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
        });
    });
    
    // Подсветка активного пункта меню при скролле
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.nav-menu a');
    
    function highlightNavOnScroll() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            
            if (scrollY >= (sectionTop - navbarHeight - 100)) {
                current = section.getAttribute('id');
            }
        });
        
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    }
    
    // Добавление стилей для активного пункта меню
    const navStyle = document.createElement('style');
    navStyle.textContent = `
        .nav-menu a.active {
            color: var(--primary-color) !important;
            font-weight: 600;
        }
        
        .nav-menu a.active::after {
            width: 100% !important;
        }
    `;
    document.head.appendChild(navStyle);
    
    window.addEventListener('scroll', highlightNavOnScroll);
    
    // Загрузка иконок технологий с Simple Icons (если необходимо)
    loadTechnologyIcons();
});

// Функция для загрузки иконок технологий
function loadTechnologyIcons() {
    // В реальном проекте здесь можно загружать SVG иконки из Simple Icons
    // Для демо используем FontAwesome, который уже подключен
    console.log('Technology icons would be loaded here from Simple Icons CDN');
}

// Функция для тестирования отправки формы
function testFormSubmission() {
    const testData = {
        name: 'Тестовый пользователь',
        email: 'test@example.com',
        message: 'Это тестовое сообщение для проверки работы формы'
    };
    
    console.log('Форма отправлена с данными:', testData);
    
    // В реальном проекте:
    // fetch('/api/contact', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(testData)
    // })
    // .then(response => response.json())
    // .then(data => console.log('Success:', data))
    // .catch(error => console.error('Error:', error));
}

// Эффекты при наведении на элементы с иконками технологий
function initTechHoverEffects() {
    const techItems = document.querySelectorAll('.tech-item');
    
    techItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const icon = this.querySelector('i');
            if (icon) {
                icon.style.transform = 'scale(1.2) rotate(10deg)';
                icon.style.transition = 'transform 0.3s ease';
            }
        });
        
        item.addEventListener('mouseleave', function() {
            const icon = this.querySelector('i');
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0)';
            }
        });
    });
}

// Вызов функций после загрузки
window.addEventListener('load', function() {
    initTechHoverEffects();
    console.log('Сайт-портфолио IDL MěD загружен и готов к работе!');
});