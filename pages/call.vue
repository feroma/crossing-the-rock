<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-6 offset-md-3">
          <div class="p-5 bg-black">
            <a href="#" @click.prevent.stop="testCall('test_debug')">test call</a>
            <br>
            <a href="#" @click.prevent.stop="testCall('test_error')">test error</a>
          </div>

        </div>
      </div>
    </div>

  </div>

</template>

<script>
/**
 * @see https://codesandbox.io/s/rcok0?file=/nuxt.config.js
 */
import locomotive from "~/mixins/locomotive.js"

export default {
  name: 'Call',
  mixins: [locomotive],
  data () {
    return {
      show: false,
      scrollPosition: 0,
      test : {}
    }
  },
  computed: {


  },
  methods: {
    testCall(action){
      const payload = {
        action: action,
      }
       this.$store.dispatch('callApi', payload)
        .then(data => {
         // console.clear()
          console.log('testCall data',data)
          this.test = data
        })
        .catch((e) => {
          console.log('testCall error',e)
          this.test = e
          // this.$router.push('/')
        })
    }
  }


}
</script>

<style>

</style>
