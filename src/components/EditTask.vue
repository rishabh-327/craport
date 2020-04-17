<template>
  <v-card width="450" class="task-dialog" flat color="grey lighten-5">
    <v-form ref="newForm">
      <v-btn icon absolute :style="{ top: '4px', right: '4px' }" @click="close"
        ><v-icon color="grey">mdi-close</v-icon></v-btn
      >

      <!-- Heading -->
      <v-container fluid class="text-center py-6 green accent-1">
        <h1 class="display-1 font-weight-regular grey--text text--darken-4">
          Update
        </h1>
      </v-container>

      <!-- Input Fields -->
      <v-container>
        <v-row justify="center">
          <v-col cols="9">
            <v-text-field
              name="name"
              label="Name"
              color="green accent-2"
              autocomplete="disabled"
              v-model="localWork.name"
            >
              <template v-slot:prepend-inner>
                <v-icon class="mr-3" size="24">mdi-account</v-icon></template
              >
            </v-text-field>
          </v-col>
          <v-col cols="9">
            <v-text-field
              name="work"
              label="Work"
              color="green accent-2"
              autocomplete="disabled"
              v-model="localWork.work"
            >
              <template v-slot:prepend-inner>
                <v-icon class="mr-3" size="24"
                  >mdi-desktop-mac</v-icon
                ></template
              >
            </v-text-field>
          </v-col>
          <v-col cols="9">
            <v-text-field
              name="client"
              label="Client"
              color="green accent-2"
              autocomplete="disabled"
              v-model="localWork.client"
            >
              <template v-slot:prepend-inner>
                <v-icon class="mr-3" size="24"
                  >mdi-comment-account</v-icon
                ></template
              >
            </v-text-field>
          </v-col>
          <v-col cols="9">
            <v-text-field
              name="status"
              label="Status"
              color="green accent-2"
              autocomplete="disabled"
              v-model="localWork.status"
            >
              <template v-slot:prepend-inner>
                <v-icon class="mr-3" size="24">mdi-cogs</v-icon></template
              >
            </v-text-field>
          </v-col>
        </v-row>
      </v-container>

      <!-- Action Buttons -->
      <v-container class="pt-0">
        <v-row justify="center">
          <v-col cols="6" class="d-flex">
            <v-btn outlined color="green accent-4" @click="close">Cancel</v-btn>
            <v-spacer></v-spacer>
            <v-btn class="green accent-3" @click="updateTask">Update</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'EditTask',
  data: () => ({
    localWork: {},
    workIndex: null
  }),
  props: {
    workId: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapGetters(['getWorkById'])
  },
  methods: {
    close() {
      this.$emit('close')
      this.$router.push({ name: 'dashboard' })
    },
    updateTask() {
      this.$store.dispatch('updateWork', {
        workIndex: this.workIndex,
        work: this.localWork
      })
      this.close()
    }
  },
  created() {
    const workAndId = this.getWorkById(this.workId)
    this.localWork = {
      ...workAndId.work
    }
    this.workIndex = workAndId.workIndex
  }
}
</script>

<style lang="scss" scoped></style>
