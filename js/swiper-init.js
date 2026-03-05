// Инициализация Swiper каруселей для IDL MëD

document.addEventListener('DOMContentLoaded', function() {
    console.log('Инициализация Swiper каруселей запущена');
    
    // Данные проектов
    const projects = [
        {
            title: "Конструктор коммерческих предложений",
            status: "completed",
            description: "<strong>Задача:</strong> Автоматизировать создание персонализированных КП для IT-компании.<br><strong>Ключевой вызов:</strong> Учесть 50+ переменных (технологии, сроки, команда, бюджет).<br><strong>Решение:</strong> Веб-интерфейс с drag-and-drop элементами и шаблонами.<br><strong>Результат:</strong> Время подготовки КП сократилось с 4 часов до 15 минут.",
            tech: ["Vue.js", "Node.js", "MongoDB", "PDFKit"],
            links: ["Кейс", "+90% скорости"]
        },
        {
            title: "Бот-помощник для онлайн-школы",
            status: "completed",
            description: "<strong>Задача:</strong> Разгрузить поддержку, автоматизировав ответы на частые вопросы.<br><strong>Ключевой вызов:</strong> Обработка 100+ типов запросов на естественном языке.<br><strong>Решение:</strong> NLP-бот с обучением на исторических данных переписки.<br><strong>Результат:</strong> 70% обращений решает бот, время ответа — 2 секунды.",
            tech: ["Python", "Telegram API", "NLTK", "PostgreSQL"],
            links: ["Кейс", "-70% нагрузки"]
        },
        {
            title: "Дашборд аналитики для маркетплейса",
            status: "in-progress",
            description: "<strong>Задача:</strong> Визуализировать ключевые метрики для принятия решений.<br><strong>Ключевой вызов:</strong> Агрегация данных из 10+ источников в реальном времени.<br><strong>Решение:</strong> Модульная система графиков с настройкой под роль пользователя.<br><strong>Результат:</strong> Единая точка доступа к данным для 50+ сотрудников.",
            tech: ["React", "D3.js", "FastAPI", "Redis"],
            links: ["Кейс", "50+ пользователей"]
        },
        {
            title: "Парсер конкурентов для e-commerce",
            status: "completed",
            description: "<strong>Задача:</strong> Мониторить цены и ассортимент 50+ конкурентов.<br><strong>Ключевой вызов:</strong> Обход анти-парсерных систем и капчи.<br><strong>Решение:</strong> Распределённая система с ротацией прокси и юзерагентов.<br><strong>Результат:</strong> Актуальные данные каждые 2 часа вместо 2 недель вручную.",
            tech: ["Python", "Scrapy", "Selenium", "Celery"],
            links: ["Кейс", "100% покрытие"]
        },
        {
            title: "Система управления контентом для медиа",
            status: "completed",
            description: "<strong>Задача:</strong> Упростить публикацию материалов для редакции.<br><strong>Ключевой вызов:</strong> Поддержка 10+ типов контента (статьи, видео, тесты).<br><strong>Решение:</strong> WYSIWYG-редактор с премодерацией и планировщиком.<br><strong>Результат:</strong> Количество публикаций выросло в 3 раза без роста штата.",
            tech: ["React", "Django", "Quill", "Redis"],
            links: ["Кейс", "×3 контента"]
        },
        {
            title: "Мобильное приложение для фитнес-тренера",
            status: "in-progress",
            description: "<strong>Задача:</strong> Создать персональный тренерский инструмент.<br><strong>Ключевой вызов:</strong> Синхронизация с wearable-устройствами и анализ КБЖУ.<br><strong>Решение:</strong> Кроссплатформенное приложение с индивидуальными программами.<br><strong>Результат:</strong> 500+ активных пользователей, 95% retention на 30 день.",
            tech: ["React Native", "GraphQL", "Apple HealthKit", "Firebase"],
            links: ["Кейс", "95% retention"]
        },
        {
            title: "Чат-бот для HR-отдела",
            status: "completed",
            description: "<strong>Задача:</strong> Автоматизировать первичный отбор кандидатов.<br><strong>Ключевой вызов:</strong> Оценка soft skills через диалог.<br><strong>Решение:</strong> Бот с сценариями по 20+ позициям и интеграцией с ATS.<br><strong>Результат:</strong> Экономия 15 часов в неделю на рекрутинге.",
            tech: ["Python", "Dialogflow", "Google Sheets API", "Flask"],
            links: ["Кейс", "-80% времени"]
        },
        {
            title: "API для банковского стартапа",
            status: "completed",
            description: "<strong>Задача:</strong> Разработать REST API для финтех-сервиса.<br><strong>Ключевой вызов:</strong> Соответствие PCI DSS и обработка 1000+ запросов в секунду.<br><strong>Решение:</strong> Микросервисная архитектура с кэшированием и очередями.<br><strong>Результат:</strong> 99.9% uptime, обработка пиковых нагрузок.",
            tech: ["Node.js", "Redis", "Docker", "Kubernetes"],
            links: ["Кейс", "99.9% uptime"]
        },
        {
            title: "Автоматизация отчетности для агентства",
            status: "completed",
            description: "<strong>Задача:</strong> Свести данные из 15+ рекламных кабинетов в единый отчет.<br><strong>Ключевой вызов:</strong> Разные API, валюты и метрики у каждой платформы.<br><strong>Решение:</strong> ETL-пайплайн с нормализацией и визуализацией.<br><strong>Результат:</strong> Время на отчётность сокращено с 2 дней до 2 часов.",
            tech: ["Python", "Airflow", "Metabase", "BigQuery"],
            links: ["Кейс", "-90% времени"]
        },
        {
            title: "Личный кабинет для страховой компании",
            status: "in-progress",
            description: "<strong>Задача:</strong> Цифровизировать взаимодействие с клиентами.<br><strong>Ключевой вызов:</strong> Интеграция с устаревшими системами и соблюдение GDPR.<br><strong>Решение:</strong> Современный фронтенд с безопасным доступом к данным.<br><strong>Результат:</strong> Увеличили долю онлайн-оплаты полисов с 30% до 85%.",
            tech: ["Vue.js", "Laravel", "OAuth 2.0", "Stripe"],
            links: ["Кейс", "+55% онлайн"]
        },
        {
            title: "Планировщик питания с КБЖУ",
            status: "completed",
            description: "<strong>Задача:</strong> Разработать Telegram-бота для составления сбалансированного меню на неделю.<br><strong>Ключевой вызов:</strong> Структурирование данных о продуктах и рецептах для алгоритмической генерации.<br><strong>Решение:</strong> База данных рецептов + алгоритм подбора с балансом КБЖУ.<br><strong>Результат:</strong> Сократил время составления меню с 2 часов до 15 минут.",
            tech: ["Python", "Aiogram", "PostgreSQL", "Pandas"],
            links: ["Кейс", "+85% эффективности"]
        },
        {
            title: "Автопроверка документов",
            status: "completed",
            description: "<strong>Задача:</strong> Автоматизировать контроль документов на соответствие корпоративным стандартам.<br><strong>Ключевой вызов:</strong> Формализация правил оформления в программную логику.<br><strong>Решение:</strong> Инструмент анализа структуры, форматирования и обязательных разделов.<br><strong>Результат:</strong> Исключён человеческий фактор, время проверки сокращено на 70%.",
            tech: ["Python", "python-docx", "PyPDF2", "Flask"],
            links: ["Кейс", "-70% времени"]
        }
    ];

    // Данные отзывов
    const testimonials = [
        {
            text: "«Не ожидал, что автоматизация сэкономит столько времени. Раньше на составление КП уходило полдня, теперь — 15 минут. И клиенты получают предложения быстрее, что сразу отразилось на конверсии.»",
            name: "Александр, CEO",
            role: "IT-аутсорсинг"
        },
        {
            text: "«Подход к задаче как к бизнес-процессу, а не просто к коду — вот что отличает. Предложили не только техническое решение, но и показали, как его монетизировать.»",
            name: "Ольга, product owner",
            role: "EdTech стартап"
        },
        {
            text: "«Интеграция с нашим легаси-софтом прошла гладко, хотя мы опасались месяцев работы. Справились за 3 недели, и система работает стабильно.»",
            name: "Михаил, CTO",
            role: "Логистическая компания"
        },
        {
            text: "«Парсер собирает данные даже с тех сайтов, с которыми не справлялись предыдущие разработчики. Теперь у нас есть полная картина рынка в реальном времени.»",
            name: "Денис, аналитик",
            role: "E-commerce"
        },
        {
            text: "«После запуска проекта команда не исчезла — они продолжали сопровождать нас 3 месяца, обучали сотрудников, вносили доработки по нашим запросам. Такого уровня сервиса я не встречал даже у крупных IT-компаний.»",
            name: "Игорь, технический директор",
            role: "Финтех-стартап"
        },
        {
            text: "«Конструктор коммерческих предложений ускорил подготовку КП в 5 раз. Теперь мы можем отвечать на запросы клиентов в день обращения, а не через неделю.»",
            name: "Дмитрий, менеджер по продажам",
            role: "IT-компания"
        },
        {
            text: "«Ценю не только техническую экспертизу, но и бизнес-подход. Ребята не просто написали код — они показали, как решение окупится, какие метрики отслеживать, как масштабировать. Настоящие партнёры, а не подрядчики.»",
            name: "Мария, основатель",
            role: "Health-tech проект"
        },
        {
            text: "«Бот-помощник полностью автоматизировал коммуникацию со студентами. Теперь мы можем вести несколько потоков одновременно без увеличения штата.»",
            name: "Елена, основатель",
            role: "Онлайн-школа программирования"
        }
    ];

    // Вставка проектов в Swiper слайды
    const projectsCarousel = document.getElementById('projectsCarousel');
    if (projectsCarousel) {
        projects.forEach((project, index) => {
            // Создаем слайд Swiper
            const slide = document.createElement('div');
            slide.className = 'swiper-slide';
            
            // Создаем карточку внутри слайда
            const projectCard = document.createElement('div');
            projectCard.className = `project-card ${index === 0 ? 'active' : ''}`;
            projectCard.innerHTML = `
                <div class="project-header">
                    <h3 class="project-title">${project.title}</h3>
                    <span class="project-status ${project.status}">${project.status === 'completed' ? 'Завершен' : 'В разработке'}</span>
                </div>
                <p class="project-description">${project.description}</p>
                <div class="project-tech">
                    ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                <div class="project-links">
                    <div class="project-result">
                        <i class="fas fa-chart-line"></i>
                        <span>${project.links[1]}</span>
                    </div>
                </div>
            `;
            
            slide.appendChild(projectCard);
            projectsCarousel.appendChild(slide);
        });
    }

    // Вставка отзывов в Swiper слайды
    const testimonialsCarousel = document.getElementById('testimonialsCarousel');
    if (testimonialsCarousel) {
        testimonials.forEach((testimonial, index) => {
            // Создаем слайд Swiper
            const slide = document.createElement('div');
            slide.className = 'swiper-slide';
            
            // Создаем карточку внутри слайда
            const testimonialCard = document.createElement('div');
            testimonialCard.className = `testimonial-card ${index === 0 ? 'active' : ''}`;

            testimonialCard.innerHTML = `
                <div class="testimonial-content">
                    <p class="testimonial-text">${testimonial.text}</p>
                </div>
                <div class="testimonial-author">
                    <div class="author-avatar">
                        <i class="fas fa-user-tie"></i>
                    </div>
                    <div class="author-info">
                        <h4 class="author-name">${testimonial.name}</h4>
                        <p class="author-role">${testimonial.role}</p>
                    </div>
                </div>
            `;
            
            slide.appendChild(testimonialCard);
            testimonialsCarousel.appendChild(slide);
        });
    }

    // Инициализация Swiper для проектов в золотой теме
    if (document.querySelector('.projectsSwiper')) {
        const projectsSwiper = new Swiper('.projectsSwiper', {
            slidesPerView: 1,
            spaceBetween: 25,
            loop: true,
            speed: 600,
            grabCursor: true,
            effect: 'slide',
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                dynamicBullets: true,
                renderBullet: function (index, className) {
                    return '<span class="' + className + '"><i class="fas fa-circle"></i></span>';
                }
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true
            },
            breakpoints: {
                640: {
                    slidesPerView: 1,
                    spaceBetween: 20
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 25
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 30
                },
                1200: {
                    slidesPerView: 4,
                    spaceBetween: 35
                }
            },
            on: {
                init: function () {
                    console.log('✅ Swiper проектов инициализирован в золотой теме');
                }
            }
        });
    }
    
    // Инициализация Swiper для отзывов в золотой теме
    if (document.querySelector('.testimonialsSwiper')) {
        const testimonialsSwiper = new Swiper('.testimonialsSwiper', {
            slidesPerView: 1,
            spaceBetween: 25,
            loop: true,
            speed: 600,
            grabCursor: true,
            effect: 'slide',
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                dynamicBullets: true,
                renderBullet: function (index, className) {
                    return '<span class="' + className + '"><i class="fas fa-circle"></i></span>';
                }
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            autoplay: {
                delay: 7000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true
            },
            breakpoints: {
                640: {
                    slidesPerView: 1,
                    spaceBetween: 20
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 25
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 30
                }
            },
            on: {
                init: function () {
                    console.log('✅ Swiper отзывов инициализирован в золотой теме');
                }
            }
        });
    }
    
    console.log('🎉 Все карусели инициализированы');
});