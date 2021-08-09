<template>
  <header id="header" ref="header">
    <nav class="navbar fixed-top p-0">
      <a href="#" @click.prevent="goTop">
        <h1 class="px-6 mb-0 logo text-white text-5xl">Sherlock</h1></a
      >
      <button
        class="navbar-menu-icon btn"
        @click="openMenu"
        :class="{ active: active === true }"
      >
        <span></span>
      </button>
      <div class="navbar-collapse">
        <ul
          class="navbar-menu"
          :class="{ active: active === true }"
          :style="menuHeight"
          ref="navbarMenu"
        >
          <li class="navbar-menu-item">
            <a
              href="#"
              :class="{ 'text-primary': menuActive === 1 }"
              class="font-weight-bold text-white"
              @click.prevent="goTop"
              >首頁</a
            >
          </li>
          <li class="navbar-menu-item">
            <a
              href="#"
              :class="{ 'text-primary': menuActive === 2 }"
              class="font-weight-bold  text-white"
              @click.prevent="goAbout"
              >關於我們</a
            >
          </li>
          <li class="navbar-menu-item">
            <a
              href="#"
              :class="{ 'text-primary': menuActive === 3 }"
              class="font-weight-bold  text-white"
              @click.prevent="goService"
              >服務項目</a
            >
          </li>
          <li class="navbar-menu-item">
            <a
              href="#"
              :class="{ 'text-primary': menuActive === 4 }"
              class="font-weight-bold  text-white"
              @click.prevent="goContactUs"
              >聯絡我們</a
            >
          </li>
        </ul>
      </div>
    </nav>
    <div class="header-title p-10">
      <h2 class="text-6xl text-white mb-6">Sherlock 工作室</h2>
      <p class="text-white font-black text-3xl">
        保證節省您數月的煩惱、時間、金錢、人力，讓您全心專注在您的事業！
      </p>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      screenWidth: '',
      active: false,
      menuHeight: {
        height: ''
      },
      menuActive: 1,
    }
  },
  created() {
    if (process.browser) {
      window.addEventListener('scroll', this.handleScroll);
    }
  },
  destroyed() {
    if (process.browser) {
      window.removeEventListener('scroll', this.handleScroll);
    }
  },
  methods: {

    handleScroll() {
      if (window.scrollY < 0 || window.scrollY < this.$parent.$refs.about.$el.offsetTop - 100) {
        this.menuActive = 1;
      } else if (window.scrollY < this.$parent.$refs.about.$el.offsetTop || window.scrollY < this.$parent.$refs.services.$el.offsetTop - 100) {
        this.menuActive = 2;
      } else if (window.scrollY < this.$parent.$refs.services.$el.offsetTop || window.scrollY < this.$parent.$refs.contactUs.$el.offsetTop - 100) {
        this.menuActive = 3;
      } else if (window.scrollY < this.$parent.$refs.contactUs.$el.offsetTop || 4318) {
        this.menuActive = 4;
      }
    },
    goTop() {
      this.$nextTick(() => {
        $('html,body').animate({ scrollTop: 0 }, 800);
      });
      this.active = false;
      this.menuHeight.height = '';
    },
    goAbout() {
      this.$nextTick(() => {
        $('html,body').animate({ scrollTop: this.$parent.$refs.about.$el.offsetTop }, 800);
      });
      this.active = false;
      this.menuHeight.height = '';
    },
    goService() {
      this.$nextTick(() => {
        $('html,body').animate({ scrollTop: this.$parent.$refs.services.$el.offsetTop }, 800);
      });
      this.active = false;
      this.menuHeight.height = '';
    },
    goContactUs() {
      this.$nextTick(() => {
        $('html,body').animate({ scrollTop: this.$parent.$refs.contactUs.$el.offsetTop }, 800);
      });
      this.active = false;
      this.menuHeight.height = '';
    },
    openMenu() {
      this.active = !this.active;
      const MenuLength = this.$refs.navbarMenu.getElementsByTagName('li')
        .length;
      const navbarMenuItemHeight = this.$refs.navbarMenu.getElementsByTagName(
        'li'
      )[0].offsetHeight;

      if (this.active) {
        this.menuHeight.height = MenuLength * navbarMenuItemHeight + 'px';
      } else {
        this.menuHeight.height = '';
      }
    }
  },
  mounted() {
    const vm = this;
    window.onresize = () => {
      return (() => {
        window.screenWidth = document.body.clientWidth;
        vm.screenWidth = window.screenWidth;
        if (vm.screenWidth > 768) {
          this.active = false;
          this.menuHeight.height = '';
        }
      })();
    };
  }
}
</script>

<style scoped lang="scss">
#header {
  background-image: url("~/assets/img/header.jpg");
  height: 100vh;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;

  .header-title {
    background: rgba(0, 0, 0, 0.5);
    text-align: center;
    padding: 20px;
    transform: translate(-50%, -50%);
    position: absolute;
    display: inline-block;
    left: 50%;
    top: 50%;
  }
}
</style>