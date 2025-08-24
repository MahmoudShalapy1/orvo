// langMounted.js
import i18n from "../i18n/index";

// Check if the language is already set in localStorage
const savedLanguage = localStorage.getItem("language");

// Set the default language to Arabic if not already set
if (!savedLanguage || (savedLanguage !== "ar" && savedLanguage !== "en")) {
  localStorage.setItem("language", "en");
  i18n.locale = "en";
} else {
  i18n.locale = savedLanguage;
}

// Set the direction and lang attribute based on the selected language
if (localStorage.getItem("language") === "ar") {
  document.body.style.direction = "rtl";
  document.querySelector("html").setAttribute("lang", "ar");
} else {
  document.body.style.direction = "ltr";
  document.querySelector("html").setAttribute("lang", "en");
}
