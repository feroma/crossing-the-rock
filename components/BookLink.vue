<template>
  <a href="#" class="book-link" @click.stop.prevent="openBooking">
    BOOK NOW
  </a>

</template>

<script>
import gsap from "gsap"


export default {
  name: "BookLink",
  data () {
    return {

      show: false
    }
  },
  computed: {},
  methods: {

  },
  props: {},
  mounted () {

  }
}
</script>

<style scoped>

</style>
