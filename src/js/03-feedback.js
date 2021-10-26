import throttle from 'lodash.throttle';

const STORAGE_KEY = "feedback-form-state";

const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector(".feedback-form input"),
    textarea: document.querySelector(".feedback-form textarea"),
  };

  const formData = {};

  refs.form.addEventListener("input", throttle(onFormInput, 500));
  refs.form.addEventListener("submit", onFormSubmit);

  function onFormInput(event) {
    formData[event.target.name] = event.target.value;
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  };

  const savedInput = localStorage.getItem(STORAGE_KEY)
  const parsedSavedInput = JSON.parse(savedInput)

  if (savedInput) {
    refs.input.value = parsedSavedInput.email;
    refs.textarea.value = parsedSavedInput.message;
  }

  function onFormSubmit(event) {
    event.preventDefault();

    console.log(formData);
    event.target.reset();
    localStorage.removeItem(STORAGE_KEY);

  }
