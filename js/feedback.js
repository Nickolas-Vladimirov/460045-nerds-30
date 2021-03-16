const feedbackButton = document.querySelector(".feedback-button");
const feedbackPopup = document.querySelector(".modal-feedback");
const feedbackClose = feedbackPopup.querySelector(".button-close");
const feedbackForm = feedbackPopup.querySelector(".feedback-form");
const feedbackLogin = feedbackPopup.querySelector(".feedback-login");
const feedbackEmail = feedbackPopup.querySelector(".feedback-email");

let isStorageSupport = true;
let storage = "";

try{
  storage = localStorage.getItem("login")
}catch(err){
  isStorageSupport = false;
}

feedbackButton.addEventListener("click", function(evt){
  evt.preventDefault();
  feedbackPopup.classList.add("modal-show");

  if(storage){
    feedbackLogin.value = storage;
    feedbackEmail.focus();
  }else{
    feedbackLogin.focus();
  }

  feedbackLogin.focus();
});

feedbackClose.addEventListener("click", function(evt){
  evt.preventDefault();
  feedbackPopup.classList.remove("modal-show");
  feedbackPopup.classList.remove("modal-error");
});

feedbackForm.addEventListener("submit", function(evt){
  if(!feedbackLogin.value || !feedbackEmail.value){
    evt.preventDefault();
    feedbackPopup.classList.remove("modal-error")
    feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
    feedbackPopup.classList.add("modal-error");
  }else{
    if (isStorageSupport){
      localStorage.setItem("login", feedbackLogin.value);
    }
  }
});

window.addEventListener("keydown", function(evt){
  if(evt.keyCode === 27){
    if(feedbackPopup.classList.contains("modal-show")){
      evt.preventDefault();
      feedbackPopup.classList.remove("modal-show");
      feedbackPopup.classList.remove("modal-error");
    }
  }
});
