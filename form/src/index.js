// form

/* 
Email       =>    min-length 8
  "example@example.com"
Country     =>    [Gg]ermany || [Ddeutschland]
  "Germany"
Zip Code    =>    01000 - 97999
  "01000 - 97999"
PW          =>    min-length: 8, max-length: 20, containing: Aa1$ (unicodes)
PW Conf     =>    equal to pw
*/

/*
form 
  h2      =>                                                =>    "Enter your stuff."
  p       =>                                                =>    "*required fileds"
  label   =>    for "mail"                                  =>    "E-Mail"
  input   =>    type "email" id "mail" name "mail"  
  input   =>    button id "button"                          =>    Submit       
*/
let mail = document.getElementById('mail');
let validateMail = function validateMail() {
  if (mail.validity.tooShort) {
    mail.setCustomValidity('At least 8 characters needed.');
    mail.reportValidity();
  } else if (mail.validity.typeMismatch) {
    mail.setCustomValidity('Not in valid E-Mail form yet.');
  }
};

let country = document.getElementById('country');
let validateCountry = function () {
  if (country.validity.tooShort) {
    country.setCustomValidity('At least 8 characters needed.');
    country.reportValidity();
  }
};
let form = document.querySelector('.form');
let validate = function validate(event) {
  if (event.target.id === 'mail') {
    mail.setCustomValidity('');
    validateMail();
  }
  if (event.target.id === 'country') {
    country.setCustomValidity('');
    validateCountry();
  }
};
form.addEventListener('input', validate);
