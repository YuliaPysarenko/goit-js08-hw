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
     const messege = ObjectForm[evt.target.name] = evt.target.value;
    
       const stringifyMessege = JSON.stringify(messege);

     localStorage.setItem(STORAGE_KEY, stringifyMessege);
      
}

 function populateTextareaInput() {
    const saveMessage = localStorage.getItem(STORAGE_KEY);
     if (saveMessage) {
      
    saveMessage === JSON.parse(stringifyMessege);
    }
}

