class FormContolls {
  constructor(selectors, currentForm, placeholders) {
    this._formSelector = selectors.formSelector;
    this._inputSelector = selectors.inputSelector;
    this._fieldsetSelector = selectors.fieldsetSelector;

    this._editProfileFormSelector = selectors.editProfileFormSelector;

    this._captionSelector = selectors.captionSelector;

    this._currentForm = currentForm;

    this._placeholders = placeholders;
  }
 
  _hidePlaceholder(formElement, inputElement) {
    const palceholderElement = formElement.querySelector(`.${inputElement.id}-caption`);
    palceholderElement.classList.add(`${this._captionSelector}_visible_hide`);
    palceholderElement.textContent = "";
  }

  _showPlaceholder(formElement, inputElement) {
    if (inputElement.value === "") {
      const palceholderElement = formElement.querySelector(`.${inputElement.id}-caption`);
      palceholderElement.classList.remove(`${this._captionSelector}_visible_hide`);
      palceholderElement.textContent = this._placeholders[inputElement.id];
    }
  }

  _setEventListeners(formElement) {
    const inputList = Array.from(
      formElement.querySelectorAll(this._inputSelector)
    );
    const buttonElement = formElement.querySelector(this._buttonSelector);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener(
        "focus",
        function (event) {
          this._hidePlaceholder(formElement, inputElement);
        }.bind(this)
      );
      inputElement.addEventListener(
        "focusout",
        function (event) {
          this._showPlaceholder(formElement, inputElement);
        }.bind(this)
      );
    });
  }

  enableControll() {
    const formList = Array.from(document.querySelectorAll(this._currentForm));
    formList.forEach((formElement) => {
      const fieldsetList = Array.from(
        formElement.querySelectorAll(this._fieldsetSelector)
      );
      fieldsetList.forEach((fieldSet) => {
        this._setEventListeners(fieldSet);
      });
    });
  }
}

export { FormContolls };
