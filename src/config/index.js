import { generateId } from '@/utils'

export const defaultWorksList = [
  {
    workId: generateId(),
    name: 'John Doe',
    work: 'Documentation',
    client: 'Annie Siebert',
    status: 'In Progress'
  },
  {
    workId: generateId(),
    name: 'Natalie',
    work: 'Component Testing',
    client: 'Mr. Henry Kyle',
    status: 'On stand-by'
  }
]
