var openModalBtn = document.getElementById('openModalBtn');
var closeModalBtn = document.getElementById('closeModalBtn');
var modalOverlay = document.getElementById('modalOverlay');
var body = document.body;

openModalBtn.addEventListener('click', function() {
  modalOverlay.style.display = 'block';
  body.classList.add('modal-open');
});

closeModalBtn.addEventListener('click', function() {
  modalOverlay.style.display = 'none';
  body.classList.remove('modal-open');
});

modalOverlay.addEventListener('click', function(event) {
  if (event.target === modalOverlay) {
    modalOverlay.style.display = 'none';
    body.classList.remove('modal-open');
  }
});
