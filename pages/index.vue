<template>
  <div>
    <Header />
    <main>
      <About ref="about" />
      <Services ref="services" />
      <ContactUs ref="contactUs" />
      <Partner />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header"
import Footer from "../components/Footer"
import Services from "../components/Services"
import ContactUs from "../components/ContactUs"
import About from "../components/About"
import Partner from "../components/Partner"
export default {
  components: {
    Services,
    Header,
    Footer,
    ContactUs,
    About,
    Partner
  }
}
</script>

<style>
h2 {
  font-family: "Noto Sans HK", sans-serif;
}
</style>



