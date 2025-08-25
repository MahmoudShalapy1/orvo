<template>
  <nav class="navbar p-0 navbar-expand-lg login-nav bg-header">
    <div class="container d-flex justify-content-between align-items-center">

      <div class="logo col-2">
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

      <div class="d-none d-lg-flex col-lg-8 justify-content-center align-items-center">
        <ul class="navbar-nav w-100 d-flex justify-content-center align-items-center gap-2">
          <li>
            <router-link
              to="/"
              class="nav-link text-main fw-bold fs-6 px-2"
              title="Home"
              aria-label="Home"
              >Home</router-link
            >
          </li>
          <li>
            <router-link
              to="/"
              class="nav-link text-main fw-bold fs-6 px-2"
              title="Categories"
              aria-label="Categories"
              >Categories</router-link
            >
          </li>
          <li>
            <router-link
              to="/"
              class="nav-link text-main fw-bold fs-6 px-2"
              title="Brands"
              aria-label="Brands"
              >Brands</router-link
            >
          </li>
          <li>
            <router-link
              to=""
              class="nav-link text-main fw-bold fs-6 px-2"
              title="Best Sellers"
              aria-label="Best Sellers"
              >Best Sellers</router-link
            >
          </li>
          <li>
            <router-link
              to=""
              class="nav-link text-main fw-bold fs-6 px-2"
              title="About Us"
              aria-label="About Us"
              >About Us</router-link
            >
          </li>
        </ul>
      </div>

      <div class="icons col-3 d-flex gap-2 justify-content-center align-items-center">
        <router-link><i class="bi fs-5 bi-search"></i></router-link>
        <router-link><i class="bi fs-5 bi-cart4"></i></router-link>
        <router-link><i class="bi fs-5 bi-heart"></i></router-link>
        <router-link><i class="bi fs-5 bi-person-fill"></i></router-link>
      </div>

      <button
        class="navbar-toggler d-lg-none"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div
        class="offcanvas offcanvas-start d-lg-none"
        tabindex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div class="offcanvas-header d-flex justify-content-between align-items-center p-2 bg-header">
          <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
          <button
            type="button"
            class="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
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
                to=""
                class="text-main fw-bold fs-6 px-2"
                title="Categories"
                aria-label="Categories"
                >Categories</router-link
              >
            </li>
            <li>
              <router-link
                to=""
                class="text-main fw-bold fs-6 px-2"
                title="Brands"
                aria-label="Brands"
                >Brands</router-link
              >
            </li>
            <li>
              <router-link
                to=""
                class="text-main fw-bold fs-6 px-2"
                title="Best Sellers"
                aria-label="Best Sellers"
                >Best Sellers</router-link
              >
            </li>
            <li>
              <router-link
                to=""
                class="text-main fw-bold fs-6 px-2"
                title="About Us"
                aria-label="About Us"
                >About Us</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "HeaderPage",
  data() {
    return {
      isNavbarOpen: false,
      isDropdownOpen: false,
    };
  },
  methods: {
    toggleNavbar() {
      this.isNavbarOpen = !this.isNavbarOpen;
    },
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
  },
};
</script>

<style lang="scss" scoped>
/* Common Styles */
.bg-header {
  background-color: var(--bg-beige-100);
}

.navbar-nav .nav-link,
.icons a {
  color: var(--text-200);
  font-weight: 700;
  transition: color 0.3s;
}

.navbar-nav .nav-link:hover,
.icons a:hover {
  color: var(--primary-100);
}



/* Offcanvas Header Styles (You may need to define --bg-main in your global styles) */
.offcanvas-header.bg-main {
  background-color: var(--primary-100, #a27f47);
  color: white;
}
.offcanvas-header.bg-main .offcanvas-title {
  color: white;
}
.offcanvas-header.bg-main .btn-close {
  filter: invert(1);
  left: 2rem;
}
</style>