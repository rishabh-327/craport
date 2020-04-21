<template>
  <v-card width="450" class="work-dialog" flat color="grey lighten-5">
    <v-form ref="newForm">
      <!-- Close Button -->
      <v-btn
        icon
        absolute
        :style="{ top: '4px', right: '4px' }"
        @click="closeDialog"
        ><v-icon color="grey">mdi-close</v-icon></v-btn
      >

      <!-- Heading -->
      <v-container fluid class="text-center px-0">
        <h1 class="display-1 font-weight-black grey--text text--darken-4 py-6">
          Add New Entry
        </h1>
        <v-divider></v-divider>
      </v-container>

      <!-- Input Fields -->
      <v-container>
        <v-row justify="center">
          <v-col cols="10">
            <v-text-field
              name="name"
              label="Name"
              :rules="rules"
              color="green accent-2"
              autocomplete="disabled"
              v-model="newWork.name"
            >
              <template v-slot:prepend-inner>
                <v-icon class="mr-3" size="24" color="teal accent-3"
                  >mdi-account</v-icon
                ></template
              >
            </v-text-field>
          </v-col>
          <v-col cols="10">
            <v-text-field
              name="work"
              label="Work"
              :rules="rules"
              color="green accent-2"
              autocomplete="disabled"
              v-model="newWork.work"
            >
              <template v-slot:prepend-inner>
                <v-icon class="mr-3" size="24" color="teal accent-3"
                  >mdi-desktop-mac</v-icon
                ></template
              >
            </v-text-field>
          </v-col>
          <v-col cols="10">
            <v-text-field
              name="client"
              label="Client"
              :rules="rules"
              color="green accent-2"
              autocomplete="disabled"
              v-model="newWork.client"
            >
              <template v-slot:prepend-inner>
                <v-icon class="mr-3" size="24" color="teal accent-3"
                  >mdi-comment-account</v-icon
                ></template
              >
            </v-text-field>
          </v-col>
          <v-col cols="10">
            <v-text-field
              name="status"
              label="Status"
              :rules="rules"
              color="green accent-2"
              autocomplete="disabled"
              v-model="newWork.status"
              @keyup.enter="addWork"
            >
              <template v-slot:prepend-inner>
                <v-icon class="mr-3" size="24" color="teal accent-3"
                  >mdi-cogs</v-icon
                ></template
              >
            </v-text-field>
          </v-col>
        </v-row>
      </v-container>

      <!-- Action Buttons -->
      <v-container class="pt-0">
        <v-row justify="center">
          <v-col cols="7" sm="6" class="d-flex">
            <v-btn class="text-capitalize px-5" @click="resetForm">Reset</v-btn>
            <v-spacer></v-spacer>
            <v-btn class="green accent-2 px-6 text-capitalize" @click="addWork"
              >Done</v-btn
            >
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-card>
</template>

<script>
export default {
  name: 'AddWork',
  data: () => ({
    newWork: null,
    rules: [value => !!value || 'Required']
  }),
  props: {
    reportId: {
      type: String,
      required: true
    }
  },
  methods: {
    closeDialog() {
      this.$emit('close')
    },
    resetForm() {
      this.$refs.newForm.reset()
    },
    clearForm() {
      const work = {
        name: '',
        work: '',
        client: '',
        status: ''
      }
      this.newWork = work
    },
    addWork() {
      const valid = this.$refs.newForm.validate()
      if (valid) {
        this.$store.dispatch('addWork', {
          reportId: this.reportId,
          work: this.newWork
        })
        this.$refs.newForm.resetValidation()
        this.closeDialog()
        this.clearForm()
      }
    }
  },
  created() {
    this.clearForm()
  }
}
</script>
