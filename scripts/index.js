import { FormValidator } from "./FormValidator.js";
import { FormContolls } from "./FormControl.js";

const formSelectorsObj = {
  formSelector: ".change-pass__form", //<form>
  fieldsetSelector: ".change-pass__form-fieldset", //<fieldset>
  inputSelector: ".change-pass__form-input", //<input>
  buttonSelector: ".change-pass__form-submit-button", //<button>
  validationErrorSelector: "change-pass__form-input_validation_error", //<input>

  captionSelector: "change-pass__caption-main",
  showPass: "change-pass__show-pass",

  requiredForms: {
    //<input>
    fieldLoginSelector: "change-pass__form-input_field_email",
    fieldControlWordSelector: "change-pass__form-input_field_control-word",
    fieldPasswordSelector: "change-pass__form-input_field_password",
    fieldRepPasswordSelector: "change-pass__form-input_field_password-rep",
  },
};

const placeholders = {
  "email-field": "Email / Логин",
  "control-word-field": "Контрольная строка",
  "password-field": "Подтверждение пароля",
  "password-rep-field": "Обязательные поля"
}

const validateForm = new FormValidator(
  formSelectorsObj,
  formSelectorsObj.formSelector
);

const controllForm = new FormContolls(
  formSelectorsObj,
  formSelectorsObj.formSelector,
  placeholders
);


validateForm.enableValidation();
controllForm.enableControll();
