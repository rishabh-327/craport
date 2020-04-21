<template>
  <v-container fill-height class="align-start">
    <v-row>
      <!-- Navigation -->
      <v-col cols="12" class="mb-4">
        <v-card flat color="indigo lighten-5">
          <v-card-title class="py-2">
            <v-btn
              text
              class="text-capitalize"
              v-ripple="{ class: 'indigo--text text--lighten-2' }"
              @click="$router.push({ name: 'home' })"
              ><v-icon class="mr-1">mdi-arrow-left-bold-circle-outline</v-icon>
              Back</v-btn
            >
            <v-spacer></v-spacer>
            <v-btn
              text
              class="text-capitalize body-2"
              color="red accent-2"
              v-ripple="{ class: 'red--text text--lighten-3' }"
              @click="deleteReport"
              ><v-icon class="mr-1">mdi-delete-sweep</v-icon> Delete
              Report</v-btn
            >
          </v-card-title>
        </v-card>
      </v-col>
      <!-- Dashboard Header -->
      <v-col cols="12" sm="8">
        <v-hover v-slot:default="{ hover }">
          <div class="report-title-wrapper">
            <h1 class="display-2 font-weight-black">
              {{ (report && report.reportName) || 'Dashboard' }}
            </h1>
            <v-btn
              absolute
              v-if="hover"
              text
              class="px-2 text-capitalize"
              color="indigo accent-2"
              @click="changeTitleMenu = true"
              >Change title</v-btn
            >
            <v-card
              width="360"
              color="grey lighten-5"
              class="change-title-menu"
              v-if="changeTitleMenu"
            >
              <v-card-title class="px-6">
                <v-text-field
                  hide-details
                  name="title"
                  label="New Title"
                  v-model="newTitle"
                  autocomplete="disabled"
                  @keyup.enter="changeTitle"
                >
                  <template v-slot:prepend-inner>
                    <v-icon class="mr-3">mdi-form-textbox</v-icon></template
                  >
                </v-text-field>
              </v-card-title>
              <v-card-actions class="pt-2">
                <v-spacer></v-spacer>
                <v-btn
                  text
                  class="text-capitalize"
                  @click="changeTitleMenu = false"
                  >Cancel</v-btn
                >
                <v-btn
                  text
                  class="text-capitalize"
                  color="green accent-4"
                  @click="changeTitle"
                  >Change</v-btn
                >
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </div>
        </v-hover>
      </v-col>

      <!-- Date -->
      <v-col cols="12" sm="4" class="text-sm-right align-self-end">
        <h2 class="font-weight-black">
          {{ report.date.dayOfWeek }}
        </h2>
        <h3>{{ report.date.dayOfCalendar }}</h3>
      </v-col>

      <!-- Works Table -->
      <v-col cols="12">
        <works-table
          :worksList="report.works"
          :reportId="report.reportId"
          editable
        />
      </v-col>
    </v-row>

    <!-- Add Button -->
    <v-dialog
      v-model="addWorkDialog"
      persistent
      overlay-color="black"
      max-width="450"
    >
      <template v-slot:activator="{ on }">
        <v-btn
          color="green accent-2"
          class="text-capitalize font-weight-bold subtitle-1 button-position"
          dark
          v-on="on"
          fab
          fixed
          ><v-icon large class="add-button">mdi-plus</v-icon></v-btn
        >
      </template>
      <add-work
        @close="addWorkDialog = !addWorkDialog"
        :reportId="report.reportId"
      ></add-work>
    </v-dialog>

    <!-- Work Editor -->
    <v-dialog
      v-model="workEditor"
      max-width="450px"
      transition="dialog-transition"
      persistent
    >
      <router-view />
    </v-dialog>
  </v-container>
</template>

<script>
import WorksTable from '@/components/WorksTable.vue'
import AddWork from '@/components/AddWork.vue'

export default {
  name: 'Dashboard',
  data: () => ({
    newTitle: '',
    changeTitleMenu: false,
    addWorkDialog: false
  }),
  props: {
    id: {
      type: String,
      required: true
    }
  },
  computed: {
    report() {
      return this.$store.getters.getReportById(this.id)
    },
    workEditor() {
      return this.$route.name === 'edit-work'
    }
  },
  methods: {
    changeTitle() {
      this.$store.dispatch('changeReportTitle', {
        reportId: this.report.reportId,
        newTitle: this.newTitle
      })
      this.changeTitleMenu = false
    },
    deleteReport() {
      this.$router.push('/')
      this.$store.dispatch('deleteReport', this.id)
    }
  },
  components: {
    WorksTable,
    AddWork
  }
}
</script>

<style lang="scss" scoped>
.add-button {
  transition: all 0.1s ease-in;
  &:hover {
    transform: rotate(90deg);
  }
}
.button-position {
  bottom: 3rem;
  right: 3rem;
}
.report-title-wrapper {
  position: relative;
}
.change-title-menu {
  position: absolute;
  top: 125%;
  left: 0;
}
</style>
