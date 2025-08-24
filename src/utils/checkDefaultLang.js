// languageInitializer.js
export default function initializeLanguage(i18n) {
  // Check if the language is already set in localStorage
  const savedLanguage = localStorage.getItem("language");
  if (savedLanguage) {
    // If a language is already saved, use it
    i18n.locale = savedLanguage;
  } else {
    // If no language is saved, use "en" as the default
    i18n.locale = "en";
    localStorage.setItem("language", "en");
  }
}
