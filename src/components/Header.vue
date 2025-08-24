<template>
  <nav class="navbar p-0 navbar-expand-lg login-nav bg-header shadow-sm">
    <div
      class="container d-flex justify-content-between align-items-center"
      dir="ltr"
    >
      <div class="logo col-2 order-1">
        <a class="navbar-brand w-75" href="/" title="Home" aria-label="Home">
          <img
            src="/src/assets/images/icon.png"
            class="img-fluid"
            alt="ORVO Logo"
            title="ORVO"
            width="100"
            height="100"
          />
        </a>
      </div>

      <div
        class="icons col-3 order-2 order-md-3 d-flex gap-2 justify-content-center align-items-center"
      >
        <router-link><i class="bi fs-5 bi-search"></i></router-link>
        <router-link><i class="bi fs-5 bi-cart4"></i></router-link>
        <router-link><i class="bi fs-5 bi-heart"></i></router-link>
        <router-link><i class="bi fs-5 bi-person-fill"></i></router-link>
      </div>

      <div
        class="collapse navbar-collapse order-4 order-md-2 d-lg-flex col-lg-8 justify-content-center align-items-center"
        id="navbarSupportedContent"
      >
        <ul
          class="navbar-nav w-100 d-flex justify-content-center align-items-center gap-2"
        >
          <li>
            <router-link
              to="/"
              class="text-main fw-bold fs-6 px-2"
              title="Home"
              aria-label="Home"
              >Home</router-link
            >
          </li>
          <li>
            <router-link
              to="/"
              class="text-main fw-bold fs-6 px-2"
              title="Categories"
              aria-label="Categories"
              >Categories</router-link
            >
          </li>
          <li>
            <router-link
              to="/"
              class="text-main fw-bold fs-6 px-2"
              title="Brands"
              aria-label="Brands"
              >Brands</router-link
            >
          </li>
          <li>
            <router-link
              to="/"
              class="text-main fw-bold fs-6 px-2"
              title="Best Sellers"
              aria-label="Best Sellers"
              >Best Sellers</router-link
            >
          </li>
          <li>
            <router-link
              to="/"
              class="text-main fw-bold fs-6 px-2"
              title="About Us"
              aria-label="About Us"
              >About Us</router-link
            >
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link text-main fw-bold fs-6 px-2"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="bi bi-language"></i> {{ $t("Language") }}
              <i class="bi bi-angle-down"></i>
            </a>
            <ul class="dropdown-menu">
              <li>
                <a
                  class="dropdown-item"
                  href="#"
                  :aria-label="$t('English')"
                  @click="toggleLanguage"
                >
                  {{ $t("English") }}
                </a>
              </li>
              <li>
                <a
                  class="dropdown-item"
                  href="#"
                  :aria-label="$t('Arabic')"
                  @click="toggleLanguage"
                >
                  {{ $t("Arabic") }}
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <button
        class="navbar-toggler order-3 d-lg-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  name: "HeaderPage",
  data() {
    return {
      isNavbarOpen: false,
      isDropdownOpen: false
    };
  },
  methods: {
    toggleNavbar() {
      this.isNavbarOpen = !this.isNavbarOpen;
    },
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    // !ToggleLanguage
    toggleLanguage() {
      const lang = this.$i18n.locale === "en" ? "ar" : "en";

      if (this.$i18n.locale === lang) {
        return;
      }

      window.location.reload();
      localStorage.setItem("language", lang);
    }
  }
};
</script>

<style lang="scss" scoped>
/* Custom styles for LTR (English) */
.icons a {
  margin-left: 10px;
}

/* Custom styles for RTL (Arabic) */
[dir="rtl"] .icons a {
  margin-left: 0;
  margin-right: 10px;
}

/* الألوان حسب لوحتك */
.bg-header {
  background-color: var(--bg-beige-100); /* استخدم اللون البيج الفاتح */
}

/* تنسيق الروابط */
.navbar-nav .router-link-active,
.navbar-nav a {
  color: var(--text-200);
  font-weight: 700;
  transition: color 0.3s;
}

.navbar-nav a:hover {
  color: var(--primary-100);
}

/* تنسيق الأيقونات */
.icons a {
  color: var(--text-200);
  transition: color 0.3s;
}

.icons a:hover {
  color: var(--primary-100);
}
</style>
