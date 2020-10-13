const writeUsLink = document.querySelector(".company-contacts-btn");
const writeUsPopup = document.querySelector(".modal-write-us");
const writeUsClose = writeUsPopup.querySelector(".modal-close");
const writeUsForm = writeUsPopup.querySelector(".write-us-form");
const name = writeUsPopup.querySelector("[id=name]");
const email = writeUsPopup.querySelector("[id=email-email]");
const letterText = writeUsPopup.querySelector("[id=letter]");
let isStorageSupport = true;
let storageName = "";
let storageEmail = "";
let choseFocusField = function () {
    if (storageName) {
        name.value = storageName;
        if (storageEmail) {
            email.value = storageEmail;
            letterText.focus();
        } else {
            email.focus();
        }
    } else {
        name.focus();
    }
}

try {
  storageName = localStorage.getItem("name");
  storageEmail = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

writeUsLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  writeUsPopup.classList.add("modal-show");
  choseFocusField();
});

writeUsClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  writeUsPopup.classList.remove("modal-show");
  writeUsPopup.classList.remove("modal-error");
});

writeUsForm.addEventListener("submit", function (evt) {
  if (!name.value || !email.value || !letterText.value) {
    evt.preventDefault();
    writeUsPopup.classList.remove("modal-error");
    writeUsPopup.offsetWidth = writeUsPopup.offsetWidth;
    writeUsPopup.classList.add("modal-error");
    choseFocusField();
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", name.value);
      localStorage.setItem("email", email.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (writeUsPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      writeUsPopup.classList.remove("modal-show");
      writeUsPopup.classList.remove("modal-error");
    }
  }
});