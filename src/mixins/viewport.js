export default {
  computed: {
    isMobileScreen() {
      return this.$vuetify.breakpoint.xsOnly
    },
    isShortScreen() {
      return this.$vuetify.breakpoint.mdAndDown
    },
    //Remove this after development
    screenWidth() {
      return this.$vuetify.breakpoint.width
    }
  }
}
