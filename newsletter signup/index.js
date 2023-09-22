document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const emailInput = document.getElementById('email');
    const successMessage = document.querySelector('.success_message');
    const errorMessage = document.createElement('div');
    errorMessage.classList.add('error_message');
  
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const email = emailInput.value.trim();
      displaySuccessMessage(email);
    });
  
    function displaySuccessMessage(email) {
      emailInput.classList.remove('input_error');
      successMessage.style.display = 'flex';
      document.querySelector('.container').style.display = 'none';
  
      const successMessageText = `A confirmation email has been sent to ${email}.com. Please open it and click the button inside to confirm your subscription.`;
      successMessage.querySelector('p').textContent = successMessageText;
  
      const dismissButton = successMessage.querySelector('.dismiss_button');
      dismissButton.addEventListener('click', function () {
        location.reload();
      });
    }
  });
  