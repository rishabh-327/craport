<template>
  <v-hover v-slot:default="{ hover }">
    <v-card
      :to="{ name: 'report', params: { id: reportInfo.reportId } }"
      color="indigo lighten-5"
      class="py-4 px-2"
      :class="{ 'report-card-hover': hover }"
    >
      <v-card-text>
        <h1 class="headline grey--text text--darken-4 font-weight-bold">
          {{ reportInfo.date.dayOfCalendar }}
        </h1>
        <h1 class="title font-weight-black grey--text text--darken-4">
          {{ reportInfo.date.dayOfWeek }}
        </h1>
      </v-card-text>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  name: 'ReportItem',
  props: {
    reportInfo: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.report-card-hover {
  box-shadow: 0 5px 12px rgba(37, 37, 78, 0.26);
}
</style>
