<template>
  <section>
    <div class="banner relative">
      <div
        class="absolute pr-16 md:w-2/5 "
        data-aos="zoom-in"
        data-aos-duration="1500"
      >
        <span class="uppercase text-title text-2xl">SERVICE　ITEMS</span>
        <h2 class="text-4xl my-5 text-white font-black">服務項目</h2>
        <p class="text-white font-black leading-loose">
          Sherlock
          工作室，提供專業網頁設計的服務，無論您是公司企業，個人行號，工作室或是個人，我們都盡心為您服務，以最用心的態度，製作符合您需求的網頁，並以最優惠的價格，完成您的需求。
        </p>
      </div>
    </div>
    <div class="flex flex-wrap py-24" data-aos="fade-up">
      <div
        class="sm:w-full sm:px-32 md:w-1/2 md:px-12 xl:w-3/12 xl:px-4 lg:w-1/2 lg:px-12  px-6 my-8"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <div class="flex justify-center">
          <div
            data-aos="flip-right"
            data-aos-duration="1500"
            class="service-img"
          >
            <img
              src="~/assets/img/sherlock網站用icon_191018_0001.jpg"
              width="132"
              height="132"
              alt=""
            />
          </div>
        </div>
        <div class="flex flex-col">
          <h4 class="text-center my-6 text-3xl font-black">RWD 響應式網站</h4>
          <p class="text-center leading-loose">
            「響應式網站設計，全部適用」同一個網頁跨平台瀏覽自動適應網頁適合各種瀏覽器螢幕解析度。
          </p>
        </div>
      </div>
      <div
        class="sm:w-full sm:px-32 md:w-1/2 md:px-12 xl:w-3/12 xl:px-4 lg:w-1/2 lg:px-12  px-6 my-8"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <div class="flex justify-center">
          <div
            data-aos="flip-right"
            data-aos-duration="1500"
            class="service-img"
          >
            <img
              src="~/assets/img/sherlock網站用icon_191018_0007.jpg"
              width="132"
              height="132"
              alt=""
            />
          </div>
        </div>
        <div class="flex flex-col">
          <h4 class="text-center my-6 text-3xl font-black">客製化網站設計</h4>
          <p class="text-center leading-loose">
            「企業形象.品牌商品」最佳表現，讓產品的真實感與企業經營研發商品的用心，表現真實淋漓盡致。
          </p>
        </div>
      </div>
      <div
        class="sm:w-full sm:px-32 md:w-1/2 md:px-12 xl:w-3/12 xl:px-4 lg:w-1/2 lg:px-12  px-6 my-8"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <div class="flex justify-center ">
          <div
            data-aos="flip-right"
            data-aos-duration="1500"
            class="service-img"
          >
            <img
              src="~/assets/img/sherlock網站用icon_191018_0006.jpg"
              width="132"
              height="132"
              alt=""
            />
          </div>
        </div>
        <div class="flex flex-col">
          <h4 class="text-center my-6 text-3xl font-black">全站式後台管理</h4>
          <p class="text-center leading-loose">
            我們提供完整且人性化的網站後台，讓您自行從後台更新維護網站內容。
          </p>
        </div>
      </div>
      <div
        class="sm:w-full sm:px-32 md:w-1/2 md:px-12 xl:w-3/12 xl:px-4 lg:w-1/2 lg:px-12  px-6 my-8"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <div class="flex justify-center ">
          <div
            data-aos="flip-right"
            data-aos-duration="1500"
            class="service-img"
          >
            <img
              src="~/assets/img/sherlock網站用icon_191018_0004.jpg"
              width="132"
              height="132"
              alt=""
            />
          </div>
        </div>
        <div class="flex flex-col">
          <h4 class="text-center my-6 text-3xl font-black">年租方案</h4>
          <p class="text-center leading-loose">
            年租型網站，從商品物流改造到重建模組的全新版型為您創造更大的經濟價值。
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.banner {
  background-image: url("~/assets/img/service.jpg");
  background-position: center;
  vertical-align: middle;
  max-width: 100%;
  height: 700px;
}
.absolute {
  top: 20%;
  left: 15%;
}

.service-img {
  max-width: 132px;
}
</style>>
