<template>
  <v-container fill-height class="align-start">
    <v-row>
      <!-- Dashboard Header -->
      <v-col cols="12">
        <div class="d-flex mt-8">
          <h1 class="display-2 font-weight-black">
            Dashboard
          </h1>
          <v-spacer></v-spacer>
          <v-dialog
            v-model="addTaskDialog"
            persistent
            overlay-color="black"
            max-width="450"
          >
            <template v-slot:activator="{ on }">
              <v-btn
                id="editTaskBtn"
                color="green accent-2"
                class="text-capitalize font-weight-bold subtitle-1 px-8"
                dark
                large
                v-on="on"
                >+ Add Entry</v-btn
              >
            </template>
            <add-task @close="addTaskDialog = !addTaskDialog"></add-task>
          </v-dialog>
        </div>
      </v-col>

      <!-- Task Table -->
      <v-col cols="12">
        <task-table />
      </v-col>
    </v-row>

    <v-dialog
      v-model="taskEditor"
      max-width="450px"
      transition="dialog-transition"
    >
      <router-view />
    </v-dialog>
  </v-container>
</template>

<script>
import TaskTable from '@/components/TaskTable.vue'
import AddTask from '@/components/AddTask.vue'
export default {
  name: 'Dashboard',
  data: () => ({
    addTaskDialog: false,
    dialog: true
  }),
  computed: {
    taskEditor() {
      return this.$route.name === 'edit-task'
    }
  },
  components: {
    TaskTable,
    AddTask
  }
}
</script>
