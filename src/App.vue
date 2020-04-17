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

  data: () => ({
    //
  })
}
</script>

<style lang="scss">
.v-content {
  background: #fafbff;
}
p {
  margin: 0 !important;
}
.task-dialog {
  box-shadow: 0 2px 16px rgba(97, 83, 155, 0.212) !important;
}
</style>
