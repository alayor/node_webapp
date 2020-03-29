const getDBConnectionInfo = database => ({
  client: 'postgresql',
  searchPath: 'public',
  connection: {
    database: database,
    host: process.env.DB_HOST || 'postgres',
    user: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASS || 'postgres',
    port: process.env.DB_PORT || '5432',
  },
})

module.exports = {
  main: getDBConnectionInfo('main'),
  test: getDBConnectionInfo('test'),
}
