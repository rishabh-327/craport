<template>
  <v-card width="450" class="work-dialog" flat color="grey lighten-5">
    <v-form ref="editForm">
      <v-btn icon absolute :style="{ top: '4px', right: '4px' }" @click="close"
        ><v-icon color="grey">mdi-close</v-icon></v-btn
      >

      <!-- Heading -->
      <v-container fluid class="text-center px-0">
        <h1 class="display-1 font-weight-black grey--text text--darken-4 py-6">
          Update
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
              v-model="localWork.name"
              @keyup.enter="updateWork"
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
              v-model="localWork.work"
              @keyup.enter="updateWork"
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
              v-model="localWork.client"
              @keyup.enter="updateWork"
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
              v-model="localWork.status"
              @keyup.enter="updateWork"
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
            <v-btn class="text-capitalize" @click="close">Cancel</v-btn>
            <v-spacer></v-spacer>
            <v-btn class="green accent-2 text-capitalize" @click="updateWork"
              >Update</v-btn
            >
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'EditWork',
  data: () => ({
    localWork: {},
    workIndex: null,
    rules: [value => !!value || 'Required']
  }),
  props: {
    workId: {
      type: String,
      required: true
    },
    reportId: {
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
      this.$router.push({ name: 'report' })
    },
    updateWork() {
      const valid = this.$refs.editForm.validate()
      if (valid) {
        this.$store.dispatch('updateWork', {
          reportId: this.reportId,
          workIndex: this.workIndex,
          work: this.localWork
        })
        this.close()
      }
    }
  },
  created() {
    const workAndId = this.getWorkById(this.reportId, this.workId)
    this.localWork = {
      ...workAndId.work
    }
    this.workIndex = workAndId.workIndex
  }
}
</script>

<style lang="scss" scoped></style>
