import lodash from 'lodash';
import '../css/03-feedback.css';


const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('.feedback-form textarea'),
    email: document.querySelector('.feedback-form input'),
};
const STORAGE_OBJ = 'feedback-form-state';

const formData = {};

refs.form.addEventListener('submit', onFormSubmit);

refs.form.addEventListener('input', lodash.throttle(onFormInput, 500));


favorite();

function onFormSubmit(e) { 
    e.preventDefault();

    console.log('send form');
    console.log(formData)
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_OBJ);
    
}

//object
function onFormInput(event) {
    formData[event.target.name] = event.target.value;
    localStorage.setItem(STORAGE_OBJ, JSON.stringify(formData));
    
}

function favorite(e) {
    const savedInfo = localStorage.getItem(STORAGE_OBJ);
    const parsedInfo = JSON.parse(savedInfo);
    if (parsedInfo) {
        console.log('parsedInfo ->', parsedInfo);
        if (parsedInfo.email) {
            refs.email.value = parsedInfo.email;
            
        }
        if (parsedInfo.message) {
            refs.textarea.value = parsedInfo.message;
        }
    }
//    console.log()


}
