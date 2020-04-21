<template>
  <v-container fill-height class="align-start" :fluid="isShortScreen">
    <v-row>
      <!-- App Title -->
      <v-col cols="12">
        <h1 class="craport-title text-center">Craport</h1>
      </v-col>

      <!-- Report Item Container -->
      <v-col cols="12">
        <div class="report-container">
          <v-row>
            <!-- New Report Card -->
            <v-col
              cols="12"
              sm="6"
              md="4"
              lg="3"
              v-if="!todaysReportCreated"
              class="align-self-center"
            >
              <v-hover v-slot:default="{ hover }">
                <v-card
                  color="green accent-1"
                  :class="{ 'add-report-item': hover }"
                  @click="addNewReport"
                >
                  <v-card-text class="text-center">
                    <div>
                      <v-icon size="40" color="grey darken-4"
                        >mdi-playlist-plus</v-icon
                      >
                    </div>
                    <h1
                      class="title font-weight-bold grey--text text--darken-4"
                    >
                      Add New Report
                    </h1>
                    <h1 class="subtitle-2 font-weight-bold">{{ today }}</h1>
                  </v-card-text>
                </v-card>
              </v-hover>
            </v-col>

            <!-- Report Items List -->
            <v-col
              cols="12"
              sm="6"
              md="4"
              lg="3"
              v-for="reportItem in reportsList"
              :key="reportItem.reportId"
            >
              <report-item :reportInfo="reportItem" />
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import ReportItem from '@/components/ReportItem.vue'
import moment from 'moment'

export default {
  name: 'Home',
  data: () => ({
    today: moment().format('ddd, Do MMMM, YYYY')
  }),
  computed: {
    ...mapState(['todaysReportCreated']),
    ...mapGetters(['reportsList'])
  },
  methods: {
    addNewReport() {
      this.$store.dispatch('addReport').then(id => {
        this.$router.push({ name: 'report', params: { id } })
      })
    }
  },
  components: {
    ReportItem
  }
}
</script>

<style lang="scss" scoped>
.craport-title {
  font-weight: 900;
  font-size: 3.5rem;
  letter-spacing: 1px;
}
.report-container {
  min-height: 500px;
  padding: 0.25rem 1rem;
  box-shadow: inset 4px 4px 8px rgba(221, 221, 221, 0.33),
    inset 2px 2px 4px rgba(221, 221, 221, 0.33),
    inset -2px -2px 4px rgba(201, 201, 201, 0.33);
  background: url('~@/assets/img/Bg.png');
  background-size: cover;
  border-radius: 4px;
}
.add-report-item {
  box-shadow: 0 5px 12px rgba(48, 136, 77, 0.445);
}
@media screen and (max-width: 600px) {
  .report-container {
    min-height: 75vh;
  }
}
</style>
