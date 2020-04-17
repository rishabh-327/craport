<template>
  <v-container fluid px-0 mt-8>
    <v-row>
      <v-col cols="12" class="pb-1">
        <v-row>
          <v-col cols="1"></v-col>
          <v-col cols="2"
            ><p class="grey--text text--lighten-1 font-weight-bold">
              Name
            </p></v-col
          >
          <v-col cols="3"
            ><p class="grey--text text--lighten-1 font-weight-bold">
              Work
            </p></v-col
          >
          <v-col cols="3"
            ><p class="grey--text text--lighten-1 font-weight-bold">
              Client
            </p></v-col
          >
          <v-col cols="2"
            ><p class="grey--text text--lighten-1 font-weight-bold">
              Status
            </p></v-col
          >
          <v-col cols="1"
            ><p class="grey--text text--lighten-1 font-weight-bold">
              Action
            </p></v-col
          >
        </v-row>
      </v-col>
      <template v-if="works.length > 0">
        <v-col
          cols="12"
          class="pt-0"
          v-for="(work, index) in works"
          :key="work.workId"
        >
          <task-item :srNo="index + 1" :work="work" />
        </v-col>
      </template>

      <v-col v-else class="text-center">
        <v-img
          :src="require('@/assets/img/panda.jpg')"
          :max-width="500"
          class="mx-auto empty-table-placeholder"
          gradient="135deg, rgba(255, 255, 255, 0),rgba(255, 255, 255, .4),rgba(255, 255, 255, 0)"
        >
        </v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import TaskItem from '@/components/TaskItem.vue'
import { mapState } from 'vuex'
export default {
  name: 'TaskTable',
  computed: {
    ...mapState(['works'])
  },
  components: {
    TaskItem
  }
}
</script>

<style lang="scss" scoped>
.empty-table-placeholder {
  border-radius: 500px;
  padding: 2rem 0;
}
</style>
