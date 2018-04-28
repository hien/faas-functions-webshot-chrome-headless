'use strict'
const puppeteer = require('puppeteer')

module.exports = async (context, callback) => {
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  })
  const version = await browser.version()
  browser.close()
  callback(undefined, { status: 'done', version: version })
}
