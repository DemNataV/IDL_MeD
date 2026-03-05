// Обработка формы "Присоединиться к команде"
document.addEventListener('DOMContentLoaded', function() {
    const joinTeamForm = document.getElementById('joinTeamForm');
    const resumeFileInput = document.getElementById('resumeFile');
    const fileNameDisplay = document.getElementById('fileName');
    
    if (!joinTeamForm) return;
    
    // Отображение имени выбранного файла
    if (resumeFileInput && fileNameDisplay) {
        resumeFileInput.addEventListener('change', function() {
            if (this.files.length > 0) {
                fileNameDisplay.textContent = this.files[0].name;
                fileNameDisplay.style.color = '#F8E042';
            } else {
                fileNameDisplay.textContent = 'Файл не выбран';
                fileNameDisplay.style.color = '';
            }
        });
    }
    
    // Обработка отправки формы
    joinTeamForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Валидация формы
        const nameInput = document.getElementById('applicantName');
        const emailInput = document.getElementById('applicantEmail');
        const fileInput = document.getElementById('resumeFile');
        
        let isValid = true;
        let errorMessage = '';
        
        // Проверка имени
        if (!nameInput.value.trim()) {
            isValid = false;
            errorMessage = 'Пожалуйста, введите ваше имя';
            nameInput.style.borderColor = '#F44336';
        } else {
            nameInput.style.borderColor = '';
        }
        
        // Проверка email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailInput.value.trim() || !emailRegex.test(emailInput.value)) {
            isValid = false;
            errorMessage = 'Пожалуйста, введите корректный email';
            emailInput.style.borderColor = '#F44336';
        } else {
            emailInput.style.borderColor = '';
        }
        
        // Проверка файла
        if (!fileInput.files.length) {
            isValid = false;
            errorMessage = 'Пожалуйста, прикрепите ваше резюме';
            document.querySelector('.file-upload').style.borderColor = '#F44336';
        } else {
            const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'text/plain'];
            const file = fileInput.files[0];
            
            if (!allowedTypes.includes(file.type)) {
                isValid = false;
                errorMessage = 'Пожалуйста, выберите файл в формате PDF, DOC, DOCX или TXT';
                document.querySelector('.file-upload').style.borderColor = '#F44336';
            } else if (file.size > 5 * 1024 * 1024) { // 5MB limit
                isValid = false;
                errorMessage = 'Размер файла не должен превышать 5MB';
                document.querySelector('.file-upload').style.borderColor = '#F44336';
            } else {
                document.querySelector('.file-upload').style.borderColor = '';
            }
        }
        
        if (!isValid) {
            showFormStatus(errorMessage, 'error');
            return;
        }
        
        // Создание FormData для отправки
        const formData = new FormData(this);
        
        // Добавление дополнительных данных
        formData.append('date', new Date().toISOString());
        formData.append('source', 'IDL MëD Career Form');
        
        // Показать состояние загрузки
        const submitButton = document.querySelector('.join-team-btn');
        const originalText = submitButton.innerHTML;
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i><span>Отправка...</span>';
        submitButton.disabled = true;
        
        // Анимация загрузки файла
        const fileUpload = document.querySelector('.file-upload');
        fileUpload.classList.add('uploading');
        
        // В реальном проекте здесь был бы AJAX запрос к серверу
        // Для демо используем имитацию отправки
        setTimeout(() => {
            // Сброс состояния
            submitButton.innerHTML = originalText;
            submitButton.disabled = false;
            fileUpload.classList.remove('uploading');
            
            // Показать успешное сообщение
            showFormStatus('Спасибо! Ваше резюме отправлено. Мы свяжемся с вами в ближайшее время.', 'success');
            
            // Очистка формы
            joinTeamForm.reset();
            if (fileNameDisplay) {
                fileNameDisplay.textContent = 'Файл не выбран';
                fileNameDisplay.style.color = '';
            }
            
            // В реальном проекте:
            // fetch('/api/join-team', {
            //     method: 'POST',
            //     body: formData
            // })
            // .then(response => response.json())
            // .then(data => {
            //     if (data.success) {
            //         showFormStatus('Спасибо! Ваше резюме отправлено.', 'success');
            //         joinTeamForm.reset();
            //     } else {
            //         showFormStatus('Ошибка отправки. Пожалуйста, попробуйте еще раз.', 'error');
            //     }
            // })
            // .catch(error => {
            //     showFormStatus('Ошибка соединения. Пожалуйста, попробуйте еще раз.', 'error');
            // })
            // .finally(() => {
            //     submitButton.innerHTML = originalText;
            //     submitButton.disabled = false;
            //     fileUpload.classList.remove('uploading');
            // });
            
        }, 2000); // Имитация задержки сети
    });
    
    // Функция показа статуса формы
    function showFormStatus(message, type) {
        // Удаляем старые статусы
        const oldStatus = document.querySelector('.form-status');
        if (oldStatus) {
            oldStatus.remove();
        }
        
        // Создаем новый элемент статуса
        const statusElement = document.createElement('div');
        statusElement.className = `form-status ${type}`;
        statusElement.textContent = message;
        
        // Добавляем после формы
        const submitButton = document.querySelector('.join-team-btn');
        if (submitButton) {
            submitButton.parentNode.insertBefore(statusElement, submitButton.nextSibling);
        }
        
        // Автоматическое скрытие через 5 секунд
        if (type === 'success') {
            setTimeout(() => {
                statusElement.style.opacity = '0';
                statusElement.style.transition = 'opacity 0.5s ease';
                setTimeout(() => {
                    if (statusElement.parentNode) {
                        statusElement.parentNode.removeChild(statusElement);
                    }
                }, 500);
            }, 5000);
        }
    }
    
    // Валидация в реальном времени
    const inputs = joinTeamForm.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            this.style.borderColor = '';
            
            // Скрываем сообщения об ошибках при вводе
            const statusElement = document.querySelector('.form-status');
            if (statusElement && !statusElement.classList.contains('success')) {
                statusElement.remove();
            }
        });
    });
});