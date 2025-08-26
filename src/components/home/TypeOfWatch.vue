<template>
  <div class="TypeOfWatch py-5">
    <div class="container">
      <h2 class="text-center fw-bold fs-3 mb-5">استكشف أنواع ساعاتنا</h2>
      <div class="row g-4">
        <div class="col-md-6">
          <div
            class="d-flex flex-column flex-md-row align-items-center watch-card"
          >
            <div class="p-4 flex-fill text-light">
              <h2 class="fw-bold fs-3">ساعات أصلية</h2>
              <p>تصميم خالد، جودة ممتازة، ودقة لا مثيل لها</p>
              <a href="#" class="buy-btn"> اشتري الآن →</a>
            </div>

            <div class="flex-fill">
              <img
                src="/src/assets/images/6.webp"
                class="img-fluid watch-img"
                alt="Original Watch"
              />
            </div>
          </div>
        </div>

        <div class="col-md-6">
          <div
            class="d-flex flex-column flex-md-row align-items-center watch-card"
          >
            <div class="p-4 flex-fill text-light">
              <h2 class="fw-bold fs-3">ساعات المرآة</h2>
              <p>عصرية وأنيقة بكل سهولة. عبّري عن أناقتك في كل لحظة.</p>
              <a href="#" class="buy-btn">اشتري الآن →</a>
            </div>

            <div class="flex-fill">
              <img
                src="/src/assets/images/7.webp"
                class="img-fluid watch-img"
                alt="Mirror Watch"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="Original collection">
    <div class="container">
      <h2 class="text-center fw-bold">Original collection</h2>
      <div class="d-none d-md-block">
        <div
          class="d-flex gap-3 justify-content-center align-items-center mt-5"
        >
          <div class="logo-prand shadow rounded p-5">
            <img
              width="100%"
              class="img-fluid"
              src="/src/assets/images/Tommy_Hilfiger-Logo-PNG5.webp"
            />
          </div>
          <div class="logo-prand shadow rounded p-5">
            <img
              width="100%"
              class="img-fluid"
              src="/src/assets/images/Tommy_Hilfiger-Logo-PNG5.webp"
            />
          </div>
          <div class="logo-prand shadow rounded p-5">
            <img
              width="100%"
              class="img-fluid"
              src="/src/assets/images/Tommy_Hilfiger-Logo-PNG5.webp"
            />
          </div>
          <div class="logo-prand shadow rounded p-5">
            <img
              width="100%"
              class="img-fluid"
              src="/src/assets/images/Tommy_Hilfiger-Logo-PNG5.webp"
            />
          </div>
          <div class="logo-prand shadow rounded p-5">
            <img
              width="100%"
              class="img-fluid"
              src="/src/assets/images/Tommy_Hilfiger-Logo-PNG5.webp"
            />
          </div>
          <div class="logo-prand shadow rounded p-5">
            <img
              width="100%"
              class="img-fluid"
              src="/src/assets/images/Tommy_Hilfiger-Logo-PNG5.webp"
            />
          </div>
        </div>
      </div>
      <!--slider mobil-->
      <div class="d-block d-md-none">
        <swiper
          :slidesPerView="1"
          :spaceBetween="10"
          :pagination="{
            clickable: true
          }"
          :breakpoints="{
            '@0.00': {
              slidesPerView: 1,
              spaceBetween: 10
            },
            '@0.75': {
              slidesPerView: 2,
              spaceBetween: 20
            },
            '@1.00': {
              slidesPerView: 3,
              spaceBetween: 40
            },
            '@1.50': {
              slidesPerView: 4,
              spaceBetween: 50
            }
          }"
          :modules="modules"
          class="mySwiper"
        >
          <swiper-slide>
            <div class="logo-prand shadow rounded p-5">
              <img
                width="100%"
                class="img-fluid"
                src="/src/assets/images/Tommy_Hilfiger-Logo-PNG5.webp"
              />
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="logo-prand shadow rounded p-5">
              <img
                width="100%"
                class="img-fluid"
                src="/src/assets/images/Tommy_Hilfiger-Logo-PNG5.webp"
              />
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="logo-prand shadow rounded p-5">
              <img
                width="100%"
                class="img-fluid"
                src="/src/assets/images/Tommy_Hilfiger-Logo-PNG5.webp"
              />
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="logo-prand shadow rounded p-5">
              <img
                width="100%"
                class="img-fluid"
                src="/src/assets/images/Tommy_Hilfiger-Logo-PNG5.webp"
              />
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="logo-prand shadow rounded p-5">
              <img
                width="100%"
                class="img-fluid"
                src="/src/assets/images/Tommy_Hilfiger-Logo-PNG5.webp"
              />
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="logo-prand shadow rounded p-5">
              <img
                width="100%"
                class="img-fluid"
                src="/src/assets/images/Tommy_Hilfiger-Logo-PNG5.webp"
              />
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <div class="container mt-5">
      <h2 class="text-center fw-bold">Original collection</h2>
      <div class="d-none d-md-block">
        <div
          class="d-flex gap-3 justify-content-center align-items-center mt-5"
        >
          <div class="logo-prand shadow rounded p-5">
            <img
              width="100%"
              class="img-fluid"
              src="/src/assets/images/Tommy_Hilfiger-Logo-PNG5.webp"
            />
          </div>
          <div class="logo-prand shadow rounded p-5">
            <img
              width="100%"
              class="img-fluid"
              src="/src/assets/images/Tommy_Hilfiger-Logo-PNG5.webp"
            />
          </div>
          <div class="logo-prand shadow rounded p-5">
            <img
              width="100%"
              class="img-fluid"
              src="/src/assets/images/Tommy_Hilfiger-Logo-PNG5.webp"
            />
          </div>
          <div class="logo-prand shadow rounded p-5">
            <img
              width="100%"
              class="img-fluid"
              src="/src/assets/images/Tommy_Hilfiger-Logo-PNG5.webp"
            />
          </div>
          <div class="logo-prand shadow rounded p-5">
            <img
              width="100%"
              class="img-fluid"
              src="/src/assets/images/Tommy_Hilfiger-Logo-PNG5.webp"
            />
          </div>
          <div class="logo-prand shadow rounded p-5">
            <img
              width="100%"
              class="img-fluid"
              src="/src/assets/images/Tommy_Hilfiger-Logo-PNG5.webp"
            />
          </div>
        </div>
      </div>
      <!--slider mobil-->
      <div class="d-block d-md-none">
        <swiper
          :slidesPerView="1"
          :spaceBetween="10"
          :pagination="{
            clickable: true
          }"
          :breakpoints="{
            '@0.00': {
              slidesPerView: 1,
              spaceBetween: 10
            },
            '@0.75': {
              slidesPerView: 2,
              spaceBetween: 20
            },
            '@1.00': {
              slidesPerView: 3,
              spaceBetween: 40
            },
            '@1.50': {
              slidesPerView: 4,
              spaceBetween: 50
            }
          }"
          :modules="modules"
          class="mySwiper"
        >
          <swiper-slide>
            <div class="logo-prand shadow rounded p-5">
              <img
                width="100%"
                class="img-fluid"
                src="/src/assets/images/Tommy_Hilfiger-Logo-PNG5.webp"
              />
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="logo-prand shadow rounded p-5">
              <img
                width="100%"
                class="img-fluid"
                src="/src/assets/images/Tommy_Hilfiger-Logo-PNG5.webp"
              />
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="logo-prand shadow rounded p-5">
              <img
                width="100%"
                class="img-fluid"
                src="/src/assets/images/Tommy_Hilfiger-Logo-PNG5.webp"
              />
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="logo-prand shadow rounded p-5">
              <img
                width="100%"
                class="img-fluid"
                src="/src/assets/images/Tommy_Hilfiger-Logo-PNG5.webp"
              />
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="logo-prand shadow rounded p-5">
              <img
                width="100%"
                class="img-fluid"
                src="/src/assets/images/Tommy_Hilfiger-Logo-PNG5.webp"
              />
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="logo-prand shadow rounded p-5">
              <img
                width="100%"
                class="img-fluid"
                src="/src/assets/images/Tommy_Hilfiger-Logo-PNG5.webp"
              />
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    return {
      modules: [Pagination]
    };
  }
};
</script>

<style scoped>
.watch-card {
  background: #a27f47;
  min-height: 300px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.watch-img {
  width: 200px;
  height: 100%;
  object-fit: cover;
  transition: 0.5s ease-in-out;
}

.watch-img:hover {
  transform: scale(1.5);
}
.flex-fill {
  overflow: hidden;
  height: 100%;
}

.buy-btn {
  display: inline-block;
  margin-top: 20px;
  font-weight: bold;
  color: #000;
  text-decoration: none;
  transition: 0.3s;
}

.buy-btn:hover {
  color: #333;
}
</style>
