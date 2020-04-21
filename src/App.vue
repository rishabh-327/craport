<template>
  <v-app>
    <v-content>
      <v-scroll-x-reverse-transition mode="out-in">
        <router-view />
      </v-scroll-x-reverse-transition>
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

// Transitions
.slide-in-enter {
  transform: translateX(16px);
  opacity: 0;
}
.slide-in-enter-active,
.slide-in-enter-active {
  transition: all 0.5s ease-in;
}
.slide-in-leave-to {
  transform: translateX(-16px);
  opacity: 0;
}
</style>
