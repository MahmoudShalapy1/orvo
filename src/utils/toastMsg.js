import { useToast } from "vue-toastification";

const successToast = (content) => {
    if (localStorage.getItem('language') == 'en') {
        // Get toast interface
        const toast = useToast();
        toast.success(content, {
          position: "top-left",
          ltr: true,
        });
    } else if (localStorage.getItem("language") == "ar") {
        // Get toast interface
        const toast = useToast();
        toast.success(content, {
          position: "top-right",
          rtl: true,
        });
    }
};

const errorToast = (error) => {
  if (localStorage.getItem("language") == "en") {
    // Get toast interface
    const toast = useToast();
    toast.error(error, {
      position: "top-left",
      ltr: true,
    });
  } else if (localStorage.getItem("language") == "ar") {
    // Get toast interface
    const toast = useToast();
    toast.error(error, {
      position: "top-right",
      rtl: true,
    });
  }
};

export default { successToast, errorToast };