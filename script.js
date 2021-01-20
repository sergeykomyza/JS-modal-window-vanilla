const modals = () => {

    const overlay = document.querySelector('.overlay'); // подложка модального окна

    function bindModal(triggerSelector, modalSelector) { // функция вызова мод. окна по клику

        const trigger = document.querySelectorAll(triggerSelector), // кнопки вызова мод. окна
            modal = document.querySelector(modalSelector), // селектор мод. окна
            close = modal.querySelector('.popup-close'); // селектор закрытия мод. окна

        trigger.forEach(item => { // перебираем кнопки вызова мод. окна
            item.addEventListener('click', (e) => { // клик по одной из них
                if (e.target) {
                    e.preventDefault(); // отменяем действие браузера по умолчанию
                }
                overlay.classList.add('overlay--active'); // показываем подложку
                modal.style.display = "block"; // показываем мод. окно
                modal.classList.remove('bounceOutUp'); // убираем класс анимации
                modal.classList.add('bounceInDown'); // показываем класс анимации
                document.body.style.overflow = "hidden"; // скрываем скролл окна браузера
            });
        });
        // закрытие по клику по крестику
        close.addEventListener('click', () => { // кликаем по крестику
            modal.classList.remove('bounceInDown'); // убираем класс анимации
            modal.classList.add('bounceOutUp'); // показываем класс анимации (мод. окно уезжает вверх)
            overlay.classList.remove('overlay--active'); // скрываем подложку
            document.body.style.overflow = ""; // возвращаем скролл окна браузера
        });
        // закрытие по клику вне модального окна
        modal.addEventListener('click', (e) => { // кликаем по модальному окну 
            if (e.target === modal) { // если клик был не по контенту модального окна
                modal.classList.remove('bounceInDown'); // убираем класс анимации
                overlay.classList.remove('overlay--active'); // показываем класс анимации (мод. окно уезжает вверх)
                modal.classList.add('bounceOutUp'); // скрываем подложку
                document.body.style.overflow = ""; // возвращаем скролл окна браузера
            }
        });
    }
    // если нужно показать мод. окно при заходе на сайт
    function showModalByTime(selector, time) {
        setTimeout(function () {
            document.querySelector(selector).style.display = 'block';
            document.querySelector(selector).classList.add('bounceInDown');
            overlay.classList.add('overlay--active');
            document.body.style.overflow = "hidden";
        }, time);
    }

    bindModal('.popup-1-btn', '.popup-1');
    bindModal('.popup-2-btn', '.popup-2');
    bindModal('.popup-3-btn', '.popup-3');

    showModalByTime('.popup-1', 3000);
};

modals();