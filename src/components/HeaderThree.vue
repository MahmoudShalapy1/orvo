<template>
  <div class="header-three w-100 shadow-sm">
    <div
      class="container d-flex justify-content-center align-items-center h-100"
    >
      <div
        class="row p-2 d-flex justify-content-center align-items-center h-100 w-100"
      >
        <div class="field col-8 col-md-6 h-100 d-flex justify-content-center align-items-center w-75">
          <button class="h-100 px-3"><i class="bi bi-search"></i></button>
          <input type="search" class="w-100 h-100 px-2" placeholder="ابحث ..." />
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.header-three {
    background-color: var(--bg-beige-100);
    height: 50px;
}
.bi-search{
  right: 2rem;
}
</style>