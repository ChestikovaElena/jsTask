const btn = document.querySelector('.btn');
const body = document.body;
const successModal = createModal("The message has been sent, thank you!");

btn.addEventListener('click', function(event) {
  body.appendChild(successModal);
})

function createModal(content) {
  const overlay = document.createElement('div');
  overlay.classList.add('overlay');

  const modalWrapper = document.createElement('div');
  modalWrapper.classList.add('modal-wrapper');
  
  const modalContent = document.createElement('div');
  modalContent.classList.add('modal-content');
  modalContent.innerHTML = content;

  const close = document.createElement('a');
  close.classList.add('close');
  close.textContent = 'x';
  close.href = '#';

  overlay.appendChild(modalWrapper);
  modalWrapper.appendChild(close);
  modalWrapper.appendChild(modalContent);
  close.addEventListener('click', function(event) {
    event.preventDefault();
    body.removeChild(overlay);
  })
  
  ///закрытие по кнопке ESC
  document.body.addEventListener('keyup', function(e) {
    var key = e.keyCode;

    if (key == 27) {
      close.click();
    }
  })

  //закрытие при клике вне окна
  overlay.addEventListener('click', function(event) {
    console.log(event.target);
    if (!event.target.classList.contains('content')) {
      close.click();
    }

    // if (event.target == overlay) {
    //   close.click();
    // }
  })

  return overlay;
}

