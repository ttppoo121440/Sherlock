<template>
  <section class="bg-section">
    <div
      data-aos="zoom-in-up"
      data-aos-duration="1500"
      class="container mx-auto"
    >
      <div class="pt-32 px-6">
        <span class="uppercase text-title text-2xl  inline-block"
          >contact us</span
        >
        <h2 class="text-4xl my-5 font-black">聯絡我們</h2>
      </div>
      <form class="flex flex-wrap md:flex-no-wrap" @submit.prevent="submit">
        <div class="flex flex-col md:w-1/3 w-full  mb-12 px-6 ">
          <div class="my-6 md:flex">
            <label
              for="name"
              class="md:mr-0 mr-2  md:w-1/3 sm:w-1/12 md:w-3/12 lg:w-2/12"
              >姓名</label
            >
            <input
              type="text"
              id="name"
              v-model="custom.name"
              class="md:w-2/3 w-10/12"
              required
            />
          </div>
          <div class="my-6 md:flex">
            <label
              for="tel"
              class="md:mr-0 mr-2  md:w-1/3 sm:w-1/12 md:w-3/12 lg:w-2/12"
              >電話</label
            >
            <input
              type="tel"
              id="tel"
              v-model="custom.tel"
              class="md:w-2/3 w-10/12"
            />
          </div>
          <div class="my-6 md:flex">
            <label
              for="email"
              class="md:mr-0 mr-2  md:w-1/3 sm:w-1/12 md:w-3/12 lg:w-2/12"
              >信箱</label
            >
            <input
              type="email"
              id="email"
              v-model="custom.email"
              class="md:w-2/3 w-10/12"
              required
            />
          </div>
        </div>
        <div
          class="md:w-1/3 w-full mb-12 lg:px-0 px-6 md:px-0 pb-8  text-center"
        >
          <textarea
            v-model="custom.message"
            class="w-full h-full pb-10"
          ></textarea>
        </div>
        <div class="md:w-1/3 w-full  ml-10">
          <div class="lg:mt-32 md:mt-32 py-6 text-right md:text-left pr-6">
            <input
              class="text-white py-1 px-5 font-black hover:text-primary hover:cursor-pointer"
              style="background-color:#313332;"
              type="submit"
              value="送出"
            />
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      custom: {
        name: "",
        tel: "",
        email: "",
        message: ""
      }
    }
  },
  methods: {
    submit() {
      const Year = new Date().getFullYear()
      const Month = new Date().getMonth() + 1
      const day = new Date().getDate();
      const date = `${Year}-${Month}-${day}`
      this.custom['date'] = date
      axios.post("https://sherlock-994b1.firebaseio.com/user.json", this.custom).then(res => {
        alert("感謝您提供的資訊")
        this.custom = {
          name: "",
          tel: "",
          email: "",
          message: ""
        }
      })
    }
  }
}
</script>

<style lang="scss" scope>
input {
  background: none;
  outline: none;
  border: 0px;
  border-bottom: 1px solid #000;
}
</style>