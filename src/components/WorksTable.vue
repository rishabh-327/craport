<template>
  <v-container fluid px-0 mt-8>
    <v-row>
      <!-- Headers -->
      <v-col cols="12" class="pb-1" v-if="!isMobileScreen">
        <v-row>
          <v-col cols="1"></v-col>
          <v-col :cols="editable ? 2 : 3"
            ><p class="grey--text text--lighten-1 font-weight-medium">
              Name
            </p></v-col
          >
          <v-col cols="3"
            ><p class="grey--text text--lighten-1 font-weight-medium">
              Work
            </p></v-col
          >
          <v-col cols="3"
            ><p class="grey--text text--lighten-1 font-weight-medium">
              Client
            </p></v-col
          >
          <v-col cols="2"
            ><p class="grey--text text--lighten-1 font-weight-medium">
              Status
            </p></v-col
          >
          <v-col cols="1" v-if="editable"
            ><p class="grey--text text--lighten-1 font-weight-medium">
              Action
            </p></v-col
          >
        </v-row>
      </v-col>

      <!-- Works List -->
      <template v-if="worksList.length > 0">
        <v-col
          cols="12"
          class="pt-0"
          v-for="(work, index) in worksList"
          :key="work.workId"
        >
          <work-item
            :srNo="index + 1"
            :work="work"
            :reportId="reportId"
            :editable="editable"
          />
        </v-col>
      </template>

      <!-- Placeholder for Empty List -->
      <v-col v-else class="text-center">
        <v-img
          :src="require('@/assets/img/panda.jpg')"
          :max-width="300"
          class="mx-auto empty-table-placeholder"
          gradient="135deg, rgba(255, 255, 255, 0),rgba(255, 255, 255, .4),rgba(255, 255, 255, 0)"
        >
        </v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import WorkItem from '@/components/WorkItem.vue'

export default {
  name: 'WorksTable',
  props: {
    worksList: {
      type: Array,
      required: true
    },
    reportId: {
      type: String,
      required: true
    },
    editable: {
      type: Boolean,
      default: false
    }
  },
  components: {
    WorkItem
  }
}
</script>

<style lang="scss" scoped>
.empty-table-placeholder {
  border-radius: 150px;
  padding: 2rem 0;
}
</style>
