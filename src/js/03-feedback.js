import LodashThrottle from "lodash.throttle";

 const form = document.querySelector(`.feedback-form`);
// const formInput = document.querySelector(`.feedback-form  input`);
// const formTextarea = document.querySelector(`.feedback-form textarea`);

 form.addEventListener(`submit`, onSubmitForm);
 form.addEventListener(`input`, LodashThrottle(onAllForm, 500));


const STORAGE_KEY = `feedback-form-state`;
const ObjectForm = {
};

 populateTextareaInput();

 function onSubmitForm(evt) {
    evt.preventDefault();
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}


function onAllForm(evt) {
    ObjectForm[evt.target.name] = evt.target.value;
    
  localStorage.setItem(STORAGE_KEY, JSON.stringify(ObjectForm));

//     const message = ObjectForm[evt.target.name] = evt.target.value;
// ObjectForm.value
//      const stringifyMessage = JSON.stringify(message);
//      localStorage.setItem(STORAGE_KEY, stringifyMessage);
 }

function populateTextareaInput() {
    const saveMessage = localStorage.getItem(STORAGE_KEY);
     if (saveMessage) {  
      JSON.parse(JSON.stringify(ObjectForm));
       form.value = saveMessage;
    }
}

// // 