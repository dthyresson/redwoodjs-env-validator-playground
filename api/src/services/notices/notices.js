import { db } from 'src/lib/db'

export const notices = () => {
  return db.notice.findMany()
}

export const notice = ({ id }) => {
  return db.notice.findOne({
    where: { id },
  })
}
