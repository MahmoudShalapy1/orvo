<template>
  <nav class="navbar p-0 navbar-expand-lg header-nav py-1 px-0 bg-header shadow-sm">
    <div class="container d-flex justify-content-between align-items-center">
      <div
        class="main-nav col-lg-5 d-flex justify-content-start align-items-center"
      >
        <ul class="navbar-nav d-none d-lg-flex align-items-center">
          <li class="nav-item">
            <router-link
              to="/"
              class="nav-link position-relative px-2"
              title="الصفحة الرئيسية"
              aria-label="الصفحة الرئيسية"
              >الصفحة الرئيسية</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              to=""
              class="nav-link position-relative px-2"
              title="الماركات"
              aria-label="تصفح الماركات"
              >الماركات</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              to="/"
              class="nav-link position-relative px-2"
              title="رجالي"
              aria-label="منتجات رجالية"
              >رجالي</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              to="/"
              class="nav-link px-2"
              title="حريمي"
              aria-label="منتجات نسائية"
              >حريمي</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              to=""
              class="nav-link  position-relative px-2"
              title="من نحن"
              aria-label="تعرف على شركتنا"
              >من نحن؟</router-link
            >
          </li>
        </ul>
        <button
          class="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="قائمة التنقل"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>

      <div
        class="offcanvas offcanvas-start d-lg-none"
        tabindex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div
          class="offcanvas-header bg-header w-100 position-relative align-items-center border-bottom"
        >
          <h5 class="offcanvas-title" id="offcanvasNavbarLabel">القائمة</h5>
          <button
            type="button"
            class="btn-close position-absolute"
            data-bs-dismiss="offcanvas"
            aria-label="إغلاق القائمة"
          ></button>
        </div>
        <div class="offcanvas-body p-0">
          <ul class="navbar-nav pe-3">
            <li class="nav-item">
              <router-link to="/" class="nav-link position-relative" title="الصفحة الرئيسية"
                >الصفحة الرئيسية</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="" class="nav-link position-relative" title="الماركات"
                >الماركات</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/" class="nav-link position-relative" title="رجالي"
                >رجالي</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/" class="nav-link position-relative" title="حريمي"
                >حريمي</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="" class="nav-link position-relative" title="من نحن"
                >من نحن؟</router-link
              >
            </li>

            <li
              class="nav-item p-2 d-flex justify-content-center align-items-center border-0"
            >
              <div class="search-box rounded-3 d-flex align-items-center shadow-sm bg-light position-relative w-100 p-2">
                <input
                  type="search"
                  class="w-100"
                  placeholder="ابحث..."
                  aria-label="حقل البحث"
                />
                <button
                  type="button"
                  class="search-btn position-absolute"
                  aria-label="زر البحث"
                >
                  <i class="bi bi-search"></i>
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div
        class="logo-container col-2 d-flex justify-content-center align-items-center"
      >
        <a
          class="navbar-brand d-flex justify-content-center align-items-center w-100"
          href="/"
          title="الرئيسية"
          aria-label="الصفحة الرئيسية"
        >
          <img
            src="/src/assets/images/icon.png"
            alt="ORVO Logo - عودة إلى الصفحة الرئيسية"
            width="100"
            height="100"
            loading="lazy"
          />
        </a>
      </div>

      <div
        class="right-actions col-lg-5 d-flex justify-content-end align-items-center gap-3"
      >
        <div class="search-box rounded-3 d-flex align-items-center shadow-sm bg-light position-relative d-none d-md-flex p-2">
          <input
            type="search"
            placeholder="ابحث..."
            aria-label="حقل البحث"
          />
          <button
            type="button"
            class="search-btn position-absolute"
            aria-label="زر البحث"
          >
            <i class="bi bi-search"></i>
          </button>
        </div>
        <div class="action-icons d-flex gap-2">
          <router-link
            to="/cart"
            class="icon-link"
            title="سلة التسوق"
            aria-label="سلة التسوق"
            ><i class="bi fs-5 bi-cart4"></i
          ></router-link>
          <router-link
            to="/wishlist"
            class="icon-link"
            title="قائمة الأمنيات"
            aria-label="قائمة الأمنيات"
            ><i class="bi fs-5 bi-heart"></i
          ></router-link>
          <router-link
            to="/profile"
            class="icon-link"
            title="حسابي"
            aria-label="صفحة الحساب"
            ><i class="bi fs-5 bi-person-fill"></i
          ></router-link>
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
      isDropdownOpen: false
    };
  },
  methods: {
    toggleNavbar() {
      this.isNavbarOpen = !this.isNavbarOpen;
    },
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    }
  }
};
</script>

<style lang="scss" scoped>
.bg-header {
  background-color: var(--bg-beige-100, #f8f5ee);
}

.nav-link {
  font-weight: 700;
  color: var(--text-200, #4a4a4a);
  transition: color 0.3s ease;

  &:hover {
    color: var(--primary-100, #a27f47);
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -5px;
    right: 50%;
    transform: translateX(50%);
    width: 0;
    height: 2px;
    background-color: var(--primary-100, #a27f47);
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
}

.icon-link {
  color: var(--text-200, #4a4a4a);
  transition: color 0.3s ease, transform 0.3s ease;
  &:hover {
    color: var(--primary-100, #a27f47);
    transform: scale(1.1);
  }
}


.search-box {
  overflow: hidden;
  height: 45px;
  width: 250px;
  transition: box-shadow 0.3s ease;
  border: 1px solid var(--border-color, #e0e0e0);

  &:focus-within {
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    border-color: var(--primary-100, #a27f47);
  }

  input {
    border: none;
    outline: none;
    padding: 0 1rem;
    font-size: 14px;
    background: transparent;
    flex-grow: 1;
    color: #333;
    &::placeholder {
      color: #999;
    }
  }

  .search-btn {
    background-color: transparent;
    left: 1rem;
    border: none;
    padding: 0 1rem;
    cursor: pointer;
    color: var(--text-200, #4a4a4a);
    transition: color 0.3s ease;
    &:hover {
      color: var(--primary-100, #a27f47);
    }
  }
}
.offcanvas {
  background-color: var(--bg-beige-100, #f8f5ee);
  .offcanvas-header {
    background-color: var(--primary-100, #a27f47);
    color: white;
    .btn-close {
      filter: invert(1);
      left: 1rem;
    }
  }

  .nav-item {
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  }
  .nav-link {
    font-weight: 700;
    color: var(--text-200, #4a4a4a);
    padding: 1rem 1.5rem;
    transition: background-color 0.3s ease, color 0.3s ease;
    &:hover {
      background-color: var(--primary-100, #a27f47);
      color: white;
    }
  }
}
</style>
