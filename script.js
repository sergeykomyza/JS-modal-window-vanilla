const modals = () => {
  
    const overlay = document.querySelector('.overlay');
  
    function bindModal(triggerSelector, modalSelector, closeSelector){

        const trigger = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              close = document.querySelector(closeSelector);
              
        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if(e.target){
                    e.preventDefault();
                }
                overlay.classList.add('overlay--active');
                modal.style.display = "block";
                modal.classList.remove('bounceOutUp');
                modal.classList.add('bounceInDown');
                document.body.style.overflow = "hidden";
            });
        });
        close.addEventListener('click', () => {
            modal.classList.remove('bounceInDown');
            modal.classList.add('bounceOutUp');
            overlay.classList.remove('overlay--active');
            document.body.style.overflow = "";
        });
        overlay.addEventListener('click', (e) => {
            if(e.target === overlay){
                modal.classList.remove('bounceInDown');
                modal.classList.add('bounceOutUp');
                overlay.classList.remove('overlay--active');
                document.body.style.overflow = "";
            }
        });
    }

    function showModalByTime(selector, time){
        setTimeout(function() {
            document.querySelector(selector).style.display = 'block';
            document.querySelector(selector).classList.add('bounceInDown');
            overlay.classList.add('overlay--active');
            document.body.style.overflow = "hidden";
        }, time);
    }
  
    bindModal('.popup-1-btn', '.popup-1', '.popup-1 .popup-close');
    bindModal('.popup-2-btn', '.popup-2', '.popup-2 .popup-close');
    bindModal('.popup-3-btn', '.popup-3', '.popup-3 .popup-close');

    showModalByTime('.popup-1', 3000);
};

modals();