import i18n from "@/i18n";

// fUN For Title Page
export const pageTitle = (title) => {
  return (document.title =
    i18n.locale === "ar" ? "علِمنى - " + title : "Teach Me - " + title);
};
