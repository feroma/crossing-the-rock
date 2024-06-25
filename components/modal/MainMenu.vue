<template>
  <div id="menu-modal" class="bg-gray-5">


    <div class="menu-modal-content modal-content">

      <header class="header w-100">
        <div class="container">
          <div class="row align-items-center">
            <div class="logo d-none d-sm-block">
              <img src="~/assets/images/crossing_the_rock_LOGO_1x.png" class="img-fluid">
            </div>
            <!--          <language-switcher/>-->
            <close @click.native.stop.prevent="toggleMenu" class="ml-auto"/>
          </div>
        </div>
      </header>

      <div class="container pt-4 pt-sm-0">
        <div class="row">
          <div class="col-12 col-md-10 offset-md-1 col-lg-8 offset-md-2 border-bottom-gray-4 mb-3">
            <ul class="list-unstyled pb-3 d-flex flex-wrap">
              <li v-for="(item, index) in items" :key="'item-'+index" v-if="!item.hide">
                <a href="#" @click.stop.prevent="changeRoute(item.slug)"
                   class="d-block text-brick-light hover-white text-serif h3 py-1 py-lg-1 pr-2">
                  {{ item.label }}
                </a>
              </li>
            </ul>
          </div>
          <div class="col-12 col-md-10 offset-md-1 col-lg-8 offset-md-2">
            <ul class="list-unstyled pb-3 d-flex flex-wrap">
              <li v-for="(item, index) in categories[0].child" :key="'room-'+index">
                <a href="#" @click.stop.prevent="changeRoute(item.slug)"
                   class="d-block text-brick-light hover-white text-serif h3 py-1 py-lg-1 pr-2">
                  {{ item.label }}
                </a>
              </li>


            </ul>

            <div class="menu-book-block d-md-none">
              <book-link class="mb-2"/>
              <site-socials/>
            </div>
          </div>
        </div>

        <div class="menu-book-block d-none d-md-block">
          <book-link class="mb-2"/>
          <site-socials/>
        </div>

      </div>


    </div>

  </div>
</template>

<script>


export default {
  name: "MainMenu",
  data () {
    return {

      show: false
    }
  },
  computed: {
    items () {
      return this.$store.getters['getMenuItemsByLang'](this.currentLang)
    },
    categories () {
      return this.$store.getters['getMenuItemsByLang'](this.currentLang, 'categories')
    }
  },
  methods: {
    changeRoute (to) {
      if (this.$store.state.siteOptions.currentSlug === to) {
        this.$store.commit('TOGGLE_MENU')
      } else {
        this.$router.push(to)
      }
    },
    toggleMenu () {
      this.$store.commit('TOGGLE_MENU')
    }
  },
  props: {}

}
</script>

<style scoped>

</style>
