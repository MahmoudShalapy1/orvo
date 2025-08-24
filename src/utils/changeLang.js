this.$i18n.locale = this.$i18n.locale === "en" ? "ar" : "en";
// Html dir attribute
document.documentElement.dir = this.$i18n.locale === "ar" ? "rtl" : "ltr";
// Lang attribute
document.documentElement.lang = this.$i18n.locale;
// LocalStorage
localStorage.setItem("language", this.$i18n.locale);
// Direction Of The Page
document.body.style.direction = this.$i18n.locale === "ar" ? "rtl" : "ltr";