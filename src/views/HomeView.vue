<template>
  <div class="home position-relative" dir="rtl">
    <div id="homeCarousel" class="carousel slide carousel-fade home-carousel" data-bs-ride="carousel">

      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="@/assets/images/panner01.jpeg" class="d-block w-100 home-bg-img" alt="ساعة كلاسيكية أنيقة" />
        </div>
        <div class="carousel-item">
          <img src="@/assets/images/panner02.jpeg" class="d-block w-100 home-bg-img" alt="ساعة عصرية على معصم" />
        </div>
        <div class="carousel-item">
          <img src="@/assets/images/panner03.jpeg" class="d-block w-100 home-bg-img" alt="ساعة فخمة على طاولة" />
        </div>
      </div>
    </div>
    
    <div class="container home-container mt-5 position-absolute top-0 start-50 translate-middle-x d-flex flex-column align-items-center justify-content-center">
      <div class="row h-100 w-100 d-flex flex-column justify-content-center align-items-start">
        <h1 class="fw-bold text-shadow pb-5">ORVO | اورفو</h1>
        <p class="text-light text-shadow pb-0 fs-5">
          كل لحظة تستحق أن تُروى.
        </p>
        <p class="text-light text-shadow pb-0 fs-5">
          مع ORVO, لا ترتدي ساعة فقط، بل قطعة فنية تجمع بين الأناقة الخالدة والدقة التي تُخلّد ذكرياتك.
        </p>
        <p class="text-light text-shadow fs-5">
          اجعل وقتك استثنائيًا.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>

<style scoped>
/* Custom styles minimized; relying more on Bootstrap classes */
.home {
  height: 100vh;
  overflow: hidden;
  direction: rtl;
  background-color: #000; /* إضافة خلفية سوداء مؤقتة للتحقق إذا كان النص يظهر، إذا ظهر النص أبيض على أسود، فالمشكلة في تحميل الصور */
}

h1 {
  color: var(--primary-100, #a27f47);;
}
.home-carousel {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.carousel-inner,
.carousel-item {
  height: 100%;
}

.home-bg-img {
  height: 100%;
  object-fit: cover;
  /* filter: brightness(60%);  علّق هذا مؤقتًا للتحقق إذا كانت الصور تتحمل بدون تعتيم */
}

.home-container {
  height: 100vh;
  z-index: 1;
}
.home-carousel {
  margin-bottom: 150px;
}
.text-shadow {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}
</style>