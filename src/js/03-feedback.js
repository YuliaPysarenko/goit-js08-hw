import LodashThrottle from "lodash.throttle";

console.log(LodashThrottle);

 const form = document.querySelector(`.feedback-form`);
const formInput = document.querySelector(`.feedback-form  input`);
const formTextarea = document.querySelector(`.feedback-form textarea`);


 form.addEventListener(`submit`, onSubmitForm);
 form.addEventListener(`input`, throttle(onAllForm, 500));


const STORAGE_KEY = `feedback-form-state`;
const ObjectForm = {};

//     

populateTextareaInput()

 function onSubmitForm(evt) {
    evt.preventDefault();
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}

 function onAllForm(evt) {
    const message = evt.target.value;
    localStorage.setItem(STORAGE_KEY, message);
// const ObjectForm = {
// elements: { name, value }
//   } = evt.currentTarget;

    const formImailMessage = ObjectForm[evt.target.name] = evt.target.value;
    const stringifyObjectForm = JSON.stringify(formImailMessage);
    const parseObjectForm = JSON.parse(stringifyObjectForm);

    console.log(parseObjectForm)
}

 function populateTextareaInput() {
    const saveMessage = localStorage.getItem(STORAGE_KEY);
    if (saveMessage) {
        form.input = saveMessage;
       
    }
}

