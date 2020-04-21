<template>
  <v-app>
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  created() {
    this.$store.dispatch('backupReport')
    this.$store.dispatch('setTodayReportCreatedStatus')
  }
}
</script>

<style lang="scss">
.v-content {
  background: #f1f3f8;
}
p {
  margin: 0 !important;
}
.work-dialog {
  box-shadow: 0 2px 16px rgba(97, 83, 155, 0.212) !important;
}
</style>
