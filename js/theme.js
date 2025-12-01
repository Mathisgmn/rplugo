const buttons = document.querySelectorAll('#theme');

buttons.forEach((btn) => {
  btn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
  });
});
