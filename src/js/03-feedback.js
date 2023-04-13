// import LodashThrottle from "lodash.throttle";


// export const form = document.querySelector(`.feedback-form`);
// // const formInput = document.querySelector(`.feedback-form  input`);
// // const formTextarea = document.querySelector(`.feedback-form textarea`);


// export const formAddEvtSubmit = form.addEventListener(`submit`, onSubmitForm);
// export const formAddEvtInput = form.addEventListener(`input`, throttle(onAllForm, 500));


// export const STORAGE_KEY = `feedback-form-state`;
// export const ObjectForm = {};

// //     const {
// //     elements: { email, password }
// //   } = event.currentTarget;

// populateTextareaInput()

// export function onSubmitForm(evt) {
//     evt.preventDefault();
//     evt.currentTarget.reset();
//     localStorage.removeItem(STORAGE_KEY);
// }

// export function onAllForm(evt) {
//     const message = evt.target.value;
//     localStorage.setItem(STORAGE_KEY, message);

//     const formImailMessage = ObjectForm[evt.target.name] = evt.target.value;
//     const stringifyObjectForm = JSON.stringify(formImailMessage);
//     const parseObjectForm = JSON.parse(stringifyObjectForm);

//     console.log(parseObjectForm)
// }

// export function populateTextareaInput() {
//     const saveMessage = localStorage.getItem(STORAGE_KEY);
//     if (saveMessage) {
//         form.value = saveMessage;
//     }
// }

