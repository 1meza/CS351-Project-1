// JavaScript Document

(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation');

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      let isValid = true;
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
        isValid = false;
      }

      const optionalFields = form.querySelectorAll('#inputAddress, #inputAddress2 ,#inputCity, #inputState, #inputZip, #inputPhone');
      optionalFields.forEach(field => {
        if (field.value.trim() !== '') {
          if (!field.checkValidity()) {
            field.classList.add('is-invalid');
            isValid = false;
          } else {
            field.classList.remove('is-invalid');
          }
        } else {
          // If the field is empty, remove any invalid class that might be set
          field.classList.remove('is-invalid');
        }
      });

      form.classList.add('was-validated');
    }, false);
  });
})();
