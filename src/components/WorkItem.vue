<template>
  <div class="work-item">
    <v-row :no-gutters="isMobileScreen">
      <v-col cols="1">
        <h2 class="text-right text-sm-center title">{{ srNo }}.</h2>
      </v-col>
      <v-col
        cols="10"
        :sm="editable ? 2 : 3"
        :class="{ 'pl-3': isMobileScreen }"
        ><p
          class="title"
          :class="isMobileScreen ? 'font-weight-bold' : 'font-weight-medium'"
        >
          <v-icon
            v-if="isMobileScreen"
            small
            class="mr-2"
            color="green accent-2"
            >mdi-account</v-icon
          >
          {{ work.name }}
        </p></v-col
      >
      <v-col
        cols="9"
        offset="1"
        sm="3"
        offset-sm="0"
        :class="{ 'pl-3': isMobileScreen }"
        ><p class="title font-weight-medium">
          <v-icon
            v-if="isMobileScreen"
            small
            class="mr-2"
            color="green accent-2"
            >mdi-desktop-mac</v-icon
          >
          {{ work.work }}
        </p></v-col
      >
      <v-col
        cols="9"
        offset="1"
        sm="3"
        offset-sm="0"
        :class="{ 'pl-3': isMobileScreen }"
        ><p class="title font-weight-medium">
          <v-icon
            v-if="isMobileScreen"
            small
            class="mr-2"
            color="green accent-2"
            >mdi-comment-account</v-icon
          >
          {{ work.client }}
        </p></v-col
      >
      <v-col
        cols="9"
        offset="1"
        sm="2"
        offset-sm="0"
        :class="{ 'pl-3': isMobileScreen }"
        ><p class="title text-truncate  font-weight-medium">
          <v-icon
            v-if="isMobileScreen"
            small
            class="mr-2"
            color="green accent-2"
            >mdi-cogs</v-icon
          >
          {{ work.status }}
        </p></v-col
      >
      <v-col cols="1" class="text-center" v-if="editable && !isMobileScreen">
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
      <v-col
        cols="8"
        offset="1"
        v-if="editable && isMobileScreen"
        class="d-flex"
        :class="{ 'pl-3 pt-1 my-2': isMobileScreen }"
      >
        <v-btn
          depressed
          small
          color="indigo lighten-4"
          class="text-capitalize mr-4"
          @click="editWork"
          >Edit</v-btn
        >
        <v-btn
          depressed
          small
          color="red lighten-4"
          class="text-capitalize"
          @click="deleteWork"
          >Delete</v-btn
        >
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'WorkItem',
  props: {
    srNo: {
      type: [Number, String],
      default: ''
    },
    work: {
      type: Object,
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
  data: () => ({
    actionMenu: false
  }),
  methods: {
    deleteWork() {
      this.$store.dispatch('deleteWork', {
        reportId: this.reportId,
        workIndex: this.srNo - 1
      })
    },
    editWork() {
      this.$router.push({
        name: 'edit-work',
        params: {
          id: this.reportId,
          reportId: this.reportId,
          workId: this.work.workId
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.work-item {
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

@media screen and (max-width: 600px) {
  .work-item {
    background: #f8f8f8;
    border-radius: 8px;
    padding: 1rem 0 0.5rem 0;
    box-shadow: 0 2px 16px rgba(0, 0, 0, 0.164);
    font-weight: 600;
  }
}
</style>
