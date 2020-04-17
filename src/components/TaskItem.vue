<template>
  <div class="task-item">
    <v-row>
      <v-col cols="1">
        <h2 class="text-center title">{{ srNo }}.</h2>
      </v-col>
      <v-col cols="2"
        ><p class="title font-weight-regular">
          {{ work.name }}
        </p></v-col
      >
      <v-col cols="3"
        ><p class="title font-weight-regular">
          {{ work.work }}
        </p></v-col
      >
      <v-col cols="3"
        ><p class="title font-weight-regular">
          {{ work.client }}
        </p></v-col
      >
      <v-col cols="2"
        ><p class="title font-weight-regular text-truncate">
          {{ work.status }}
        </p></v-col
      >
      <v-col cols="1" class="text-center">
        <v-menu
          v-model="actionMenu"
          :nudge-left="80"
          :nudge-top="9"
          :close-on-content-click="false"
        >
          <template v-slot:activator="{ on }">
            <v-btn icon v-on="on">
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>

          <v-card>
            <v-row no-gutters class="text-center">
              <v-col cols="6">
                <div class="action-box">
                  <v-btn icon color="indigo accent-2" @click="editWork">
                    <v-icon>mdi-circle-edit-outline</v-icon>
                  </v-btn>
                </div>
              </v-col>
              <v-col cols="6">
                <div class="action-box">
                  <v-btn icon color="red lighten-2" @click="deleteWork">
                    <v-icon>mdi-delete-empty</v-icon>
                  </v-btn>
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-menu>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'TaskItem',
  props: {
    srNo: {
      type: [Number, String],
      default: ''
    },
    work: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    actionMenu: false
  }),
  methods: {
    deleteWork() {
      this.$store.dispatch('deleteWork', this.srNo - 1)
    },
    editWork() {
      this.$router.push({
        name: 'edit-task',
        params: { workId: this.work.workId }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.task-item {
  background: #fbfbfb;
  border-radius: 4px;
  padding: 0.5rem 0 0.33rem 0;
  transition: all 0.2s ease-out;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.13);

  &:hover {
    background: #fff;

    box-shadow: 0 2px 24px rgba(145, 145, 245, 0.425);
  }
}
.action-box {
  padding: 0.5rem 0.66rem;
}
</style>
