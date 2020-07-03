/* eslint-disable no-console */
const { PrismaClient } = require('@prisma/client')
const dotenv = require('dotenv')

dotenv.config()
const db = new PrismaClient()

async function main() {
  // Seed data is database data that needs to exist for your app to run.
  // Ideally this file should be idempotent: running it multiple times
  // will result in the same database state (usually by checking for the
  // existence of a record before trying to create it). For example:
  //
  const existing = await db.notice.findMany()

  if (!existing.length) {
    await db.notice.create({
      data: {
        message:
          'Excepteur laboris ea labore quis sunt laborum reprehenderit ea duis.',
      },
    })
  } else {
    console.info('No data to seed. See api/prisma/seeds.js for info.')
  }
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await db.disconnect()
  })
