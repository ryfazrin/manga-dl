const format = require('util').format
const assert = require('assert')

module.exports.name = (conf) => format('%s should accept valid URLs', conf.name)

module.exports.createTest = (conf) => (test) => {
  conf.data.shouldAcceptUrls
    .forEach((url) => assert(conf.scraper.acceptsUrl(url), format('failed to accept valid URL %s', url)))
  test.done()
}
