require('dotenv').config()

module.exports = {
  target: 'serverless',
  env: {
    'GRAPHQL_ENDPOINT': process.env.GRAPHQL_ENDPOINT,
    'FONT_AWESOME_TOKEN': process.env.FONT_AWESOME_TOKEN
  }
}