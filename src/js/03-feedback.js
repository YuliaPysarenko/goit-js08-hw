import LodashThrottle from "lodash.throttle";

 const form = document.querySelector(`.feedback-form`);
//  const formInput = document.querySelector(`.feedback-form`);
// const formTextarea = document.querySelector(`.feedback-form textarea`);

 form.addEventListener(`submit`, onSubmitForm);
 form.addEventListener(`input`, LodashThrottle(onAllForm, 500)); 

const STORAGE_KEY = `feedback-form-state`;
//  const ObjectForm = {};
let ObjectForm = {
  email: '',
  message: '',
};

populateTextareaInput();

function onSubmitForm(evt) {
  evt.preventDefault();
  //  evt.currentTarget.reset();
  //  localStorage.removeItem(STORAGE_KEY);
  const data = JSON.parse(localStorage.getItem(STORAGE_KEY));
  console.log({
    email: data.email,
    message: data.message,
  });
  form.reset();

  localStorage.removeItem(STORAGE_KEY);
  ObjectForm = {
    email: '',
    message: '',
  };                                                                                                       
}

function onAllForm(evt) {
  if (localStorage.getItem(STORAGE_KEY)) {
    ObjectForm = JSON.parse(localStorage.getItem(STORAGE_KEY));
  }
  ObjectForm[evt.target.name] = evt.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(ObjectForm));
  // ObjectForm[evt.target.name] = evt.target.value;
  // localStorage.setItem(STORAGE_KEY, JSON.stringify(ObjectForm));
 }

function populateTextareaInput() {
  const saveMessage = localStorage.getItem(STORAGE_KEY);
  //   if (saveMessage) {
  //     JSON.parse(JSON.stringify(ObjectForm));
  //     formInput.value = saveMessage;
  //     }
  if (saveMessage) {
    const data = JSON.parse(saveMessage);
    form.elements.email.value = data.email;
    form.elements.message.value = data.message;
  }
}
