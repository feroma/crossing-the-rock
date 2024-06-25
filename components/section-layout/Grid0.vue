<template>
  <component :is="sectionTag" :class="sectionClass">

   <div class="container">
      <div class="row">
        <div class="col-12  mb-xs-gutter">
          <picture-wrapper :item="section.items[0]"></picture-wrapper>
        </div>
      </div>
   </div>

  </component>
</template>

<script>

export default {
  name: "SectionLayoutGrid0",
  data () {
    return {
      show: false
    }
  },
  components: {},
  computed: {
    sectionClass () {
      let sectionClassDefault = ['section-layout-' + this.section.layout]
      let response = sectionClassDefault
      if (this.section.class) {
        response = [...sectionClassDefault, ...this.section.class]
      }
      return response.join(' ')
    },
    sectionTag () {
      return this.section.tag || 'section'
    }
  },
  methods: {},
  props: {
    section: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  }

}
</script>
<style>
</style>
