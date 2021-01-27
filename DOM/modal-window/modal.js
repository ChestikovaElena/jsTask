const btn = document.querySelector('.btn');

btn.addEventListener('click', function(event) {
  event.preventDefault();
  const overlay = document.querySelector('.overlay');
  const wrapper = document.querySelector('.wrapper');

  overlay.classList.add('overlay--active');
  let modalWrapper = document.createElement('div');
  modalWrapper.style.backgroundColor = "#333";
  modalWrapper.style.width = "50%";
  modalWrapper.style.padding = "10px";
  modalWrapper.style.borderRadius = "5px";
  modalWrapper.style.position = "relative";
  overlay.appendChild(modalWrapper);

  let modalContent = document.createElement('div');
  modalContent.innerHTML = 'Hello, <b>world</b>!';
  modalContent.style.fontSize = "18px";
  modalContent.style.color = 'white';
  modalContent.style.textAlign = 'left';
  modalWrapper.appendChild(modalContent);

  var close = document.createElement('a');
  close.innerHTML = 'x';
  close.style.color = 'white';
  close.style.backgroundColor = 'red';
  close.style.width = '20px';
  close.style.height = '20px';
  close.style.borderRadius = '50%';
  close.style.top = '-10px';
  close.style.right = '-5px';
  close.style.textAlign = 'center';
  close.style.cursor = 'pointer';
  close.style.position = 'absolute';
  modalWrapper.appendChild(close);

  close.addEventListener('click', function(event) {
    event.preventDefault();

    overlay.classList.remove('overlay--active');
    modalWrapper.remove();
    modalContent.remove();
    close.remove();
  })
  
  ///закрытие по кнопке ESC
  document.body.addEventListener('keyup', function(e) {
    var key = e.keyCode;

    if (key == 27) {
      overlay.classList.remove('overlay--active');
      modalWrapper.remove();
      modalContent.remove();
      close.remove();
    }
  })

  //закрытие при клике вне окна - пока работает не верно, при нажатии на окно тоже закрывается
  overlay.addEventListener('click', function(event) {
    event.preventDefault();
    overlay.classList.remove('overlay--active');
    modalWrapper.remove();
    modalContent.remove();
    close.remove();
  })
})

