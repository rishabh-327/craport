import Vue from 'vue'
import Vuex from 'vuex'
import moment from 'moment'

import { generateWorkId, generateReportId, persistReports } from '@/utils'

const reports = JSON.parse(localStorage.getItem('reports')) || []

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [persistReports],
  state: {
    reports,
    todaysReportCreated: false
  },
  getters: {
    reportsList: state => {
      const result = state.reports.map(report => ({
        reportId: report.reportId,
        date: report.date
      }))
      return result
    },
    getReportById: state => reportId => {
      for (let report of state.reports) {
        if (report.reportId === reportId) {
          return report
        }
      }
    },
    getWorkById: (state, getters) => (reportId, workId) => {
      const report = getters.getReportById(reportId)
      for (let [workIndex, work] of report.works.entries()) {
        if (work.workId === workId) {
          return { work, workIndex }
        }
      }
    }
  },
  mutations: {
    BACKUP_REPORT(state, backupReport) {
      state.reports.push(backupReport)
    },
    UPDATE_TODAY_REPORT_CREATED_STATUS(state, status) {
      state.todaysReportCreated = status
    },
    CHANGE_REPORT_TITLE(state, { targetReport, newTitle }) {
      targetReport.reportName = newTitle
    },
    ADD_REPORT(state, report) {
      state.reports.unshift(report)
    },
    DELETE_REPORT(state, reportIndex) {
      state.reports.splice(reportIndex, 1)
    },
    ADD_NEW_WORK(state, { targetReport, newWork }) {
      targetReport.works.push(newWork)
    },
    DELETE_WORK(state, { targetReport, workIndex }) {
      targetReport.works.splice(workIndex, 1)
    },
    UPDATE_WORK(state, { targetReport, workIndex, work }) {
      const workToUpdate = targetReport.works[workIndex]
      workToUpdate.name = work.name
      workToUpdate.work = work.work
      workToUpdate.client = work.client
      workToUpdate.status = work.status
    }
  },
  actions: {
    backupReport({ commit }) {
      const savedWorkJSON = localStorage.getItem('works')
      if (savedWorkJSON) {
        const savedWork = JSON.parse(savedWorkJSON)

        const backupReport = {
          reportId: generateReportId(),
          reportName: 'Backup',
          date: {
            dayOfWeek: moment()
              .subtract(1, 'days')
              .format('dddd'),
            dayOfCalendar: moment()
              .subtract(1, 'days')
              .format('Do MMMM, YYYY')
          },
          works: savedWork
        }
        commit('BACKUP_REPORT', backupReport)
        localStorage.removeItem('works')
      }
    },
    setTodayReportCreatedStatus({ commit, state }) {
      const today = moment().format('Do MMMM, YYYY')

      if (
        state.reports.length &&
        today === state.reports[0].date.dayOfCalendar
      ) {
        commit('UPDATE_TODAY_REPORT_CREATED_STATUS', true)
      } else {
        commit('UPDATE_TODAY_REPORT_CREATED_STATUS', false)
      }
    },
    addReport({ commit }) {
      const reportId = generateReportId()
      const newReport = {
        reportId,
        reportName: 'Daily Report',
        date: {
          dayOfWeek: moment().format('dddd'),
          dayOfCalendar: moment().format('Do MMMM, YYYY')
        },
        works: []
      }
      commit('ADD_REPORT', newReport)
      commit('UPDATE_TODAY_REPORT_CREATED_STATUS', true)
      return reportId
    },
    deleteReport({ commit, getters, dispatch }, reportId) {
      let reportIndex = -1
      for (let [index, reportInfo] of getters.reportsList.entries()) {
        if (reportInfo.reportId === reportId) {
          reportIndex = index
        }
      }
      if (reportIndex !== -1) {
        commit('DELETE_REPORT', reportIndex)
        dispatch('setTodayReportCreatedStatus')
      }
    },
    changeReportTitle({ commit, getters }, { reportId, newTitle }) {
      const targetReport = getters.getReportById(reportId)
      commit('CHANGE_REPORT_TITLE', { targetReport, newTitle })
    },
    addWork({ commit, getters }, { reportId, work }) {
      const targetReport = getters.getReportById(reportId)
      const newWork = {
        workId: generateWorkId(),
        ...work
      }
      commit('ADD_NEW_WORK', { targetReport, newWork })
    },
    deleteWork({ commit, getters }, { reportId, workIndex }) {
      const targetReport = getters.getReportById(reportId)
      commit('DELETE_WORK', { targetReport, workIndex })
    },
    updateWork({ commit, getters }, { reportId, workIndex, work }) {
      const targetReport = getters.getReportById(reportId)
      commit('UPDATE_WORK', { targetReport, workIndex, work })
    }
  },
  modules: {}
})
