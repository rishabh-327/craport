import moment from 'moment'
import { generateWorkId, generateReportId } from '@/utils'

export const defaultReportList = [
  {
    reportName: 'Daily Report',
    reportId: generateReportId(),
    date: {
      dayOfWeek: moment([2020, 3, 16]).format('dddd'),
      dayOfCalendar: moment([2020, 3, 16]).format('Do MMMM, YYYY')
    },
    works: [
      {
        workId: generateWorkId(),
        name: 'John Doe',
        work: 'Documentation',
        client: 'Annie Siebert',
        status: 'In Progress'
      },
      {
        workId: generateWorkId(),
        name: 'Natalie',
        work: 'Component Testing',
        client: 'Mr. Henry Kyle',
        status: 'On stand-by'
      }
    ]
  },
  {
    reportName: 'Weekly Report',
    reportId: generateReportId(),
    date: {
      dayOfWeek: moment([2020, 3, 17]).format('dddd'),
      dayOfCalendar: moment([2020, 3, 17]).format('Do MMMM, YYYY')
    },
    works: [
      {
        workId: generateWorkId(),
        name: 'John Doe',
        work: 'Documentation',
        client: 'Annie Siebert',
        status: 'In Progress'
      },
      {
        workId: generateWorkId(),
        name: 'Natalie',
        work: 'Component Testing',
        client: 'Mr. Henry Kyle',
        status: 'On stand-by'
      }
    ]
  },
  {
    reportName: 'Monthly Report',
    reportId: generateReportId(),
    date: {
      dayOfWeek: moment([2020, 3, 18]).format('dddd'),
      dayOfCalendar: moment([2020, 3, 18]).format('Do MMMM, YYYY')
    },
    works: [
      {
        workId: generateWorkId(),
        name: 'John Doe',
        work: 'Documentation',
        client: 'Annie Siebert',
        status: 'In Progress'
      },
      {
        workId: generateWorkId(),
        name: 'Natalie',
        work: 'Component Testing',
        client: 'Mr. Henry Kyle',
        status: 'On stand-by'
      }
    ]
  },
  {
    reportName: 'Yearly Report',
    reportId: generateReportId(),
    date: {
      dayOfWeek: moment([2020, 3, 19]).format('dddd'),
      dayOfCalendar: moment([2020, 3, 19]).format('Do MMMM, YYYY')
    },
    works: [
      {
        workId: generateWorkId(),
        name: 'John Doe',
        work: 'Documentation',
        client: 'Annie Siebert',
        status: 'In Progress'
      },
      {
        workId: generateWorkId(),
        name: 'Natalie',
        work: 'Component Testing',
        client: 'Mr. Henry Kyle',
        status: 'On stand-by'
      }
    ]
  }
]
